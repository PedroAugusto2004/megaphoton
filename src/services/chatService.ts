// Mock knowledge base for development
// In production, this would be replaced with vector database queries
const MEGAPHOTON_KNOWLEDGE = [
  {
    id: 'company-info',
    content: `Megaphoton é uma empresa brasileira especializada em energia solar, com sede em Minas Gerais. Nossa missão é democratizar o acesso à energia solar sustentável e de qualidade. Somos referência em qualidade, confiança e inovação no setor solar. Empresa certificada ANEEL, parceira das principais marcas do mercado, com milhares de clientes satisfeitos e projetos em todo Brasil.`,
    category: 'company',
    language: 'pt'
  },
  {
    id: 'company-info-en',
    content: `Megaphoton is a Brazilian company specialized in solar energy, headquartered in Minas Gerais. Our mission is to democratize access to sustainable and quality solar energy. We are a reference in quality, trust and innovation in the solar sector. ANEEL certified company, partner of the main brands in the market, with thousands of satisfied customers and projects throughout Brazil.`,
    category: 'company',
    language: 'en'
  },
  {
    id: 'services-pt',
    content: `A Megaphoton oferece diversos serviços especializados em energia solar:

🔧 Instalação e Manutenção
• Instalação de painéis solares residenciais, comerciais e industriais
• Manutenção preventiva e corretiva
• Upgrade de sistemas existentes
• Projeto personalizado com estudo técnico detalhado

📊 Relatórios Técnicos
• Análise de eficiência
• Relatórios de performance
• Certificações técnicas
• Análise de viabilidade

📸 Termografia
• Detecção de hotspots
• Análise térmica avançada
• Relatórios detalhados
• Manutenção preventiva

🔍 Inspeções
• Inspeção visual completa
• Análise de segurança
• Relatórios de conformidade
• Certificação de qualidade

🧹 Limpeza de Painéis
• Limpeza profissional sem riscos
• Produtos específicos para painéis solares
• Equipamentos profissionais
• Relatório de limpeza

📱 Monitoramento Remoto
• Sistema 24/7
• Alertas automáticos em tempo real
• Dashboard personalizado
• Relatórios mensais de performance`,
    category: 'services',
    language: 'pt'
  },
  {
    id: 'services-en',
    content: `Megaphoton offers various specialized services in solar energy:

🔧 Installation and Maintenance
• Installation of residential, commercial and industrial solar panels
• Preventive and corrective maintenance
• Upgrade of existing systems
• Custom project with detailed technical study

📊 Technical Reports
• Efficiency analysis
• Performance reports
• Technical certifications
• Feasibility analysis

📸 Thermography
• Hotspot detection
• Advanced thermal analysis
• Detailed reports
• Preventive maintenance

🔍 Inspections
• Complete visual inspection
• Security analysis
• Compliance reports
• Quality certification

🧹 Panel Cleaning
• Professional cleaning without scratches
• Specific products for solar panels
• Professional equipment
• Cleaning report

📱 Remote Monitoring
• 24/7 system
• Real-time automatic alerts
• Personalized dashboard
• Monthly performance reports`,
    category: 'services',
    language: 'en'
  },
  {
    id: 'installation-process-pt',
    content: `Nossa instalação é completa e profissional:

✅ Projeto personalizado
• Estudo técnico detalhado
• Análise de viabilidade
• Projeto executivo completo
• Análise de consumo energético

✅ Equipe técnica certificada
• Engenheiros especializados
• Técnicos com certificação
• Supervisão constante
• Treinamento contínuo

✅ Materiais de qualidade
• Painéis de alta eficiência
• Inversores premium
• Estruturas certificadas
• Cabos e conectores de qualidade

✅ Garantia estendida
• Garantia de fábrica
• Garantia de instalação
• Suporte técnico
• Cobertura completa

✅ Suporte pós-instalação
• Ativação do sistema
• Treinamento do cliente
• Monitoramento contínuo
• Suporte 24/7

📋 O processo é simples:
1️⃣ Avaliação técnica gratuita
2️⃣ Projeto personalizado
3️⃣ Instalação profissional
4️⃣ Ativação e monitoramento
5️⃣ Suporte contínuo`,
    category: 'installation',
    language: 'pt'
  },
  {
    id: 'installation-process-en',
    content: `Our installation is complete and professional:

✅ Custom project
• Detailed technical study
• Feasibility analysis
• Executive project
• Energy consumption analysis

✅ Certified technical team
• Specialized engineers
• Certified technicians
• Constant supervision
• Continuous training

✅ Quality materials
• High efficiency panels
• Premium inverters
• Certified structures
• Quality cables and connectors

✅ Extended warranty
• Factory warranty
• Installation warranty
• Technical support
• Complete coverage

✅ Post-installation support
• System activation
• Customer training
• Continuous monitoring
• 24/7 support

📋 The process is simple:
1️⃣ Free technical assessment
2️⃣ Custom project
3️⃣ Professional installation
4️⃣ Activation and monitoring
5️⃣ Continuous support`,
    category: 'installation',
    language: 'en'
  },
  {
    id: 'pricing-pt',
    content: `Para fazer um orçamento personalizado e preciso, precisamos de algumas informações:

🏠 Tipo de instalação:
• Residencial (casa, apartamento)
• Comercial (empresa, loja)
• Industrial (fábrica, galpão)

⚡ Potência desejada:
• Consumo mensal atual (kWh)
• Objetivo de economia
• Espaço disponível no telhado
• Orientação solar

📍 Localização:
• Cidade e estado
• Tipo de telhado
• Inclinação
• Sombreamento

💰 Investimento:
• Orçamento disponível
• Forma de pagamento
• Financiamento desejado
• Prazo de retorno esperado

💳 Formas de pagamento:
• À vista (desconto de 5-10%)
• Financiamento bancário (12 a 120 meses)
• Financiamento imobiliário
• Leasing operacional

📊 Exemplo de economia:
Conta de R$ 300/mês → R$ 15/mês
Economia: R$ 285/mês
Retorno do investimento: 3-5 anos`,
    category: 'pricing',
    language: 'pt'
  },
  {
    id: 'pricing-en',
    content: `To make a personalized and accurate quote, we need some information:

🏠 Type of installation:
• Residential (house, apartment)
• Commercial (company, store)
• Industrial (factory, warehouse)

⚡ Desired power:
• Current monthly consumption (kWh)
• Economy objective
• Available roof space
• Solar orientation

📍 Location:
• City and state
• Roof type
• Inclination
• Shading

💰 Investment:
• Available budget
• Payment method
• Desired financing
• Expected return period

💳 Payment methods:
• Cash (5-10% discount)
• Bank financing (12 to 120 months)
• Real estate financing
• Operating lease

📊 Economy example:
Bill of R$ 300/month → R$ 15/month
Savings: R$ 285/month
Return on investment: 3-5 years`,
    category: 'pricing',
    language: 'en'
  },
  {
    id: 'warranty-pt',
    content: `Nossas garantias oferecem tranquilidade total:

🔒 Garantia de Fábrica:
• Painéis solares: 25 anos de potência
• Inversores: 10-15 anos
• Estruturas: 10 anos
• Cobertura completa de defeitos

🏗️ Garantia de Instalação:
• 5 anos de garantia na instalação
• Cobertura de problemas estruturais
• Reparo gratuito de defeitos
• Suporte técnico especializado

⚡ Garantia de Performance:
• Garantia de produção energética
• Monitoramento contínuo
• Relatórios de eficiência
• Otimização automática

📞 Suporte Técnico:
• Atendimento 24/7
• Equipe técnica certificada
• Resposta em até 24h
• Visitas técnicas gratuitas

🛡️ Cobertura Adicional:
• Seguro contra danos
• Proteção contra raios
• Garantia estendida opcional
• Manutenção preventiva inclusa`,
    category: 'warranty',
    language: 'pt'
  },
  {
    id: 'warranty-en',
    content: `Our warranties offer total peace of mind:

🔒 Factory Warranty:
• Solar panels: 25 years of power
• Inverters: 10-15 years
• Structures: 10 years
• Complete defect coverage

🏗️ Installation Warranty:
• 5 years installation warranty
• Structural problem coverage
• Free defect repair
• Specialized technical support

⚡ Performance Warranty:
• Energy production guarantee
• Continuous monitoring
• Efficiency reports
• Automatic optimization

📞 Technical Support:
• 24/7 service
• Certified technical team
• Response within 24h
• Free technical visits

🛡️ Additional Coverage:
• Damage insurance
• Lightning protection
• Optional extended warranty
• Preventive maintenance included`,
    category: 'warranty',
    language: 'en'
  },
  {
    id: 'maintenance-pt',
    content: `A manutenção é essencial para manter a eficiência do seu sistema solar:

📅 Manutenção Preventiva:
• Inspeção trimestral
• Limpeza profissional
• Verificação de conexões
• Análise de performance
• Relatório detalhado

🧹 Limpeza Especializada:
• Limpeza sem riscos
• Produtos específicos
• Equipamentos profissionais
• Relatório de limpeza
• Certificação de qualidade

📊 Monitoramento:
• Sistema 24/7
• Alertas automáticos
• Relatórios mensais
• Otimização contínua
• Dashboard personalizado

⚡ Benefícios:
• Máxima eficiência
• Durabilidade estendida
• Economia garantida
• Tranquilidade total
• Valorização do imóvel

🔧 Serviços Inclusos:
• Inspeção visual
• Teste de funcionamento
• Limpeza de painéis
• Verificação elétrica
• Relatório técnico`,
    category: 'maintenance',
    language: 'pt'
  },
  {
    id: 'maintenance-en',
    content: `Maintenance is essential to maintain the efficiency of your solar system:

📅 Preventive Maintenance:
• Quarterly inspection
• Professional cleaning
• Connection verification
• Performance analysis
• Detailed report

🧹 Specialized Cleaning:
• Cleaning without scratches
• Specific products
• Professional equipment
• Cleaning report
• Quality certification

📊 Monitoring:
• 24/7 system
• Automatic alerts
• Monthly reports
• Continuous optimization
• Personalized dashboard

⚡ Benefits:
• Maximum efficiency
• Extended durability
• Guaranteed savings
• Total peace of mind
• Property appreciation

🔧 Included Services:
• Visual inspection
• Functionality test
• Panel cleaning
• Electrical verification
• Technical report`,
    category: 'maintenance',
    language: 'en'
  },
  {
    id: 'contact-pt',
    content: `Entre em contato conosco:

📱 WhatsApp: +55 34 99232-0853
📞 Telefone: (34) 99232-0853
📧 Email: contato@megaphoton.com.br
🌐 Website: www.megaphoton.com.br

⏰ Horário de atendimento:
• Segunda a sexta: 8h às 18h
• Sábados: 8h às 12h
• Feriados: Consulte disponibilidade

📍 Endereço:
• Sede: Minas Gerais, Brasil
• Atendimento em todo Brasil
• Visitas técnicas gratuitas
• Orçamentos sem compromisso

👥 Nossa equipe:
• Engenheiros especializados
• Técnicos certificados
• Consultores comerciais
• Suporte técnico 24/7

💬 Redes Sociais:
• Instagram: @megaphoton.ei
• Facebook: Megaphoton Energia Solar
• LinkedIn: Megaphoton`,
    category: 'contact',
    language: 'pt'
  },
  {
    id: 'contact-en',
    content: `Contact us:

📱 WhatsApp: +55 34 99232-0853
📞 Phone: (34) 99232-0853
📧 Email: contato@megaphoton.com.br
🌐 Website: www.megaphoton.com.br

⏰ Service hours:
• Monday to Friday: 8am to 6pm
• Saturdays: 8am to 12pm
• Holidays: Check availability

📍 Address:
• Headquarters: Minas Gerais, Brazil
• Service throughout Brazil
• Free technical visits
• Free quotes

👥 Our team:
• Specialized engineers
• Certified technicians
• Commercial consultants
• 24/7 technical support

💬 Social Media:
• Instagram: @megaphoton.ei
• Facebook: Megaphoton Solar Energy
• LinkedIn: Megaphoton`,
    category: 'contact',
    language: 'en'
  }
];

// Function to detect language
function detectLanguage(text: string): 'pt' | 'en' {
  const portugueseWords = ['a', 'o', 'e', 'de', 'da', 'do', 'em', 'um', 'uma', 'para', 'com', 'não', 'que', 'se', 'por', 'mais', 'as', 'dos', 'como', 'mas', 'foi', 'ele', 'das', 'tem', 'à', 'seu', 'sua', 'ou', 'ser', 'quando', 'muito', 'há', 'nos', 'já', 'está', 'eu', 'também', 'só', 'pelo', 'pela', 'até', 'isso', 'ela', 'entre', 'era', 'depois', 'sem', 'mesmo', 'aos', 'ter', 'seus', 'suas', 'meu', 'minha', 'num', 'nem', 'uma', 'pelos', 'às', 'qual', 'nós', 'lhe', 'deles', 'essas', 'esses', 'pelas', 'este', 'fosse', 'dele', 'tu', 'te', 'você', 'vocês', 'lhe', 'lhes', 'me', 'comigo', 'contigo', 'convosco', 'nosco', 'vosco', 'lhe', 'lhes', 'me', 'te', 'se', 'si', 'consigo', 'nada', 'ninguém', 'outrem', 'outro', 'quem', 'alguém', 'cada', 'qualquer', 'tanto', 'quanto', 'cujo', 'cuja', 'onde', 'quando', 'como', 'porque', 'porquê', 'então', 'logo', 'portanto', 'pois', 'assim', 'bem', 'mal', 'melhor', 'pior', 'mais', 'menos', 'muito', 'pouco', 'bastante', 'demais', 'mais', 'menos', 'tanto', 'quanto', 'tão', 'quão', 'tamanho', 'grande', 'pequeno', 'alto', 'baixo', 'longo', 'curto', 'largo', 'estreito', 'grosso', 'fino', 'pesado', 'leve', 'forte', 'fraco', 'duro', 'mole', 'quente', 'frio', 'novo', 'velho', 'jovem', 'antigo', 'moderno', 'claro', 'escuro', 'limpo', 'sujo', 'bonito', 'feio', 'bom', 'mau', 'ruim', 'ótimo', 'excelente', 'maravilhoso', 'terrível', 'horrível', 'fantástico', 'incrível', 'extraordinário', 'especial', 'único', 'diferente', 'igual', 'parecido', 'similar', 'mesmo', 'outro', 'diverso', 'vário', 'certo', 'errado', 'verdadeiro', 'falso', 'real', 'imaginário', 'possível', 'impossível', 'necessário', 'desnecessário', 'importante', 'trivial', 'útil', 'inútil', 'valioso', 'precioso', 'caro', 'barato', 'econômico', 'custoso', 'gratuito', 'pago', 'livre', 'preso', 'aberto', 'fechado', 'cheio', 'vazio', 'cheio', 'vazio', 'cheio', 'vazio', 'cheio', 'vazio', 'cheio', 'vazio'];
  const englishWords = ['the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'i', 'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at', 'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what', 'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me', 'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know', 'take', 'people', 'into', 'year', 'your', 'good', 'some', 'could', 'them', 'see', 'other', 'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think', 'also', 'back', 'after', 'use', 'two', 'how', 'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want', 'because', 'any', 'these', 'give', 'day', 'most', 'us'];
  
  const textLower = text.toLowerCase();
  const portugueseCount = portugueseWords.filter(word => textLower.includes(word)).length;
  const englishCount = englishWords.filter(word => textLower.includes(word)).length;
  
  return portugueseCount > englishCount ? 'pt' : 'en';
}

// Function to search knowledge base
async function searchKnowledgeBase(query: string, language: 'pt' | 'en'): Promise<string[]> {
  try {
    const queryLower = query.toLowerCase();
    
    // For now, we'll use a simple search in our local knowledge base
    // In production, you'd use Supabase pgvector or Pinecone
    const relevantDocs = MEGAPHOTON_KNOWLEDGE.filter(doc => 
      doc.language === language && 
      (doc.content.toLowerCase().includes(queryLower) ||
       doc.category.toLowerCase().includes(queryLower) ||
       doc.id.toLowerCase().includes(queryLower))
    );
    
    // If no exact matches, try broader category matching
    if (relevantDocs.length === 0) {
      const categoryMatches = MEGAPHOTON_KNOWLEDGE.filter(doc => 
        doc.language === language
      );
      
      // Return general company info if no specific matches
      if (categoryMatches.length > 0) {
        return [categoryMatches[0].content];
      }
    }
    
    return relevantDocs.map(doc => doc.content);
  } catch (error) {
    console.error('Error searching knowledge base:', error);
    return [];
  }
}

// Function to generate AI response using OpenAI
async function generateAIResponse(query: string, context: string[], language: 'pt' | 'en'): Promise<string> {
  try {
    // For now, we'll use the fallback response
    // In production, you would integrate OpenAI API here
    return generateFallbackResponse(query, context, language);
  } catch (error) {
    console.error('Error generating AI response:', error);
    return generateFallbackResponse(query, context, language);
  }
}

// Fallback response generator for when OpenAI is not available
function generateFallbackResponse(query: string, context: string[], language: 'pt' | 'en'): string {
  const input = query.toLowerCase();
  
  if (language === 'pt') {
    // Services
    if (input.includes('serviço') || input.includes('serviços') || input.includes('o que vocês fazem') || input.includes('fazem')) {
      return 'A Megaphoton oferece diversos serviços especializados em energia solar, incluindo instalação de painéis, manutenção, termografia, inspeções, limpeza e monitoramento remoto. Gostaria de saber mais sobre algum serviço específico? 😊';
    }
    
    // Quotes and pricing
    if (input.includes('orçamento') || input.includes('preço') || input.includes('valor') || input.includes('quanto') || input.includes('custa')) {
      return 'Para fazer um orçamento personalizado, preciso de algumas informações sobre seu projeto. Vou conectar você com nossa equipe comercial via WhatsApp para um atendimento personalizado! 📱';
    }
    
    // Company information
    if (input.includes('empresa') || input.includes('sobre') || input.includes('megaphoton') || input.includes('quem') || input.includes('vocês')) {
      return 'A Megaphoton é uma empresa brasileira especializada em energia solar, com sede em Minas Gerais. Somos referência em qualidade e inovação no setor solar! 🌟';
    }
    
    // Installation
    if (input.includes('instalação') || input.includes('instalar') || input.includes('painel') || input.includes('solar') || input.includes('energia')) {
      return 'Nossa instalação é completa e profissional, com projeto personalizado, equipe técnica certificada e garantia estendida. Quer saber mais sobre o processo? 🏠';
    }
    
    // Maintenance
    if (input.includes('manutenção') || input.includes('manter') || input.includes('limpeza') || input.includes('cuidar')) {
      return 'A manutenção é essencial para manter a eficiência do seu sistema solar. Oferecemos serviços de limpeza, inspeção e monitoramento contínuo! 🔧';
    }
    
    // Warranties
    if (input.includes('garantia') || input.includes('garantias') || input.includes('proteção')) {
      return 'Nossas garantias oferecem tranquilidade total, incluindo garantia de fábrica, instalação e performance. Quer saber mais detalhes? 🛡️';
    }
    
    // Contact
    if (input.includes('contato') || input.includes('falar') || input.includes('atendente') || input.includes('telefone') || input.includes('whatsapp')) {
      return 'Para falar com nossa equipe, você pode entrar em contato via WhatsApp: +55 34 99232-0853 ou escolher uma das opções abaixo! 📱';
    }
    
    // Default response
    return 'Olá! Sou o assistente virtual da Megaphoton. Posso ajudá-lo com informações sobre nossos serviços de energia solar, orçamentos, instalações e muito mais. Como posso ajudá-lo hoje? 😊';
  } else {
    // Services
    if (input.includes('service') || input.includes('services') || input.includes('what do you do') || input.includes('do')) {
      return 'Megaphoton offers various specialized services in solar energy, including panel installation, maintenance, thermography, inspections, cleaning and remote monitoring. Would you like to know more about a specific service? 😊';
    }
    
    // Quotes and pricing
    if (input.includes('quote') || input.includes('price') || input.includes('cost') || input.includes('how much') || input.includes('pricing')) {
      return 'To get a personalized quote, I need some information about your project. I\'ll connect you with our commercial team via WhatsApp for personalized service! 📱';
    }
    
    // Company information
    if (input.includes('company') || input.includes('about') || input.includes('megaphoton') || input.includes('who') || input.includes('you')) {
      return 'Megaphoton is a Brazilian company specialized in solar energy, headquartered in Minas Gerais. We are a reference in quality and innovation in the solar sector! 🌟';
    }
    
    // Installation
    if (input.includes('installation') || input.includes('install') || input.includes('panel') || input.includes('solar') || input.includes('energy')) {
      return 'Our installation is complete and professional, with custom project, certified technical team and extended warranty. Want to know more about the process? 🏠';
    }
    
    // Maintenance
    if (input.includes('maintenance') || input.includes('maintain') || input.includes('cleaning') || input.includes('care')) {
      return 'Maintenance is essential to maintain the efficiency of your solar system. We offer cleaning, inspection and continuous monitoring services! 🔧';
    }
    
    // Warranties
    if (input.includes('warranty') || input.includes('warranties') || input.includes('protection')) {
      return 'Our warranties offer total peace of mind, including factory, installation and performance warranty. Want to know more details? 🛡️';
    }
    
    // Contact
    if (input.includes('contact') || input.includes('talk') || input.includes('agent') || input.includes('phone') || input.includes('whatsapp')) {
      return 'To speak with our team, you can contact us via WhatsApp: +55 34 99232-0853 or choose one of the options below! 📱';
    }
    
    // Default response
    return 'Hello! I am Megaphoton\'s virtual assistant. I can help you with information about our solar energy services, quotes, installations and much more. How can I help you today? 😊';
  }
}

// Main chat service function
export async function sendChatMessage(message: string, language?: 'pt' | 'en') {
  try {
    console.log('Chat service called with:', { message, language });
    
    // Detect language if not provided
    const detectedLanguage = language || detectLanguage(message);
    console.log('Detected language:', detectedLanguage);
    
    // Search knowledge base for relevant context
    const context = await searchKnowledgeBase(message, detectedLanguage);
    console.log('Found context:', context.length, 'items');
    
    // Generate AI response
    const aiResponse = await generateAIResponse(message, context, detectedLanguage);
    console.log('Generated response:', aiResponse.substring(0, 100) + '...');
    
    return {
      response: aiResponse,
      language: detectedLanguage,
      contextFound: context.length > 0
    };
  } catch (error) {
    console.error('Chat service error:', error);
    
    // Use fallback response instead of error message
    const fallbackResponse = generateFallbackResponse(message, [], language || 'pt');
    
    return {
      response: fallbackResponse,
      language: language || 'pt',
      contextFound: false,
      error: false
    };
  }
}
