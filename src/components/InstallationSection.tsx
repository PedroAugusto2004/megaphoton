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

        {/* Features */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center text-center bg-white/70 backdrop-blur-md border border-slate-100 rounded-2xl shadow-[0_8px_32px_0_rgba(16,185,129,0.18),0_1.5px_6px_0_rgba(0,0,0,0.10)] p-8 pt-12 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_48px_0_rgba(16,185,129,0.28),0_3px_12px_0_rgba(0,0,0,0.13)] hover:border-emerald-200"
                  style={{ minHeight: 260 }}
                >
                  <span className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 shadow absolute -top-7 left-1/2 -translate-x-1/2 group-hover:bg-emerald-100 transition-colors">
                    <Icon className="w-7 h-7 text-emerald-600" />
                  </span>
                  <h4 className="mt-8 mb-2 text-xl font-semibold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-slate-50 rounded-2xl lg:rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-100">
          <h3 className="text-2xl sm:text-3xl font-light text-slate-900 mb-4 sm:mb-6">
            Acompanhamento Completo
          </h3>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4 sm:px-0">
            Atendimento personalizado em todas as etapas, do planejamento inicial 
            à manutenção pós-instalação.
          </p>
          <button className="inline-flex items-center space-x-3 bg-emerald-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl hover:bg-emerald-700 transition-colors font-medium text-sm sm:text-base">
            <span>Solicitar Orçamento</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstallationSection;