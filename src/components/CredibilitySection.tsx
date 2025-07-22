import { Shield, Award, Users, CheckCircle, TrendingUp, Heart } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const CredibilitySection = () => {
  const features = [
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: '6+ Anos',
      subtitle: 'de Experiência',
      description: 'Mais de 6 anos no mercado fotovoltaico brasileiro'
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: 'Qualidade',
      subtitle: 'Garantida',
      description: 'Serviços executados com os mais altos padrões'
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      title: 'Atendimento',
      subtitle: 'Diferenciado',
      description: 'Acompanhamento personalizado em todas as etapas'
    },
    {
      icon: <Heart className="h-5 w-5 text-primary" />,
      title: 'Confiança',
      subtitle: 'Nossa Marca',
      description: 'Relacionamento transparente e duradouro'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      title: 'Economia Garantida',
      description: 'Redução significativa na conta de energia desde o primeiro mês'
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      title: 'Conforto Total',
      description: 'Sistema silencioso e automatizado, sem preocupações'
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      title: 'Sustentabilidade Ambiental',
      description: 'Contribuindo para um futuro mais verde e sustentável'
    }
  ];

  return (
    <section id="sobre" className="py-16 bg-white section-highlight">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-16">
            <div className="flex items-center mb-2">
              <div className="h-px w-12 bg-primary mr-4"></div>
              <span className="text-primary uppercase tracking-wider text-sm font-medium">Sobre Nós</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-black">A Escolha Certa: MegaPhoton</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-6xl mx-auto font-medium">
              <span className="text-primary">Confiança</span> e excelência há mais de 6 anos no mercado
            </p>
          </div>
        </ScrollAnimation>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <ScrollAnimation key={feature.title} delay={200 + index * 100} animationClass="reveal-scale">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{feature.title}</h4>
                    <p className="text-xs text-primary font-medium">{feature.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2 border-t border-gray-100 pt-3">{feature.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Left column - Content */}
          <ScrollAnimation animationClass="reveal-fade-left" delay={600}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Transformando o <span className="text-primary">Sonho</span> em Realidade
              </h3>
              
              <p className="text-gray-600">
                Nosso compromisso é transformar o sonho da energia solar em realidade: 
                <strong> economia, conforto e sustentabilidade</strong>.
              </p>

              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="text-gray-700">
                  Desde o fechamento da venda até a homologação, garantimos um acompanhamento 
                  transparente em todas as etapas. <strong>CONFIANÇA: essa é a nossa marca.</strong>
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <ScrollAnimation key={benefit.title} delay={800 + index * 100} animationClass="reveal-fade-up">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Right column - Image */}
          <ScrollAnimation animationClass="reveal-fade-right" delay={700}>
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <div className="aspect-[4/3] bg-gradient-to-b from-primary/5 to-primary/10 flex items-center justify-center">
                <Shield className="h-24 w-24 text-primary opacity-70" />
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={1100} animationClass="reveal-fade-up">
          <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-lg shadow-sm mb-16">
            <p className="text-sm text-gray-700">
              <strong>Confiança é nossa marca:</strong> Escolher a MEGAPHOTON é escolher um parceiro comprometido com a sua satisfação, 
              com a qualidade dos serviços e com o sucesso do seu projeto de energia solar.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CredibilitySection;