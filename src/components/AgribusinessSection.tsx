import { Tractor, Battery, Zap, Wifi, Shield } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const AgribusinessSection = () => {
  const systems = [
    {
      icon: <Battery className="h-5 w-5 text-green-600" />,
      title: 'Sistemas Híbridos',
      description: 'Inversores com baterias para máxima independência energética'
    },
    {
      icon: <Zap className="h-5 w-5 text-green-600" />,
      title: 'Off-Grid',
      description: 'Sistemas completamente independentes da rede elétrica'
    },
    {
      icon: <Shield className="h-5 w-5 text-green-600" />,
      title: 'Zero Grid',
      description: 'Autonomia total para propriedades rurais remotas'
    }
  ];

  const benefits = [
    {
      icon: <Battery className="h-5 w-5 text-green-600" />,
      title: 'Armazenamento Inteligente',
      description: 'Baterias de lítio para energia 24h por dia'
    },
    {
      icon: <Shield className="h-5 w-5 text-green-600" />,
      title: 'Segurança Energética',
      description: 'Independência total da concessionária'
    },
    {
      icon: <Wifi className="h-5 w-5 text-green-600" />,
      title: 'Monitoramento Remoto',
      description: 'Controle total via aplicativo móvel'
    }
  ];

  return (
    <section id="agronegocio" className="py-16 bg-white section-highlight">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-16">
            <div className="flex items-center mb-2">
              <div className="h-px w-12 bg-green-600 mr-4"></div>
              <span className="text-green-600 uppercase tracking-wider text-sm font-medium">Agronegócio</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-black">Agronegócio</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-6xl mx-auto font-medium">
              Energia <span className="text-green-600">independente</span> para o campo brasileiro
            </p>
          </div>
        </ScrollAnimation>
      </div>

      {/* Full-width Image with Overlay (outside container) */}
      <div
        className="relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-6 md:mb-12 overflow-hidden"
        style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}
      >
        <ScrollAnimation animationClass="reveal-fade-up" delay={200}>
          <div className="relative w-full h-full">
            <img
              src="/images/agribusiness.png"
              alt="Agronegócio - Energia Solar para o Campo"
              className="w-full object-cover h-[420px] md:h-[480px] lg:h-[550px] xl:h-[650px]"
              style={{ maxHeight: '750px' }}
            />
            {/* Text Overlay */}
            <div className="absolute top-2 left-2 right-2 md:top-8 md:left-16 md:right-auto">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-2 md:p-6 max-w-xs w-full md:max-w-md border border-white/20">
                <div className="flex items-center gap-2 mb-2 md:mb-4">
                  <Tractor className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  <p className="text-white text-xs md:text-sm font-medium">
                    Energia solar e armazenamento para o campo brasileiro
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-1 md:gap-3">
                  <div className="flex items-center gap-2">
                    <Battery className="h-3 w-3 md:h-4 md:w-4 text-white" />
                    <div>
                      <h4 className="font-semibold text-white text-xs md:text-xs">Armazenamento Inteligente</h4>
                      <p className="text-gray-200 text-[10px] md:text-xs">Baterias de lítio para energia 24h por dia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-3 w-3 md:h-4 md:w-4 text-white" />
                    <div>
                      <h4 className="font-semibold text-white text-xs md:text-xs">Segurança Energética</h4>
                      <p className="text-gray-200 text-[10px] md:text-xs">Independência total da concessionária</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="h-3 w-3 md:h-4 md:w-4 text-white" />
                    <div>
                      <h4 className="font-semibold text-white text-xs md:text-xs">Monitoramento Remoto</h4>
                      <p className="text-gray-200 text-[10px] md:text-xs">Controle total via aplicativo móvel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
        {/* Section Content */}
        <div className="container mx-auto px-4 max-w-7xl mb-16">
          {/* Technologies Grid */}
          <ScrollAnimation delay={800}>
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Soluções para o Campo
            </h3>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {systems.map((tech, index) => (
              <ScrollAnimation key={tech.title} delay={900 + index * 100} animationClass="reveal-scale">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      {tech.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900">{tech.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{tech.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={1200} animationClass="reveal-fade-up">
            <div className="border-l-4 border-green-600 pl-6 py-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Transformação Rural</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Os sistemas híbridos e off-grid não são apenas uma opção - eles são a solução definitiva 
                que está revolucionando a energia no campo brasileiro.
              </p>
              <p className="text-sm text-green-600 font-medium">Independência energética, produtividade máxima.</p>
            </div>
          </ScrollAnimation>
        </div>
  </section>
  );
};

export default AgribusinessSection;