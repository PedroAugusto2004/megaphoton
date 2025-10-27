import { Sun, Phone, Instagram, Mail, MapPin } from 'lucide-react';
import { createSmoothScrollHandler } from '@/utils/scrollUtils';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const services = [
    { nameKey: 'services.termografia', href: '#termografia' },
    { nameKey: 'services.comissionamento', href: '#laudo-tecnico' },
    { nameKey: 'services.monitoramento', href: '#monitoramento' },
    { nameKey: 'services.comissionamento', href: '#comissionamento' },
    { nameKey: 'services.inspecao', href: '#inspecao' },
    { nameKey: 'services.instalacao', href: '#instalacao' },
    { nameKey: 'services.reparos', href: '#reparos' },
    { nameKey: 'services.higienizacao', href: '#higienizacao' },
    { nameKey: 'services.projetos', href: '#projetos' }
  ];

  const quickLinks = [
    { labelKey: 'header.inicio', href: '#inicio' },
    { labelKey: 'header.servicos', href: '#servicos' },
    { labelKey: 'header.projetos', href: '#projetos' },
    { labelKey: 'header.instalacoes', href: '#instalacoes' },
    { labelKey: 'header.agronegocio', href: '#agronegocio' },
    { labelKey: 'header.sobre', href: '#sobre' },
    { labelKey: 'header.contato', href: '#contato' }
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/megaphoton.png" 
                alt="MEGAPHOTON Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold text-white">{t('footer.confianca')}</h4>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">{t('footer.nossosServicos')}</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.nameKey}>
                  <a 
                    href={service.href} 
                    className="text-gray-300 hover:text-primary transition-smooth flex items-center space-x-2"
                    onClick={createSmoothScrollHandler(service.href)}
                  >
                    <Sun className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{t(service.nameKey)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">{t('footer.linksRapidos')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary transition-smooth"
                    onClick={createSmoothScrollHandler(link.href)}
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">{t('footer.contato')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+5534992320853" className="text-gray-300 hover:text-primary transition-smooth block">
                    (34) 99232-0853
                  </a>
                  <a href="tel:+5534998705215" className="text-gray-300 hover:text-primary transition-smooth block">
                    (34) 99870-5215
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Instagram className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <a 
                  href="https://instagram.com/megaphoton.ei" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-smooth"
                >
                  @megaphoton.ei
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <a 
                  href="mailto:megaphoton.ei@gmail.com" 
                  className="text-gray-300 hover:text-primary transition-smooth"
                >
                  megaphoton.ei@gmail.com
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  {t('footer.atendimento')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} MEGAPHOTON. {t('footer.direitos')}
            </p>
            <div className="text-right">
              <p className="text-gray-400 text-sm">
                {t('footer.slogan')}
              </p>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-xs">
              {t('footer.desenvolvido')}
            </p>
            <p className="text-gray-500 text-xs mt-2">
              {t('footer.feitoPor')} <a href="https://pedrodev.website" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-smooth">Pedro Developments</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;