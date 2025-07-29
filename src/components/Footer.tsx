import { Sun, Phone, Instagram, Mail, MapPin } from 'lucide-react';
import { createSmoothScrollHandler } from '@/utils/scrollUtils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Termografia',
    'Laudo Técnico',
    'Monitoramento',
    'Comissionamento',
    'Inspeção',
    'Instalação',
    'Reparos',
    'Higienização',
    'Projetos'
  ];

  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Instalações', href: '#instalacoes' },
    { label: 'Agronegócio', href: '#agronegocio' },
    { label: 'Contato', href: '#contato' }
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
              SUA USINA EM BOAS MÃOS. Mais de 6 anos de experiência no mercado fotovoltaico, 
              oferecendo qualidade, confiança e atendimento diferenciado.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold text-white">CONFIANÇA: essa é a nossa marca</h4>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#servicos" 
                    className="text-gray-300 hover:text-primary transition-smooth flex items-center space-x-2"
                    onClick={createSmoothScrollHandler('#servicos')}
                  >
                    <Sun className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary transition-smooth"
                    onClick={createSmoothScrollHandler(link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Contato</h3>
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
                  href="mailto:contato@megaphoton.com.br" 
                  className="text-gray-300 hover:text-primary transition-smooth"
                >
                  contato@megaphoton.com.br
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Atendimento em toda a região
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} MEGAPHOTON. Todos os direitos reservados.
            </p>
            <div className="text-right">
              <p className="text-gray-400 text-sm">
                Energia Solar • Sustentabilidade • Inovação
              </p>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-xs">
              Desenvolvido com energia solar ☀️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;