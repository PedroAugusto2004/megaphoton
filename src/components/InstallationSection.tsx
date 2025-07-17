import { CheckCircle, ArrowRight, Award, Gem, Wrench, Headset } from 'lucide-react';

const InstallationSection = () => {
  const benefits = [
    'Máximo aproveitamento da luz solar',
    'Redução significativa dos custos de energia',
    'Acompanhamento completo do processo',
    'Garantia de durabilidade e desempenho'
  ];

  const features = [
    {
      title: 'Excelência',
      description: 'Padrões de qualidade superiores',
      icon: Award
    },
    {
      title: 'Materiais Premium',
      description: 'Componentes selecionados',
      icon: Gem
    },
    {
      title: 'Precisão Técnica',
      description: 'Instalação especializada',
      icon: Wrench
    },
    {
      title: 'Suporte Completo',
      description: 'Do projeto à manutenção',
      icon: Headset
    }
  ];

  return (
    <section id="instalacoes" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center mb-2">
            <div className="h-px w-12 bg-primary mr-4"></div>
            <span className="text-primary uppercase tracking-wider text-sm font-medium">Instalações</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-black">Instalações</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Soluções energéticas que combinam inovação, eficiência e sustentabilidade
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
          {/* Image */}
          <div className="order-1 lg:order-1">
            <div className="aspect-[4/3] sm:aspect-[5/4] bg-slate-50 rounded-2xl lg:rounded-3xl overflow-hidden border border-slate-100">
              <img 
                src="/images/instalação.png" 
                alt="Instalação de Painéis Solares" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2 space-y-10">
            <div>
              <h3 className="text-4xl font-light text-slate-900 mb-8 leading-tight">
                Qualidade <span className="text-emerald-600 font-normal">Excepcional</span>
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Cada projeto é executado com excelência técnica, desde a seleção de materiais 
                até a instalação final, garantindo máximo desempenho e durabilidade.
              </p>
            </div>

            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features - Timeline/Stepper Redesign */}
        <section className="mb-24">
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-6 relative">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center justify-start text-center px-2 lg:px-4 z-10"
                >
                  <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-emerald-200 shadow-lg mb-4 transition-transform duration-300 group-hover:scale-105" style={{zIndex: 2}}>
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </span>
                  <div className="flex flex-col justify-center bg-white/90 backdrop-blur-md border border-slate-100 rounded-xl shadow p-6 lg:p-8 min-w-[220px] max-w-xs mx-auto">
                    <h4 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 tracking-tight">
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
      
      {/* CTA - Full Width Section */}
      <div className="mt-20 sm:mt-32 -mx-4 sm:-mx-8 bg-gradient-to-br from-emerald-600 to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:16px]" />
        <div className="absolute h-full w-full bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0),rgba(0,0,0,0.4))]" />
        
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Transforme sua <span className="text-emerald-200">energia</span> <br className="hidden lg:block" />com nosso acompanhamento
              </h3>
              <p className="text-emerald-100/90 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed">
                Atendimento personalizado em todas as etapas, do planejamento inicial 
                à manutenção pós-instalação, garantindo máxima eficiência.  
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-emerald-800 px-5 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-xl hover:bg-emerald-50 transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg shadow-emerald-900/30 hover:-translate-y-1">
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 animate-pulse" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-transparent border border-emerald-200/30 text-white px-5 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-xl hover:bg-emerald-700/50 transition-all duration-300 font-medium text-sm sm:text-base">
                  <span>Fale Conosco</span>
                </button>
              </div>
            </div>
            
            {/* Mobile-friendly benefits card */}
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl hidden lg:block" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-emerald-200/20 rounded-full blur-3xl hidden lg:block" />
              
              {/* Desktop card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-2xl hidden lg:block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Projeto Personalizado</h4>
                    <p className="text-emerald-100/70 text-sm">Adaptado às suas necessidades</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-emerald-50">
                      <CheckCircle className="h-5 w-5 text-emerald-300 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Mobile benefits list */}
              <div className="lg:hidden">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <ul className="space-y-2.5">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3 text-emerald-50">
                        <CheckCircle className="h-5 w-5 text-emerald-300 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationSection;