import { Thermometer, FileText, Monitor, Settings, Wrench, Droplets, PenTool, TrendingUp, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const ServicesSection = () => {
  const [videoError, setVideoError] = useState(false);
  const services = [
    {
      icon: Thermometer,
      title: 'Termografia',
      description: 'Detecção precoce de falhas como hot spots, microfissuras e delaminações',
      color: 'text-orange-500'
    },
    {
      icon: FileText,
      title: 'Laudo Técnico',
      description: 'Documentação técnica completa para garantias e conformidade',
      color: 'text-blue-500'
    },
    {
      icon: Monitor,
      title: 'Monitoramento',
      description: 'Acompanhamento online em tempo real do desempenho da usina',
      color: 'text-green-500'
    },
    {
      icon: Settings,
      title: 'Comissionamento',
      description: 'Verificação da conformidade e segurança elétrica da instalação',
      color: 'text-purple-500'
    },
    {
      icon: Wrench,
      title: 'Instalação',
      description: 'Execução de projetos com excelência e precisão técnica',
      color: 'text-primary'
    },
    {
      icon: Settings,
      title: 'Reparos',
      description: 'Manutenção corretiva e preventiva especializada',
      color: 'text-red-500'
    },
    {
      icon: Droplets,
      title: 'Higienização',
      description: 'Limpeza profissional para máxima eficiência energética',
      color: 'text-blue-400'
    },
    {
      icon: PenTool,
      title: 'Projetos',
      description: 'Desenvolvimento de soluções completas em energia solar',
      color: 'text-secondary'
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="bg-solar-gradient bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A MEGAPHOTON oferece aos seus clientes serviços de qualidade em usinas solares, 
            realizados por profissionais capacitados
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-lg bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 mx-auto w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center border border-gray-200">
                    <Icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
      
      {/* O&M Section - Full Width */}
      <div className="relative w-full bg-gradient-to-br from-green-500 to-green-600 overflow-hidden">
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
            </div>
            <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 bg-white/90 backdrop-blur-sm text-green-600 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm font-medium">
              Instalação em Ação
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle transition gradient */}
      <div className="h-16 bg-gradient-to-b from-white to-gray-50/50"></div>
    </section>
  );
};

export default ServicesSection;