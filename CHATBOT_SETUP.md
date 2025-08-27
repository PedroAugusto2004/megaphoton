# 🚀 Megaphoton Smart Chatbot Setup Guide

## Overview
This is a production-ready, intelligent chatbot for Megaphoton, a Brazilian solar energy company. The chatbot features:

- **Bilingual Support**: Portuguese and English
- **AI-Powered Responses**: Using OpenAI GPT-4o-mini
- **Knowledge Base**: Comprehensive company information
- **RAG System**: Retrieval-Augmented Generation for accurate responses
- **WhatsApp Integration**: Seamless human escalation
- **Responsive Design**: Mobile-optimized interface

## 🏗️ Architecture

```
Frontend (React) → API Route (/api/chat) → OpenAI API + Knowledge Base → Response
```

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- OpenAI API key
- (Optional) Supabase account for vector database
- (Optional) Pinecone account for alternative vector database

## 🚀 Quick Setup

### 1. Install Dependencies

```bash
npm install openai @supabase/supabase-js
```

### 2. Environment Configuration

Create a `.env.local` file in your project root:

```env
# OpenAI API Configuration
OPENAI_API_KEY=sk-your-actual-openai-api-key

# Supabase Configuration (Optional - for future vector database)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Alternative: Pinecone Configuration
PINECONE_API_KEY=your-pinecone-api-key
PINECONE_ENVIRONMENT=your-pinecone-environment
PINECONE_INDEX_NAME=your-pinecone-index-name
```

### 3. API Route Setup

The chatbot uses a Next.js API route at `/api/chat`. Ensure your project structure includes:

```
src/
├── api/
│   └── chat.ts          # AI chat endpoint
├── components/
│   └── Chatbot.tsx      # Frontend chatbot component
└── config/
    └── environment.ts    # Configuration file
```

### 4. Start Development Server

```bash
npm run dev
```

## 🔧 Configuration Options

### OpenAI Models
- **GPT-4o-mini**: Fast, cost-effective (default)
- **GPT-4 Turbo**: Better performance, higher cost
- **GPT-3.5 Turbo**: Budget option

### Language Detection
The chatbot automatically detects user language or can be manually switched using the globe icon.

### Knowledge Base Categories
- Company Information
- Services
- Installation Process
- Pricing & Quotes
- Warranties
- Maintenance
- Contact Information

## 🧠 How It Works

### 1. User Input
User types a question in Portuguese or English.

### 2. Language Detection
System automatically detects language or uses manual selection.

### 3. Knowledge Search
Searches the knowledge base for relevant information.

### 4. AI Generation
OpenAI generates a response using the retrieved context.

### 5. Response Delivery
Returns accurate, contextual response with action options.

### 6. Human Escalation
If needed, redirects to WhatsApp for human assistance.

## 📱 Features

### Smart Responses
- Context-aware answers
- No hallucination (only uses verified data)
- Professional and friendly tone
- Emoji usage for engagement

### User Experience
- Typing indicators
- Smooth animations
- Mobile-responsive design
- Quick action buttons

### Language Support
- Portuguese (Brazilian)
- English
- Easy language switching
- Localized content

## 🔒 Security & Privacy

- No user data storage
- API keys in environment variables
- Secure OpenAI integration
- WhatsApp redirection for sensitive requests

## 🚀 Production Deployment

### 1. Environment Variables
Set production environment variables in your hosting platform.

### 2. API Rate Limiting
Consider implementing rate limiting for the chat API.

### 3. Monitoring
Monitor API usage and response times.

### 4. Backup Knowledge Base
Consider implementing a database backup system.

## 🔧 Customization

### Adding New Knowledge
Edit the `MEGAPHOTON_KNOWLEDGE` array in `/api/chat.ts`:

```typescript
{
  id: 'new-topic',
  content: 'Your content here...',
  category: 'services',
  language: 'pt' // or 'en'
}
```

### Modifying Responses
Adjust the system prompts in the `generateAIResponse` function.

### Styling Changes
Modify the Tailwind CSS classes in `Chatbot.tsx`.

## 🐛 Troubleshooting

### Common Issues

1. **API Key Error**
   - Verify your OpenAI API key is correct
   - Check environment variable loading

2. **Slow Responses**
   - Consider upgrading to GPT-4 Turbo
   - Check network connectivity

3. **Language Detection Issues**
   - Ensure proper language keywords
   - Test with clear language indicators

### Debug Mode
Enable console logging by checking the browser console for error messages.

## 📈 Performance Optimization

### Current Implementation
- Local knowledge base (fast)
- OpenAI API integration
- Efficient search algorithms

### Future Enhancements
- Vector database integration
- Caching layer
- Response optimization
- Analytics dashboard

## 🔮 Roadmap

- [ ] Vector database integration (Supabase/Pinecone)
- [ ] Advanced analytics
- [ ] Multi-language expansion
- [ ] Voice integration
- [ ] Advanced RAG capabilities
- [ ] Performance monitoring

## 📞 Support

For technical support or questions about the chatbot implementation:

- **Company**: Megaphoton
- **WhatsApp**: +55 34 99232-0853
- **Email**: contato@megaphoton.com.br

## 📄 License

This chatbot implementation is proprietary to Megaphoton. All rights reserved.

---

**Built with ❤️ for Megaphoton's solar energy customers**
