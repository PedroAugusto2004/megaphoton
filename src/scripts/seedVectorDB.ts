import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'your-service-key';
const supabase = createClient(supabaseUrl, supabaseKey);

// Megaphoton knowledge base for vector storage
const MEGAPHOTON_DOCS = [
  {
    id: 'company-info-pt',
    content: 'Megaphoton é uma empresa brasileira especializada em energia solar, com sede em Minas Gerais. Nossa missão é democratizar o acesso à energia solar sustentável e de qualidade. Somos referência em qualidade, confiança e inovação no setor solar. Empresa certificada ANEEL, parceira das principais marcas do mercado, com milhares de clientes satisfeitos e projetos em todo Brasil.',
    category: 'company',
    language: 'pt'
  },
  {
    id: 'services-pt',
    content: 'A Megaphoton oferece serviços completos: Instalação de painéis solares residenciais, comerciais e industriais. Manutenção preventiva e corretiva. Termografia para detecção de problemas. Inspeções técnicas completas. Limpeza profissional de painéis. Monitoramento remoto 24/7 com alertas automáticos.',
    category: 'services',
    language: 'pt'
  },
  {
    id: 'pricing-pt',
    content: 'Investimento em energia solar: R$ 15.000 a R$ 50.000 para residências. Retorno em 3-7 anos. Economia de 70-95% na conta de luz. Financiamento disponível: à vista (desconto 5-10%), bancário (12-120 meses), imobiliário, leasing. Exemplo: conta R$ 300/mês → R$ 15/mês, economia R$ 285/mês.',
    category: 'pricing',
    language: 'pt'
  },
  {
    id: 'installation-pt',
    content: 'Processo de instalação: 1) Avaliação técnica gratuita, 2) Projeto personalizado, 3) Instalação profissional (2-5 dias), 4) Ativação e monitoramento. Equipe certificada com engenheiros especializados. Materiais de primeira linha com garantia de 25 anos.',
    category: 'installation',
    language: 'pt'
  },
  {
    id: 'warranty-pt',
    content: 'Garantias completas: Painéis 25 anos, inversores 10-15 anos, instalação 5 anos. Suporte técnico 24/7. Manutenção preventiva inclusa. Seguro contra danos e proteção contra raios.',
    category: 'warranty',
    language: 'pt'
  },
  {
    id: 'contact-pt',
    content: 'Contato Megaphoton: WhatsApp +55 34 99232-0853, Email contato@megaphoton.com.br. Atendimento: Segunda a sexta 8h-18h, Sábados 8h-12h. Sede em Minas Gerais, atendimento em todo Brasil.',
    category: 'contact',
    language: 'pt'
  }
];

// Simple embedding generation (in production use proper embedding API)
function generateSimpleEmbedding(text: string): number[] {
  const words = text.toLowerCase().split(/\s+/);
  const embedding = new Array(384).fill(0);
  
  words.forEach((word, index) => {
    const hash = word.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    const pos = Math.abs(hash) % 384;
    embedding[pos] += 1 / (index + 1);
  });
  
  // Normalize
  const magnitude = Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0));
  return embedding.map(val => magnitude > 0 ? val / magnitude : 0);
}

// Seed vector database
export async function seedVectorDatabase() {
  console.log('🌱 Seeding Megaphoton knowledge base...');
  
  try {
    for (const doc of MEGAPHOTON_DOCS) {
      const embedding = generateSimpleEmbedding(doc.content);
      
      const { error } = await supabase
        .from('megaphoton_knowledge')
        .upsert({
          id: doc.id,
          content: doc.content,
          category: doc.category,
          language: doc.language,
          embedding: embedding
        });
      
      if (error) {
        console.error(`Error inserting ${doc.id}:`, error);
      } else {
        console.log(`✅ Inserted: ${doc.id}`);
      }
    }
    
    console.log('🎉 Seeding completed!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
  }
}

// Search function
export async function searchKnowledgeBase(query: string, language: 'pt' | 'en' = 'pt') {
  try {
    const { data, error } = await supabase
      .from('megaphoton_knowledge')
      .select('content')
      .eq('language', language)
      .textSearch('content', query)
      .limit(3);
    
    if (error) {
      console.error('Search error:', error);
      return [];
    }
    
    return data?.map(item => item.content) || [];
  } catch (error) {
    console.error('Knowledge base search error:', error);
    return [];
  }
}