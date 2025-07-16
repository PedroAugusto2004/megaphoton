import { CheckCircle, ArrowRight } from 'lucide-react';

const InstallationSection = () => {
  const benefits = [
    'Máximo aproveitamento da luz solar',
    'Redução significativa dos custos de energia',
    'Acompanhamento completo do processo',
    'Garantia de durabilidade e desempenho'
  ];

  const features = [
    { title: 'Excelência', description: 'Padrões de qualidade superiores' },
    { title: 'Materiais Premium', description: 'Componentes selecionados' },
    { title: 'Precisão Técnica', description: 'Instalação especializada' },
    { title: 'Suporte Completo', description: 'Do projeto à manutenção' }
  ];

  return (
    <section id="instalacoes" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-black">Instalações</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Soluções energéticas que combinam inovação, eficiência e sustentabilidade
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[5/4] bg-slate-50 rounded-3xl overflow-hidden border border-slate-100">
              <img 
                src="/images/instalação.png" 
                alt="Instalação de Painéis Solares" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-10">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-medium text-slate-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-slate-50 rounded-3xl p-16 border border-slate-100">
          <h3 className="text-3xl font-light text-slate-900 mb-6">
            Acompanhamento Completo
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Atendimento personalizado em todas as etapas, do planejamento inicial 
            à manutenção pós-instalação.
          </p>
          <button className="inline-flex items-center space-x-3 bg-emerald-600 text-white px-10 py-4 rounded-xl hover:bg-emerald-700 transition-colors font-medium">
            <span>Solicitar Orçamento</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstallationSection;