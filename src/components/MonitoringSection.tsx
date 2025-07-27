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

        {/* Full-width Image with Overlay */}
        <div
          className="relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-32 overflow-hidden"
          style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}
        >
          <div className="relative w-full h-full">
            <img
              src="/images/tracking.png"
              alt="Sistema de monitoramento solar"
              className="w-full object-cover h-[450px] sm:h-[550px] md:h-[700px] lg:h-[750px] xl:h-[800px]"
              style={{ maxHeight: '900px' }}
            />
            {/* Text Overlay */}
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
        </div>

        {/* Mobile Description - Under Image */}
        <div className="relative md:hidden -mt-24 mb-24">
          <div className="mx-auto max-w-[280px] bg-white/95 backdrop-blur-sm rounded-none p-4 shadow-sm">
            <p className="text-xs tracking-wide text-slate-600 leading-relaxed">
              O monitoramento diário garante que cada raio de sol se transforme em <span className="text-green-700">máxima energia</span>. 
              Não é apenas acompanhar; é otimizar continuamente o <span className="text-green-700">desempenho do seu sistema</span>.
            </p>
          </div>
        </div>

        {/* Reports Section */}
        <ScrollAnimation delay={800} animationClass="reveal-scale">
          <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <FileText className="h-6 w-6 text-green-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Relatórios detalhados</h3>
                </div>
                
                <div className="space-y-6">
                  {reportBenefits.map((benefit, index) => (
                    <ScrollAnimation key={benefit.title} delay={900 + index * 100} animationClass="reveal-fade-left">
                      <div className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <h4 className="font-medium text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>

              {/* Monitoring Dashboard Preview */}
              <ScrollAnimation delay={1000} animationClass="reveal-fade-right">
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <div className="aspect-[2244/1096]">
                    <img 
                      src="/images/monitoring.png" 
                      alt="Dashboard de monitoramento" 
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-white">
                      <p className="text-xs sm:text-sm font-medium mb-1">Dashboard em tempo real</p>
                      <p className="text-xs opacity-90 hidden sm:block">Monitoramento completo do sistema</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default MonitoringSection;