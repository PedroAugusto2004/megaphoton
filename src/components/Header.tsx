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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth bg-black/40 backdrop-blur-md`}>
      <nav className="container-custom py-4">
        <div className="flex items-center w-full">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/images/megaphoton.png" 
              alt="MEGAPHOTON Logo" 
              className="h-12 w-auto animate-glow"
            />
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 items-center justify-center space-x-8 text-white">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white font-medium hover:text-primary transition-smooth relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            {/* Contact Info removed as requested */}
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden ml-auto">
            <button
              className="relative z-50 p-2 transition-transform duration-300 hover:scale-110 active:scale-95"
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
        <div className={`lg:hidden fixed top-0 right-0 h-screen w-80 z-40 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="h-full bg-white shadow-xl flex flex-col px-6 py-8">
            <div className="flex-1 flex flex-col justify-center space-y-4">
              {menuItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-800 text-lg font-medium hover:text-primary transition-all duration-300 py-3 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
              <a 
                href="tel:+5534992320853" 
                className="flex items-center justify-center space-x-2 text-gray-600 hover:text-primary transition-all duration-300 py-2"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">(34) 99232-0853</span>
              </a>
              <a 
                href="tel:+5534998705215" 
                className="flex items-center justify-center space-x-2 text-gray-600 hover:text-primary transition-all duration-300 py-2"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">(34) 99870-5215</span>
              </a>
              <a 
                href="https://instagram.com/megaphoton.ei" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-gray-600 hover:text-primary transition-all duration-300 py-2"
              >
                <Instagram className="h-4 w-4" />
                <span className="text-sm">@megaphoton.ei</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;