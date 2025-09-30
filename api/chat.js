import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI (backend only)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Enhanced Megaphoton knowledge base with language support
const KNOWLEDGE_BASE = [
  // Portuguese content
  {
    content: 'Megaphoton é uma empresa brasileira líder em energia solar, sediada em Minas Gerais. Somos certificados ANEEL e parceiros das principais marcas mundiais. Nossa missão é democratizar energia solar sustentável no Brasil.',
    category: 'company',
    language: 'pt'
  },
  {
    content: 'Serviços Megaphoton: 🔧 Instalação completa residencial/comercial/industrial 🔍 Manutenção preventiva e corretiva 📸 Termografia para diagnóstico 🔍 Inspeções técnicas 🧹 Limpeza profissional de painéis 📱 Monitoramento remoto 24/7',
    category: 'services',
    language: 'pt'
  },
  {
    content: 'Energia solar funciona assim: Painéis fotovoltaicos captam luz solar e convertem em eletricidade. Inversor transforma corrente contínua em alternada. Energia é distribuída para casa/empresa e excesso vai para rede elétrica. Você economiza 70-95% na conta de luz.',
    category: 'education',
    language: 'pt'
  },
  {
    content: 'Contato Megaphoton: 📱 WhatsApp +55 34 99232-0853 (prioritário) 📧 contato@megaphoton.com.br 🌐 www.megaphoton.com.br 🕰️ Seg-Sex 8h-18h, Sáb 8h-12h 📍 Minas Gerais, atendimento nacional',
    category: 'contact',
    language: 'pt'
  },
  // English content
  {
    content: 'Megaphoton is a leading Brazilian solar energy company based in Minas Gerais. We are ANEEL certified and partners with major global brands. Our mission is to democratize sustainable solar energy in Brazil.',
    category: 'company',
    language: 'en'
  },
  {
    content: 'Megaphoton Services: 🔧 Complete residential/commercial/industrial installation 🔍 Preventive and corrective maintenance 📸 Thermography diagnostics 🔍 Technical inspections 🧹 Professional panel cleaning 📱 24/7 remote monitoring',
    category: 'services',
    language: 'en'
  },
  {
    content: 'Solar energy works like this: Photovoltaic panels capture sunlight and convert to electricity. Inverter transforms DC to AC current. Energy is distributed to your home/business and excess goes to the grid. You save 70-95% on electricity bills.',
    category: 'education',
    language: 'en'
  },
  {
    content: 'Megaphoton Contact: 📱 WhatsApp +55 34 99232-0853 📧 contato@megaphoton.com.br 🌐 www.megaphoton.com.br 🕰️ Mon-Fri 8am-6pm, Sat 8am-12pm 📍 Minas Gerais, nationwide service',
    category: 'contact',
    language: 'en'
  }
];

function detectLanguage(text) {
  const ptWords = [
    'energia', 'solar', 'painel', 'instalação', 'orçamento', 'preço', 'como', 'que', 'para', 'com', 'não', 'mais', 'você', 'seu', 'sua', 'onde', 'quando', 'quanto', 'por', 'sim', 'obrigado', 'oi', 'olá',
    'também', 'então', 'muito', 'bem', 'fazer', 'ter', 'ser', 'estar', 'casa', 'empresa', 'brasil', 'brasileiro', 'minas', 'gerais', 'atendimento', 'informação', 'serviço', 'garantia', 'manutenção'
  ];
  
  const enWords = [
    'energy', 'solar', 'panel', 'installation', 'quote', 'price', 'how', 'what', 'for', 'with', 'not', 'more', 'you', 'your', 'where', 'when', 'much', 'by', 'yes', 'thanks', 'hi', 'hello',
    'also', 'then', 'very', 'well', 'make', 'have', 'are', 'is', 'house', 'company', 'brazil', 'service', 'warranty', 'maintenance', 'information'
  ];
  
  const textLower = text.toLowerCase();
  const ptCount = ptWords.filter(w => textLower.includes(w)).length;
  const enCount = enWords.filter(w => textLower.includes(w)).length;
  
  // Check for Portuguese-specific characters (strong indicator)
  const ptPatterns = /[ãâáàçõôóêé]/g;
  const ptCharCount = (text.match(ptPatterns) || []).length;
  
  // Check for Portuguese verb endings
  const ptVerbPatterns = /\b\w+(ção|são|ões|mente)\b/g;
  const ptVerbCount = (text.match(ptVerbPatterns) || []).length;
  
  // Calculate weighted score
  const ptScore = ptCount + (ptCharCount * 2) + ptVerbCount;
  const enScore = enCount;
  
  console.log(`Language detection - PT: ${ptScore}, EN: ${enScore}`);
  
  return ptScore > enScore ? 'pt' : 'en';
}

function searchKnowledge(query, language) {
  const queryLower = query.toLowerCase();
  
  // Filter by language and content relevance
  const relevantDocs = KNOWLEDGE_BASE.filter(doc => 
    doc.language === language && 
    (doc.content.toLowerCase().includes(queryLower) ||
     doc.category.toLowerCase().includes(queryLower))
  );
  
  // If no specific matches, return general info for the language
  if (relevantDocs.length === 0) {
    const generalDocs = KNOWLEDGE_BASE.filter(doc => 
      doc.language === language && 
      ['company', 'services'].includes(doc.category)
    );
    return generalDocs.map(doc => doc.content);
  }
  
  return relevantDocs.slice(0, 3).map(doc => doc.content);
}

export default async function handler(req, res) {
  // Enhanced CORS and security headers
  const allowedOrigins = [
    'https://megaphoton.com.br',
    'https://www.megaphoton.com.br',
    process.env.FRONTEND_URL
  ].filter(Boolean);
  
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Max-Age', '86400'); // 24 hours
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, language } = req.body;
    
    // Input validation and sanitization
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Valid message required' });
    }
    
    if (message.length > 1000) {
      return res.status(400).json({ error: 'Message too long' });
    }
    
    // Basic rate limiting check (can be enhanced with Redis)
    const userAgent = req.headers['user-agent'] || '';
    if (!userAgent) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    const detectedLanguage = language || detectLanguage(message);
    const context = searchKnowledge(message, detectedLanguage);
    
    // Check for escalation
    const escalationKeywords = ['orçamento', 'quote', 'preço', 'custo', 'atendente', 'agent'];
    const needsEscalation = escalationKeywords.some(k => message.toLowerCase().includes(k));
    
    if (needsEscalation) {
      const escalationMsg = detectedLanguage === 'pt'
        ? 'Para orçamentos e informações comerciais detalhadas, nossa equipe especializada pode te ajudar melhor! 🚀\n\nVamos conversar no WhatsApp? 📱'
        : 'For quotes and detailed commercial information, our specialized team can help you better! 🚀\n\nLet\'s chat on WhatsApp? 📱';
      
      return res.json({
        response: escalationMsg,
        language: detectedLanguage,
        contextFound: false,
        needsEscalation: true
      });
    }

    // Generate AI response
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
    
    const systemPrompt = detectedLanguage === 'pt' 
      ? `Você é o assistente virtual da Megaphoton, empresa brasileira de energia solar em Minas Gerais. 
         REGRA FUNDAMENTAL: Responda EXCLUSIVAMENTE em português brasileiro.
         Use o contexto fornecido sobre nossos serviços de energia solar.
         Seja profissional, amigável e use emojis apropriados.
         Para orçamentos, sugira contato via WhatsApp +55 34 99232-0853.`
      : `You are Megaphoton's virtual assistant, a Brazilian solar energy company in Minas Gerais.
         FUNDAMENTAL RULE: Respond EXCLUSIVELY in English.
         Use the provided context about our solar energy services.
         Be professional, friendly and use appropriate emojis.
         For quotes, suggest contact via WhatsApp +55 34 99232-0853.`;

    const prompt = `${systemPrompt}

${detectedLanguage === 'pt' ? 'Pergunta' : 'Question'}: "${message}"

${detectedLanguage === 'pt' ? 'Contexto da Megaphoton' : 'Megaphoton Context'}:
${context.join('\n\n')}

${detectedLanguage === 'pt' ? 'RESPONDA SOMENTE EM PORTUGUÊS' : 'RESPOND ONLY IN ENGLISH'}:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    res.json({
      response: response.text(),
      language: detectedLanguage,
      contextFound: context.length > 0,
      needsEscalation: false
    });

  } catch (error) {
    console.error('Chat error:', error);
    
    const fallbackResponse = detectedLanguage === 'pt'
      ? 'Oi! 😊 Sou o assistente da Megaphoton. Estou com uma dificuldade técnica agora, mas posso te conectar com nossa equipe via WhatsApp: +55 34 99232-0853 📱'
      : 'Hi! 😊 I\'m Megaphoton\'s assistant. I\'m having a technical difficulty right now, but I can connect you with our team via WhatsApp: +55 34 99232-0853 📱';
    
    res.status(500).json({
      response: fallbackResponse,
      language: detectedLanguage || 'pt',
      contextFound: false,
      needsEscalation: true,
      error: true
    });
  }
}