// Enhanced Chat Service for Megaphoton - Intelligent AI Chatbot
// This service provides comprehensive, intelligent responses without external API dependencies

interface ConversationContext {
  messages: Array<{
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
  }>;
  currentTopic: string;
  userPreferences: {
    language: 'pt' | 'en';
    technicalLevel: 'basic' | 'intermediate' | 'advanced';
    interests: string[];
  };
}

// Comprehensive knowledge base covering all aspects of solar energy
const SOLAR_ENERGY_KNOWLEDGE = {
  // Core Concepts
  basics: {
    pt: {
      'energia solar': 'A energia solar é uma fonte de energia renovável e limpa que converte a luz do sol em eletricidade através de painéis fotovoltaicos. É uma das formas mais sustentáveis de gerar energia, com impacto ambiental mínimo e custos operacionais muito baixos.',
      'painéis solares': 'Painéis solares são dispositivos que capturam a energia do sol e a convertem em eletricidade. Eles são compostos por células fotovoltaicas de silício que geram corrente elétrica quando expostas à luz solar.',
      'fotovoltaico': 'Sistema fotovoltaico é o conjunto de equipamentos que converte energia solar em eletricidade. Inclui painéis solares, inversores, baterias (opcional) e sistema de monitoramento.',
      'sustentabilidade': 'A energia solar é 100% sustentável, pois usa uma fonte inesgotável (o sol) e não emite poluentes. Cada kWh gerado evita a emissão de aproximadamente 0,5 kg de CO2 na atmosfera.'
    },
    en: {
      'solar energy': 'Solar energy is a renewable and clean energy source that converts sunlight into electricity through photovoltaic panels. It is one of the most sustainable ways to generate energy, with minimal environmental impact and very low operating costs.',
      'solar panels': 'Solar panels are devices that capture energy from the sun and convert it into electricity. They are composed of silicon photovoltaic cells that generate electric current when exposed to sunlight.',
      'photovoltaic': 'A photovoltaic system is the set of equipment that converts solar energy into electricity. It includes solar panels, inverters, batteries (optional) and monitoring system.',
      'sustainability': 'Solar energy is 100% sustainable as it uses an inexhaustible source (the sun) and emits no pollutants. Each kWh generated prevents the emission of approximately 0.5 kg of CO2 into the atmosphere.'
    }
  },

  // Technical Details
  technical: {
    pt: {
      'eficiência': 'A eficiência dos painéis solares modernos varia entre 15% e 22%. Painéis de alta eficiência (20%+) são ideais para espaços limitados, enquanto painéis padrão oferecem melhor custo-benefício para instalações maiores.',
      'inversor': 'O inversor é o coração do sistema solar, convertendo corrente contínua (DC) dos painéis em corrente alternada (AC) para uso doméstico. Inversores modernos incluem monitoramento inteligente e otimização de performance.',
      'baterias': 'Baterias solares permitem armazenar energia para uso noturno ou durante apagões. Sistemas com baterias podem fornecer até 90% de independência energética, mas aumentam o custo total.',
      'monitoramento': 'Sistemas de monitoramento em tempo real permitem acompanhar a produção de energia, identificar problemas rapidamente e otimizar o desempenho do sistema solar.'
    },
    en: {
      'efficiency': 'Modern solar panel efficiency ranges from 15% to 22%. High-efficiency panels (20%+) are ideal for limited spaces, while standard panels offer better cost-benefit for larger installations.',
      'inverter': 'The inverter is the heart of the solar system, converting direct current (DC) from panels to alternating current (AC) for domestic use. Modern inverters include intelligent monitoring and performance optimization.',
      'batteries': 'Solar batteries allow energy storage for night use or during blackouts. Systems with batteries can provide up to 90% energy independence, but increase total cost.',
      'monitoring': 'Real-time monitoring systems allow tracking energy production, identifying problems quickly and optimizing solar system performance.'
    }
  },

  // Financial Information
  financial: {
    pt: {
      'investimento': 'O investimento em energia solar varia de R$ 15.000 a R$ 50.000 para residências, dependendo do consumo e localização. O retorno do investimento ocorre em 3-7 anos, com economia mensal de 70-95% na conta de luz.',
      'financiamento': 'Diversas opções de financiamento estão disponíveis: bancos tradicionais (12-120 meses), financiamento imobiliário, leasing operacional e linhas específicas para energia renovável com juros reduzidos.',
      'economia': 'Uma instalação solar típica economiza R$ 200-800 por mês na conta de luz. Em 25 anos, a economia total pode superar R$ 150.000, considerando a inflação energética.',
      'valorização': 'Imóveis com energia solar têm valorização de 3-8% no mercado imobiliário, além de maior atratividade para compradores preocupados com sustentabilidade.'
    },
    en: {
      'investment': 'Solar energy investment ranges from $3,000 to $10,000 for homes, depending on consumption and location. Return on investment occurs in 3-7 years, with monthly savings of 70-95% on electricity bills.',
      'financing': 'Various financing options are available: traditional banks (12-120 months), real estate financing, operating lease and specific lines for renewable energy with reduced interest rates.',
      'savings': 'A typical solar installation saves $40-160 per month on electricity bills. Over 25 years, total savings can exceed $30,000, considering energy inflation.',
      'appreciation': 'Properties with solar energy have 3-8% appreciation in the real estate market, plus greater attractiveness for buyers concerned about sustainability.'
    }
  },

  // Installation Process
  installation: {
    pt: {
      'processo': 'O processo de instalação solar inclui: 1) Avaliação técnica gratuita, 2) Projeto personalizado, 3) Aprovação da concessionária, 4) Instalação profissional (2-5 dias), 5) Ativação e monitoramento.',
      'equipe': 'Nossa equipe inclui engenheiros elétricos certificados, técnicos especializados em energia solar e instaladores com mais de 5 anos de experiência. Todos os profissionais são treinados pelas principais marcas.',
      'materiais': 'Utilizamos apenas painéis de primeira linha (Tier 1) com garantia de 25 anos, inversores premium com monitoramento inteligente e estruturas certificadas para máxima durabilidade.',
      'certificações': 'Somos empresa certificada ANEEL, seguimos todas as normas técnicas ABNT e possuímos certificações de qualidade ISO 9001 e ISO 14001.'
    },
    en: {
      'process': 'The solar installation process includes: 1) Free technical assessment, 2) Custom project, 3) Utility approval, 4) Professional installation (2-5 days), 5) Activation and monitoring.',
      'team': 'Our team includes certified electrical engineers, solar energy specialists and installers with over 5 years of experience. All professionals are trained by leading brands.',
      'materials': 'We use only Tier 1 panels with 25-year warranty, premium inverters with intelligent monitoring and certified structures for maximum durability.',
      'certifications': 'We are an ANEEL certified company, follow all ABNT technical standards and have ISO 9001 and ISO 14001 quality certifications.'
    }
  },

  // Maintenance and Support
  maintenance: {
    pt: {
      'manutenção': 'Painéis solares requerem manutenção mínima: limpeza semestral, inspeção anual e monitoramento contínuo. Nossos sistemas incluem alertas automáticos para qualquer problema detectado.',
      'garantia': 'Oferecemos garantia completa: 25 anos nos painéis, 10-15 anos no inversor, 5 anos na instalação e garantia de performance de 25 anos com monitoramento contínuo.',
      'suporte': 'Suporte técnico 24/7 com resposta em até 2 horas para emergências. Visitas técnicas gratuitas semestrais e relatórios mensais de performance incluídos.',
      'limpeza': 'Serviço de limpeza profissional com produtos específicos para painéis solares, sem risco de danos. Limpeza recomendada a cada 6 meses para máxima eficiência.'
    },
    en: {
      'maintenance': 'Solar panels require minimal maintenance: semi-annual cleaning, annual inspection and continuous monitoring. Our systems include automatic alerts for any detected problems.',
      'warranty': 'We offer complete warranty: 25 years on panels, 10-15 years on inverter, 5 years on installation and 25-year performance warranty with continuous monitoring.',
      'support': '24/7 technical support with response within 2 hours for emergencies. Free semi-annual technical visits and monthly performance reports included.',
      'cleaning': 'Professional cleaning service with specific products for solar panels, no risk of damage. Cleaning recommended every 6 months for maximum efficiency.'
    }
  }
};

// Intelligent conversation handler
class IntelligentConversationHandler {
  private context: ConversationContext;

  constructor() {
    this.context = {
      messages: [],
      currentTopic: '',
      userPreferences: {
        language: 'pt',
        technicalLevel: 'basic',
        interests: []
      }
    };
  }

  // Analyze user message and generate intelligent response
  generateResponse(userMessage: string, language: 'pt' | 'en'): string {
    const message = userMessage.toLowerCase();
    this.context.userPreferences.language = language;
    
    // Update conversation context
    this.context.messages.push({
      role: 'user',
      content: userMessage,
      timestamp: new Date()
    });

    // Detect user intent and technical level
    this.analyzeUserIntent(message);
    
    // Generate comprehensive response
    const response = this.createIntelligentResponse(message, language);
    
    // Update context
    this.context.messages.push({
      role: 'assistant',
      content: response,
      timestamp: new Date()
    });

    return response;
  }

  private analyzeUserIntent(message: string): void {
    // Detect technical level
    if (message.includes('kw') || message.includes('kwh') || message.includes('voltagem') || message.includes('amperagem')) {
      this.context.userPreferences.technicalLevel = 'advanced';
    } else if (message.includes('como funciona') || message.includes('processo') || message.includes('instalação')) {
      this.context.userPreferences.technicalLevel = 'intermediate';
    }

    // Detect interests
    if (message.includes('orçamento') || message.includes('preço') || message.includes('custo')) {
      this.context.userPreferences.interests.push('financial');
    }
    if (message.includes('manutenção') || message.includes('garantia') || message.includes('suporte')) {
      this.context.userPreferences.interests.push('support');
    }
    if (message.includes('técnico') || message.includes('especificações') || message.includes('detalhes')) {
      this.context.userPreferences.interests.push('technical');
    }
  }

  private createIntelligentResponse(message: string, language: 'pt' | 'en'): string {
    const knowledge = SOLAR_ENERGY_KNOWLEDGE;
    const lang = language;
    
    // Check for specific questions and provide detailed answers
    if (this.isQuestionAbout(message, ['energia solar', 'solar energy', 'painéis', 'panels'])) {
      return this.generateDetailedResponse('basics', 'energia solar', lang);
    }
    
    if (this.isQuestionAbout(message, ['orçamento', 'preço', 'custo', 'investimento', 'quote', 'price', 'cost', 'investment'])) {
      return this.generateDetailedResponse('financial', 'investimento', lang);
    }
    
    if (this.isQuestionAbout(message, ['instalação', 'processo', 'equipe', 'installation', 'process', 'team'])) {
      return this.generateDetailedResponse('installation', 'processo', lang);
    }
    
    if (this.isQuestionAbout(message, ['manutenção', 'garantia', 'suporte', 'maintenance', 'warranty', 'support'])) {
      return this.generateDetailedResponse('maintenance', 'manutenção', lang);
    }
    
    if (this.isQuestionAbout(message, ['técnico', 'eficiente', 'especificações', 'technical', 'efficient', 'specifications'])) {
      return this.generateDetailedResponse('technical', 'eficiente', lang);
    }
    
    // Generate contextual response based on conversation history
    return this.generateContextualResponse(message, lang);
  }

  private isQuestionAbout(message: string, keywords: string[]): boolean {
    return keywords.some(keyword => message.includes(keyword));
  }

  private generateDetailedResponse(category: string, topic: string, language: 'pt' | 'en'): string {
    const knowledge = SOLAR_ENERGY_KNOWLEDGE[category as keyof typeof SOLAR_ENERGY_KNOWLEDGE];
    const lang = language as 'pt' | 'en';
    
    if (knowledge && knowledge[lang] && knowledge[lang][topic]) {
      const baseResponse = knowledge[lang][topic];
      
      // Add related information based on user preferences
      let additionalInfo = '';
      if (this.context.userPreferences.interests.includes('financial') && category !== 'financial') {
        additionalInfo = language === 'pt' 
          ? '\n\n💡 **Dica Financeira**: Quer saber mais sobre investimentos e financiamentos? Posso detalhar todas as opções disponíveis!'
          : '\n\n💡 **Financial Tip**: Want to know more about investments and financing? I can detail all available options!';
      }
      
      if (this.context.userPreferences.interests.includes('technical') && category !== 'technical') {
        additionalInfo += language === 'pt'
          ? '\n\n🔧 **Detalhes Técnicos**: Posso explicar aspectos técnicos mais avançados se desejar.'
          : '\n\n🔧 **Technical Details**: I can explain more advanced technical aspects if you wish.';
      }
      
      return baseResponse + additionalInfo;
    }
    
    return this.generateFallbackResponse(language);
  }

  private generateContextualResponse(message: string, language: 'pt' | 'en'): string {
    // Analyze conversation context to provide relevant information
    const recentTopics = this.context.messages
      .slice(-3)
      .map(m => m.content.toLowerCase())
      .join(' ');
    
    if (recentTopics.includes('orçamento') || recentTopics.includes('quote')) {
      return language === 'pt'
        ? 'Vejo que você está interessado em orçamentos! Para fornecer um orçamento preciso, preciso entender melhor suas necessidades. Pode me contar sobre:\n\n🏠 Tipo de imóvel (residencial/comercial/industrial)\n⚡ Consumo mensal atual\n📍 Localização\n💰 Orçamento disponível\n\nCom essas informações, posso te dar uma estimativa mais precisa! 😊'
        : 'I see you\'re interested in quotes! To provide an accurate quote, I need to better understand your needs. Can you tell me about:\n\n🏠 Property type (residential/commercial/industrial)\n⚡ Current monthly consumption\n📍 Location\n💰 Available budget\n\nWith this information, I can give you a more accurate estimate! 😊';
    }
    
    if (recentTopics.includes('técnico') || recentTopics.includes('technical')) {
      return language === 'pt'
        ? 'Perfeito! Vejo que você tem interesse técnico. Posso explicar detalhadamente:\n\n🔬 Como funcionam os painéis fotovoltaicos\n⚡ Especificações técnicas dos inversores\n📊 Análise de eficiência e performance\n🔧 Detalhes da instalação\n\nQual aspecto técnico te interessa mais?'
        : 'Perfect! I see you have technical interest. I can explain in detail:\n\n🔬 How photovoltaic panels work\n⚡ Technical specifications of inverters\n📊 Efficiency and performance analysis\n🔧 Installation details\n\nWhich technical aspect interests you most?';
    }
    
    // Default intelligent response
    return language === 'pt'
      ? 'Excelente pergunta! A energia solar é um tema muito amplo e posso te ajudar com diversos aspectos:\n\n🌞 **Conceitos básicos** - Como funciona a energia solar\n💰 **Aspectos financeiros** - Investimento, economia e financiamento\n🏗️ **Instalação** - Processo, equipe e materiais\n🔧 **Técnico** - Especificações e eficiência\n🛡️ **Suporte** - Manutenção e garantias\n\nSobre qual aspecto você gostaria de saber mais?'
      : 'Excellent question! Solar energy is a very broad topic and I can help you with various aspects:\n\n🌞 **Basic concepts** - How solar energy works\n💰 **Financial aspects** - Investment, savings and financing\n🏗️ **Installation** - Process, team and materials\n🔧 **Technical** - Specifications and efficiency\n🛡️ **Support** - Maintenance and warranties\n\nWhich aspect would you like to know more about?';
  }

  private generateFallbackResponse(language: 'pt' | 'en'): string {
    return language === 'pt'
      ? 'Interessante pergunta! Embora eu seja especializado em energia solar, posso te ajudar com informações gerais sobre sustentabilidade e energias renováveis. Para questões específicas sobre outros temas, recomendo entrar em contato com nossa equipe via WhatsApp: +55 34 99232-0853.\n\nPosso te ajudar com algo relacionado à energia solar? 😊'
      : 'Interesting question! Although I\'m specialized in solar energy, I can help you with general information about sustainability and renewable energies. For specific questions about other topics, I recommend contacting our team via WhatsApp: +55 34 99232-0853.\n\nCan I help you with something related to solar energy? 😊';
  }

  // Get conversation context for debugging
  getContext(): ConversationContext {
    return this.context;
  }
}

// Main enhanced chat service
const conversationHandler = new IntelligentConversationHandler();

export async function sendEnhancedChatMessage(message: string, language?: 'pt' | 'en'): Promise<{
  response: string;
  language: 'pt' | 'en';
  contextFound: boolean;
  suggestions?: string[];
}> {
  try {
    const detectedLanguage = language || detectLanguage(message);
    
    // Generate intelligent response
    const response = conversationHandler.generateResponse(message, detectedLanguage);
    
    // Generate contextual suggestions
    const suggestions = generateSuggestions(message, detectedLanguage);
    
    return {
      response,
      language: detectedLanguage,
      contextFound: true,
      suggestions
    };
  } catch (error) {
    console.error('Enhanced chat service error:', error);
    
    const fallbackResponse = language === 'pt'
      ? 'Desculpe, estou enfrentando dificuldades técnicas. Por favor, entre em contato conosco via WhatsApp: +55 34 99232-0853 para assistência imediata.'
      : 'Sorry, I\'m experiencing technical difficulties. Please contact us via WhatsApp: +55 34 99232-0853 for immediate assistance.';
    
    return {
      response: fallbackResponse,
      language: language || 'pt',
      contextFound: false
    };
  }
}

// Language detection function
function detectLanguage(text: string): 'pt' | 'en' {
  const portugueseWords = ['a', 'o', 'e', 'de', 'da', 'do', 'em', 'um', 'uma', 'para', 'com', 'não', 'que', 'se', 'por', 'mais', 'as', 'dos', 'como', 'mas', 'foi', 'ele', 'das', 'tem', 'à', 'seu', 'sua', 'ou', 'ser', 'quando', 'muito', 'há', 'nos', 'já', 'está', 'eu', 'também', 'só', 'pelo', 'pela', 'até', 'isso', 'ela', 'entre', 'era', 'depois', 'sem', 'mesmo', 'aos', 'ter', 'seus', 'suas', 'meu', 'minha', 'num', 'nem', 'uma', 'pelos', 'às', 'qual', 'nós', 'lhe', 'deles', 'essas', 'esses', 'pelas', 'este', 'fosse', 'dele', 'tu', 'te', 'você', 'vocês', 'lhe', 'lhes', 'me', 'comigo', 'contigo', 'convosco', 'nosco', 'vosco', 'lhe', 'lhes', 'me', 'te', 'se', 'si', 'consigo', 'nada', 'ninguém', 'outrem', 'outro', 'quem', 'alguém', 'cada', 'qualquer', 'tanto', 'quanto', 'cujo', 'cuja', 'onde', 'quando', 'como', 'porque', 'porquê', 'então', 'logo', 'portanto', 'pois', 'assim', 'bem', 'mal', 'melhor', 'pior', 'mais', 'menos', 'muito', 'pouco', 'bastante', 'demais', 'mais', 'menos', 'tanto', 'quanto', 'tão', 'quão', 'tamanho', 'grande', 'pequeno', 'alto', 'baixo', 'longo', 'curto', 'largo', 'estreito', 'grosso', 'fino', 'pesado', 'leve', 'forte', 'fraco', 'duro', 'mole', 'quente', 'frio', 'novo', 'velho', 'jovem', 'antigo', 'moderno', 'claro', 'escuro', 'limpo', 'sujo', 'bonito', 'feio', 'bom', 'mau', 'ruim', 'ótimo', 'excelente', 'maravilhoso', 'terrível', 'horrível', 'fantástico', 'incrível', 'extraordinário', 'especial', 'único', 'diferente', 'igual', 'parecido', 'similar', 'mesmo', 'outro', 'diverso', 'vário', 'certo', 'errado', 'verdadeiro', 'falso', 'real', 'imaginário', 'possível', 'impossível', 'necessário', 'desnecessário', 'importante', 'trivial', 'útil', 'inútil', 'valioso', 'precioso', 'caro', 'barato', 'econômico', 'custoso', 'gratuito', 'pago', 'livre', 'preso', 'aberto', 'fechado', 'cheio', 'vazio', 'cheio', 'vazio', 'cheio', 'vazio', 'cheio', 'vazio', 'cheio', 'vazio'];
  const englishWords = ['the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'i', 'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at', 'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what', 'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me', 'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know', 'take', 'people', 'into', 'year', 'your', 'good', 'some', 'could', 'them', 'see', 'other', 'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think', 'also', 'back', 'after', 'use', 'two', 'how', 'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want', 'because', 'any', 'these', 'give', 'day', 'most', 'us'];
  
  const textLower = text.toLowerCase();
  const portugueseCount = portugueseWords.filter(word => textLower.includes(word)).length;
  const englishCount = englishWords.filter(word => textLower.includes(word)).length;
  
  return portugueseCount > englishCount ? 'pt' : 'en';
}

// Generate contextual suggestions
function generateSuggestions(message: string, language: 'pt' | 'en'): string[] {
  const suggestions = language === 'pt' 
    ? [
        'Como funciona a energia solar?',
        'Quanto custa instalar?',
        'Qual o processo de instalação?',
        'Quais as garantias?',
        'Como é feita a manutenção?'
      ]
    : [
        'How does solar energy work?',
        'How much does installation cost?',
        'What is the installation process?',
        'What are the warranties?',
        'How is maintenance done?'
      ];
  
  return suggestions.slice(0, 3); // Return top 3 suggestions
}
