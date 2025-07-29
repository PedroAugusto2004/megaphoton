import { CheckCircle, ArrowRight, Award, Shield, FileText } from 'lucide-react';

const InspectionSection = () => {
  const applications = [
    'Garantia de conformidade com o projeto',
    'Segurança Elétrica',
    'Validação de Garantias'
  ];

  const features = [
    {
      title: 'Conformidade',
      description: 'Verificação completa do projeto',
      icon: Award
    },
    {
      title: 'Segurança',
      description: 'Proteção elétrica garantida',
      icon: Shield
    },
    {
      title: 'Documentação',
      description: 'Relatórios técnicos formais',
      icon: FileText
    }
  ];

  return (
    <section id="inspecao" className="py-32 bg-white section-highlight">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center mb-2">
            <div className="h-px w-12 bg-blue-600 mr-4"></div>
            <span className="text-blue-600 uppercase tracking-wider text-sm font-medium">Inspeção</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-black">Inspeção</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comissionamento essencial para garantir pleno funcionamento e conformidade técnica
          </p>
        </div>

        {/* Full-width Image with Overlay */}
        <div
          className="relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-32 overflow-hidden"
          style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}
        >
          <div className="relative w-full h-full">
            <img
              src="/images/inspection.png"
              alt="Inspeção de Sistema Solar Fotovoltaico"
              className="w-full object-cover h-[600px] sm:h-[650px] md:h-[700px] lg:h-[750px] xl:h-[800px]"
              style={{ maxHeight: '900px' }}
            />
            {/* Text Overlay */}
            <div className="absolute top-4 left-4 md:top-8 md:left-16 flex items-start md:block">
              <div className="bg-black/40 backdrop-blur-md rounded-lg p-2.5 md:p-8 w-[65%] max-w-[220px] sm:max-w-[240px] md:w-auto md:max-w-lg border border-white/20 shadow-xl">
                <h3 className="text-sm sm:text-base md:text-3xl font-light text-white mb-1.5 md:mb-4 leading-tight text-left">
                  Comissionamento <span className="text-blue-300 font-normal">Profissional</span>
                </h3>
                <p className="hidden md:block text-white/90 text-[11px] sm:text-xs md:text-base mb-2 md:mb-6 text-left">
                  O comissionamento de um sistema solar fotovoltaico é uma etapa essencial que assegura o pleno funcionamento da instalação, conforme as especificações técnicas do projeto.
                </p>
                <div className="space-y-0.5 md:space-y-3">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-start space-x-1.5 md:space-x-3">
                      <CheckCircle className="h-2.5 w-2.5 md:h-5 md:w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90 text-[9px] sm:text-xs md:text-base leading-tight md:leading-normal">{application}</span>
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
              Esse processo envolve uma série de <span className="text-blue-700">testes, inspeções e verificações</span> que garantem a qualidade, a segurança e o desempenho do sistema.
            </p>
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
                  <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-blue-200 shadow-lg mb-4 transition-transform duration-300 group-hover:scale-105" style={{zIndex: 2}}>
                    <Icon className="w-8 h-8 text-blue-600" />
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

        {/* Important Section */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 mb-16 border border-blue-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 tracking-wider">
              I M P O R T A N T E
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Adotar o comissionamento como prática padrão é altamente recomendável, pois oferece benefícios concretos em termos de eficiência, durabilidade e proteção do investimento — além de contribuir para a plena satisfação do cliente.
            </p>
          </div>
        </div>

        {/* Applications Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 tracking-wider">
            APLICAÇÕES PRÁTICAS
          </h3>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Garantia de conformidade com o projeto</h4>
              <p className="text-gray-600 leading-relaxed">
                O comissionamento verifica se todos os componentes foram instalados corretamente e se o sistema atende aos parâmetros de desempenho definidos no projeto executivo.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Segurança Elétrica</h4>
              <p className="text-gray-600 leading-relaxed">
                Sistemas fotovoltaicos operam com altas tensões, e eventuais falhas na instalação podem gerar riscos como choques elétricos ou incêndios. O comissionamento certifica que todas as conexões estão seguras e adequadas.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Validação de Garantias</h4>
              <p className="text-gray-600 leading-relaxed">
                Os relatórios técnicos gerados durante o comissionamento servem como documentação formal, facilitando o acionamento de garantias em caso de falhas, defeitos ou mau funcionamento.
              </p>
            </div>
          </div>
        </div>

      </div>
      
      {/* CTA - Full Width Section */}
      <div className="mt-20 sm:mt-32 -mx-4 sm:-mx-8 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:16px]" />
        <div className="absolute h-full w-full bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0),rgba(0,0,0,0.4))]" />
        
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Garanta a <span className="text-blue-200">qualidade</span> <br className="hidden lg:block" />do seu sistema
              </h3>
              <p className="text-blue-100/90 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed">
                Comissionamento profissional para máxima eficiência, segurança e durabilidade do seu investimento em energia solar.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button 
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-blue-800 px-5 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-xl hover:bg-blue-50 transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg shadow-blue-900/30 hover:-translate-y-1"
                  onClick={() => {
                    const message = encodeURIComponent('Olá, quero solicitar uma inspeção');
                    window.open(`https://wa.me/5534992320853?text=${message}`, '_blank');
                  }}
                >
                  <span>Solicitar Inspeção</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 animate-pulse" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-transparent border border-blue-200/30 text-white px-5 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-xl hover:bg-blue-700/50 transition-all duration-300 font-medium text-sm sm:text-base"
                  onClick={() => {
                    const contatoSection = document.getElementById('contato');
                    if (contatoSection) {
                      contatoSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span>Fale Conosco</span>
                </button>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl hidden lg:block" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl hidden lg:block" />
              
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-2xl hidden lg:block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Comissionamento Completo</h4>
                    <p className="text-blue-100/70 text-sm">Garantia de qualidade total</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {applications.map((application, index) => (
                    <li key={index} className="flex items-center gap-3 text-blue-50">
                      <CheckCircle className="h-5 w-5 text-blue-300 flex-shrink-0" />
                      <span>{application}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="lg:hidden">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <ul className="space-y-2.5">
                    {applications.map((application, index) => (
                      <li key={index} className="flex items-center gap-3 text-blue-50">
                        <CheckCircle className="h-5 w-5 text-blue-300 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{application}</span>
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

export default InspectionSection;