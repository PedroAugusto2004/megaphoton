import { Zap, Battery, Car, Plug, Smartphone, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FutureTechSection = () => {
  const technologies = [
    {
      icon: Battery,
      title: 'Baterias de Lítio',
      description: 'Alta densidade energética e longa durabilidade'
    },
    {
      icon: Zap,
      title: 'Inversores Híbridos',
      description: 'Tecnologia avançada para máxima eficiência'
    },
    {
      icon: Car,
      title: 'Carregadores Veiculares',
      description: 'Mobilidade elétrica sustentável'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Zap className="h-8 w-8 text-purple-600" />
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              ⚡ O FUTURO CHEGOU
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Armazenamento e mobilidade elétrica - uma revolução energética
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-left">
            <h3 className="text-3xl font-bold text-foreground">
              Sistemas de <span className="text-purple-600">Armazenamento ESS</span>
            </h3>
            
            <p className="text-lg text-muted-foreground">
              Sistemas de armazenamento de energia (ESS) representam uma revolução na forma como 
              utilizamos e gerenciamos energia renovável.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Battery className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Backup de Energia</h4>
                  <p className="text-muted-foreground">Energia disponível mesmo durante interrupções</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Car className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Mobilidade Garantida</h4>
                  <p className="text-muted-foreground">Carregamento eficiente para veículos elétricos</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Plug className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Integração Inteligente</h4>
                  <p className="text-muted-foreground">Sistema integrado para máxima eficiência</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border-l-4 border-purple-600">
              <h4 className="font-bold text-foreground mb-2 flex items-center">
                <Car className="h-5 w-5 text-purple-600 mr-2" />
                🔌 Imagine o Futuro
              </h4>
              <p className="text-muted-foreground">
                <strong>Imagine acordar com seu carro elétrico carregado todos os dias!</strong> 
                Nossa tecnologia torna isso possível com energia 100% solar.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="animate-fade-in-right">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 shadow-lg">
              <div className="w-full h-full bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center text-white">
                  <Battery className="h-20 w-20 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Espaço para imagem</p>
                  <p className="text-sm opacity-80">Sistemas ESS e Mobilidade</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Card 
                key={tech.title}
                className="border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-10 text-center">
                  <div className="mb-8 mx-auto w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {tech.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Revolution Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Uma Revolução Energética</h3>
              <p className="text-lg text-white/90 mb-6">
                Os sistemas ESS não são apenas uma tecnologia do futuro - eles são a realidade presente 
                que está transformando a maneira como consumimos energia.
              </p>
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-6 w-6" />
                <span className="font-semibold">Eficiência máxima, impacto mínimo</span>
              </div>
            </div>
            
            {/* Innovation Graphic */}
            <div className="bg-white/10 rounded-2xl p-8 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center">
                <div className="flex justify-center space-x-4 mb-4">
                  <Battery className="h-12 w-12 animate-pulse" />
                  <Car className="h-12 w-12 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <Smartphone className="h-12 w-12 animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
                <p className="font-semibold">Tecnologia Integrada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureTechSection;