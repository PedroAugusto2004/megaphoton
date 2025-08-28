// Test script for Gemini AI chatbot integration
import { sendGeminiChatMessage } from './src/services/geminiChatService.js';

const testQueries = [
  {
    message: "Olá, como funciona a energia solar?",
    language: "pt",
    expected: "should explain solar energy basics"
  },
  {
    message: "Quanto custa instalar painéis solares?",
    language: "pt", 
    expected: "should escalate to WhatsApp for pricing"
  },
  {
    message: "What services do you offer?",
    language: "en",
    expected: "should list Megaphoton services"
  },
  {
    message: "Preciso falar com um atendente",
    language: "pt",
    expected: "should escalate to WhatsApp"
  },
  {
    message: "Tell me about warranties",
    language: "en",
    expected: "should explain warranty coverage"
  }
];

async function testGeminiChat() {
  console.log('🧪 Testing Gemini AI Chatbot Integration...\n');
  
  for (let i = 0; i < testQueries.length; i++) {
    const test = testQueries[i];
    console.log(`Test ${i + 1}: "${test.message}"`);
    console.log(`Expected: ${test.expected}`);
    
    try {
      const result = await sendGeminiChatMessage(test.message, test.language);
      
      console.log(`✅ Response: ${result.response.substring(0, 100)}...`);
      console.log(`📍 Language: ${result.language}`);
      console.log(`🔍 Context Found: ${result.contextFound}`);
      console.log(`📞 Needs Escalation: ${result.needsEscalation || false}`);
      
      if (result.error) {
        console.log('⚠️  Error occurred but handled gracefully');
      }
      
    } catch (error) {
      console.log(`❌ Test failed: ${error.message}`);
    }
    
    console.log('─'.repeat(50));
  }
  
  console.log('\n🎉 Gemini AI testing completed!');
  console.log('\n📋 Next Steps:');
  console.log('1. Run npm run dev to test in browser');
  console.log('2. Set up Supabase for vector database');
  console.log('3. Test WhatsApp escalation flows');
}

// Run tests
testGeminiChat().catch(console.error);