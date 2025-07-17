import { Thermometer, Search, Shield, TrendingUp, Zap } from 'lucide-react';

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center mb-2">
            <div className="h-px w-12 bg-primary mr-4"></div>
            <span className="text-primary uppercase tracking-wider text-sm font-medium">Termografia</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-black">Termografia</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            O exame termográfico é uma ferramenta fundamental na manutenção de usinas solares fotovoltaicas, 
            oferecendo uma análise precisa das condições dos módulos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Left column - Image */}
          <div className="relative overflow-hidden rounded-lg shadow-sm">
            <div className="aspect-[4/3] bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
              <Thermometer className="h-24 w-24 text-primary opacity-70" />
            </div>
          </div>

          {/* Right column - Content */}
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
        </div>

        {/* Benefits Grid */}
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Benefícios da análise termográfica
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="bg-white p-5 rounded-md shadow-sm border border-gray-100"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {benefit.icon}
                </div>
                <h4 className="font-medium text-gray-900">{benefit.title}</h4>
              </div>
              <p className="text-sm text-gray-600 pl-11">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThermographySection;