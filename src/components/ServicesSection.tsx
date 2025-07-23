import { Thermometer, FileText, Monitor, Settings, Wrench, Droplets, PenTool, TrendingUp, Play, CheckSquare, X, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './popup-animation.css';

const ServicesSection = () => {
  const [videoError, setVideoError] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  
  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveService(null);
      setIsClosing(false);
    }, 300);
  };
  
  const services = [
    {
      icon: Thermometer,
      title: 'Termografia',
      description: 'Detecção precoce de falhas como hot spots, microfissuras e delaminações',
      gradient: 'bg-orange-500',
      details: 'A termografia é essencial para a manutenção preventiva de sistemas fotovoltaicos, permitindo identificar problemas antes que causem falhas graves. Utilizando câmeras térmicas de alta precisão, detectamos anomalias invisíveis a olho nu, garantindo a máxima eficiência e vida útil do seu sistema.'
    },
    {
      icon: FileText,
      title: 'Laudo Técnico',
      description: 'Documentação técnica completa para garantias e conformidade',
      gradient: 'bg-blue-500',
      details: 'Nossos laudos técnicos são documentos essenciais que atestam a conformidade da sua instalação com as normas vigentes. Elaborados por engenheiros especializados, garantem segurança jurídica para garantias, seguros e financiamentos, além de identificar oportunidades de otimização do seu sistema.'
    },
    {
      icon: Monitor,
      title: 'Monitoramento',
      description: 'Acompanhamento online em tempo real do desempenho da usina',
      gradient: 'bg-green-500',
      details: 'Nosso sistema de monitoramento permite acompanhar em tempo real a produção da sua usina solar, identificando rapidamente qualquer queda de desempenho. Com alertas automáticos e relatórios periódicos, garantimos que seu investimento esteja sempre operando com máxima eficiência.'
    },
    {
      icon: CheckSquare,
      title: 'Comissionamento',
      description: 'Verificação da conformidade e segurança elétrica da instalação',
      gradient: 'bg-purple-500',
      details: 'O comissionamento é um processo rigoroso de verificação que garante que sua usina solar foi instalada corretamente e está operando conforme as especificações do projeto. Este serviço é fundamental para validar a segurança e eficiência do sistema antes da sua operação comercial.'
    },
    {
      icon: Wrench,
      title: 'Instalação',
      description: 'Execução de projetos com excelência e precisão técnica',
      gradient: 'bg-orange-500',
      details: 'Nossa equipe de instalação é composta por profissionais certificados e experientes, garantindo que seu sistema fotovoltaico seja instalado com a máxima qualidade e segurança. Seguimos rigorosamente as normas técnicas e utilizamos materiais de primeira linha para assegurar o melhor desempenho.'
    },
    {
      icon: Settings,
      title: 'Reparos',
      description: 'Manutenção corretiva e preventiva especializada',
      gradient: 'bg-red-500',
      details: 'Nosso serviço de reparos atende com agilidade qualquer problema em seu sistema fotovoltaico. Com diagnóstico preciso e soluções eficientes, minimizamos o tempo de inatividade e restauramos rapidamente a produção de energia, evitando perdas financeiras prolongadas.'
    },
    {
      icon: Droplets,
      title: 'Higienização',
      description: 'Limpeza profissional para máxima eficiência energética',
      gradient: 'bg-blue-500',
      details: 'A higienização regular dos módulos fotovoltaicos é essencial para manter a eficiência do sistema. Nosso processo de limpeza especializado remove sujeira, poeira e outros resíduos que podem reduzir significativamente a produção de energia, garantindo o máximo retorno do seu investimento.'
    },
    {
      icon: PenTool,
      title: 'Projetos',
      description: 'Desenvolvimento de soluções completas em energia solar',
      gradient: 'bg-green-500',
      details: 'Desenvolvemos projetos personalizados que atendem às necessidades específicas de cada cliente. Nossa equipe de engenharia analisa cuidadosamente o local, consumo e objetivos para criar a solução mais eficiente e rentável, maximizando o retorno do seu investimento em energia solar.'
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center mb-2">
            <div className="h-px w-12 bg-primary mr-4"></div>
            <span className="text-primary uppercase tracking-wider text-sm font-medium">Serviços</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Nossos <span className="text-black">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A MEGAPHOTON oferece aos seus clientes serviços de qualidade em usinas solares, 
            realizados por profissionais capacitados
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="group bg-white rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.08),_0_6px_10px_rgba(0,0,0,0.05),_0_1px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12),_0_10px_15px_rgba(0,0,0,0.06)] h-full flex flex-col transition-all duration-300 hover:translate-y-[-8px]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-full ${service.gradient} flex items-center justify-center`}>
                      <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-4">
                    <button 
                      onClick={() => setActiveService(index)} 
                      className="flex items-center text-sm text-orange-500 font-medium hover:text-orange-600 transition-colors"
                    >
                      <span>Saiba mais</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
      
      {/* O&M Section - Full Width */}
      <div className="relative w-full bg-gradient-to-br from-green-500 to-green-600 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        
        <div className="relative flex flex-col lg:grid lg:grid-cols-2 lg:min-h-screen">
          {/* Content Side */}
          <div className="flex items-center px-6 md:px-8 lg:px-16 py-8 md:py-16 lg:py-20 lg:order-1">
            <div className="space-y-6 md:space-y-8 text-white max-w-lg">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
                INSTALAÇÕES &<br />MANUTENÇÕES
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg font-medium text-white/90">
                  Serviços de O&M (Operação e Manutenção)
                </p>
                <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                  Garantimos o funcionamento otimizado da sua usina solar através de serviços 
                  especializados, maximizando a vida útil e o desempenho do seu investimento.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 md:gap-3">
                <span className="px-3 md:px-4 py-1.5 md:py-2 bg-white/15 rounded-full text-xs md:text-sm font-light backdrop-blur-sm border border-white/20">
                  Instalação Profissional
                </span>
                <span className="px-3 md:px-4 py-1.5 md:py-2 bg-white/15 rounded-full text-xs md:text-sm font-light backdrop-blur-sm border border-white/20">
                  Manutenção Preventiva
                </span>
                <span className="px-3 md:px-4 py-1.5 md:py-2 bg-white/15 rounded-full text-xs md:text-sm font-light backdrop-blur-sm border border-white/20">
                  Suporte Técnico
                </span>
              </div>
            </div>
          </div>
          
          {/* Video Side */}
          <div className="relative min-h-[300px] lg:min-h-full lg:order-2">
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
                  <source src="/videos/instalação.mp4" type="video/mp4" />
                </video>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-white/20 rounded-2xl flex items-center justify-center">
                      <Wrench className="h-10 w-10 text-white/80" />
                    </div>
                    <p className="text-white/70 font-light">Instalação Profissional</p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            
            {/* Enhanced Badge */}
            <div className="absolute bottom-6 right-6 bg-black/20 backdrop-blur-md text-white px-4 py-2 rounded-xl shadow-lg border border-white/20">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Instalação em Ação</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup rendered via portal to body for true fixed centering */}
      {activeService !== null && ReactDOM.createPortal(
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
            
            {activeService !== null && (
              <div>
                <div className={`${services[activeService].gradient} p-6 relative rounded-t-xl`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      {React.createElement(services[activeService].icon, { className: "h-8 w-8 text-white" })}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{services[activeService].title}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    {services[activeService].details}
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
                    <span>Solicitar um orçamento</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default ServicesSection;