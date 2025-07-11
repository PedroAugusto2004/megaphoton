import { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Instalações', href: '#instalacoes' },
    { label: 'Agronegócio', href: '#agronegocio' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-soft' 
        : 'bg-transparent'
    }`}>
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/847320fd-3f48-4cea-abf4-76433ce9d189.png" 
              alt="MEGAPHOTON Logo" 
              className="h-12 w-auto animate-glow"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground font-medium hover:text-primary transition-smooth relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Contact Info */}
            <div className="flex items-center space-x-4 ml-8">
              <a 
                href="tel:+5534992320853" 
                className="flex items-center space-x-2 text-solar-green hover:text-primary transition-smooth"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">(34) 99232-0853</span>
              </a>
              <a 
                href="https://instagram.com/megaphoton.ei" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-solar-green hover:text-primary transition-smooth"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground font-medium hover:text-primary transition-smooth"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <a 
                  href="tel:+5534992320853" 
                  className="flex items-center space-x-2 text-solar-green"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">(34) 99232-0853</span>
                </a>
                <a 
                  href="tel:+5534998705215" 
                  className="flex items-center space-x-2 text-solar-green"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">(34) 99870-5215</span>
                </a>
                <a 
                  href="https://instagram.com/megaphoton.ei" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-solar-green"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="text-sm font-medium">@megaphoton.ei</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;