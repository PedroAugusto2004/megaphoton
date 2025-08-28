import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI (backend only)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Megaphoton knowledge base
const KNOWLEDGE_BASE = [
  {
    content: 'Megaphoton é uma empresa brasileira líder em energia solar, sediada em Minas Gerais. Somos certificados ANEEL e parceiros das principais marcas mundiais.',
    category: 'company'
  },
  {
    content: 'Serviços: Instalação completa, manutenção preventiva, termografia, inspeções técnicas, limpeza profissional, monitoramento 24/7.',
    category: 'services'
  },
  {
    content: 'Investimento: R$ 15.000-50.000 residencial. Retorno 3-7 anos. Economia 70-95% conta luz. Financiamento disponível.',
    category: 'pricing'
  }
];

function detectLanguage(text) {
  const ptWords = ['energia', 'solar', 'como', 'que', 'para', 'não'];
  const enWords = ['energy', 'solar', 'how', 'what', 'for', 'not'];
  
  const ptCount = ptWords.filter(w => text.toLowerCase().includes(w)).length;
  const enCount = enWords.filter(w => text.toLowerCase().includes(w)).length;
  
  return ptCount > enCount ? 'pt' : 'en';
}

function searchKnowledge(query) {
  return KNOWLEDGE_BASE.filter(doc => 
    doc.content.toLowerCase().includes(query.toLowerCase())
  ).map(doc => doc.content);
}

export default async function handler(req, res) {
  // CORS and security headers
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, language } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message required' });
    }

    const detectedLanguage = language || detectLanguage(message);
    const context = searchKnowledge(message);
    
    // Check for escalation
    const escalationKeywords = ['orçamento', 'quote', 'preço', 'custo', 'atendente', 'agent'];
    const needsEscalation = escalationKeywords.some(k => message.toLowerCase().includes(k));
    
    if (needsEscalation) {
      const escalationMsg = detectedLanguage === 'pt'
        ? 'Para orçamentos e informações comerciais, nossa equipe pode te ajudar melhor! Vamos conversar no WhatsApp? 📱'
        : 'For quotes and commercial information, our team can help you better! Let\'s chat on WhatsApp? 📱';
      
      return res.json({
        response: escalationMsg,
        language: detectedLanguage,
        needsEscalation: true
      });
    }

    // Generate AI response
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const prompt = `Você é o assistente da Megaphoton, empresa de energia solar em MG.
Responda com base no contexto: ${context.join(' ')}
Pergunta: ${message}
Responda em ${detectedLanguage === 'pt' ? 'português' : 'English'}:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    res.json({
      response: response.text(),
      language: detectedLanguage,
      needsEscalation: false
    });

  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({
      response: 'Erro técnico. WhatsApp: +55 34 99232-0853',
      error: true
    });
  }
}