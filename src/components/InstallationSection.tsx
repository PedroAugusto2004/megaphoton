import { Wrench, Star, Shield, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const InstallationSection = () => {
  const features = [
    {
      icon: Star,
      title: 'Excelência',
      description: 'Cada projeto executado com os mais altos padrões de qualidade'
    },
    {
      icon: Shield,
      title: 'Materiais Selecionados',
      description: 'Seleção criteriosa dos melhores componentes do mercado'
    },
    {
      icon: CheckCircle,
      title: 'Precisão na Execução',
      description: 'Instalação técnica precisa garantindo máximo desempenho'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Acompanhamento completo do planejamento à manutenção'
    }
  ];

  return (
    <section id="instalacoes" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Wrench className="h-8 w-8 text-primary" />
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">INSTALAÇÕES</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            A MEGAPHOTON se dedica a oferecer instalações que aliam <strong>inovação, eficiência e sustentabilidade</strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Placeholder */}
          <div className="animate-fade-in-left">
            <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-secondary-light rounded-3xl p-8 shadow-green">
              <div className="w-full h-full bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center text-white">
                  <Wrench className="h-20 w-20 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Espaço para imagem</p>
                  <p className="text-sm opacity-80">Instalação Solar em Andamento</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in-right">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">
                Instalações de <span className="text-primary">Alta Qualidade</span>
              </h3>
              <p className="text-lg text-muted-foreground">
                Cada projeto executado pela empresa é caracterizado pela excelência, desde a seleção criteriosa 
                dos materiais até a precisão na execução, garantindo aos clientes uma solução energética que 
                maximiza o aproveitamento da luz solar e reduz significativamente os custos com energia elétrica.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary-light/10 to-primary/10 rounded-xl p-6 border-l-4 border-primary">
              <h4 className="font-bold text-foreground mb-3">Benefícios da Nossa Instalação:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Máximo aproveitamento da luz solar</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Redução significativa dos custos de energia</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Acompanhamento completo do processo</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Garantia de durabilidade e desempenho</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="hover-lift group cursor-pointer border-0 shadow-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center bg-muted rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Acompanhamento Completo
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Além disso, a MEGAPHOTON valoriza o atendimento personalizado, acompanhando todas as etapas do processo — 
            do planejamento inicial à manutenção pós-instalação — assegurando a durabilidade e o desempenho contínuo do sistema.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstallationSection;