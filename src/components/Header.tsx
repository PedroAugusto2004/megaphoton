import { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createSmoothScrollHandler } from '@/utils/scrollUtils';
import './mobile-menu.css';

// Add prop for hiding calculator button
const Header = ({ hideCalculatorButton = false }: { hideCalculatorButton?: boolean }) => {
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
            {!hideCalculatorButton && (
              <div className="flex items-center justify-end flex-none ml-8">
                <a href="/calculadora-solar" className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] text-white font-normal rounded-full px-6 py-2 shadow-lg transition-all text-base whitespace-nowrap tracking-wide" style={{fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.02em'}}>Calculadora Solar</a>
              </div>
            )}
            {/* Contact Info removed as requested */}
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