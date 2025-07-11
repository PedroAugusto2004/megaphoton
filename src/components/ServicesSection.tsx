import { Thermometer, FileText, Monitor, Settings, Wrench, Droplets, PenTool, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Thermometer,
      title: 'Termografia',
      description: 'Detecção precoce de falhas como hot spots, microfissuras e delaminações',
      color: 'text-orange-500'
    },
    {
      icon: FileText,
      title: 'Laudo Técnico',
      description: 'Documentação técnica completa para garantias e conformidade',
      color: 'text-blue-500'
    },
    {
      icon: Monitor,
      title: 'Monitoramento',
      description: 'Acompanhamento online em tempo real do desempenho da usina',
      color: 'text-green-500'
    },
    {
      icon: Settings,
      title: 'Comissionamento',
      description: 'Verificação da conformidade e segurança elétrica da instalação',
      color: 'text-purple-500'
    },
    {
      icon: Wrench,
      title: 'Instalação',
      description: 'Execução de projetos com excelência e precisão técnica',
      color: 'text-primary'
    },
    {
      icon: Settings,
      title: 'Reparos',
      description: 'Manutenção corretiva e preventiva especializada',
      color: 'text-red-500'
    },
    {
      icon: Droplets,
      title: 'Higienização',
      description: 'Limpeza profissional para máxima eficiência energética',
      color: 'text-blue-400'
    },
    {
      icon: PenTool,
      title: 'Projetos',
      description: 'Desenvolvimento de soluções completas em energia solar',
      color: 'text-secondary'
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="bg-solar-gradient bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A MEGAPHOTON oferece aos seus clientes serviços de qualidade em usinas solares, 
            realizados por profissionais capacitados
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="hover-lift group cursor-pointer border-0 shadow-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 mx-auto w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-smooth">
                    <Icon className={`h-8 w-8 ${service.color} group-hover:text-white`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* O&M Section */}
        <div className="bg-gradient-to-r from-secondary to-secondary-light rounded-3xl p-8 lg:p-12 text-white animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Settings className="h-8 w-8" />
                <h3 className="text-3xl font-bold">INSTALAÇÕES & MANUTENÇÕES</h3>
              </div>
              <p className="text-lg mb-6 text-white/90">
                Serviços de O&M (Operação e Manutenção)
              </p>
              <p className="text-white/80">
                Garantimos o funcionamento otimizado da sua usina solar através de serviços 
                especializados de operação e manutenção, maximizando a vida útil e o desempenho 
                do seu investimento.
              </p>
            </div>
            
            {/* Image Placeholder */}
            <div className="aspect-video bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <div className="text-center">
                <TrendingUp className="h-16 w-16 mx-auto mb-3 text-white/70" />
                <p className="text-white/70 font-medium">Espaço para imagem</p>
                <p className="text-sm text-white/50">Serviços O&M</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;