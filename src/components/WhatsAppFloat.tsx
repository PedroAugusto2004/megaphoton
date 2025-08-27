import { useState, useEffect } from 'react';
import Chatbot from './Chatbot';

const WhatsAppFloat = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const phoneNumber = "5534992320853";

  useEffect(() => {
    const handleScroll = () => {
      const inicioSection = document.getElementById('inicio');
      const contatoSection = document.getElementById('contato');
      
      if (inicioSection && contatoSection) {
        const inicioBottom = inicioSection.offsetTop + inicioSection.offsetHeight;
        const contatoTop = contatoSection.offsetTop;
        const scrollY = window.scrollY;
        
        setShowButtons(scrollY > inicioBottom - 200 && scrollY < contatoTop - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsChatbotOpen(!isChatbotOpen)}
        className={`fixed bottom-5 right-4 z-30 w-14 h-14 rounded-full bg-black/50 backdrop-blur-lg border border-white/30 text-white hover:bg-black/60 hover:border-white/50 transition-all duration-300 hover:scale-110 group shadow-lg hover:shadow-xl ${isChatbotOpen ? 'opacity-0' : showButtons ? 'opacity-100' : 'opacity-0'} lg:bottom-5 lg:right-5 sm:bottom-4 sm:right-4`}
        aria-label="Chat com Assistente Virtual"
      >
        <div className="relative flex items-center justify-center w-full h-full">
          {/* Custom chat icon with three dots */}
          <svg className="w-7 h-7 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            <circle cx="8" cy="12" r="1" fill="currentColor"/>
            <circle cx="12" cy="12" r="1" fill="currentColor"/>
            <circle cx="16" cy="12" r="1" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300 overflow-hidden">
          <div className="absolute -inset-full top-1/2 blur-xl bg-gradient-to-b from-white/10 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
      </button>
      
      {/* Chatbot */}
      <Chatbot 
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        phoneNumber={phoneNumber}
      />
    </>
  );
};

export default WhatsAppFloat;