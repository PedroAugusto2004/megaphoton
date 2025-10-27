import { Award, Users, CheckCircle, TrendingUp, Heart } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import { useTranslation } from 'react-i18next';

const CredibilitySection = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      titleKey: 'credibility.anosExperiencia',
      subtitleKey: 'credibility.anosSubtitle',
      descKey: 'credibility.anosDesc'
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
      titleKey: 'credibility.qualidadeGarantida',
      subtitleKey: 'credibility.qualidadeSubtitle',
      descKey: 'credibility.qualidadeDesc'
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      titleKey: 'credibility.atendimentoDiferenciado',
      subtitleKey: 'credibility.atendimentoSubtitle',
      descKey: 'credibility.atendimentoDesc'
    },
    {
      icon: <Heart className="h-5 w-5 text-primary" />,
      titleKey: 'credibility.confiancaMarca',
      subtitleKey: 'credibility.confiancaSubtitle',
      descKey: 'credibility.confiancaDesc'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      titleKey: 'credibility.economiaGarantida',
      descKey: 'credibility.economiaDesc'
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      titleKey: 'credibility.confortoTotal',
      descKey: 'credibility.confortoDesc'
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      titleKey: 'credibility.sustentabilidade',
      descKey: 'credibility.sustentabilidadeDesc'
    }
  ];

  return (
    <section id="sobre" className="py-16 bg-white section-highlight">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-16">
            <div className="flex items-center mb-2">
              <div className="h-px w-12 bg-primary mr-4"></div>
              <span className="text-primary uppercase tracking-wider text-sm font-medium">{t('credibility.title')}</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-black">{t('credibility.heading')}</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-6xl mx-auto font-medium">
              <span className="text-primary">{t('credibility.subtitle')}</span> {t('credibility.subtitleEnd')}
            </p>
          </div>
        </ScrollAnimation>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <ScrollAnimation key={feature.title} delay={200 + index * 100} animationClass="reveal-scale">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{t(feature.titleKey)}</h4>
                    <p className="text-xs text-primary font-medium">{t(feature.subtitleKey)}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2 border-t border-gray-100 pt-3">{t(feature.descKey)}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

      </div>
      
      {/* Full Width Hero Image Section */}
      <ScrollAnimation animationClass="reveal-fade-up" delay={600}>
        <div className="relative overflow-hidden mb-16">
          <div className="aspect-[3/4] md:aspect-[2816/1536] w-full">
            <img 
              src="/images/sobre.png" 
              alt="MegaPhoton - Energia Solar" 
              className="w-full h-full object-cover" style={{objectPosition: '36% center'}}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent">
            <div className="flex items-start pt-6 md:pt-12 px-4 md:px-8 lg:px-16">
              <div className="text-white max-w-3xl animate-fade-in-up">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6">
                  {t('credibility.transformandoTitle')} <span className="text-orange-400">{t('credibility.transformandoBold')}</span> {t('credibility.transformandoEnd')}
                </h3>
                <p className="text-sm md:text-lg lg:text-xl text-gray-200 leading-relaxed">
                  {t('credibility.transformandoDesc')}
                </p>
                <div className="hidden md:block border-l-4 border-orange-400 pl-4 md:pl-6 py-2 md:py-3 mt-4">
                  <p className="text-sm md:text-base lg:text-lg text-gray-100 leading-relaxed">
                    {t('credibility.transformandoDesc2')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <ScrollAnimation key={benefit.title} delay={800 + index * 100} animationClass="reveal-fade-up">
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">{t(benefit.titleKey)}</h4>
                    <p className="text-gray-600 leading-relaxed">{t(benefit.descKey)}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
      
      {/* Full-width Trust Section */}
      <ScrollAnimation delay={200} animationClass="reveal-fade-up">
        <div className="py-24 relative">
          <div className="container max-w-5xl mx-auto px-4 text-center relative">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-8 shadow-lg">
              <Heart className="h-10 w-10 text-primary" />
            </div>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-primary bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">{t('credibility.subtitle')}</span> {t('credibility.confiancaFinal')}
            </h4>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {t('credibility.confiancaFinalDesc')}
            </p>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default CredibilitySection;