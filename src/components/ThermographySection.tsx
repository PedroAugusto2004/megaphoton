import { Thermometer, Search, Shield, TrendingUp, Zap } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const ThermographySection = () => {
  const benefits = [
    {
      icon: <Search className="h-5 w-5" />,
      title: 'Detecção Precoce',
      description: 'Identifica hot spots, microfissuras e falhas de interconexão'
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Técnica Não Invasiva',
      description: 'Análise sem interrupção da operação do sistema'
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: 'Monitoramento Contínuo',
      description: 'Acompanhamento da qualidade ao longo do tempo'
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: 'Avaliação de Performance',
      description: 'Identificação de módulos com baixo desempenho'
    }
  ];

  return (
    <section id="termografia" className="py-16 bg-white section-highlight">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-16">
            <div className="flex items-center mb-2">
              <div className="h-px w-12 bg-primary mr-4"></div>
              <span className="text-primary uppercase tracking-wider text-sm font-medium">Termografia</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-black">Termografia</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-6xl mx-auto font-medium">
              Identifique problemas <span className="text-primary">invisíveis</span> antes que afetem seu sistema
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Left column - Image */}
          <ScrollAnimation animationClass="reveal-fade-left" delay={200}>
            <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src="/images/thermography.png" 
                alt="Termografia de painel solar mostrando análise térmica" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </ScrollAnimation>

          {/* Right column - Content */}
          <ScrollAnimation animationClass="reveal-fade-right" delay={400}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Análise termográfica de precisão
              </h3>
              
              <p className="text-gray-600">
                Utilizamos tecnologia avançada para identificar problemas invisíveis a olho nu, 
                garantindo a máxima eficiência e segurança da sua instalação fotovoltaica.
              </p>

              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="text-gray-700">
                  A inspeção termográfica permite identificar problemas antes que se tornem falhas custosas, 
                  prolongando a vida útil dos equipamentos e maximizando o retorno do investimento.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Benefits Grid */}
        <ScrollAnimation delay={600}>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Benefícios da análise termográfica
          </h3>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <ScrollAnimation key={benefit.title} delay={700 + index * 100} animationClass="reveal-scale">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {benefit.icon}
                  </div>
                  <h4 className="font-medium text-gray-900">{benefit.title}</h4>
                </div>
                <div className="h-px w-full bg-gray-100 my-3"></div>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThermographySection;