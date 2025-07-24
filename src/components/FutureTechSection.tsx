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
          <div className="mb-16 text-center">
            <span className="text-purple-600 uppercase tracking-wide text-sm font-medium">Tecnologias Futuras</span>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
              O Futuro Chegou
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Armazenamento e <span className="text-purple-600 font-semibold">mobilidade elétrica</span> ao seu alcance
            </p>
          </div>
        </ScrollAnimation>

        {/* Main Content */}
        <div className="mb-16">
          {/* Content Section */}
          <ScrollAnimation animationClass="reveal-fade-up" delay={200}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Sistemas de <span className="text-purple-600">Armazenamento ESS</span>
              </h3>
              
              <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
                Sistemas de armazenamento de energia (ESS) representam uma revolução na forma como 
                utilizamos e gerenciamos energia renovável.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-3">
                  <Lightbulb className="h-8 w-8 text-purple-600" />
                  <p className="text-gray-700 text-lg">
                    Imagine acordar com seu carro elétrico carregado todos os dias! 
                    Nossa tecnologia torna isso possível com energia 100% solar.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <ScrollAnimation key={feature.title} delay={400 + index * 100} animationClass="reveal-scale">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Large Image */}
          <ScrollAnimation animationClass="reveal-fade-up" delay={700}>
            <div className="-mx-4 md:-mx-8 lg:-mx-16 xl:-mx-32 relative">
              <img 
                src="/images/future.png" 
                alt="Tecnologias do Futuro - ESS e Mobilidade Elétrica" 
                className="w-full h-auto object-contain"
              />
              
              {/* Text Overlay */}
              <div className="absolute top-4 left-4 md:top-8 md:left-16">
                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3 md:p-6 max-w-xs md:max-w-md border border-white/20">
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <Lightbulb className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    <p className="text-white text-xs md:text-sm font-medium">
                      Imagine acordar com seu carro elétrico carregado todos os dias!
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2 md:gap-3">
                    <div className="flex items-center gap-2">
                      <Battery className="h-3 w-3 md:h-4 md:w-4 text-white" />
                      <div>
                        <h4 className="font-semibold text-white text-xs">Backup de Energia</h4>
                        <p className="text-gray-200 text-xs hidden md:block">Energia disponível mesmo durante interrupções</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="h-3 w-3 md:h-4 md:w-4 text-white" />
                      <div>
                        <h4 className="font-semibold text-white text-xs">Mobilidade Garantida</h4>
                        <p className="text-gray-200 text-xs hidden md:block">Carregamento eficiente para veículos elétricos</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Plug className="h-3 w-3 md:h-4 md:w-4 text-white" />
                      <div>
                        <h4 className="font-semibold text-white text-xs">Integração Inteligente</h4>
                        <p className="text-gray-200 text-xs hidden md:block">Sistema integrado para máxima eficiência</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

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
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-gray-700 text-center">
              <span className="text-purple-600 font-semibold">Revolução Energética:</span> Os sistemas ESS não são apenas uma tecnologia do futuro - eles são a realidade presente 
              que está transformando a maneira como consumimos energia. <span className="text-purple-600 font-semibold">Eficiência máxima, impacto mínimo.</span>
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FutureTechSection;