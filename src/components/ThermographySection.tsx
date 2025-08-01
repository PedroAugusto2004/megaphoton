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

        {/* Full-width Image with Overlay */}
        <div
          className="relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-32 overflow-hidden"
          style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}
        >
          <div className="relative w-full h-full">
            <img
              src="/images/thermography.png"
              alt="Termografia de painel solar mostrando análise térmica"
              className="w-full object-cover h-[600px] sm:h-[650px] md:h-[700px] lg:h-[750px] xl:h-[800px]"
              style={{ maxHeight: '900px' }}
            />
            {/* Text Overlay */}
            <div className="absolute top-4 left-4 md:top-8 md:left-16 flex items-start md:block">
              <div className="bg-black/40 backdrop-blur-md rounded-lg p-2.5 md:p-8 w-[65%] max-w-[220px] sm:max-w-[240px] md:w-auto md:max-w-lg border border-white/20 shadow-xl">
                <h3 className="text-sm sm:text-base md:text-3xl font-light text-white mb-1.5 md:mb-4 leading-tight text-left">
                  Análise <span className="text-primary font-normal">Termográfica</span>
                </h3>
                <p className="hidden md:block text-white/90 text-[11px] sm:text-xs md:text-base mb-2 md:mb-6 text-left">
                  Utilizamos tecnologia avançada para identificar problemas invisíveis a olho nu, 
                  garantindo a máxima eficiência e segurança da sua instalação fotovoltaica.
                </p>
                <div className="space-y-0.5 md:space-y-3">
                  <div className="flex items-start space-x-1.5 md:space-x-3">
                    <Search className="h-2.5 w-2.5 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-[9px] sm:text-xs md:text-base leading-tight md:leading-normal">
                      Identifica hot spots e falhas de interconexão
                    </span>
                  </div>
                  <div className="flex items-start space-x-1.5 md:space-x-3">
                    <Shield className="h-2.5 w-2.5 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-[9px] sm:text-xs md:text-base leading-tight md:leading-normal">
                      Análise não invasiva do sistema
                    </span>
                  </div>
                  <div className="flex items-start space-x-1.5 md:space-x-3">
                    <TrendingUp className="h-2.5 w-2.5 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-[9px] sm:text-xs md:text-base leading-tight md:leading-normal">
                      Monitoramento contínuo da qualidade
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Description - Under Image */}
        <div className="md:hidden -mt-16 mb-24 px-6">
          <p className="text-center text-base text-slate-700 leading-relaxed font-light max-w-md mx-auto">
            A inspeção termográfica permite identificar <span className="text-primary font-medium">problemas ocultos</span> antes que se tornem falhas custosas, sendo essencial para prolongar a <span className="text-primary font-medium">vida útil dos equipamentos</span>.
          </p>
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