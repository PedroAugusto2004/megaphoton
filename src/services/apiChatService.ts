// API Chat Service - Uses local Gemini service for consistent behavior
import { sendGeminiChatMessage } from './geminiChatService';

export interface ChatResponse {
  response: string;
  language: 'pt' | 'en';
  contextFound: boolean;
  needsEscalation?: boolean;
  error?: boolean;
}

// Main API function that uses the local Gemini service
export async function sendChatMessage(message: string, language?: 'pt' | 'en'): Promise<ChatResponse> {
  try {
    // Use the Gemini service directly for consistent behavior
    const result = await sendGeminiChatMessage(message, language);
    
    return {
      response: result.response,
      language: result.language,
      contextFound: result.contextFound,
      needsEscalation: result.needsEscalation,
      error: result.error
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