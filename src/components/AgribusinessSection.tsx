import { Tractor, Battery, Zap, Wifi, Shield, Droplets, Thermometer, Clock, TrendingUp, Leaf, Sun, Calculator, Users, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AgribusinessSection = () => {
  const { t } = useTranslation();
  const systems = [
    {
      icon: <Battery className="h-5 w-5 text-green-600" />,
      titleKey: 'agribusiness.sistemasHibridos',
      descKey: 'agribusiness.hibridosDesc'
    },
    {
      icon: <Zap className="h-5 w-5 text-green-600" />,
      titleKey: 'agribusiness.offGrid',
      descKey: 'agribusiness.offGridDesc'
    },
    {
      icon: <Shield className="h-5 w-5 text-green-600" />,
      titleKey: 'agribusiness.zeroGrid',
      descKey: 'agribusiness.zeroGridDesc'
    }
  ];

  return (
    <section id="agronegocio" className="py-16 bg-white section-highlight">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center mb-2">
            <div className="h-px w-12 bg-green-600 mr-4"></div>
            <span className="text-green-600 uppercase tracking-wider text-sm font-medium">{t('agribusiness.title')}</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-black">{t('agribusiness.title')}</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-6xl mx-auto font-medium">
            {t('agribusiness.subtitle')} <span className="text-green-600">{t('agribusiness.subtitleBold')}</span> {t('agribusiness.subtitleEnd')}
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
                  {t('agribusiness.energiaSolarText')}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-1 md:gap-3">
                <div className="flex items-center gap-2">
                  <Battery className="h-3 w-3 md:h-4 md:w-4 text-white" />
                  <div>
                    <h4 className="font-semibold text-white text-xs md:text-xs">{t('agribusiness.armazenamentoInteligente')}</h4>
                    <p className="text-gray-200 text-[10px] md:text-xs">{t('agribusiness.armazenamentoDesc')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-3 w-3 md:h-4 md:w-4 text-white" />
                  <div>
                    <h4 className="font-semibold text-white text-xs md:text-xs">{t('agribusiness.segurancaEnergetica')}</h4>
                    <p className="text-gray-200 text-[10px] md:text-xs">{t('agribusiness.segurancaDesc')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="h-3 w-3 md:h-4 md:w-4 text-white" />
                  <div>
                    <h4 className="font-semibold text-white text-xs md:text-xs">{t('agribusiness.monitoramentoRemoto')}</h4>
                    <p className="text-gray-200 text-[10px] md:text-xs">{t('agribusiness.monitoramentoDesc')}</p>
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
          {t('agribusiness.solucoesCampo')}
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {systems.map((tech, index) => (
            <div key={tech.title} className="p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  {tech.icon}
                </div>
                <h4 className="font-semibold text-gray-900">{t(tech.titleKey)}</h4>
              </div>
              <p className="text-gray-600 text-sm">{t(tech.descKey)}</p>
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
            {t('agribusiness.transformaTitle')} <span className="text-green-600">{t('agribusiness.transformaBold')}</span>
          </h3>
          <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-medium">
            {t('agribusiness.transformaDesc')}
          </p>
        </div>
      </div>

      {/* 1. Irrigation Systems Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px w-12 bg-green-600 mr-4"></div>
          <span className="text-green-600 uppercase tracking-wider text-sm font-medium">{t('agribusiness.irrigacaoTitle')}</span>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {t('agribusiness.irrigacaoSubtitle')}
        </h3>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {t('agribusiness.irrigacaoDesc')}
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
              {t('agribusiness.irrigacaoRevTitle')}
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('agribusiness.irrigacaoRevDesc')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">{t('agribusiness.economiaGarantida')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('agribusiness.economiaDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">{t('agribusiness.controleInteligente')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('agribusiness.controleDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">{t('agribusiness.confiabilidadeTotal')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('agribusiness.confiabilidadeDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Cold Storage Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px w-12 bg-green-600 mr-4"></div>
          <span className="text-green-600 uppercase tracking-wider text-sm font-medium">{t('agribusiness.preservacaoTitle')}</span>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {t('agribusiness.armazenamentoRefTitle')}
        </h3>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {t('agribusiness.armazenamentoRefDesc')}
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
              {t('agribusiness.armazenamentoRevTitle')}
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('agribusiness.armazenamentoRevDesc')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">{t('agribusiness.controlePreciso')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('agribusiness.controlePrecisoDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">{t('agribusiness.reducaoPerdas')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('agribusiness.reducaoPerdasDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">{t('agribusiness.vidaUtilEstendida')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('agribusiness.vidaUtilDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* 3. Livestock Operations Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-green-600 mr-4"></div>
            <span className="text-green-600 uppercase tracking-wider text-sm font-medium">{t('agribusiness.pecuariaTitle')}</span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {t('agribusiness.operacoesPecTitle')}
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('agribusiness.operacoesPecDesc')}
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
              {t('agribusiness.pecuariaRevTitle')}
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('agribusiness.pecuariaRevDesc')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tractor className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">{t('agribusiness.ambienteControlado')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('agribusiness.ambienteControladoDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">{t('agribusiness.alimentacaoAuto')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('agribusiness.alimentacaoAutoDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">{t('agribusiness.cercasSustentaveis')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('agribusiness.cercasDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* Strategic Benefits Section */}
        <div className="py-24 text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-16">
            {t('agribusiness.beneficiosTitle')}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-16 mb-24">
            <div>
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-6" />
              <h4 className="text-xl font-bold text-gray-900 mb-4">{t('agribusiness.competitividade')}</h4>
              <p className="text-gray-600">
                {t('agribusiness.competitividadeDesc')}
              </p>
            </div>
            
            <div>
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-6" />
              <h4 className="text-xl font-bold text-gray-900 mb-4">{t('agribusiness.resiliencia')}</h4>
              <p className="text-gray-600">
                {t('agribusiness.resilienciaDesc')}
              </p>
            </div>
            
            <div>
              <Leaf className="h-12 w-12 text-green-600 mx-auto mb-6" />
              <h4 className="text-xl font-bold text-gray-900 mb-4">{t('agribusiness.sustentabilidade')}</h4>
              <p className="text-gray-600">
                {t('agribusiness.sustentabilidadeDesc')}
              </p>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('agribusiness.futuroSolar')}</h3>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            {t('agribusiness.futuroDesc')}
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
                {t('agribusiness.ctaTitle')} <span className="text-green-200">{t('agribusiness.ctaTitleBold')}</span> <br className="hidden lg:block" />{t('agribusiness.ctaSubtitle')}
              </h3>
              <p className="text-green-100/90 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed">
                {t('agribusiness.ctaDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button 
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-green-800 px-5 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-xl hover:bg-green-50 transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg shadow-green-900/30 hover:-translate-y-1"
                  onClick={() => {
                    const message = encodeURIComponent('Olá, quero transformar minha propriedade rural com energia solar');
                    window.open(`https://wa.me/5534992320853?text=${message}`, '_blank');
                  }}
                >
                  <span>{t('agribusiness.solicitarOrcamento')}</span>
                </button>
                <button className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-transparent border border-green-200/30 text-white px-5 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-xl hover:bg-green-700/50 transition-all duration-300 font-medium text-sm sm:text-base"
                  onClick={() => {
                    const contatoSection = document.getElementById('contato');
                    if (contatoSection) {
                      contatoSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span>{t('agribusiness.faleConosco')}</span>
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