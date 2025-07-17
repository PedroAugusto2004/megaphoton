import { PenTool, Building, Factory, Tractor, MapPin, Zap, X, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import './popup-animation.css';

const ProjectsSection = () => {
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
      title: 'Comercial',
      description: 'Soluções para empresas e estabelecimentos comerciais',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      details: 'Projetos fotovoltaicos comerciais são ideais para empresas que buscam reduzir custos operacionais e demonstrar compromisso com sustentabilidade. Instalações em telhados ou áreas disponíveis podem gerar economia significativa na conta de energia.'
    },
    {
      icon: Factory,
      title: 'Industrial', 
      description: 'Projetos de grande escala para indústrias',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      details: 'Sistemas fotovoltaicos industriais são projetados para atender grandes demandas energéticas. Com capacidade para gerar volumes expressivos de energia limpa, estas instalações oferecem retorno sobre investimento acelerado e redução significativa nos custos operacionais.'
    },
    {
      icon: Tractor,
      title: 'Rural',
      description: 'Sistemas para propriedades rurais e agronegócio',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      details: 'Soluções fotovoltaicas para o agronegócio permitem que propriedades rurais alcancem independência energética. Ideais para bombeamento de água, sistemas de irrigação e outras aplicações agrícolas, reduzindo custos operacionais e aumentando a sustentabilidade.'
    }
  ];

  return (
    <section id="projetos" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center mb-2">
            <div className="h-px w-12 bg-primary mr-4"></div>
            <span className="text-primary uppercase tracking-wider text-sm font-medium">Projetos</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Nossos <span className="text-black">Projetos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Desenvolvemos projetos e soluções de engenharia para a construção de usinas solares fotovoltaicas
          </p>
        </div>

        {/* Segments Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div 
                key={segment.title}
                className="p-8 border border-gray-100 hover:border-gray-200 bg-white transition-all duration-300 overflow-hidden relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center mb-4">
                  <Icon className={`h-5 w-5 ${segment.color}`} />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">
                    {segment.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {segment.description}
                </p>
                
                <button 
                  onClick={() => setActivePopup(segment.title)}
                  className="text-sm text-gray-500 flex items-center hover:text-gray-700 transition-colors"
                >
                  Saiba mais
                  <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
        
        {/* Popup */}
        {activePopup && (
          <div 
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
            onClick={(e) => e.target === e.currentTarget && closePopup()}
          >
            <div 
              className={`bg-white rounded-xl shadow-2xl max-w-md w-full relative transition-all duration-300 ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100 animate-popup'}`}
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
                if (segment.title === activePopup) {
                  return (
                    <div key={segment.title} className="p-8">
                      <div className="flex items-center mb-6">
                        <div className={`w-12 h-12 rounded-lg ${segment.bgColor} flex items-center justify-center mr-4 shadow-sm`}>
                          <segment.icon className={`h-6 w-6 ${segment.color}`} />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">
                          {segment.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-700 mb-8 leading-relaxed">
                        {segment.details}
                      </p>
                      
                      <Button 
                        onClick={() => {
                          closePopup();
                          setTimeout(() => {
                            document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                          }, 300);
                        }}
                        className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center"
                      >
                        <span>Faça seu orçamento</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        )}
      </div>
      
      {/* Project Details Section - Full Width */}
      <div className="relative w-full bg-orange-500 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        
        <div className="relative flex flex-col lg:grid lg:grid-cols-2 lg:min-h-[600px]">
          {/* Content Side */}
          <div className="flex items-center px-6 md:px-8 lg:px-16 py-8 md:py-16 lg:py-20 lg:order-1">
            <div className="space-y-6 md:space-y-8 text-white max-w-lg">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
                PROJETOS ELABORADOS &<br />EXCELÊNCIA
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg font-medium text-white/90">
                  Modelo EPC (Engineering, Procurement and Construction)
                </p>
                <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                  A elaboração cuidadosa do projeto garante que a usina opere com máxima eficiência, 
                  proporcionando o retorno esperado sobre o investimento.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 md:gap-3">
                <span className="px-3 md:px-4 py-1.5 md:py-2 bg-white/15 rounded-full text-xs md:text-sm font-light backdrop-blur-sm border border-white/20">
                  Análise de Localização
                </span>
                <span className="px-3 md:px-4 py-1.5 md:py-2 bg-white/15 rounded-full text-xs md:text-sm font-light backdrop-blur-sm border border-white/20">
                  Escolha de Equipamentos
                </span>
                <span className="px-3 md:px-4 py-1.5 md:py-2 bg-white/15 rounded-full text-xs md:text-sm font-light backdrop-blur-sm border border-white/20">
                  Estimativa de Geração
                </span>
              </div>
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
                    <p className="text-white/70 font-light">Projeto em Desenvolvimento</p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            
            {/* Enhanced Badge */}
            <div className="absolute bottom-6 right-6 bg-black/20 backdrop-blur-md text-white px-4 py-2 rounded-xl shadow-lg border border-white/20">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Projeto em Desenvolvimento</span>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
              <Zap className="h-6 w-6 text-white/80" />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute top-6 right-6 bg-black/20 backdrop-blur-md text-white px-3 py-2 rounded-lg border border-white/10">
              <div className="text-xs font-light opacity-90">Eficiência</div>
              <div className="text-lg font-bold">95%+</div>
            </div>
          </div>
        </div>
      </div>
      

    </section>
  );
};

export default ProjectsSection;