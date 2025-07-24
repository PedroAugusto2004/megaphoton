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

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Left column - Content */}
          <ScrollAnimation animationClass="reveal-fade-left" delay={200}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Garantindo a <span className="text-blue-600">Excelência Técnica</span>
              </h3>
              
              <p className="text-gray-600">
                Nosso processo de comissionamento e elaboração de laudos técnicos garante que sua instalação 
                solar opere com máxima eficiência e segurança desde o primeiro dia.
              </p>

              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <p className="text-gray-700">
                  A documentação técnica adequada é fundamental para garantir a conformidade com normas 
                  regulatórias e assegurar o acionamento de garantias quando necessário.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Verificação Completa</h4>
                    <p className="text-gray-600">Análise detalhada de todos os componentes do sistema</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Proteção do Investimento</h4>
                    <p className="text-gray-600">Documentação que resguarda seus direitos e garantias</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right column - Image */}
          <ScrollAnimation animationClass="reveal-fade-right" delay={400}>
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <img 
                src="/images/technical.png" 
                alt="Laudo Técnico e Comissionamento" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </ScrollAnimation>
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