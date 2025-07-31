import { Zap, Battery, Car, Plug, Lightbulb } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const FutureTechSection = () => {
  const technologies = [
    {
      icon: <Battery className="h-5 w-5 text-purple-600" />,
      title: 'Baterias de Lítio',
      description: 'Alta densidade energética e longa durabilidade'
    },
    {
      icon: <Zap className="h-5 w-5 text-purple-600" />,
      title: 'Inversores Híbridos',
      description: 'Tecnologia avançada para máxima eficiência'
    },
    {
      icon: <Car className="h-5 w-5 text-purple-600" />,
      title: 'Carregadores Veiculares',
      description: 'Mobilidade elétrica sustentável'
    }
  ];

  const features = [
    {
      icon: <Battery className="h-5 w-5 text-purple-600" />,
      title: 'Backup de Energia',
      description: 'Energia disponível mesmo durante interrupções'
    },
    {
      icon: <Car className="h-5 w-5 text-purple-600" />,
      title: 'Mobilidade Garantida',
      description: 'Carregamento eficiente para veículos elétricos'
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-600" />,
      title: 'Integração Inteligente',
      description: 'Sistema integrado para máxima eficiência'
    }
  ];

  return (
    <section id="tecnologias" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-16">
            <div className="flex items-center mb-2">
              <div className="h-px w-12 bg-purple-600 mr-4"></div>
              <span className="text-purple-600 uppercase tracking-wider text-sm font-medium">Tecnologias Futuras</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              O Futuro Chegou
            </h2>
            <p className="text-2xl text-gray-600 max-w-6xl font-medium">
              Armazenamento e <span className="text-purple-600">mobilidade elétrica</span> ao seu alcance
            </p>
          </div>
        </ScrollAnimation>

      </div>

      {/* Full-width Image with Overlay (outside container) */}
      <div
        className="relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-6 md:mb-12 overflow-hidden"
        style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}
      >
        <ScrollAnimation animationClass="reveal-fade-up" delay={200}>
          <div className="relative w-full h-full">
            <img
              src="/images/future.jpeg"
              alt="Tecnologias do Futuro - ESS e Mobilidade Elétrica"
              className="w-full object-cover h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]"
              style={{ maxHeight: '900px' }}
            />
            {/* Text Overlay */}
            <div className="absolute top-2 left-2 right-2 md:top-8 md:left-16 md:right-auto">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-2 md:p-6 max-w-xs w-full md:max-w-md border border-white/20">
                <div className="flex items-center gap-2 mb-2 md:mb-4">
                  <Lightbulb className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  <p className="text-white text-xs md:text-sm font-medium">
                    Imagine acordar com seu carro elétrico carregado todos os dias!
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-1 md:gap-3">
                  <div className="flex items-center gap-2">
                    <Battery className="h-3 w-3 md:h-4 md:w-4 text-white" />
                    <div>
                      <h4 className="font-semibold text-white text-xs md:text-xs">Backup de Energia</h4>
                      <p className="text-gray-200 text-[10px] md:text-xs">Energia disponível mesmo durante interrupções</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="h-3 w-3 md:h-4 md:w-4 text-white" />
                    <div>
                      <h4 className="font-semibold text-white text-xs md:text-xs">Mobilidade Garantida</h4>
                      <p className="text-gray-200 text-[10px] md:text-xs">Carregamento eficiente para veículos elétricos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Plug className="h-3 w-3 md:h-4 md:w-4 text-white" />
                    <div>
                      <h4 className="font-semibold text-white text-xs md:text-xs">Integração Inteligente</h4>
                      <p className="text-gray-200 text-[10px] md:text-xs">Sistema integrado para máxima eficiência</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
        {/* Section Content */}
        <div className="container mx-auto px-4 max-w-7xl mb-16">

          {/* Technologies Grid */}
        <ScrollAnimation delay={800}>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Tecnologias do Futuro
          </h3>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <ScrollAnimation key={tech.title} delay={900 + index * 100} animationClass="reveal-scale">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    {tech.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900">{tech.title}</h4>
                </div>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={1200} animationClass="reveal-fade-up">
          <div className="border-l-4 border-purple-600 pl-6 py-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Revolução Energética</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Os sistemas ESS não são apenas uma tecnologia do futuro - eles são a realidade presente 
              que está transformando a maneira como consumimos energia.
            </p>
            <p className="text-sm text-purple-600 font-medium">Eficiência máxima, impacto mínimo.</p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FutureTechSection;