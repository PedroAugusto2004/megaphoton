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
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-accent/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          {/* Dark backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu content */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}>
            <div className="w-full max-w-sm mx-6 bg-background/95 backdrop-blur-md rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
              {/* Close button */}
              <div className="flex justify-end p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-accent/50 rounded-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Menu items */}
              <div className="px-6 pb-6">
                <div className="flex flex-col space-y-2">
                  {menuItems.map((item, index) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-foreground text-lg font-medium hover:text-primary transition-all duration-200 p-4 rounded-xl hover:bg-accent/50 text-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                
                {/* Contact section */}
                <div className="mt-8 pt-6 border-t border-border/30">
                  <div className="flex flex-col space-y-3">
                    <a 
                      href="tel:+5534992320853" 
                      className="flex items-center justify-center space-x-3 text-solar-green p-3 rounded-xl hover:bg-accent/30 transition-all duration-200"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="font-medium">(34) 99232-0853</span>
                    </a>
                    <a 
                      href="tel:+5534998705215" 
                      className="flex items-center justify-center space-x-3 text-solar-green p-3 rounded-xl hover:bg-accent/30 transition-all duration-200"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="font-medium">(34) 99870-5215</span>
                    </a>
                    <a 
                      href="https://instagram.com/megaphoton.ei" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-3 text-solar-green p-3 rounded-xl hover:bg-accent/30 transition-all duration-200"
                    >
                      <Instagram className="h-4 w-4" />
                      <span className="font-medium">@megaphoton.ei</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;