import { Droplets, AlertTriangle, TrendingDown, Shield, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CleaningSection = () => {
  const importantCares = [
    {
      icon: Shield,
      title: 'Limpeza Correta',
      description: 'Essencial para segurança e durabilidade do sistema'
    },
    {
      icon: AlertTriangle,
      title: 'Riscos da Limpeza Inadequada',
      description: 'Pode causar microfissuras, hot spots, curtos-circuitos e até incêndios'
    },
    {
      icon: TrendingDown,
      title: 'Impacto da Sujeira',
      description: 'Estudo da Universidade de Duke (2016): redução de até 25% na eficiência'
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Droplets className="h-8 w-8 text-blue-500" />
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">HIGIENIZAÇÃO</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            A higienização periódica dos módulos solares é fundamental para manter a eficiência do sistema fotovoltaico
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-left">
            <h3 className="text-3xl font-bold text-foreground">
              Maximizando a <span className="text-blue-500">Eficiência Energética</span>
            </h3>
            
            <p className="text-lg text-muted-foreground">
              Poeira, sujeira, poluição e outros resíduos podem se acumular nos painéis, bloqueando a incidência 
              da luz solar e comprometendo a geração de energia.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Pleno Funcionamento</h4>
                  <p className="text-muted-foreground">A limpeza regular garante o funcionamento otimizado</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Vida Útil Prolongada</h4>
                  <p className="text-muted-foreground">Manutenção preventiva aumenta a durabilidade</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">ROI Maximizado</h4>
                  <p className="text-muted-foreground">Máximo retorno sobre o investimento</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="animate-fade-in-right">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 shadow-lg">
              <div className="w-full h-full bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center text-white">
                  <Droplets className="h-20 w-20 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Espaço para imagem</p>
                  <p className="text-sm opacity-80">Limpeza de Painéis Solares</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Cares Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            📌 Cuidados Importantes
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {importantCares.map((care, index) => {
              const Icon = care.icon;
              return (
                <Card 
                  key={care.title}
                  className="hover-lift group cursor-pointer border-0 shadow-soft"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {care.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {care.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Study Highlight */}
          <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Estudo Científico</h4>
                <p className="text-muted-foreground">
                  <strong>Universidade de Duke (2016)</strong> revelou que o acúmulo de sujeira pode 
                  <strong className="text-orange-600"> reduzir a eficiência em até 25% ao ano</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningSection;