import { Shield, Award, Users, CheckCircle, TrendingUp, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CredibilitySection = () => {
  const features = [
    {
      icon: Award,
      title: '6+ Anos',
      subtitle: 'de Experiência',
      description: 'Mais de 6 anos no mercado fotovoltaico brasileiro'
    },
    {
      icon: Shield,
      title: 'Qualidade',
      subtitle: 'Garantida',
      description: 'Serviços executados com os mais altos padrões'
    },
    {
      icon: Users,
      title: 'Atendimento',
      subtitle: 'Diferenciado',
      description: 'Acompanhamento personalizado em todas as etapas'
    },
    {
      icon: Heart,
      title: 'Confiança',
      subtitle: 'Nossa Marca',
      description: 'Relacionamento transparente e duradouro'
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              🛡️ A ESCOLHA CERTA: MEGAPHOTON
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Com mais de 6 anos de experiência no mercado fotovoltaico, a MEGAPHOTON oferece 
            qualidade, confiança e atendimento diferenciado
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="hover-lift group cursor-pointer border-0 shadow-soft text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6 mx-auto w-20 h-20 bg-solar-gradient rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-lg font-semibold text-primary mb-3">
                    {feature.subtitle}
                  </p>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-left">
            <h3 className="text-3xl font-bold text-foreground">
              Transformando o <span className="bg-solar-gradient bg-clip-text text-transparent">Sonho</span> em Realidade
            </h3>
            
            <p className="text-lg text-muted-foreground">
              Nosso compromisso é transformar o sonho da energia solar em realidade: 
              <strong> economia, conforto e sustentabilidade</strong>.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Economia Garantida</h4>
                  <p className="text-muted-foreground">Redução significativa na conta de energia desde o primeiro mês</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Conforto Total</h4>
                  <p className="text-muted-foreground">Sistema silencioso e automatizado, sem preocupações</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Sustentabilidade Ambiental</h4>
                  <p className="text-muted-foreground">Contribuindo para um futuro mais verde e sustentável</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-light/10 to-secondary/10 rounded-xl p-6 border-l-4 border-primary">
              <h4 className="font-bold text-foreground mb-2 flex items-center">
                <TrendingUp className="h-5 w-5 text-primary mr-2" />
                💬 Acompanhamento Transparente
              </h4>
              <p className="text-muted-foreground">
                Desde o fechamento da venda até a homologação, garantimos um acompanhamento 
                transparente em todas as etapas. <strong>CONFIANÇA: essa é a nossa marca.</strong>
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="animate-fade-in-right">
            <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 shadow-solar">
              <div className="w-full h-full bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center text-white">
                  <Shield className="h-24 w-24 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Espaço para imagem</p>
                  <p className="text-sm opacity-80">Cliente Satisfeito MEGAPHOTON</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 text-center shadow-soft">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              <span className="bg-solar-gradient bg-clip-text text-transparent">CONFIANÇA</span>: 
              essa é a nossa marca
            </h3>
            <p className="text-xl text-muted-foreground">
              Escolher a MEGAPHOTON é escolher um parceiro comprometido com a sua satisfação, 
              com a qualidade dos serviços e com o sucesso do seu projeto de energia solar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;