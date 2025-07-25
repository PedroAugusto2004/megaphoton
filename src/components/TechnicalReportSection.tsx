import { FileText, Settings, CheckCircle, Shield, Award } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const TechnicalReportSection = () => {
  const applications = [
    {
      icon: <CheckCircle className="h-5 w-5 text-blue-500" />,
      title: 'Verificação de Conformidade',
      description: 'Confirmação de que o projeto foi executado conforme especificações'
    },
    {
      icon: <Shield className="h-5 w-5 text-blue-500" />,
      title: 'Garantia de Segurança',
      description: 'Validação da segurança elétrica e operacional da instalação'
    },
    {
      icon: <Award className="h-5 w-5 text-blue-500" />,
      title: 'Documentação Técnica',
      description: 'Documentação completa para acionamento de garantias'
    }
  ];

  return (
    <section id="laudos" className="py-16 bg-white section-highlight">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-16">
            <div className="flex items-center mb-2">
              <div className="h-px w-12 bg-primary mr-4"></div>
              <span className="text-primary uppercase tracking-wider text-sm font-medium">Laudo Técnico</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-black">Laudo Técnico & Comissionamento</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-6xl mx-auto font-medium">
              Garantia de <span className="text-blue-600">conformidade</span> e segurança para sua instalação
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
              src="/images/technical.png"
              alt="Laudo Técnico e Comissionamento"
              className="w-full object-cover h-[600px] sm:h-[650px] md:h-[700px] lg:h-[750px] xl:h-[800px]"
              style={{ maxHeight: '900px' }}
            />
            {/* Text Overlay */}
            <div className="absolute top-4 left-4 md:top-8 md:left-16 flex items-start md:block">
              <div className="bg-black/40 backdrop-blur-md rounded-lg p-2.5 md:p-8 w-[65%] max-w-[220px] sm:max-w-[240px] md:w-auto md:max-w-lg border border-white/20 shadow-xl">
                <h3 className="text-sm sm:text-base md:text-3xl font-light text-white mb-1.5 md:mb-4 leading-tight text-left">
                  Garantindo a <span className="text-blue-300 font-normal">Excelência Técnica</span>
                </h3>
                <p className="hidden md:block text-white/90 text-[11px] sm:text-xs md:text-base mb-2 md:mb-6 text-left">
                  Nosso processo de comissionamento e elaboração de laudos técnicos garante que sua instalação 
                  solar opere com máxima eficiência e segurança desde o primeiro dia.
                </p>
                <div className="space-y-0.5 md:space-y-3">
                  <div className="flex items-start space-x-1.5 md:space-x-3">
                    <CheckCircle className="h-2.5 w-2.5 md:h-5 md:w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-[9px] sm:text-xs md:text-base leading-tight md:leading-normal">Verificação completa dos componentes</span>
                  </div>
                  <div className="flex items-start space-x-1.5 md:space-x-3">
                    <Shield className="h-2.5 w-2.5 md:h-5 md:w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-[9px] sm:text-xs md:text-base leading-tight md:leading-normal">Proteção do seu investimento</span>
                  </div>
                  <div className="flex items-start space-x-1.5 md:space-x-3">
                    <FileText className="h-2.5 w-2.5 md:h-5 md:w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-[9px] sm:text-xs md:text-base leading-tight md:leading-normal">Documentação técnica completa</span>
                  </div>
                  <div className="flex items-start space-x-1.5 md:space-x-3">
                    <Settings className="h-2.5 w-2.5 md:h-5 md:w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-[9px] sm:text-xs md:text-base leading-tight md:leading-normal">Conformidade com normas técnicas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Description - Under Image */}
        <div className="relative md:hidden -mt-24 mb-24">
          <div className="mx-auto max-w-[280px] bg-white/95 backdrop-blur-sm rounded-none p-4 shadow-sm">
            <p className="text-xs tracking-wide text-slate-600 leading-relaxed">
              Nosso processo de <span className="text-blue-700">comissionamento</span> e elaboração de laudos técnicos garante <span className="text-blue-700">máxima eficiência e segurança</span> desde o primeiro dia.
            </p>
          </div>
        </div>

        {/* Applications Grid */}
        <ScrollAnimation delay={600}>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Aplicações do laudo técnico
          </h3>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8 mt-12">
          {applications.map((application, index) => (
            <ScrollAnimation key={application.title} delay={700 + index * 100} animationClass="reveal-scale">
              <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600">
                    {application.icon}
                  </div>
                  <h4 className="font-medium text-gray-900">{application.title}</h4>
                </div>
                <p className="text-sm text-gray-600 pl-11">{application.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={1000} animationClass="reveal-fade-up">
          <div className="p-6 bg-blue-50 border-l-4 border-blue-400 rounded-lg shadow-sm mb-16">
            <p className="text-sm text-gray-700">
              <strong>Importante:</strong> Nossos laudos técnicos e processos de comissionamento seguem os mais rigorosos padrões da indústria, 
              garantindo que sua instalação solar atenda a todas as normas técnicas e de segurança.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TechnicalReportSection;