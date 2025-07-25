import { Droplets, AlertTriangle, TrendingDown, Shield, CheckCircle } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

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
    <section id="higienizacao" className="py-16 bg-white section-highlight">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-16">
            <div className="flex items-center mb-2">
              <div className="h-px w-12 bg-primary mr-4"></div>
              <span className="text-primary uppercase tracking-wider text-sm font-medium">Higienização</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-black">Higienização</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-6xl mx-auto font-medium">
              Mantenha a <span className="text-blue-500">eficiência máxima</span> do seu sistema fotovoltaico
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
              src="/images/cleaning.png"
              alt="Limpeza de painéis solares"
              className="w-full object-cover h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px]"
              style={{ maxHeight: '700px', objectPosition: 'center 30%' }}
            />
            {/* Text Overlay */}
            <div className="absolute top-4 left-4 md:top-8 md:left-16 flex items-start md:block">
              <div className="bg-black/40 backdrop-blur-md rounded-lg p-2.5 md:p-6 w-[65%] max-w-[220px] sm:max-w-[240px] md:w-auto md:max-w-md border border-white/20 shadow-xl">
                <h3 className="text-sm sm:text-base md:text-2xl font-light text-white mb-1.5 md:mb-3 leading-tight text-left">
                  Por que a limpeza <span className="text-blue-300 font-normal">profissional</span> é essencial
                </h3>
                <p className="hidden md:block text-white/90 text-[11px] sm:text-xs md:text-sm mb-2 md:mb-4 text-left leading-relaxed">
                  A acumulação de poeira, poluição e resíduos nos painéis solares pode reduzir 
                  significativamente a eficiência do sistema. Um estudo da Universidade de Duke (2016) 
                  demonstrou que painéis não higienizados podem perder até 25% de eficiência anualmente.
                </p>
                <div className="space-y-0.5 md:space-y-2">
                  {cleaningBenefits.map((benefit, index) => (
                    <div key={benefit.title} className="flex items-start space-x-1.5 md:space-x-3">
                      <CheckCircle className="h-2.5 w-2.5 md:h-5 md:w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90 text-[9px] sm:text-xs md:text-base leading-tight md:leading-normal">
                        {benefit.description}
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
              A limpeza profissional é <span className="text-blue-700">essencial</span> para manter a eficiência máxima do seu sistema fotovoltaico, garantindo <span className="text-blue-700">maior durabilidade e desempenho</span>.
            </p>
          </div>
        </div>

        {/* Risks section */}
        <ScrollAnimation delay={800}>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Riscos da limpeza inadequada
          </h3>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {cleaningRisks.map((risk, index) => (
            <ScrollAnimation key={risk.title} delay={900 + index * 100} animationClass="reveal-scale">
              <div className="bg-white p-5 rounded-lg shadow-sm border-l-2 border-blue-400 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                    {risk.icon}
                  </div>
                  <h4 className="font-medium text-gray-900">{risk.title}</h4>
                </div>
                <p className="text-sm text-gray-600 ml-11">{risk.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={1200} animationClass="reveal-fade-up">
          <div className="p-6 bg-blue-50 border-l-4 border-blue-400 rounded-lg shadow-sm mb-16">
            <p className="text-sm text-gray-700">
              <strong>Importante:</strong> A limpeza profissional dos painéis solares deve ser realizada 
              por técnicos especializados, utilizando equipamentos e produtos adequados para evitar danos 
              ao sistema e garantir a segurança.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CleaningSection;