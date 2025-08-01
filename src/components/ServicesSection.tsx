import { Thermometer, FileText, Monitor, Settings, Wrench, Droplets, PenTool, CheckSquare, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  
  const services = [
    {
      icon: Thermometer,
      title: 'Termografia',
      description: 'Detecção precoce de falhas como hot spots, microfissuras e delaminações',
      gradient: 'bg-orange-500',
      sectionId: 'termografia'
    },
    {
      icon: Search,
      title: 'Inspeção',
      description: 'Análise detalhada e avaliação técnica de instalações solares',
      gradient: 'bg-blue-500',
      sectionId: 'inspecao'
    },
    {
      icon: Monitor,
      title: 'Monitoramento',
      description: 'Acompanhamento online em tempo real do desempenho da usina',
      gradient: 'bg-green-500',
      sectionId: 'monitoramento'
    },
    {
      icon: CheckSquare,
      title: 'Comissionamento',
      description: 'Verificação da conformidade e segurança elétrica da instalação',
      gradient: 'bg-purple-500',
      sectionId: 'laudos'
    },
    {
      icon: Wrench,
      title: 'Instalação',
      description: 'Execução de projetos com excelência e precisão técnica',
      gradient: 'bg-orange-500',
      sectionId: 'instalacoes'
    },
    {
      icon: Settings,
      title: 'Reparos',
      description: 'Manutenção corretiva e preventiva especializada',
      gradient: 'bg-red-500',
      sectionId: 'contato'
    },
    {
      icon: Droplets,
      title: 'Higienização',
      description: 'Limpeza profissional para máxima eficiência energética',
      gradient: 'bg-blue-500',
      sectionId: 'higienizacao'
    },
    {
      icon: PenTool,
      title: 'Projetos',
      description: 'Desenvolvimento de soluções completas em energia solar',
      gradient: 'bg-green-500',
      sectionId: 'projetos'
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center mb-2">
            <div className="h-px w-12 bg-green-700 mr-4"></div>
            <span className="text-green-700 uppercase tracking-wider text-sm font-medium">Serviços</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Nossos <span className="text-black">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A MEGAPHOTON oferece aos seus clientes serviços de qualidade em usinas solares, 
            realizados por profissionais capacitados
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="group bg-white rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.08),_0_6px_10px_rgba(0,0,0,0.05),_0_1px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12),_0_10px_15px_rgba(0,0,0,0.06)] h-full flex flex-col transition-all duration-300 hover:translate-y-[-8px]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-full ${service.gradient} flex items-center justify-center`}>
                      <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-4">
                    <button 
                      onClick={() => {
                        const section = document.getElementById(service.sectionId);
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth' });
                        }
                      }} 
                      className="flex items-center text-sm text-orange-500 font-medium hover:text-orange-600 transition-colors"
                    >
                      <span>Saiba mais</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Como Funciona Section */}
        <div className="mb-16">
          <div className="flex items-center mb-2">
            <div className="h-px w-12 bg-blue-700 mr-4"></div>
            <span className="text-blue-700 uppercase tracking-wider text-sm font-medium">Como funciona</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Como <span className="text-black">Funciona</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Um sistema fotovoltaico converte a luz do sol diretamente em eletricidade.
          </p>
        </div>

        {/* Full-width Image with Overlay */}
        <div
          className="relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-16 overflow-hidden"
          style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}
        >
          <div className="relative w-full h-full">
            <img
              src="/images/How it works.png"
              alt="Como funciona o sistema fotovoltaico"
              className="w-full h-[700px] sm:h-[750px] md:h-[700px] lg:h-[750px] xl:h-[800px] object-cover object-center sm:object-top"
              style={{ maxHeight: '900px', objectPosition: 'center 20%' }}
            />
            {/* Content Overlay */}
            <div className="absolute top-4 left-4 md:top-8 md:left-16">
              <div className="bg-black/40 backdrop-blur-md rounded-lg p-3 md:p-6 border border-white/20 shadow-xl w-[calc(100vw-2rem)] max-w-[240px] sm:max-w-xs md:max-w-lg">
                <p className="text-xs md:text-base text-white leading-relaxed">
                  Os painéis solares, feitos de células fotovoltaicas, captam a luz e geram corrente elétrica contínua (CC). 
                  Essa energia CC passa por um inversor, que a transforma em corrente alternada (CA) – o tipo de eletricidade 
                  que usamos em casas e empresas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Image Side */}
          <div className="flex items-center justify-center">
            <img 
              src="/images/module.jpeg" 
              alt="Módulo Solar"
              className="w-full max-w-md h-auto rounded-lg object-cover"
            />
          </div>
          
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-orange-500 text-lg">Processo On-Grid</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <h5 className="font-medium text-foreground">1 - Irradiação Solar</h5>
                  <p>Os fótons desencadeiam uma reação com o silício das placas e geram energia contínua</p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground">2 - Inversor</h5>
                  <p>O inversor recebe esta energia e inverte para a energia alternada, usada na residência</p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground">3 - String Box</h5>
                  <p>A "string box" é uma caixa de proteção onde ficam os disjuntores e DPS, dispositivos contra surtos</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-orange-500 text-lg">Distribuição & Grid</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <h5 className="font-medium text-foreground">4 - Caixa de Distribuição</h5>
                  <p>A caixa de distribuição distribui a energia gerada pela usina. O excedente vai para a concessionária</p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground">5 - Relógio Bidirecional</h5>
                  <p>O relógio faz a contabilidade da energia que entra e a que sai para a rede da concessionária</p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground">6 - Rede Elétrica</h5>
                  <p>A rede elétrica da concessionária recebe a energia excedente, que vira crédito para abater na conta</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      {/* O&M Section - Full Width */}
      <div className="relative w-full bg-gradient-to-br from-green-950 to-black overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        
        <div className="relative flex flex-col lg:grid lg:grid-cols-2 lg:min-h-screen">
          {/* Content Side */}
          <div className="flex items-center px-6 md:px-8 lg:px-16 py-8 md:py-16 lg:py-20 lg:order-1">
            <div className="space-y-6 md:space-y-8 text-white max-w-lg">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
                INSTALAÇÕES &<br />MANUTENÇÕES
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg font-medium text-white/90">
                  Serviços de O&M (Operação e Manutenção)
                </p>
                <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                  Garantimos o funcionamento otimizado da sua usina solar através de serviços 
                  especializados, maximizando a vida útil e o desempenho do seu investimento.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white font-medium">Instalação Profissional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white font-medium">Manutenção Preventiva</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white font-medium">Suporte Técnico</span>
                </div>
              </div>
              
              <button 
                onClick={() => window.open('https://wa.me/5534992320853?text=Olá,%20quero%20agendar%20uma%20instalação', '_blank')}
                className="mt-6 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg text-white font-medium text-sm transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                Agende a sua instalação
              </button>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="relative min-h-[300px] lg:min-h-full lg:order-2">
            <div className="absolute inset-0">
              <img 
                src="/images/installation.png" 
                alt="Instalação Profissional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            

          </div>
        </div>
      </div>


    </section>
  );
};

export default ServicesSection;