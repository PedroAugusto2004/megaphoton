import { BarChart3, Eye, Shield, TrendingUp, FileText } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const MonitoringSection = () => {
  const monitoringFeatures = [
    {
      icon: <Eye className="h-5 w-5 text-green-500" />,
      title: 'Monitoramento Online',
      description: 'Acompanhamento em tempo real identifica falhas e evita perdas'
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-green-500" />,
      title: 'Dados em Insights',
      description: 'Transformamos dados em informações acionáveis para decisões'
    },
    {
      icon: <Shield className="h-5 w-5 text-green-500" />,
      title: 'Controle Total',
      description: 'Transparência e segurança financeira e operacional'
    }
  ];

  const reportBenefits = [
    {
      title: 'Insights Valiosos',
      description: 'Transformam dados complexos em informações claras e acionáveis'
    },
    {
      title: 'Controle Total',
      description: 'Garantem transparência, segurança financeira e operacional'
    },
    {
      title: 'Prevenção de Perdas',
      description: 'Identificação rápida de falhas evita perdas de geração'
    }
  ];

  return (
    <section id="monitoramento" className="py-16 bg-white section-highlight">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-16">
            <div className="flex items-center mb-2">
              <div className="h-px w-12 bg-green-500 mr-4"></div>
              <span className="text-green-500 uppercase tracking-wider text-sm font-medium"> MONITORAMENTO E RELATÓRIOS</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-black"> Monitoramento e Relatórios</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-6xl mx-auto font-medium">
              Como está o <span className="text-green-500">desempenho</span> da sua usina solar?
            </p>
          </div>
        </ScrollAnimation>

        {/* Stacked Images Container */}
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-16"
          style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
          {/* Top Image - Tracking */}
          <div className="relative h-[450px] sm:h-[550px] md:h-[700px] lg:h-[750px] xl:h-[800px] overflow-hidden">
            <img
              src="/images/tracking.png"
              alt="Sistema de monitoramento solar"
              className="w-full h-full object-cover"
            />
            {/* Text Overlay - Right Side */}
            <div className="absolute top-4 right-2 sm:right-4 md:top-8 md:right-16 flex items-end md:block">
              <div className="bg-black/40 backdrop-blur-md rounded-lg p-3 sm:p-4 md:p-8 w-[80%] sm:w-[65%] max-w-[280px] sm:max-w-[320px] md:w-auto md:max-w-lg border border-white/20 shadow-xl">
                <h3 className="text-base sm:text-lg md:text-3xl font-light text-white mb-2 md:mb-4 leading-tight text-left">
                  Monitoramento <span className="text-green-300 font-normal">Inteligente</span>
                </h3>
                <p className="hidden md:block text-white/90 text-sm md:text-base mb-3 md:mb-6 text-left">
                  O monitoramento diário garante que cada raio de sol se transforme em máxima energia.
                  Não é apenas acompanhar; é otimizar continuamente o desempenho do seu sistema.
                </p>
                <div className="space-y-2 md:space-y-3">
                  {monitoringFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2 md:space-x-3">
                      <div className="flex-shrink-0 mt-0.5">
                        {feature.icon}
                      </div>
                      <span className="text-white/90 text-xs sm:text-sm md:text-base leading-tight md:leading-normal text-left">
                        {feature.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Image - Monitoring */}
          <div className="relative h-[450px] sm:h-[550px] md:h-[700px] lg:h-[750px] xl:h-[800px] overflow-hidden">
            <img 
              src="/images/monitoring.png" 
              alt="Dashboard de monitoramento" 
              className="w-full h-full object-cover object-left"
            />
            
            {/* Content overlay - Right Side */}
            <div className="absolute top-1/2 right-2 sm:right-4 md:right-16 transform -translate-y-1/2 flex items-center md:block">
              <div className="backdrop-blur-md bg-black/20 rounded-lg p-2 sm:p-4 md:p-8 w-[60%] sm:w-[65%] max-w-[200px] sm:max-w-[320px] md:w-auto md:max-w-lg">
                <ScrollAnimation delay={800} animationClass="reveal-fade-left">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                    <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-green-400" />
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white">Relatórios detalhados</h3>
                  </div>
                </ScrollAnimation>

                <div className="space-y-3 sm:space-y-4">
                  {reportBenefits.map((benefit, index) => (
                    <ScrollAnimation key={benefit.title} delay={900 + index * 100} animationClass="reveal-fade-left">
                      <div className="transition-all duration-300 transform hover:translate-x-2">
                        <h4 className="text-sm sm:text-lg font-semibold text-green-400 mb-1 text-left">{benefit.title}</h4>
                        <p className="text-white/90 text-xs sm:text-sm leading-relaxed text-left">{benefit.description}</p>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringSection;