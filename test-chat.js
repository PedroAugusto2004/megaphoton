// Simple test for the chat service
// Run with: node test-chat.js

// Mock the environment
global.process = { env: {} };

// Test the chat service
async function testChatService() {
  try {
    console.log('Testing chat service...');
    
    // Test Portuguese
    const { sendChatMessage } = await import('./src/services/chatService.js');
    
    console.log('\n--- Testing Portuguese ---');
    const ptResponse = await sendChatMessage('Quais são os seus serviços?', 'pt');
    console.log('Portuguese response:', ptResponse);
    
    console.log('\n--- Testing English ---');
    const enResponse = await sendChatMessage('What services do you offer?', 'en');
    console.log('English response:', enResponse);
    
    console.log('\n--- Testing Quote Request ---');
    const quoteResponse = await sendChatMessage('Quero fazer um orçamento', 'pt');
    console.log('Quote response:', quoteResponse);
    
    console.log('\n--- Testing Company Info ---');
    const companyResponse = await sendChatMessage('Tell me about your company', 'en');
    console.log('Company response:', companyResponse);
    
    console.log('\n✅ All tests passed!');
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

testChatService();
