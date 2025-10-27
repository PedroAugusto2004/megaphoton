import { PenTool, Building, Factory, Tractor, MapPin, Zap, X, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import './popup-animation.css';

const ProjectsSection = () => {
  const { t } = useTranslation();
  const [videoError, setVideoError] = useState(false);
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  
  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActivePopup(null);
      setIsClosing(false);
    }, 300);
  };
  
  const segments = [
    {
      icon: Building,
      titleKey: 'projects.comercial',
      descKey: 'projects.comercialDesc',
      detailsKey: 'projects.comercialDetails',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Factory,
      titleKey: 'projects.industrial',
      descKey: 'projects.industrialDesc',
      detailsKey: 'projects.industrialDetails',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Tractor,
      titleKey: 'projects.rural',
      descKey: 'projects.ruralDesc',
      detailsKey: 'projects.ruralDetails',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ];

  return (
    <section id="projetos" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center mb-2">
            <div className="h-px w-12 bg-primary mr-4"></div>
            <span className="text-primary uppercase tracking-wider text-sm font-medium">{t('projects.title')}</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t('projects.heading')} <span className="text-black">{t('projects.headingBold')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t('projects.description')}
          </p>
        </div>

        {/* Segments Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div 
                key={segment.title}
                className="group rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08),_0_6px_10px_rgba(0,0,0,0.05),_0_1px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12),_0_10px_15px_rgba(0,0,0,0.06)] p-6 bg-white transition-all duration-300 overflow-hidden relative hover:translate-y-[-8px]"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`w-12 h-12 rounded-lg ${segment.bgColor} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                  <Icon className={`h-6 w-6 ${segment.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(segment.titleKey)}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {t(segment.descKey)}
                </p>
                
                <button 
                  onClick={() => setActivePopup(segment.titleKey)}
                  className="text-sm font-medium text-primary flex items-center hover:text-primary/80 transition-colors group-hover:translate-x-1"
                >
                  {t('projects.saibaMais')}
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>
                
                <div className="absolute top-0 right-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Project Details Section - Full Width */}
      <div className="relative w-full bg-orange-500 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative flex flex-col lg:grid lg:grid-cols-2 lg:min-h-[600px]">
          {/* Content Side */}
          <div className="flex items-center px-6 md:px-8 lg:px-16 py-8 md:py-16 lg:py-20 lg:order-1">
            <div className="space-y-6 md:space-y-8 text-white max-w-lg">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
                {t('projects.detailsTitle')}<br />{t('projects.detailsTitle2')}
              </h3>
              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg font-medium text-white/90">
                  {t('projects.detailsSubtitle')}
                </p>
                <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                  {t('projects.detailsDesc')}
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white font-medium">{t('projects.analiseLocalizacao')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white font-medium">{t('projects.escolhaEquipamentos')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white font-medium">{t('projects.estimativaGeracao')}</span>
                </div>
              </div>
              
              <button 
                onClick={() => window.open('https://wa.me/5534992320853?text=Olá,%20quero%20marcar%20meu%20próximo%20projeto', '_blank')}
                className="mt-6 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg text-white font-medium text-sm transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                {t('projects.marqueProximo')}
              </button>
            </div>
          </div>
          {/* video Side */}
          <div className="relative min-h-[400px] lg:min-h-full lg:order-2 overflow-hidden">
            <div className="absolute inset-0">
              {!videoError ? (
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  onError={() => setVideoError(true)}
                >
                  <source src="/videos/project.mp4" type="video/mp4" />
                </video>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-white/20 rounded-2xl flex items-center justify-center">
                      <Zap className="h-10 w-10 text-white/80" />
                    </div>
                    <p className="text-white/70 font-light">{t('projects.projetoDesenvolvimento')}</p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            {/* Enhanced Badge */}
            <div className="absolute bottom-6 right-6 bg-black/20 backdrop-blur-md text-white px-4 py-2 rounded-xl shadow-lg border border-white/20">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">{t('projects.projetoDesenvolvimento')}</span>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
              <Zap className="h-6 w-6 text-white/80" />
            </div>
            {/* Stats Overlay */}
            <div className="absolute top-6 right-6 bg-black/20 backdrop-blur-md text-white px-3 py-2 rounded-lg border border-white/10">
              <div className="text-xs font-light opacity-90">{t('projects.eficiencia')}</div>
              <div className="text-lg font-bold">95%+</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-custom">
        {/* Popup rendered via portal to body for true fixed centering */}
        {activePopup && ReactDOM.createPortal(
          <div 
            className={`fixed inset-0 z-[9999] popup-overlay ${isClosing ? 'closing' : ''}`}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(4px)',
              padding: '1rem'
            }}
            onClick={(e) => e.target === e.currentTarget && closePopup()}
          >
            <div 
              className={`bg-white rounded-xl shadow-2xl max-w-md w-full relative popup-content ${isClosing ? 'closing' : ''}`}
              style={{
                maxHeight: 'calc(100vh - 2rem)',
                overflowY: 'auto',
                marginTop: 'auto',
                marginBottom: 'auto'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 transition-colors"
                aria-label="Fechar"
              >
                <X className="h-4 w-4" />
              </button>
              {segments.map(segment => {
                if (segment.titleKey === activePopup) {
                  return (
                    <div key={segment.titleKey} className="p-8">
                      <div className="flex items-center mb-6">
                        <div className={`w-12 h-12 rounded-lg ${segment.bgColor} flex items-center justify-center mr-4 shadow-sm`}>
                          <segment.icon className={`h-6 w-6 ${segment.color}`} />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">
                          {t(segment.titleKey)}
                        </h3>
                      </div>
                      <p className="text-gray-700 mb-8 leading-relaxed">
                        {t(segment.detailsKey)}
                      </p>
                      <Button 
                        onClick={() => {
                          closePopup();
                          window.open('https://wa.me/5534992320853?text=Olá,%20quero%20fazer%20um%20orçamento', '_blank');
                        }}
                        className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center"
                      >
                        <span>{t('projects.facaOrcamento')}</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;