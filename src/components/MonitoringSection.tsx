import { BarChart3, Eye, Shield, TrendingUp, FileText } from 'lucide-react';

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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center mb-2">
            <div className="h-px w-12 bg-primary mr-4"></div>
            <span className="text-primary uppercase tracking-wider text-sm font-medium"> MONITORAMENTO E RELATÓRIOS</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-black"> Monitoramento e Relatórios</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-6xl mx-auto font-medium">
            Como está o <span className="text-green-500">"coração"</span> da sua usina solar?
          </p>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Left column - Content */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900">
              Monitoramento inteligente do seu sistema
            </h3>
            
            <p className="text-gray-600">
              O monitoramento diário garante que cada raio de sol se transforme em máxima energia. 
              Não é apenas acompanhar; é otimizar continuamente o desempenho do seu sistema.
            </p>

            <div className="space-y-6">
              {monitoringFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <p className="text-gray-700">
                Cada dado coletado é uma oportunidade de melhorar o desempenho da sua usina, 
                maximizando a geração de energia e o retorno do investimento.
              </p>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative overflow-hidden rounded-lg shadow-sm">
            <div className="aspect-[4/3] bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
              <BarChart3 className="h-24 w-24 text-green-500 opacity-70" />
            </div>
          </div>
        </div>

        {/* Reports Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-semibold text-gray-900">Relatórios detalhados</h3>
              </div>
              
              <div className="space-y-6">
                {reportBenefits.map((benefit) => (
                  <div key={benefit.title} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-medium text-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-16 w-16 mx-auto mb-3 text-green-500 opacity-70" />
                <p className="text-sm font-medium text-gray-900">Visualização de dados</p>
                <p className="text-xs text-gray-500">Gráficos e relatórios personalizados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringSection;