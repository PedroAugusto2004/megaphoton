import { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createSmoothScrollHandler } from '@/utils/scrollUtils';
import './mobile-menu.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isCalculatorPage = typeof window !== 'undefined' && window.location.pathname.includes('calculadora-solar');
  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Instalações', href: '#instalacoes' },
    { label: 'Agronegócio', href: '#agronegocio' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth bg-black/80 backdrop-blur-md`}>
      <nav className="container-custom py-4">
        <div className="flex items-center w-full">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="#inicio">
              <img 
                src="/images/megaphoton.png" 
                alt="MEGAPHOTON Logo" 
                className="h-12 w-auto -my-3"
                style={{ imageRendering: 'auto' }}
              />
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 items-center justify-center text-white">
            <div className="flex items-center justify-center space-x-8 flex-1">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={isCalculatorPage ? `/${item.href}` : item.href}
                  className="text-white font-medium hover:text-primary transition-smooth relative group"
                  {...(!isCalculatorPage && { onClick: createSmoothScrollHandler(item.href) })}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
          {/* Desktop CTA Button */}
          <div className="hidden lg:block ml-auto">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-white border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-smooth"
              onClick={() => window.open('https://wa.me/5534992320853?text=Olá, quero agendar uma instalação', '_blank')}
            >
              Agende Já
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden ml-auto">
            <button
              className="relative z-[10000] p-2 transition-transform duration-300 hover:scale-110 active:scale-95"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? 
                <X className="h-8 w-8 text-black transition-all duration-300 rotate-180" /> : 
                <Menu className="h-8 w-8 text-white transition-all duration-300" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'}`}>
          <div className="mobile-menu-container">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={isCalculatorPage ? `/${item.href}` : item.href}
                className="mobile-menu-item"
                style={{ animationDelay: `${index * 0.1}s` }}
                {...(!isCalculatorPage && { onClick: createSmoothScrollHandler(item.href, () => setIsMobileMenuOpen(false)) })}
              >
                {item.label}
              </a>
            ))}
            
            <div className="mobile-menu-contacts">
              <a 
                href="tel:+5534992320853" 
                className="mobile-menu-contact-item"
                style={{ animationDelay: '0.7s' }}
              >
                <Phone style={{marginRight: '0.5rem'}} />
                <span>(34) 99232-0853</span>
              </a>
              <a 
                href="tel:+5534998705215" 
                className="mobile-menu-contact-item"
                style={{ animationDelay: '0.8s' }}
              >
                <Phone style={{marginRight: '0.5rem'}} />
                <span>(34) 99870-5215</span>
              </a>
              <a 
                href="https://instagram.com/megaphoton.ei" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mobile-menu-contact-item"
                style={{ animationDelay: '0.9s' }}
              >
                <Instagram style={{marginRight: '0.5rem'}} />
                <span>@megaphoton.ei</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// Mobile Fixed Button Component
export const MobileFixedButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const inicioSection = document.getElementById('inicio');
      if (inicioSection) {
        const sectionBottom = inicioSection.offsetTop + inicioSection.offsetHeight;
        setShowButton(window.scrollY > sectionBottom - 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`lg:hidden fixed bottom-6 left-6 right-20 z-50 transition-all duration-300 ${showButton ? 'opacity-100' : 'opacity-0'}`}>
      <Button 
        className="w-full bg-black/50 backdrop-blur-lg border border-white/30 text-white hover:bg-black/60 transition-all duration-300 hover:scale-110 py-3 text-base font-medium"
        onClick={() => window.open('https://wa.me/5534992320853?text=Olá, quero agendar uma instalação', '_blank')}
      >
        Agende Já
      </Button>
    </div>
  );
};