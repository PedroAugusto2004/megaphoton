import { BarChart3, Eye, Shield, TrendingUp, FileText, X } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './popup-animation.css';

const MonitoringSection = () => {
  const [selectedBenefit, setSelectedBenefit] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const monitoringFeatures = [
    {
      icon: <Eye className="h-5 w-5 text-green-500" />,
      title: 'Monitoramento Online',
      description: 'Acompanhamento em tempo real identifica falhas e evita perdas'
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-green-500" />,
      title: 'Dados em Insights',
      description: 'Transformamos dados em informações acionáveis para decisões'
    },
    {
      icon: <Shield className="h-5 w-5 text-green-500" />,
      title: 'Controle Total',
      description: 'Transparência e segurança financeira e operacional'
    }
  ];

  const reportBenefits = [
    {
      title: 'Insights Valiosos',
      description: 'Transformam dados complexos em informações claras e acionáveis'
    },
    {
      title: 'Controle Total',
      description: 'Garantem transparência, segurança financeira e operacional'
    },
    {
      title: 'Prevenção de Perdas',
      description: 'Identificação rápida de falhas evita perdas de geração'
    }
  ];

  const handleBenefitClick = (title: string) => {
    if (selectedBenefit === title) {
      closePopup();
    } else {
      setSelectedBenefit(title);
    }
  };

  const closePopup = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedBenefit(null);
      setIsAnimating(false);
    }, 200);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  // Mobile Popup Portal
  const MobilePopup = () => {
    if (!mounted || (!selectedBenefit && !isAnimating)) return null;
    
    return createPortal(
      <div 
        className={`fixed inset-0 z-[9999] popup-overlay ${isAnimating ? 'closing' : ''}`}
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(4px)',
          padding: '1rem'
        }}
        onClick={handleBackdropClick}
      >
        <div className={`bg-white rounded-xl p-6 max-w-xs w-full shadow-2xl popup-content ${isAnimating ? 'closing' : ''}`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-green-600">{selectedBenefit}</h3>
            <button 
              onClick={closePopup}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            {reportBenefits.find(b => b.title === selectedBenefit)?.description}
          </p>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <>
      <section id="monitoramento" className="py-16 bg-white section-highlight">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <ScrollAnimation>
            <div className="mb-16">
              <div className="flex items-center mb-2">
                <div className="h-px w-12 bg-green-500 mr-4"></div>
                <span className="text-green-500 uppercase tracking-wider text-sm font-medium"> MONITORAMENTO E RELATÓRIOS</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                <span className="text-black"> Monitoramento e Relatórios</span>
              </h2>
              <p className="text-2xl text-muted-foreground max-w-6xl mx-auto font-medium">
                Como está o <span className="text-green-500">desempenho</span> da sua usina solar?
              </p>
            </div>
          </ScrollAnimation>

          {/* Stacked Images Container */}
          <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-16"
            style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
            {/* Top Image - Tracking */}
            <div className="relative h-[450px] sm:h-[550px] md:h-[700px] lg:h-[750px] xl:h-[800px] overflow-hidden">
              <img
                src="/images/tracking.png"
                alt="Sistema de monitoramento solar"
                className="w-full h-full object-cover"
              />
              {/* Text Overlay - Right Side */}
              <div className="absolute top-4 right-2 sm:right-4 md:top-8 md:right-16 flex items-end md:block">
                <div className="bg-black/40 backdrop-blur-md rounded-lg p-3 sm:p-4 md:p-8 w-[80%] sm:w-[65%] max-w-[280px] sm:max-w-[320px] md:w-auto md:max-w-lg border border-white/20 shadow-xl">
                  <h3 className="text-base sm:text-lg md:text-3xl font-light text-white mb-2 md:mb-4 leading-tight text-left">
                    Monitoramento <span className="text-green-300 font-normal">Inteligente</span>
                  </h3>
                  <p className="hidden md:block text-white/90 text-sm md:text-base mb-3 md:mb-6 text-left">
                    O monitoramento diário garante que cada raio de sol se transforme em máxima energia.
                    Não é apenas acompanhar; é otimizar continuamente o desempenho do seu sistema.
                  </p>
                  <div className="space-y-2 md:space-y-3">
                    {monitoringFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2 md:space-x-3">
                        <div className="flex-shrink-0 mt-0.5">
                          {feature.icon}
                        </div>
                        <span className="text-white/90 text-xs sm:text-sm md:text-base leading-tight md:leading-normal text-left">
                          {feature.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Image - Monitoring */}
            <div className="relative h-[450px] sm:h-[550px] md:h-[700px] lg:h-[750px] xl:h-[800px] overflow-hidden">
              <img 
                src="/images/monitoring.png" 
                alt="Dashboard de monitoramento" 
                className="w-full h-full object-cover object-left"
              />
              
              {/* Content overlay - Right Side */}
              <div className="absolute top-1/2 right-2 sm:right-4 md:right-16 transform -translate-y-1/2 flex items-center md:block">
                <div className="backdrop-blur-md bg-black/20 rounded-lg p-3 sm:p-4 md:p-8 w-[140px] h-[170px] sm:w-[200px] sm:h-[200px] md:w-auto md:h-auto md:max-w-lg overflow-hidden">
                  <ScrollAnimation delay={800} animationClass="reveal-fade-left">
                    <div className="flex items-center space-x-1 sm:space-x-3 mb-3 sm:mb-6">
                      <FileText className="h-4 w-4 sm:h-8 sm:w-8 text-green-400 flex-shrink-0" />
                      <h3 className="text-xs sm:text-2xl md:text-3xl font-bold text-white leading-tight">Relatórios detalhados</h3>
                    </div>
                  </ScrollAnimation>

                  <div className="space-y-2 sm:space-y-4">
                    {reportBenefits.map((benefit, index) => (
                      <ScrollAnimation key={benefit.title} delay={900 + index * 100} animationClass="reveal-fade-left">
                        <div>
                          {/* Mobile: Button, Desktop: Regular text */}
                          <button 
                            onClick={() => handleBenefitClick(benefit.title)}
                            className="md:hidden w-full text-center bg-green-500/20 rounded-md py-1.5 text-[9px] font-semibold text-green-300 mb-1 flex items-center justify-center"
                          >
                            {benefit.title}
                          </button>
                          <h4 className="hidden md:block text-lg font-semibold text-green-400 mb-1 text-left leading-tight">{benefit.title}</h4>
                          <p className="text-white/90 text-[6px] sm:text-sm leading-tight sm:leading-relaxed text-left hidden sm:block">{benefit.description}</p>
                        </div>
                      </ScrollAnimation>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mobile Popup Portal */}
      <MobilePopup />
    </>
  );
};

export default MonitoringSection;