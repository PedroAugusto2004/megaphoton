import { ArrowRight, Sun, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center bg-hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 animate-float">
          <Sun className="h-16 w-16 text-primary" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Zap className="h-12 w-12 text-secondary" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <Shield className="h-14 w-14 text-primary" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-left mt-16 lg:mt-24">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                SUA USINA EM{' '}
                <span className="bg-solar-gradient bg-clip-text text-transparent">
                  BOAS MÃOS
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl">
                A MEGAPHOTON oferece serviços de qualidade em usinas solares, realizados por profissionais capacitados
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-solar-gradient rounded-full flex items-center justify-center">
                  <Sun className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">6+ Anos</h3>
                  <p className="text-sm text-muted-foreground">de experiência</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-green-gradient rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Confiança</h3>
                  <p className="text-sm text-muted-foreground">nossa marca</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-solar-gradient hover:opacity-90 text-white font-semibold group shadow-solar"
                asChild
              >
                <a href="#servicos">
                  Nossos Serviços
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold"
                asChild
              >
                <a href="#contato">Entre em Contato</a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
              <span>📞 (34) 99232-0853 / 99870-5215</span>
              <span>📱 @megaphoton.ei</span>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative animate-fade-in-right">
            <div className="aspect-square bg-gradient-to-br from-primary-light to-secondary rounded-3xl p-8 shadow-solar">
              <div className="w-full h-full bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center text-white">
                  <Sun className="h-24 w-24 mx-auto mb-4 animate-glow" />
                  <p className="text-lg font-semibold">Espaço para imagem</p>
                  <p className="text-sm opacity-80">Sistema Solar em Operação</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-solar-gradient rounded-full animate-float shadow-solar"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-gradient rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;