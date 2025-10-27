import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageCircle, Phone, ShoppingCart, User, Bot, ChevronDown, Sparkles, Globe, Loader2, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'options' | 'quick-reply';
  options?: string[];
  language?: 'pt' | 'en';
  showWhatsApp?: boolean;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber: string;
}

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
  </svg>
);

const Chatbot = ({ isOpen, onClose, phoneNumber }: ChatbotProps) => {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState('');
  const currentLanguage = i18n.language as 'pt' | 'en';
  const [isLoading, setIsLoading] = useState(false);
  const [showCloseConfirm, setShowCloseConfirm] = useState(false);
  const [chatEnded, setChatEnded] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setShowCloseConfirm(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        id: '1',
        text: t('chatbot.welcome'),
        sender: 'bot',
        timestamp: new Date(),
        type: 'options',
        language: i18n.language as 'pt' | 'en',
        options: [
          t('chatbot.option1'),
          t('chatbot.option2'),
          t('chatbot.option3'),
          t('chatbot.option4')
        ]
      }]);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0 && messages[0].id === '1') {
      setMessages([{
        id: '1',
        text: t('chatbot.welcome'),
        sender: 'bot',
        timestamp: messages[0].timestamp,
        type: 'options',
        language: i18n.language as 'pt' | 'en',
        options: [
          t('chatbot.option1'),
          t('chatbot.option2'),
          t('chatbot.option3'),
          t('chatbot.option4')
        ]
      }, ...messages.slice(1)]);
    }
  }, [i18n.language]);



  const handleCloseAttempt = () => {
    setShowCloseConfirm(true);
  };

  const handleConfirmClose = () => {
    setShowCloseConfirm(false);
    setChatEnded(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  const handleCancelClose = () => {
    setShowCloseConfirm(false);
  };

  const handleStartNewChat = () => {
    setChatEnded(false);
    setMessages([
      {
        id: '1',
        text: t('chatbot.welcome'),
        sender: 'bot',
        timestamp: new Date(),
        type: 'options',
        language: i18n.language as 'pt' | 'en',
        options: [
          t('chatbot.option1'),
          t('chatbot.option2'),
          t('chatbot.option3'),
          t('chatbot.option4')
        ]
      }
    ]);
    setInputValue('');
    setIsTyping(false);
    setTypingText('');
    setIsLoading(false);
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || chatEnded) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
      language: currentLanguage
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setIsLoading(true);

    try {


      // Check for quick actions that need WhatsApp
      if (text.toLowerCase().includes('orçamento') || text.toLowerCase().includes('quote') || 
          text.toLowerCase().includes('atendente') || text.toLowerCase().includes('agent')) {
        const response = currentLanguage === 'pt' 
          ? 'Perfeito! Para te ajudar melhor, vou conectar você com nossa equipe especializada via WhatsApp. Eles poderão analisar suas necessidades específicas e fornecer informações detalhadas.'
          : 'Perfect! To help you better, I\'ll connect you with our specialized team via WhatsApp. They can analyze your specific needs and provide detailed information.';
        
        // Animate typing effect
        await animateTyping(response);
        
        const botResponse: Message = {
          id: Date.now().toString(),
          text: response,
          sender: 'bot',
          timestamp: new Date(),
          language: currentLanguage,
          showWhatsApp: true
        };
        
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
        setIsLoading(false);
        return;
      }

      // Call the new API chat service with automatic language detection
      try {
        const { sendEnhancedChatMessage } = await import('../services/apiChatService');
        const data = await sendEnhancedChatMessage(text.trim()); // Remove forced language parameter
        
        // Animate typing effect
        await animateTyping(data.response);
        
        const botResponse: Message = {
          id: Date.now().toString(),
          text: data.response,
          sender: 'bot',
          timestamp: new Date(),
          language: data.language, // Use detected language from API
          showWhatsApp: data.needsEscalation || 
                       data.response.toLowerCase().includes('whatsapp') || 
                       data.response.toLowerCase().includes('equipe') ||
                       data.response.toLowerCase().includes('atendente') ||
                       data.response.toLowerCase().includes('comercial')
        };

        setMessages(prev => [...prev, botResponse]);
        

      } catch (importError) {
        console.error('Gemini service error:', importError);
        // Fallback to simple responses if import fails
        const { response, showWhatsApp } = generateSimpleResponse(text.trim(), currentLanguage);
        
        // Animate typing effect
        await animateTyping(response);
        
        const botResponse: Message = {
          id: Date.now().toString(),
          text: response,
          sender: 'bot',
          timestamp: new Date(),
          language: currentLanguage,
          showWhatsApp
        };

        setMessages(prev => [...prev, botResponse]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorText = currentLanguage === 'pt' 
        ? 'Desculpe, estou enfrentando dificuldades técnicas no momento. Por favor, entre em contato conosco diretamente via WhatsApp: +55 34 99232-0853 para obter assistência imediata.'
        : 'Sorry, I\'m experiencing technical difficulties at the moment. Please contact us directly via WhatsApp: +55 34 99232-0853 for immediate assistance.';
      
      // Animate typing effect
      await animateTyping(errorText);
      
      const fallbackMessage: Message = {
        id: Date.now().toString(),
        text: errorText,
        sender: 'bot',
        timestamp: new Date(),
        language: currentLanguage,
        showWhatsApp: true
      };

      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setIsTyping(false);
      setIsLoading(false);
    }
  };

  const handleOptionClick = (option: string) => {
    if (option.includes('WhatsApp') || option.includes('Abrir') || option.includes('Open')) {
      handleWhatsAppRedirect(option);
    } else {
      handleSendMessage(option);
    }
  };

  const handleWhatsAppRedirect = (action: string) => {
    let message = '';
    
    if (currentLanguage === 'pt') {
      switch (action) {
        case 'Fazer orçamento':
        case 'Abrir WhatsApp':
          message = 'Olá! Gostaria de fazer um orçamento para energia solar. Pode me ajudar?';
          break;
        case 'Falar com atendente':
          message = 'Olá! Gostaria de falar com um atendente especializado em energia solar.';
          break;
        default:
          message = 'Olá! Gostaria de saber mais sobre os serviços da Megaphoton.';
      }
    } else {
      switch (action) {
        case 'Get quote':
        case 'Open WhatsApp':
          message = 'Hello! I would like to get a quote for solar energy. Can you help me?';
          break;
        case 'Talk to agent':
          message = 'Hello! I would like to speak with a solar energy specialist.';
          break;
        default:
          message = 'Hello! I would like to know more about Megaphoton services.';
      }
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(currentLanguage === 'pt' ? 'pt-BR' : 'en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  // Simple fallback response generator
  // Futuristic typing animation
  const animateTyping = async (text: string) => {
    setTypingText('');
    const words = text.split(' ');
    
    for (let i = 0; i < words.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 50));
      setTypingText(prev => prev + (i > 0 ? ' ' : '') + words[i]);
    }
    
    await new Promise(resolve => setTimeout(resolve, 300));
    setTypingText('');
  };

  const generateSimpleResponse = (text: string, language: 'pt' | 'en'): { response: string; showWhatsApp: boolean } => {
    const input = text.toLowerCase();
    
    if (language === 'pt') {
      // Serviços
      if (input.includes('serviço') || input.includes('serviços') || input.includes('fazem') || input.includes('conhecer')) {
        return {
          response: 'A Megaphoton oferece serviços completos em energia solar:\n\n🔹 Instalação de sistemas fotovoltaicos\n🔹 Manutenção preventiva e corretiva\n🔹 Termografia para diagnóstico\n🔹 Inspeções técnicas\n🔹 Limpeza de painéis\n🔹 Monitoramento remoto\n\nQual serviço te interessa mais?',
          showWhatsApp: false
        };
      }
      // Orçamento
      if (input.includes('orçamento') || input.includes('preço') || input.includes('valor') || input.includes('custo')) {
        return {
          response: 'Para um orçamento personalizado, preciso conhecer suas necessidades específicas. Nossa equipe comercial pode fazer uma análise detalhada e apresentar a melhor solução para você!',
          showWhatsApp: true
        };
      }
      // Empresa
      if (input.includes('empresa') || input.includes('sobre') || input.includes('megaphoton') || input.includes('informações')) {
        return {
          response: 'A Megaphoton é uma empresa brasileira especializada em energia solar, localizada em Minas Gerais. Somos referência em qualidade, inovação e atendimento personalizado no setor de energia renovável. Nosso compromisso é oferecer soluções sustentáveis e eficientes para nossos clientes.',
          showWhatsApp: false
        };
      }
      // Atendente
      if (input.includes('atendente') || input.includes('falar') || input.includes('conversar') || input.includes('humano')) {
        return {
          response: 'Claro! Vou conectar você com um de nossos especialistas em energia solar. Eles poderão te ajudar com informações mais detalhadas e personalizadas.',
          showWhatsApp: true
        };
      }
      // Como funciona
      if (input.includes('funciona') || input.includes('como') || input.includes('processo')) {
        return {
          response: 'O sistema de energia solar funciona assim:\n\n1️⃣ Painéis captam a luz solar\n2️⃣ Inversor converte em energia elétrica\n3️⃣ Energia é distribuída para sua casa/empresa\n4️⃣ Excesso é injetado na rede elétrica\n5️⃣ Você economiza na conta de luz\n\nQuer saber mais detalhes sobre alguma etapa?',
          showWhatsApp: false
        };
      }
      // Resposta padrão
      return {
        response: 'Posso te ajudar com informações sobre energia solar! Fale sobre:\n\n• Nossos serviços\n• Como funciona a energia solar\n• Orçamentos e preços\n• Informações da empresa\n\nO que você gostaria de saber?',
        showWhatsApp: false
      };
    } else {
      // English responses
      if (input.includes('service') || input.includes('services') || input.includes('do') || input.includes('learn')) {
        return {
          response: 'Megaphoton offers complete solar energy services:\n\n🔹 Photovoltaic system installation\n🔹 Preventive and corrective maintenance\n🔹 Thermography for diagnostics\n🔹 Technical inspections\n🔹 Panel cleaning\n🔹 Remote monitoring\n\nWhich service interests you most?',
          showWhatsApp: false
        };
      }
      if (input.includes('quote') || input.includes('price') || input.includes('cost')) {
        return {
          response: 'For a personalized quote, I need to understand your specific needs. Our commercial team can perform a detailed analysis and present the best solution for you!',
          showWhatsApp: true
        };
      }
      if (input.includes('company') || input.includes('about') || input.includes('megaphoton') || input.includes('information')) {
        return {
          response: 'Megaphoton is a Brazilian company specialized in solar energy, located in Minas Gerais. We are a reference in quality, innovation and personalized service in the renewable energy sector. Our commitment is to offer sustainable and efficient solutions for our clients.',
          showWhatsApp: false
        };
      }
      if (input.includes('agent') || input.includes('talk') || input.includes('speak') || input.includes('human')) {
        return {
          response: 'Of course! I\'ll connect you with one of our solar energy specialists. They can help you with more detailed and personalized information.',
          showWhatsApp: true
        };
      }
      if (input.includes('work') || input.includes('how') || input.includes('process')) {
        return {
          response: 'Solar energy system works like this:\n\n1️⃣ Panels capture sunlight\n2️⃣ Inverter converts to electrical energy\n3️⃣ Energy is distributed to your home/business\n4️⃣ Excess is injected into the electrical grid\n5️⃣ You save on electricity bills\n\nWant to know more details about any step?',
          showWhatsApp: false
        };
      }
      return {
        response: 'I can help you with solar energy information! Ask about:\n\n• Our services\n• How solar energy works\n• Quotes and prices\n• Company information\n\nWhat would you like to know?',
        showWhatsApp: false
      };
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[59] bg-black/20 backdrop-blur-sm"
            onClick={handleCloseAttempt}
          />
          
          {/* Chatbot - Responsive Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-4 right-4 z-[60] w-[calc(100vw-2rem)] max-w-sm sm:max-w-md md:max-w-lg lg:w-96 h-[calc(100vh-8rem)] sm:h-[550px] md:h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 lg:bottom-5 lg:right-5 flex flex-col"
          >
            {/* Header - Fixed */}
            <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 relative flex-shrink-0">
              <button
                onClick={onClose}
                className="absolute top-2 sm:top-3 left-2 sm:left-3 text-black/60 hover:text-black transition-colors rounded-full p-1.5 hover:bg-gray-100"
                aria-label="Minimizar"
              >
                <Minus className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={handleCloseAttempt}
                className="absolute top-2 sm:top-3 right-2 sm:right-3 text-black/60 hover:text-black transition-colors rounded-full p-1.5 hover:bg-gray-100"
                aria-label="Fechar"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              <div className="flex items-center justify-center flex-1">
                <div className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center">
                  <img 
                    src="/images/megaphoton.png" 
                    alt="Megaphoton Logo" 
                    className="w-16 h-16 sm:w-18 sm:h-18 object-contain"
                  />
                </div>
                <div className="flex flex-col items-center ml-3">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-black font-semibold text-base sm:text-lg">
                      {currentLanguage === 'pt' ? 'Megaphoton IA' : 'Megaphoton AI'}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages - Scrollable */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-0">
              {messages.map((message) => (
                                 <motion.div
                   key={message.id}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                 >
                   <div className="max-w-[85%] sm:max-w-[80%]">
                    <div className={`rounded-2xl px-3 py-2 sm:px-4 sm:py-3 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg'
                        : 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 border border-gray-200 shadow-sm'
                    }`}>
                      <p className="whitespace-pre-line text-xs sm:text-sm leading-relaxed">
                        {message.text.replace(/\*\*(.*?)\*\*/g, '$1')}
                      </p>
                      <p className={`text-xs mt-1 sm:mt-2 ${
                        message.sender === 'user' ? 'text-emerald-100' : 'text-gray-500'
                      }`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                    
                    {/* Options - Only show for first message */}
                    {message.type === 'options' && message.options && message.id === '1' && (
                      <div className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2">
                        {message.options.map((option, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleOptionClick(option)}
                            className="w-full text-left bg-white border border-gray-200 rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 hover:border-emerald-300 transition-all duration-200 shadow-sm hover:shadow-md"
                          >
                            {option}
                          </motion.button>
                        ))}
                      </div>
                    )}
                    
                    {/* WhatsApp Button for human actions */}
                    {message.showWhatsApp && (
                      <div className="mt-2 sm:mt-3">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleWhatsAppRedirect('Falar com atendente')}
                          className="w-full flex items-center justify-center space-x-2 bg-green-500 text-white rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium hover:bg-green-600 transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                          <WhatsAppIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>
                            {currentLanguage === 'pt' ? 'Continuar no WhatsApp' : 'Continue on WhatsApp'}
                          </span>
                        </motion.button>
                      </div>
                    )}
                  </div>
                  
                  
                </motion.div>
              ))}
              
              {/* Futuristic Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[85%] sm:max-w-[80%]">
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl px-3 py-2 sm:px-4 sm:py-3 border border-gray-200">
                      {typingText ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-start space-x-2"
                        >
                          <div className="flex space-x-1 mt-1">
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                              className="w-1 h-1 bg-emerald-500 rounded-full"
                            />
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                              className="w-1 h-1 bg-emerald-500 rounded-full"
                            />
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                              className="w-1 h-1 bg-emerald-500 rounded-full"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                              {typingText}
                              <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-0.5 h-4 bg-emerald-500 ml-1"
                              />
                            </p>
                          </div>
                        </motion.div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            <motion.div
                              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                              className="w-2 h-2 bg-emerald-500 rounded-full"
                            />
                            <motion.div
                              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }}
                              className="w-2 h-2 bg-emerald-500 rounded-full"
                            />
                            <motion.div
                              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: 0.6 }}
                              className="w-2 h-2 bg-emerald-500 rounded-full"
                            />
                          </div>
                          <span className="text-xs text-gray-600">
                            {currentLanguage === 'pt' ? 'Pensando...' : 'Thinking...'}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input - Fixed */}
            <div className="border-t border-gray-100 p-3 sm:p-4 flex-shrink-0">
              {chatEnded ? (
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-3">
                    {currentLanguage === 'pt' ? 'Conversa encerrada' : 'Conversation ended'}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleStartNewChat}
                    className="w-full bg-emerald-500 text-white rounded-xl px-4 py-3 text-sm font-medium hover:bg-emerald-600 transition-colors"
                  >
                    {currentLanguage === 'pt' ? 'Iniciar novo chat' : 'Start new chat'}
                  </motion.button>
                </div>
              ) : (
                <>
                  <div className="flex space-x-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage(inputValue)}
                      placeholder={t('chatbot.placeholder')}
                      className="flex-1 px-3 py-2 sm:px-4 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base sm:text-sm"
                      disabled={isLoading}
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => !isLoading && handleSendMessage(inputValue)}
                      disabled={!inputValue.trim() || isLoading}
                      className="px-3 py-2 sm:px-4 sm:py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isLoading ? (
                        <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" />
                      ) : (
                        <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                      )}
                    </motion.button>
                  </div>
                  
                  {/* Quick actions */}
                  <div className="flex space-x-2 mt-2 sm:mt-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleWhatsAppRedirect('Fazer orçamento')}
                      className="flex-1 flex items-center justify-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors text-xs font-medium"
                    >
                      <ShoppingCart className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      <span className="text-xs">
                        {t('chatbot.quote')}
                      </span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleWhatsAppRedirect('Falar com atendente')}
                      className="flex-1 flex items-center justify-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-xs font-medium"
                    >
                      <WhatsAppIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      <span className="text-xs">
                        {t('chatbot.agent')}
                      </span>
                    </motion.button>
                  </div>
                </>
              )}
            </div>
            
            {/* AI Disclaimer */}
            <div className="px-3 py-2 bg-gray-50 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center">
                {t('chatbot.disclaimer')}
              </p>
            </div>
          </motion.div>

          {/* Close Confirmation Popup */}
          <AnimatePresence>
            {showCloseConfirm && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="fixed inset-0 z-[71] flex items-center justify-center p-4"
                >
                  <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm border border-gray-100">
                    <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {currentLanguage === 'pt' ? 'Gostaria de encerrar a conversa?' : 'Would you like to end the conversation?'}
                    </h3>
                    <p className="text-sm text-gray-600 mb-6">
                      {currentLanguage === 'pt' 
                        ? 'Você poderá visualizar as mensagens, mas não poderá enviar novas até iniciar um novo chat.'
                        : 'You will be able to view messages, but cannot send new ones until starting a new chat.'
                      }
                    </p>
                    <div className="flex space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleCancelClose}
                        className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        {currentLanguage === 'pt' ? 'Cancelar' : 'Cancel'}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleConfirmClose}
                        className="flex-1 px-4 py-2.5 bg-emerald-500 text-white rounded-xl text-sm font-medium hover:bg-emerald-600 transition-colors"
                      >
                        {currentLanguage === 'pt' ? 'Sim' : 'Yes'}
                      </motion.button>
                    </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

export default Chatbot;
