import { Tractor, Battery, Zap, Wifi, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AgribusinessSection = () => {
  const systems = [
    {
      icon: Battery,
      title: 'Sistemas Híbridos',
      description: 'Inversores com baterias para máxima independência energética'
    },
    {
      icon: Zap,
      title: 'Off-Grid',
      description: 'Sistemas completamente independentes da rede elétrica'
    },
    {
      icon: Shield,
      title: 'Zero Grid',
      description: 'Autonomia total para propriedades rurais remotas'
    }
  ];

  return (
    <section id="agronegocio" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Tractor className="h-8 w-8 text-green-600" />
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">AGRONEGÓCIO</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Sistemas híbridos e off-grid para máxima produtividade e segurança no meio rural
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Placeholder */}
          <div className="animate-fade-in-left">
            <div className="aspect-[4/3] bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 shadow-green">
              <div className="w-full h-full bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center text-white">
                  <Tractor className="h-20 w-20 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Espaço para imagem</p>
                  <p className="text-sm opacity-80">Sistema Rural em Operação</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-right">
            <h3 className="text-3xl font-bold text-foreground">
              Energia Solar para o <span className="text-green-600">Campo</span>
            </h3>
            
            <p className="text-lg text-muted-foreground">
              O uso de inversores híbridos (com baterias e/ou geradores a diesel), inversores off-grid e 
              zero grid (totalmente independentes da rede elétrica) tem aumentado a produtividade e 
              segurança no meio urbano e rural.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Battery className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Armazenamento Inteligente</h4>
                  <p className="text-muted-foreground">Baterias de lítio para energia 24h por dia</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Segurança Energética</h4>
                  <p className="text-muted-foreground">Independência total da concessionária</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Wifi className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Monitoramento Remoto</h4>
                  <p className="text-muted-foreground">Controle total via aplicativo móvel</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-600">
              <h4 className="font-bold text-foreground mb-2">🚜 Benefícios para o Agronegócio</h4>
              <p className="text-muted-foreground">
                Redução drastica dos custos operacionais, maior produtividade com energia confiável 
                e sustentabilidade ambiental para propriedades rurais modernas.
              </p>
            </div>
          </div>
        </div>

        {/* Systems Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {systems.map((system, index) => {
            const Icon = system.icon;
            return (
              <Card 
                key={system.title}
                className="hover-lift group cursor-pointer border-0 shadow-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 mx-auto w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {system.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {system.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Productivity Highlight */}
        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Aumentando a Produtividade Rural
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Nossas soluções especializadas para o agronegócio proporcionam energia limpa, confiável e econômica, 
            permitindo que produtores rurais se concentrem no que fazem de melhor: produzir alimentos de qualidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgribusinessSection;