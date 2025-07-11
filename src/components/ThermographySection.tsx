import { Thermometer, Search, Shield, TrendingUp, CheckCircle, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ThermographySection = () => {
  const benefits = [
    {
      icon: Search,
      title: 'Detecção Precoce',
      description: 'Identifica hot spots, microfissuras, delaminações e falhas de interconexão'
    },
    {
      icon: Shield,
      title: 'Técnica Não Invasiva',
      description: 'Não precisa desligar a usina para realizar a análise'
    },
    {
      icon: TrendingUp,
      title: 'Monitoramento Contínuo',
      description: 'Acompanha a qualidade do sistema ao longo do tempo'
    },
    {
      icon: Zap,
      title: 'Avaliação de Performance',
      description: 'Identifica módulos com baixo desempenho para otimização'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Thermometer className="h-8 w-8 text-orange-500" />
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">TERMOGRAFIA</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            O exame termográfico é uma ferramenta fundamental na manutenção de usinas solares fotovoltaicas, 
            oferecendo uma análise precisa das condições dos módulos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Placeholder */}
          <div className="animate-fade-in-left">
            <div className="aspect-[4/3] bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-8 shadow-lg">
              <div className="w-full h-full bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center text-white">
                  <Thermometer className="h-20 w-20 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Espaço para imagem</p>
                  <p className="text-sm opacity-80">Análise Termográfica</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-right">
            <h3 className="text-3xl font-bold text-foreground">
              Análise <span className="text-orange-500">Termográfica Precisa</span>
            </h3>
            
            <p className="text-lg text-muted-foreground">
              Utilizamos tecnologia de ponta para identificar problemas invisíveis a olho nu, 
              garantindo a máxima eficiência e segurança da sua instalação solar.
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-l-4 border-orange-500">
              <h4 className="font-bold text-foreground mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                ✅ Principais benefícios:
              </h4>
              <ul className="space-y-2 text-muted-foreground ml-7">
                <li>• Detecção precoce de falhas como hot spots e microfissuras</li>
                <li>• Técnica não invasiva - análise sem interrupção da operação</li>
                <li>• Monitoramento da qualidade ao longo do tempo</li>
                <li>• Avaliação de módulos com baixo desempenho</li>
              </ul>
            </div>

            <div className="bg-white border rounded-xl p-6 shadow-soft">
              <h4 className="font-semibold text-foreground mb-3">Por que escolher a termografia?</h4>
              <p className="text-muted-foreground">
                A inspeção termográfica permite identificar problemas antes que se tornem falhas custosas, 
                prolongando a vida útil dos equipamentos e maximizando o retorno do investimento.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={benefit.title}
                className="hover-lift group cursor-pointer border-0 shadow-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThermographySection;