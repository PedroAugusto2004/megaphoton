// Simple Gemini API test
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function testGemini() {
  try {
    console.log('🧪 Testing Gemini API directly...');
    
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = "Responda em português: O que é energia solar?";
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log('✅ Gemini API working!');
    console.log('📝 Response:', text.substring(0, 200) + '...');
    
  } catch (error) {
    console.error('❌ Gemini API error:', error);
  }
}

testGemini();