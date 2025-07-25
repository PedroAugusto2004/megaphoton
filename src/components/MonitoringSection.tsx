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

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Left column - Content */}
          <ScrollAnimation animationClass="reveal-fade-left" delay={200}>
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-900">
                Monitoramento inteligente do seu sistema
              </h3>
              
              <p className="text-gray-600">
                O monitoramento diário garante que cada raio de sol se transforme em máxima energia. 
                Não é apenas acompanhar; é otimizar continuamente o desempenho do seu sistema.
              </p>

              <div className="space-y-6">
                {monitoringFeatures.map((feature, index) => (
                  <ScrollAnimation key={feature.title} delay={400 + index * 100} animationClass="reveal-fade-up">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
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

              <ScrollAnimation delay={700} animationClass="reveal-fade-up">
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <p className="text-gray-700">
                    Cada dado coletado é uma oportunidade de melhorar o desempenho da sua usina, 
                    maximizando a geração de energia e o retorno do investimento.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>

          {/* Right column - Image */}
          <ScrollAnimation animationClass="reveal-fade-right" delay={300}>
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[1009/608]">
                <img 
                  src="/images/tracking.png" 
                  alt="Sistema de monitoramento solar" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </ScrollAnimation>
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