import { FileText, Settings, CheckCircle, Shield, Award, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TechnicalReportSection = () => {
  const applications = [
    {
      icon: CheckCircle,
      title: 'Verificação de Conformidade',
      description: 'Confirmação de que o projeto foi executado conforme especificações'
    },
    {
      icon: Shield,
      title: 'Garantia de Segurança',
      description: 'Validação da segurança elétrica e operacional da instalação'
    },
    {
      icon: Award,
      title: 'Documentação Técnica',
      description: 'Documentação completa para acionamento de garantias'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FileText className="h-8 w-8 text-blue-600" />
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              LAUDO TÉCNICO & COMISSIONAMENTO
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            O comissionamento é essencial para assegurar o pleno funcionamento da instalação conforme o projeto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-left">
            <h3 className="text-3xl font-bold text-foreground">
              Garantindo a <span className="text-blue-600">Excelência Técnica</span>
            </h3>
            
            <p className="text-lg text-muted-foreground">
              Nosso processo de comissionamento e elaboração de laudos técnicos garante que sua instalação 
              solar opere com máxima eficiência e segurança desde o primeiro dia.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-600">
              <h4 className="font-bold text-foreground mb-3 flex items-center">
                <Settings className="h-5 w-5 text-blue-600 mr-2" />
                🔍 Aplicações práticas:
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Verificação da conformidade do projeto</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Garantia de segurança elétrica</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Documentação técnica para acionamento de garantias</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
              <h4 className="font-bold text-foreground mb-2">📌 Benefícios Concretos</h4>
              <p className="text-muted-foreground">
                Adotar o comissionamento como prática padrão oferece benefícios concretos: 
                <strong> eficiência, durabilidade e proteção do investimento</strong>.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="animate-fade-in-right">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 shadow-lg">
              <div className="w-full h-full bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center text-white">
                  <FileText className="h-20 w-20 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Espaço para imagem</p>
                  <p className="text-sm opacity-80">Documentação Técnica</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {applications.map((application, index) => {
            const Icon = application.icon;
            return (
              <Card 
                key={application.title}
                className="hover-lift group cursor-pointer border-0 shadow-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {application.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {application.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quality Assurance Section */}
        <div className="mt-16 bg-muted rounded-3xl p-8 lg:p-12 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Zap className="h-8 w-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">Garantia de Qualidade</h3>
          </div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Nossos laudos técnicos e processos de comissionamento seguem os mais rigorosos padrões da indústria, 
            garantindo que sua instalação solar atenda a todas as normas técnicas e de segurança.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalReportSection;