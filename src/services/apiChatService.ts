// Secure API Chat Service - Calls backend endpoint
export interface ChatResponse {
  response: string;
  language: 'pt' | 'en';
  contextFound?: boolean;
  needsEscalation?: boolean;
  error?: boolean;
}

// Backend API endpoint
const API_URL = '/api/chat';

// Secure API function - no API keys in frontend
export async function sendChatMessage(message: string, language?: 'pt' | 'en'): Promise<ChatResponse> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, language })
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    
    return {
      response: data.response,
      language: data.language,
      contextFound: true,
      needsEscalation: data.needsEscalation,
      error: data.error
    };
  } catch (error) {
    console.error('API error:', error);
    
    const fallbackResponse = language === 'pt'
      ? 'Erro técnico. WhatsApp: +55 34 99232-0853 📱'
      : 'Technical error. WhatsApp: +55 34 99232-0853 📱';
    
    return {
      response: fallbackResponse,
      language: language || 'pt',
      contextFound: false,
      needsEscalation: true,
      error: true
    };
  }
}

export async function sendEnhancedChatMessage(message: string, language?: 'pt' | 'en'): Promise<ChatResponse> {
  return sendChatMessage(message, language);
}