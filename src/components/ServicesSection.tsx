import { Thermometer, FileText, Monitor, Settings, Wrench, Droplets, PenTool, CheckSquare, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: Thermometer,
      titleKey: 'services.termografia',
      descKey: 'services.termografiaDesc',
      gradient: 'bg-orange-500',
      sectionId: 'termografia'
    },
    {
      icon: Search,
      titleKey: 'services.inspecao',
      descKey: 'services.inspecaoDesc',
      gradient: 'bg-blue-500',
      sectionId: 'inspecao'
    },
    {
      icon: Monitor,
      titleKey: 'services.monitoramento',
      descKey: 'services.monitoramentoDesc',
      gradient: 'bg-green-500',
      sectionId: 'monitoramento'
    },
    {
      icon: CheckSquare,
      titleKey: 'services.comissionamento',
      descKey: 'services.comissionamentoDesc',
      gradient: 'bg-purple-500',
      sectionId: 'laudos'
    },
    {
      icon: Wrench,
      titleKey: 'services.instalacao',
      descKey: 'services.instalacaoDesc',
      gradient: 'bg-orange-500',
      sectionId: 'instalacoes'
    },
    {
      icon: Settings,
      titleKey: 'services.reparos',
      descKey: 'services.reparosDesc',
      gradient: 'bg-red-500',
      sectionId: 'contato'
    },
    {
      icon: Droplets,
      titleKey: 'services.higienizacao',
      descKey: 'services.higienizacaoDesc',
      gradient: 'bg-blue-500',
      sectionId: 'higienizacao'
    },
    {
      icon: PenTool,
      titleKey: 'services.projetos',
      descKey: 'services.projetosDesc',
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
            <span className="text-green-700 uppercase tracking-wider text-sm font-medium">{t('services.title')}</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t('services.heading')} <span className="text-black">{t('services.headingBold')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t('services.description')}
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
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {t(service.descKey)}
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
                      <span>{t('services.saibaMais')}</span>
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
            <span className="text-blue-700 uppercase tracking-wider text-sm font-medium">{t('services.comoFunciona')}</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t('services.comoFuncionaTitle')} <span className="text-black">{t('services.comoFuncionaTitleBold')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            {t('services.comoFuncionaDesc')}
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
                  {t('services.comoFuncionaText')}
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
              <h4 className="font-semibold text-orange-500 text-lg">{t('services.processoOnGrid')}</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <h5 className="font-medium text-foreground">{t('services.irradiacaoSolar')}</h5>
                  <p>{t('services.irradiacaoSolarDesc')}</p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground">{t('services.inversor')}</h5>
                  <p>{t('services.inversorDesc')}</p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground">{t('services.stringBox')}</h5>
                  <p>{t('services.stringBoxDesc')}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-orange-500 text-lg">{t('services.distribuicaoGrid')}</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <h5 className="font-medium text-foreground">{t('services.caixaDistribuicao')}</h5>
                  <p>{t('services.caixaDistribuicaoDesc')}</p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground">{t('services.relogioBidirecional')}</h5>
                  <p>{t('services.relogioBidirecionalDesc')}</p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground">{t('services.redeEletrica')}</h5>
                  <p>{t('services.redeEletricaDesc')}</p>
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
                {t('services.omTitle')}<br />{t('services.omTitle2')}
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg font-medium text-white/90">
                  {t('services.omSubtitle')}
                </p>
                <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                  {t('services.omDesc')}
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white font-medium">{t('services.instalacaoProfissional')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white font-medium">{t('services.manutencaoPreventiva')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white font-medium">{t('services.suporteTecnico')}</span>
                </div>
              </div>
              
              <button 
                onClick={() => window.open('https://wa.me/5534992320853?text=Olá,%20quero%20agendar%20uma%20instalação', '_blank')}
                className="mt-6 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg text-white font-medium text-sm transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                {t('services.agendeSuaInstalacao')}
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