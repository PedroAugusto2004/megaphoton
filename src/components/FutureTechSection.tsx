import { Zap, Battery, Car, Plug, Smartphone } from 'lucide-react';
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
    <section id="tecnologias" className="py-16 bg-white section-highlight">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-16">
            <div className="flex items-center mb-2">
              <div className="h-px w-12 bg-primary mr-4"></div>
              <span className="text-primary uppercase tracking-wider text-sm font-medium">Tecnologias Futuras</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-black">O Futuro Chegou</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-6xl mx-auto font-medium">
              Armazenamento e <span className="text-purple-600">mobilidade elétrica</span> ao seu alcance
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Left column - Content */}
          <ScrollAnimation animationClass="reveal-fade-left" delay={200}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Sistemas de <span className="text-purple-600">Armazenamento ESS</span>
              </h3>
              
              <p className="text-gray-600">
                Sistemas de armazenamento de energia (ESS) representam uma revolução na forma como 
                utilizamos e gerenciamos energia renovável.
              </p>

              <div className="border-l-4 border-purple-600 pl-4 py-2">
                <p className="text-gray-700">
                  Imagine acordar com seu carro elétrico carregado todos os dias! 
                  Nossa tecnologia torna isso possível com energia 100% solar.
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <ScrollAnimation key={feature.title} delay={500 + index * 100} animationClass="reveal-fade-up">
                    <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border-l-2 border-purple-400">
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Right column - Image */}
          <ScrollAnimation animationClass="reveal-fade-right" delay={400}>
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <div className="aspect-[4/3] bg-gradient-to-b from-purple-50 to-purple-100 flex items-center justify-center">
                <div className="flex space-x-6">
                  <Battery className="h-16 w-16 text-purple-600 opacity-70" />
                  <Car className="h-16 w-16 text-purple-600 opacity-70" />
                  <Smartphone className="h-16 w-16 text-purple-600 opacity-70" />
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Technologies Grid */}
        <ScrollAnimation delay={800}>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Tecnologias do Futuro
          </h3>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {technologies.map((tech, index) => (
            <ScrollAnimation key={tech.title} delay={900 + index * 100} animationClass="reveal-scale">
              <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-600">
                    {tech.icon}
                  </div>
                  <h4 className="font-medium text-gray-900">{tech.title}</h4>
                </div>
                <p className="text-sm text-gray-600 pl-11">{tech.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={1200} animationClass="reveal-fade-up">
          <div className="p-6 bg-purple-50 border-l-4 border-purple-500 rounded-lg shadow-sm mb-16">
            <p className="text-sm text-gray-700">
              <strong>Revolução Energética:</strong> Os sistemas ESS não são apenas uma tecnologia do futuro - eles são a realidade presente 
              que está transformando a maneira como consumimos energia. Eficiência máxima, impacto mínimo.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FutureTechSection;