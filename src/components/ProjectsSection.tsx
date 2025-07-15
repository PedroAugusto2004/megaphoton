import { PenTool, Building, Factory, Tractor, MapPin, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const ProjectsSection = () => {
  const [videoError, setVideoError] = useState(false);
  const segments = [
    {
      icon: Building,
      title: 'Comercial',
      description: 'Soluções para empresas e estabelecimentos comerciais',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Factory,
      title: 'Industrial', 
      description: 'Projetos de grande escala para indústrias',
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Tractor,
      title: 'Rural',
      description: 'Sistemas para propriedades rurais e agronegócio',
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ];

  return (
    <section id="projetos" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Nossos <span className="text-black">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Desenvolvemos projetos e soluções de engenharia para a construção de usinas solares fotovoltaicas
          </p>
        </div>

        {/* Segments Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <Card 
                key={segment.title}
                className={`group hover-lift cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ${segment.bgColor} backdrop-blur-sm overflow-hidden relative`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-10 text-center relative z-10">
                  <div className={`mb-8 mx-auto w-20 h-20 bg-gradient-to-br ${segment.gradient} rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-500`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {segment.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {segment.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </CardContent>
              </Card>
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
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md text-orange-600 px-4 py-2 rounded-xl shadow-lg border border-white/20">
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