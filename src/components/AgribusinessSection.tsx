import { Tractor, Battery, Zap, Wifi, Shield } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const AgribusinessSection = () => {
  const systems = [
    {
      icon: <Battery className="h-5 w-5 text-green-600" />,
      title: 'Sistemas Híbridos',
      description: 'Inversores com baterias para máxima independência energética'
    },
    {
      icon: <Zap className="h-5 w-5 text-green-600" />,
      title: 'Off-Grid',
      description: 'Sistemas completamente independentes da rede elétrica'
    },
    {
      icon: <Shield className="h-5 w-5 text-green-600" />,
      title: 'Zero Grid',
      description: 'Autonomia total para propriedades rurais remotas'
    }
  ];

  const benefits = [
    {
      icon: <Battery className="h-5 w-5 text-green-600" />,
      title: 'Armazenamento Inteligente',
      description: 'Baterias de lítio para energia 24h por dia'
    },
    {
      icon: <Shield className="h-5 w-5 text-green-600" />,
      title: 'Segurança Energética',
      description: 'Independência total da concessionária'
    },
    {
      icon: <Wifi className="h-5 w-5 text-green-600" />,
      title: 'Monitoramento Remoto',
      description: 'Controle total via aplicativo móvel'
    }
  ];

  return (
    <section id="agronegocio" className="py-16 bg-white section-highlight">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-16">
            <div className="flex items-center mb-2">
              <div className="h-px w-12 bg-primary mr-4"></div>
              <span className="text-primary uppercase tracking-wider text-sm font-medium">Agronegócio</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-black">Agronegócio</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-6xl mx-auto font-medium">
              Energia <span className="text-green-600">independente</span> para o campo brasileiro
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Left column - Image */}
          <ScrollAnimation animationClass="reveal-fade-left" delay={200}>
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <div className="aspect-[4/3] bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center">
                <Tractor className="h-24 w-24 text-green-600 opacity-70" />
              </div>
            </div>
          </ScrollAnimation>

          {/* Right column - Content */}
          <ScrollAnimation animationClass="reveal-fade-right" delay={400}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Energia Solar para o <span className="text-green-600">Campo</span>
              </h3>
              
              <p className="text-gray-600">
                O uso de inversores híbridos (com baterias e/ou geradores a diesel), inversores off-grid e 
                zero grid (totalmente independentes da rede elétrica) tem aumentado a produtividade e 
                segurança no meio urbano e rural.
              </p>

              <div className="border-l-4 border-green-600 pl-4 py-2">
                <p className="text-gray-700">
                  Sistemas fotovoltaicos adaptados ao agronegócio proporcionam autonomia energética 
                  e redução de custos operacionais, mesmo em áreas remotas sem acesso à rede elétrica.
                </p>
              </div>

              <div className="space-y-5">
                {benefits.map((benefit, index) => (
                  <ScrollAnimation key={benefit.title} delay={500 + index * 100} animationClass="reveal-fade-up">
                    <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Systems Grid */}
        <ScrollAnimation delay={800}>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Soluções para o Agronegócio
          </h3>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {systems.map((system, index) => (
            <ScrollAnimation key={system.title} delay={900 + index * 100} animationClass="reveal-scale">
              <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                    {system.icon}
                  </div>
                  <h4 className="font-medium text-gray-900">{system.title}</h4>
                </div>
                <p className="text-sm text-gray-600 pl-11">{system.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={1200} animationClass="reveal-fade-up">
          <div className="p-6 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-sm mb-16">
            <p className="text-sm text-gray-700">
              <strong>Produtividade Rural:</strong> Nossas soluções especializadas para o agronegócio proporcionam energia limpa, confiável e econômica, 
              permitindo que produtores rurais se concentrem no que fazem de melhor: produzir alimentos de qualidade.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AgribusinessSection;