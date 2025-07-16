import { Thermometer, FileText, Monitor, Settings, Wrench, Droplets, PenTool, TrendingUp, Play, CheckSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const ServicesSection = () => {
  const [videoError, setVideoError] = useState(false);
  const services = [
    {
      icon: Thermometer,
      title: 'Termografia',
      description: 'Detecção precoce de falhas como hot spots, microfissuras e delaminações',
      gradient: 'bg-orange-500'
    },
    {
      icon: FileText,
      title: 'Laudo Técnico',
      description: 'Documentação técnica completa para garantias e conformidade',
      gradient: 'bg-blue-500'
    },
    {
      icon: Monitor,
      title: 'Monitoramento',
      description: 'Acompanhamento online em tempo real do desempenho da usina',
      gradient: 'bg-green-500'
    },
    {
      icon: CheckSquare,
      title: 'Comissionamento',
      description: 'Verificação da conformidade e segurança elétrica da instalação',
      gradient: 'bg-purple-500'
    },
    {
      icon: Wrench,
      title: 'Instalação',
      description: 'Execução de projetos com excelência e precisão técnica',
      gradient: 'bg-orange-500'
    },
    {
      icon: Settings,
      title: 'Reparos',
      description: 'Manutenção corretiva e preventiva especializada',
      gradient: 'bg-red-500'
    },
    {
      icon: Droplets,
      title: 'Higienização',
      description: 'Limpeza profissional para máxima eficiência energética',
      gradient: 'bg-blue-500'
    },
    {
      icon: PenTool,
      title: 'Projetos',
      description: 'Desenvolvimento de soluções completas em energia solar',
      gradient: 'bg-green-500'
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
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossos Serviços
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
                className="group bg-white border border-gray-100 rounded-lg shadow-sm h-full flex flex-col"
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
                    <div className="flex items-center text-sm text-orange-500 font-medium">
                      <span>Saiba mais</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
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

    </section>
  );
};

export default ServicesSection;