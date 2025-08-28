// Environment Configuration for Megaphoton Chatbot
// Copy this file to .env.local and fill in your actual API keys

export const config = {
  // Gemini AI Configuration
  gemini: {
    apiKey: process.env.GEMINI_API_KEY,
    model: 'gemini-1.5-flash',
  },

  // OpenAI API Configuration (legacy)
  openai: {
    apiKey: process.env.OPENAI_API_KEY || 'your_openai_api_key_here',
    model: 'gpt-4o-mini',
  },

  // Supabase Configuration (for future vector database implementation)
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || 'your_supabase_url_here',
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || 'your_supabase_service_role_key_here',
  },

  // Alternative: Pinecone Configuration
  pinecone: {
    apiKey: process.env.PINECONE_API_KEY || 'your_pinecone_api_key_here',
    environment: process.env.PINECONE_ENVIRONMENT || 'your_pinecone_environment_here',
    indexName: process.env.PINECONE_INDEX_NAME || 'your_pinecone_index_name_here',
  },

  // WhatsApp Configuration
  whatsapp: {
    phoneNumber: '+55 34 99232-0853',
  },

  // Chatbot Configuration
  chatbot: {
    defaultLanguage: 'pt' as 'pt' | 'en',
    maxTokens: 500,
    temperature: 0.7,
    typingDelay: 800,
  }
};
