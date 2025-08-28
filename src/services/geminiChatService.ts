import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@supabase/supabase-js';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY || 
  process.env.GEMINI_API_KEY
);

// Initialize Supabase client for vector database
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'your-service-key';
const supabase = createClient(supabaseUrl, supabaseKey);

// Comprehensive Megaphoton knowledge base
const MEGAPHOTON_DOCS = [
  {
    id: 'company-info-pt',
    content: 'Megaphoton é uma empresa brasileira líder em energia solar, sediada em Minas Gerais. Somos certificados ANEEL e parceiros das principais marcas mundiais. Nossa missão é democratizar energia solar sustentável no Brasil. Atendemos residências, comércios e indústrias em todo território nacional com milhares de clientes satisfeitos.',
    category: 'company',
    language: 'pt'
  },
  {
    id: 'solar-basics-pt',
    content: 'Energia solar funciona assim: Painéis fotovoltaicos captam luz solar e convertem em eletricidade. Inversor transforma corrente contínua em alternada para uso doméstico. Energia é distribuída para casa/empresa e excesso vai para rede elétrica. Você economiza 70-95% na conta de luz. Sistema dura 25+ anos com mínima manutenção.',
    category: 'education',
    language: 'pt'
  },
  {
    id: 'services-complete-pt',
    content: 'Serviços Megaphoton: 🔧 Instalação completa residencial/comercial/industrial 🔍 Manutenção preventiva e corretiva 📸 Termografia para diagnóstico 🔍 Inspeções técnicas 🧹 Limpeza profissional de painéis 📱 Monitoramento remoto 24/7 📈 Relatórios de performance 👥 Suporte técnico especializado',
    category: 'services',
    language: 'pt'
  },
  {
    id: 'installation-process-pt',
    content: 'Processo Megaphoton: 1️⃣ Avaliação técnica gratuita no local 2️⃣ Projeto personalizado com simulação 3️⃣ Aprovação na concessionária 4️⃣ Instalação profissional (2-5 dias) 5️⃣ Ativação e treinamento 6️⃣ Monitoramento contínuo. Equipe: engenheiros certificados, técnicos especializados, materiais Tier 1.',
    category: 'installation',
    language: 'pt'
  },
  {
    id: 'benefits-pt',
    content: 'Benefícios energia solar: 💰 Economia 70-95% conta luz 🌱 100% sustentável, zero emissões 🏠 Valoriza imóvel 3-8% 🔋 Energia limpa e renovável 📈 Retorno investimento 3-7 anos 🚪 Independência energética 🛡️ Proteção contra inflação elétrica ⚙️ Baixa manutenção',
    category: 'benefits',
    language: 'pt'
  },
  {
    id: 'warranty-complete-pt',
    content: 'Garantias Megaphoton: 🔒 Painéis solares 25 anos potência ⚡ Inversores 10-15 anos 🏠 Instalação 5 anos cobertura completa 📈 Performance garantida com monitoramento 📞 Suporte 24/7 resposta 2h 🚪 Visitas técnicas gratuitas 🛡️ Seguro contra danos ⛈️ Proteção raios',
    category: 'warranty',
    language: 'pt'
  },
  {
    id: 'contact-complete-pt',
    content: 'Contato Megaphoton: 📱 WhatsApp +55 34 99232-0853 (prioritário) 📧 contato@megaphoton.com.br 🌐 www.megaphoton.com.br 🕰️ Seg-Sex 8h-18h, Sáb 8h-12h 📍 Minas Gerais, atendimento nacional 🏠 Visitas gratuitas 📊 Orçamentos sem compromisso',
    category: 'contact',
    language: 'pt'
  }
];

// Language detection
function detectLanguage(text: string): 'pt' | 'en' {
  const ptWords = ['energia', 'solar', 'painel', 'instalação', 'orçamento', 'preço', 'como', 'que', 'para', 'com', 'não', 'mais'];
  const enWords = ['energy', 'solar', 'panel', 'installation', 'quote', 'price', 'how', 'what', 'for', 'with', 'not', 'more'];
  
  const textLower = text.toLowerCase();
  const ptCount = ptWords.filter(word => textLower.includes(word)).length;
  const enCount = enWords.filter(word => textLower.includes(word)).length;
  
  return ptCount > enCount ? 'pt' : 'en';
}

// Vector similarity search (simplified)
async function searchKnowledgeBase(query: string, language: 'pt' | 'en'): Promise<string[]> {
  try {
    // Simple keyword matching for now - in production use proper vector search
    const queryLower = query.toLowerCase();
    const relevantDocs = MEGAPHOTON_DOCS.filter(doc => 
      doc.language === language && 
      (doc.content.toLowerCase().includes(queryLower) ||
       doc.category.toLowerCase().includes(queryLower))
    );
    
    // Return top 3 most relevant documents
    return relevantDocs.slice(0, 3).map(doc => doc.content);
  } catch (error) {
    console.error('Knowledge base search error:', error);
    return [];
  }
}

// Generate response using Gemini AI
async function generateGeminiResponse(query: string, context: string[], language: 'pt' | 'en'): Promise<string> {
  try {
    console.log('🤖 Calling Gemini API...');
    console.log('Query:', query);
    console.log('Context found:', context.length, 'items');
    
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const systemPrompt = language === 'pt' 
      ? `Você é o assistente virtual da Megaphoton, empresa brasileira de energia solar em Minas Gerais. 
         Responda com base no contexto fornecido sobre nossos serviços de energia solar.
         Seja profissional, amigável e use emojis apropriados.
         Se não tiver informação específica, sugira contato via WhatsApp +55 34 99232-0853.`
      : `You are Megaphoton's virtual assistant, a Brazilian solar energy company in Minas Gerais.
         Answer based on the provided context about our solar energy services.
         Be professional, friendly and use appropriate emojis.
         If you don't have specific information, suggest contact via WhatsApp +55 34 99232-0853.`;

    const prompt = `${systemPrompt}

Pergunta: "${query}"

Contexto da Megaphoton:
${context.join('\n\n')}

Responda em ${language === 'pt' ? 'português brasileiro' : 'English'}:`;

    console.log('📤 Sending to Gemini:', prompt.substring(0, 200) + '...');
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log('📥 Gemini response:', text.substring(0, 100) + '...');
    return text;
  } catch (error) {
    console.error('❌ Gemini API error:', error);
    throw new Error('Failed to generate response');
  }
}

// Main chat service function
export async function sendGeminiChatMessage(message: string, language?: 'pt' | 'en') {
  try {
    console.log('🚀 Gemini Chat Service called with:', message);
    const detectedLanguage = language || detectLanguage(message);
    console.log('🌍 Detected language:', detectedLanguage);
    
    // Search knowledge base
    const context = await searchKnowledgeBase(message, detectedLanguage);
    console.log('📁 Context found:', context.length, 'documents');
    
    // Check for escalation keywords
    const escalationKeywords = ['orçamento', 'quote', 'atendente', 'agent', 'vendas', 'sales', 'preço', 'custo', 'valor'];
    const needsEscalation = escalationKeywords.some(keyword => 
      message.toLowerCase().includes(keyword)
    );
    
    if (needsEscalation) {
      console.log('📞 Escalating to WhatsApp due to keywords');
      const escalationMessage = detectedLanguage === 'pt'
        ? 'Para orçamentos e informações comerciais detalhadas, nossa equipe especializada pode te ajudar melhor! 🚀\n\nVamos conversar no WhatsApp? 📱'
        : 'For quotes and detailed commercial information, our specialized team can help you better! 🚀\n\nLet\'s chat on WhatsApp? 📱';
      
      return {
        response: escalationMessage,
        language: detectedLanguage,
        contextFound: false,
        needsEscalation: true
      };
    }
    
    // Always provide context for better responses
    if (context.length === 0) {
      // Use general company info if no specific context found
      const generalContext = MEGAPHOTON_DOCS.filter(doc => 
        doc.language === detectedLanguage && 
        ['company', 'services', 'benefits'].includes(doc.category)
      ).map(doc => doc.content);
      context.push(...generalContext);
    }
    
    // Generate AI response
    const aiResponse = await generateGeminiResponse(message, context, detectedLanguage);
    
    return {
      response: aiResponse,
      language: detectedLanguage,
      contextFound: context.length > 0,
      needsEscalation: false
    };
  } catch (error) {
    console.error('❌ Gemini chat service error:', error);
    
    const fallbackResponse = language === 'pt'
      ? 'Oi! 😊 Sou o assistente da Megaphoton. Estou com uma dificuldade técnica agora, mas posso te conectar com nossa equipe via WhatsApp: +55 34 99232-0853 📱'
      : 'Hi! 😊 I\'m Megaphoton\'s assistant. I\'m having a technical difficulty right now, but I can connect you with our team via WhatsApp: +55 34 99232-0853 📱';
    
    return {
      response: fallbackResponse,
      language: language || 'pt',
      contextFound: false,
      needsEscalation: true,
      error: true
    };
  }
}