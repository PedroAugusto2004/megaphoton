import { Droplets, AlertTriangle, TrendingDown, Shield, CheckCircle } from 'lucide-react';

const CleaningSection = () => {
  const cleaningBenefits = [
    {
      icon: <CheckCircle className="h-8 w-8 sm:h-5 sm:w-5 text-blue-500" />,
      title: 'Eficiência Máxima',
      description: 'Aumento de até 25% na produção energética'
    },
    {
      icon: <CheckCircle className="h-8 w-8 sm:h-5 sm:w-5 text-blue-500" />,
      title: 'Vida Útil Prolongada',
      description: 'Prevenção de danos ao sistema fotovoltaico'
    },
    {
      icon: <CheckCircle className="h-8 w-8 sm:h-5 sm:w-5 text-blue-500" />,
      title: 'Retorno Otimizado',
      description: 'Maximização do investimento realizado'
    }
  ];

  const cleaningRisks = [
    {
      icon: <AlertTriangle className="h-5 w-5 text-blue-500" />,
      title: 'Microfissuras',
      description: 'Causadas por limpeza inadequada'
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-blue-500" />,
      title: 'Hot Spots',
      description: 'Pontos de superaquecimento'
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-blue-500" />,
      title: 'Curtos-Circuitos',
      description: 'Risco de falhas elétricas'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center mb-2">
            <div className="h-px w-12 bg-primary mr-4"></div>
            <span className="text-primary uppercase tracking-wider text-sm font-medium">Higienização</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-black">Higienização</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A higienização periódica dos módulos solares é fundamental para manter a eficiência do sistema fotovoltaico
          </p>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Left column - Image */}
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <div className="aspect-[4/3] bg-white flex items-center justify-center">
              <img 
                src="/images/cleaning.png" 
                alt="Limpeza de painéis solares" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Right column - Content */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900">
              Por que a limpeza profissional é essencial
            </h3>
            
            <p className="text-gray-600">
              A acumulação de poeira, poluição e resíduos nos painéis solares pode reduzir 
              significativamente a eficiência do sistema. Um estudo da Universidade de Duke (2016) 
              demonstrou que painéis não higienizados podem perder até 25% de eficiência anualmente.
            </p>

            <div className="space-y-4">
              {cleaningBenefits.map((benefit) => (
                <div key={benefit.title} className="flex items-center space-x-3">
                  {benefit.icon}
                  <div>
                    <span className="font-medium text-gray-900">{benefit.title}:</span>
                    <span className="text-gray-600 ml-1">{benefit.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Risks section */}
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Riscos da limpeza inadequada
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {cleaningRisks.map((risk) => (
            <div 
              key={risk.title}
              className="bg-white p-5 rounded-md shadow-sm border border-gray-100"
            >
              <div className="flex items-center space-x-3 mb-2">
                {risk.icon}
                <h4 className="font-medium text-gray-900">{risk.title}</h4>
              </div>
              <p className="text-sm text-gray-600">{risk.description}</p>
            </div>
          ))}
        </div>

        <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded mb-16">
          <p className="text-sm text-gray-700">
            <strong>Importante:</strong> A limpeza profissional dos painéis solares deve ser realizada 
            por técnicos especializados, utilizando equipamentos e produtos adequados para evitar danos 
            ao sistema e garantir a segurança.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CleaningSection;