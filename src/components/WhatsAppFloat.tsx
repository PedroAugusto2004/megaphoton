import { useState, useEffect } from 'react';

const WhatsAppFloat = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const phoneNumber = "5534992320853";
  const message = "Olá, quero fazer um orçamento";

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

  const handleOpenChat = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsPopupOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsPopupOpen(!isPopupOpen)}
        className={`fixed bottom-5 right-4 z-30 w-12 h-12 rounded-full bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-lg border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-110 group ${isPopupOpen ? 'opacity-0' : showButtons ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Contato via WhatsApp"
      >
        <div className="relative flex items-center justify-center w-full h-full">
          <svg className="w-6 h-6 text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
          </svg>
        </div>
        <div className="absolute inset-0 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300 overflow-hidden">
          <div className="absolute -inset-full top-1/2 blur-xl bg-gradient-to-b from-white/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
        </div>
      </button>
      
      {/* Backdrop */}
      {isPopupOpen && (
        <div 
          className="fixed inset-0 z-[59] bg-black/20 backdrop-blur-sm"
          onClick={() => setIsPopupOpen(false)}
        />
      )}
      
      {/* Corner Popup */}
      <div 
        className={`fixed bottom-0 right-0 sm:bottom-5 sm:right-4 z-[60] w-full sm:w-80 bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ${isPopupOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'} origin-bottom-right border border-gray-100`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 relative">
          <button 
            onClick={() => setIsPopupOpen(false)}
            className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors rounded-full p-1.5 hover:bg-white/10"
            aria-label="Fechar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold">WhatsApp</h3>
              <p className="text-white/90 text-sm">Atendimento online</p>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5">
          <div className="bg-emerald-50 rounded-xl p-4 mb-5 border border-emerald-100">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-emerald-800 font-medium">Olá 👋</p>
                <p className="text-emerald-700 text-sm mt-1">Podemos ajudá-lo?</p>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleOpenChat}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <span>Abrir bate-papo</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <p className="text-center text-xs text-gray-500 mt-3">
            Atendimento de segunda a sexta, das 8h às 18h
          </p>
        </div>
      </div>
    </>
  );
};

export default WhatsAppFloat;