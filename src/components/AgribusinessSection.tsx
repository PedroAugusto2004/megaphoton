import { Tractor, Battery, Zap, Wifi, Shield, Droplets, Thermometer, Clock, TrendingUp, Leaf, Sun, Calculator, Users, Award } from 'lucide-react';

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

  return (
    <section id="agronegocio" className="py-16 bg-white section-highlight">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
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
      </div>

      {/* Full-width Image with Overlay */}
      <div
        className="relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-6 md:mb-12 overflow-hidden"
        style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}
      >
        <div className="relative w-full h-full">
          <img
            src="/images/farmer.png"
            alt="Agronegócio - Energia Solar para o Campo"
            className="w-full object-cover h-[420px] md:h-[480px] lg:h-[550px] xl:h-[650px]"
            style={{ maxHeight: '750px' }}
          />
          {/* Text Overlay */}
          <div className="absolute top-2 left-2 right-2 md:top-8 md:left-16 md:right-auto">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-1.5 md:p-6 max-w-[280px] w-full md:max-w-md border border-white/20">
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
      </div>

      {/* Section Content */}
      <div className="container mx-auto px-4 max-w-7xl mb-16">
        {/* Technologies Grid */}
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
          Soluções para o Campo
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {systems.map((tech, index) => (
            <div key={tech.title} className="p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  {tech.icon}
                </div>
                <h4 className="font-semibold text-gray-900">{tech.title}</h4>
              </div>
              <p className="text-gray-600 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>

        {/* How Solar Transforms Agribusiness */}
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-green-600 mr-6"></div>
            <Sun className="h-8 w-8 text-green-600" />
            <div className="h-px w-16 bg-green-600 ml-6"></div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            Como a Energia Solar Transforma o <span className="text-green-600">Agronegócio</span>
          </h3>
          <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-medium">
            A energia solar deixou de ser apenas uma fonte alternativa de eletricidade <span className="text-green-600 font-semibold">tornou-se um ativo estratégico </span> 
            para o agronegócio. Ao reduzir custos operacionais, aumentar a eficiência e possibilitar práticas sustentáveis, 
            a energia solar apoia produtores e empresas agrícolas em múltiplas frentes.
          </p>
        </div>
      </div>

      {/* 1. Irrigation Systems Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px w-12 bg-green-600 mr-4"></div>
          <span className="text-green-600 uppercase tracking-wider text-sm font-medium">Irrigação Inteligente</span>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Sistemas de Irrigação
        </h3>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Bombas solares substituem sistemas a diesel, fornecendo água confiável e econômica. 
          Independência total dos preços de combustíveis.
        </p>
      </div>

      {/* 1. Irrigation Systems - Full Width */}
      <div
        className="relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-16 overflow-hidden"
        style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}
      >
        <div className="relative w-full h-full">
          <img
            src="/images/irrigation.png"
            alt="Sistemas de Irrigação Solar"
            className="w-full object-cover h-[420px] md:h-[480px] lg:h-[550px] xl:h-[650px]"
            style={{ maxHeight: '750px' }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl mb-16">
        {/* Detailed Irrigation Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Revolução na Irrigação Rural
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A irrigação é uma das maiores demandas energéticas na agricultura. Bombas movidas a energia solar 
              substituem sistemas a diesel ou da rede elétrica, fornecendo um suprimento de água confiável e 
              econômico. Os produtores ganham independência das oscilações dos preços de combustíveis e reduzem 
              o tempo de inatividade causado pela instabilidade da rede.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">Economia Garantida</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Redução de até 90% nos custos de bombeamento com energia solar gratuita e inesgotável
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">Controle Inteligente</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sistemas automatizados com sensores de umidade e programação avançada
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">Confiabilidade Total</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Operação independente da rede elétrica com sistemas de backup inteligentes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Cold Storage Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px w-12 bg-green-600 mr-4"></div>
          <span className="text-green-600 uppercase tracking-wider text-sm font-medium">Preservação Solar</span>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Armazenamento Refrigerado
        </h3>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Câmaras frias solares reduzem perdas pós-colheita e estendem a vida útil dos produtos. 
          Preservação eficiente sem dependência da rede elétrica.
        </p>
      </div>

      {/* 2. Cold Storage - Full Width */}
      <div
        className="relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-16 overflow-hidden"
        style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}
      >
        <div className="relative w-full h-full">
          <img
            src="/images/cold room.png"
            alt="Armazenamento Refrigerado Solar"
            className="w-full object-cover h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]"
            style={{ maxHeight: '900px' }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl mb-16">
        {/* Detailed Cold Storage Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Revolução no Armazenamento Rural
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              As perdas pós-colheita são um desafio crítico no agronegócio, especialmente em regiões remotas 
              com infraestrutura energética limitada. Câmaras frias e unidades de refrigeração movidas a energia 
              solar estendem a vida útil de frutas, vegetais, laticínios e produtos cárneos, garantindo qualidade 
              e acesso a mercados mais amplos.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">Controle Preciso</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Temperatura controlada com precisão para máxima preservação dos produtos
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">Redução de Perdas</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Redução de até 70% nas perdas pós-colheita com refrigeração eficiente
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">Vida Útil Estendida</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Produtos mantêm qualidade por períodos muito mais longos
              </p>
            </div>
          </div>
        </div>

        {/* 3. Livestock Operations Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-green-600 mr-4"></div>
            <span className="text-green-600 uppercase tracking-wider text-sm font-medium">Pecuária Sustentável</span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Operações Pecuárias
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Energia solar apoia a pecuária com ventilação, alimentação automatizada e bombas de água. 
            Ambiente estável para melhor produtividade e bem-estar animal.
          </p>
        </div>

        {/* 3. Livestock Operations - Full Width */}
        <div
          className="relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-16 overflow-hidden"
          style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}
        >
          <div className="relative w-full h-full">
            <img
              src="/images/animals.png"
              alt="Operações Pecuárias Solares"
              className="w-full object-cover h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px]"
              style={{ maxHeight: '1000px' }}
            />
          </div>
        </div>

        {/* Detailed Livestock Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Revolução na Pecuária Sustentável
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A energia solar apoia a pecuária alimentando ventilação, sistemas automatizados de alimentação 
              e bombas de água. Garante um ambiente estável para os animais, melhorando a produtividade e 
              o bem-estar. Além disso, cercas elétricas movidas a energia solar oferecem segurança eficiente 
              e sustentável para grandes áreas de pastagem.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tractor className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">Ambiente Controlado</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ventilação e temperatura controladas para melhor produtividade animal
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">Alimentação Automatizada</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sistemas automatizados de alimentação com energia solar confiável
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">Cercas Sustentáveis</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cercas elétricas solares para segurança eficiente de pastagens
              </p>
            </div>
          </div>
        </div>

        {/* Strategic Benefits Section */}
        <div className="py-24 text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-16">
            Benefícios Estratégicos da Energia Solar no Agronegócio
          </h3>
          
          <div className="grid md:grid-cols-3 gap-16 mb-24">
            <div>
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-6" />
              <h4 className="text-xl font-bold text-gray-900 mb-4">Competitividade</h4>
              <p className="text-gray-600">
                Redução significativa de custos operacionais e maior margem de lucro
              </p>
            </div>
            
            <div>
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-6" />
              <h4 className="text-xl font-bold text-gray-900 mb-4">Resiliência</h4>
              <p className="text-gray-600">
                Independência energética e proteção contra volatilidade de preços
              </p>
            </div>
            
            <div>
              <Leaf className="h-12 w-12 text-green-600 mx-auto mb-6" />
              <h4 className="text-xl font-bold text-gray-900 mb-4">Sustentabilidade</h4>
              <p className="text-gray-600">
                Práticas ambientalmente responsáveis e certificações verdes
              </p>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-gray-900 mb-6">O Futuro é Solar</h3>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            A energia solar não é apenas uma tendência - é a evolução natural do agronegócio brasileiro. 
            Propriedades que adotam energia solar hoje estão se posicionando como líderes de amanhã.
          </p>
        </div>
      </div>
      
      {/* CTA - Full Width Section */}
      <div className="mt-20 sm:mt-32 -mx-4 sm:-mx-8 bg-gradient-to-br from-green-600 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:16px]" />
        <div className="absolute h-full w-full bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0),rgba(0,0,0,0.4))]" />
        
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Transforme sua <span className="text-green-200">propriedade</span> <br className="hidden lg:block" />rural
              </h3>
              <p className="text-green-100/90 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed">
                Energia solar profissional para máxima eficiência, sustentabilidade e lucratividade do seu investimento no agronegócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button 
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-green-800 px-5 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-xl hover:bg-green-50 transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg shadow-green-900/30 hover:-translate-y-1"
                  onClick={() => {
                    const message = encodeURIComponent('Olá, quero transformar minha propriedade rural com energia solar');
                    window.open(`https://wa.me/5534992320853?text=${message}`, '_blank');
                  }}
                >
                  <span>Solicitar Orçamento</span>
                </button>
                <button className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-transparent border border-green-200/30 text-white px-5 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-xl hover:bg-green-700/50 transition-all duration-300 font-medium text-sm sm:text-base"
                  onClick={() => {
                    const contatoSection = document.getElementById('contato');
                    if (contatoSection) {
                      contatoSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span>Fale Conosco</span>
                </button>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-2xl hidden lg:block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center">
                    <Sun className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Solução Completa</h4>
                    <p className="text-green-100/70 text-sm">Energia sustentável para o campo</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-green-50">
                    <div className="h-5 w-5 text-green-300 flex-shrink-0">✓</div>
                    <span>Consultoria Gratuita</span>
                  </li>
                  <li className="flex items-center gap-3 text-green-50">
                    <div className="h-5 w-5 text-green-300 flex-shrink-0">✓</div>
                    <span>Projeto Personalizado</span>
                  </li>
                  <li className="flex items-center gap-3 text-green-50">
                    <div className="h-5 w-5 text-green-300 flex-shrink-0">✓</div>
                    <span>Financiamento Disponível</span>
                  </li>
                </ul>
              </div>
              
              <div className="lg:hidden">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <ul className="space-y-2.5">
                    <li className="flex items-center gap-3 text-green-50">
                      <div className="h-5 w-5 text-green-300 flex-shrink-0">✓</div>
                      <span className="text-sm sm:text-base">Consultoria Gratuita</span>
                    </li>
                    <li className="flex items-center gap-3 text-green-50">
                      <div className="h-5 w-5 text-green-300 flex-shrink-0">✓</div>
                      <span className="text-sm sm:text-base">Projeto Personalizado</span>
                    </li>
                    <li className="flex items-center gap-3 text-green-50">
                      <div className="h-5 w-5 text-green-300 flex-shrink-0">✓</div>
                      <span className="text-sm sm:text-base">Financiamento Disponível</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="py-24 text-center">
        </div>
      </div>
    </section>
  );
};

export default AgribusinessSection;