import { FileText, Settings, CheckCircle, Shield, Award } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import { useTranslation } from 'react-i18next';

const TechnicalReportSection = () => {
  const { t } = useTranslation();
  const applications = [
    {
      icon: <CheckCircle className="h-5 w-5 text-blue-500" />,
      titleKey: 'technical.verificacaoConformidade',
      descKey: 'technical.verificacaoDesc'
    },
    {
      icon: <Shield className="h-5 w-5 text-blue-500" />,
      titleKey: 'technical.garantiaSeguranca',
      descKey: 'technical.garantiaDesc'
    },
    {
      icon: <Award className="h-5 w-5 text-blue-500" />,
      titleKey: 'technical.documentacaoTecnica',
      descKey: 'technical.documentacaoDesc'
    }
  ];

  return (
    <section id="laudos" className="py-16 bg-white section-highlight">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-16">
            <div className="flex items-center mb-2">
              <div className="h-px w-12 bg-blue-600 mr-4"></div>
              <span className="text-blue-600 uppercase tracking-wider text-sm font-medium">{t('technical.title')}</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-black">{t('technical.title')}</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-6xl mx-auto font-medium">
              {t('technical.subtitle')} <span className="text-blue-600">{t('technical.subtitleBold')}</span> {t('technical.subtitleEnd')}
            </p>
          </div>
        </ScrollAnimation>

        {/* Full-width Image with Overlay */}
        <div
          className="relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-32 overflow-hidden"
          style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}
        >
          <div className="relative w-full h-full">
            <img
              src="/images/technical.png"
              alt="Laudo Técnico e Comissionamento"
              className="w-full object-cover h-[600px] sm:h-[650px] md:h-[700px] lg:h-[750px] xl:h-[800px]"
              style={{ maxHeight: '900px' }}
            />
            {/* Text Overlay */}
            <div className="absolute top-4 left-4 md:top-8 md:left-16 flex items-start md:block">
              <div className="bg-black/40 backdrop-blur-md rounded-lg p-2.5 md:p-8 w-[65%] max-w-[220px] sm:max-w-[240px] md:w-auto md:max-w-lg border border-white/20 shadow-xl">
                <h3 className="text-sm sm:text-base md:text-3xl font-light text-white mb-1.5 md:mb-4 leading-tight text-left">
                  {t('technical.garantindoTitle')} <span className="text-blue-300 font-normal">{t('technical.garantindoBold')}</span>
                </h3>
                <p className="hidden md:block text-white/90 text-[11px] sm:text-xs md:text-base mb-2 md:mb-6 text-left">
                  {t('technical.garantindoDesc')}
                </p>
                <div className="space-y-0.5 md:space-y-3">
                  <div className="flex items-start space-x-1.5 md:space-x-3">
                    <CheckCircle className="h-2.5 w-2.5 md:h-5 md:w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-[9px] sm:text-xs md:text-base leading-tight md:leading-normal">{t('technical.feature1')}</span>
                  </div>
                  <div className="flex items-start space-x-1.5 md:space-x-3">
                    <Shield className="h-2.5 w-2.5 md:h-5 md:w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-[9px] sm:text-xs md:text-base leading-tight md:leading-normal">{t('technical.feature2')}</span>
                  </div>
                  <div className="flex items-start space-x-1.5 md:space-x-3">
                    <FileText className="h-2.5 w-2.5 md:h-5 md:w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-[9px] sm:text-xs md:text-base leading-tight md:leading-normal">{t('technical.feature3')}</span>
                  </div>
                  <div className="flex items-start space-x-1.5 md:space-x-3">
                    <Settings className="h-2.5 w-2.5 md:h-5 md:w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-[9px] sm:text-xs md:text-base leading-tight md:leading-normal">{t('technical.feature4')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Description - Under Image */}
        <div className="md:hidden -mt-16 mb-24 px-6">
          <p className="text-center text-base text-slate-700 leading-relaxed font-light max-w-md mx-auto">
            Nosso processo de <span className="text-blue-600 font-medium">comissionamento</span> e elaboração de laudos técnicos garante <span className="text-blue-600 font-medium">máxima eficiência e segurança</span> desde o primeiro dia.
          </p>
        </div>

        {/* Applications Grid */}
        <ScrollAnimation delay={600}>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            {t('technical.aplicacoesTitle')}
          </h3>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8 mt-12">
          {applications.map((application, index) => (
            <ScrollAnimation key={application.title} delay={700 + index * 100} animationClass="reveal-scale">
              <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600">
                    {application.icon}
                  </div>
                  <h4 className="font-medium text-gray-900">{t(application.titleKey)}</h4>
                </div>
                <p className="text-sm text-gray-600 pl-11">{t(application.descKey)}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={1000} animationClass="reveal-fade-up">
          <div className="p-6 bg-blue-50 border-l-4 border-blue-400 rounded-lg shadow-sm mb-16">
            <p className="text-sm text-gray-700">
              <strong>{t('technical.importante')}</strong> {t('technical.importanteDesc')}
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TechnicalReportSection;