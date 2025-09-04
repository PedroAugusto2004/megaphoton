// API Chat Service - Uses backend API for secure communication
export interface ChatResponse {
  response: string;
  language: 'pt' | 'en';
  contextFound: boolean;
  needsEscalation?: boolean;
  error?: boolean;
}

// Main API function that calls the backend endpoint
export async function sendChatMessage(message: string, language?: 'pt' | 'en'): Promise<ChatResponse> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, language })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    return {
      response: data.response,
      language: data.language,
      contextFound: data.contextFound || false,
      needsEscalation: data.needsEscalation || false,
      error: data.error || false
    };
  } catch (error) {
    console.error('API Chat Service error:', error);
    
    const fallbackResponse = language === 'pt'
      ? 'Desculpe, estou enfrentando dificuldades técnicas. Entre em contato via WhatsApp: +55 34 99232-0853'
      : 'Sorry, I\'m experiencing technical difficulties. Please contact via WhatsApp: +55 34 99232-0853';
    
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