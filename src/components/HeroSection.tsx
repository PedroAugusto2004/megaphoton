        {/* Extra icons for denser background */}
        <>
          {/* Row 1.5 */}
          <Sun className="absolute top-12 left-1/8 animate-float" style={{opacity:0.18, color:'#FFD600', animationDelay:'0.3s'}} width={56} height={56} />
          <Zap className="absolute top-12 left-3/8 animate-float" style={{opacity:0.15, color:'#22c55e', animationDelay:'0.8s'}} width={48} height={48} />
          <Sun className="absolute top-12 left-5/8 animate-float" style={{opacity:0.18, color:'#FFD600', animationDelay:'1.3s'}} width={56} height={56} />
          <Zap className="absolute top-12 left-7/8 animate-float" style={{opacity:0.15, color:'#22c55e', animationDelay:'1.8s'}} width={48} height={48} />

          {/* Row 2.5 */}
          <Zap className="absolute top-1/3 left-1/8 animate-float" style={{opacity:0.13, color:'#22c55e', animationDelay:'1.1s'}} width={40} height={40} />
          <Sun className="absolute top-1/3 left-3/8 animate-float" style={{opacity:0.16, color:'#FFD600', animationDelay:'1.6s'}} width={48} height={48} />
          <Zap className="absolute top-1/3 left-5/8 animate-float" style={{opacity:0.13, color:'#22c55e', animationDelay:'2.1s'}} width={40} height={40} />
          <Sun className="absolute top-1/3 left-7/8 animate-float" style={{opacity:0.16, color:'#FFD600', animationDelay:'2.6s'}} width={48} height={48} />

          {/* Row 3.5 */}
          <Sun className="absolute top-2/3 left-1/8 animate-float" style={{opacity:0.18, color:'#FFD600', animationDelay:'1.4s'}} width={56} height={56} />
          <Zap className="absolute top-2/3 left-3/8 animate-float" style={{opacity:0.15, color:'#22c55e', animationDelay:'1.9s'}} width={48} height={48} />
          <Sun className="absolute top-2/3 left-5/8 animate-float" style={{opacity:0.18, color:'#FFD600', animationDelay:'2.4s'}} width={56} height={56} />
          <Zap className="absolute top-2/3 left-7/8 animate-float" style={{opacity:0.15, color:'#22c55e', animationDelay:'2.9s'}} width={48} height={48} />

          {/* Row 4.5 */}
          <Zap className="absolute bottom-1/3 left-1/8 animate-float" style={{opacity:0.13, color:'#22c55e', animationDelay:'1.7s'}} width={40} height={40} />
          <Sun className="absolute bottom-1/3 left-3/8 animate-float" style={{opacity:0.16, color:'#FFD600', animationDelay:'2.2s'}} width={48} height={48} />
          <Zap className="absolute bottom-1/3 left-5/8 animate-float" style={{opacity:0.13, color:'#22c55e', animationDelay:'2.7s'}} width={40} height={40} />
          <Sun className="absolute bottom-1/3 left-7/8 animate-float" style={{opacity:0.16, color:'#FFD600', animationDelay:'3.2s'}} width={48} height={48} />
        </>
import { ArrowRight, Sun, Zap, Shield, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center bg-hero-gradient relative pt-20">
      {/* Background Pattern removed as requested */}

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-left pt-24 lg:pt-32">
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
              <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> (34) 99232-0853 / 99870-5215</span>
              <span className="flex items-center gap-2"><Instagram className="h-4 w-4" /> @megaphoton.ei</span>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative animate-fade-in-right p-4">
            <div className="aspect-square bg-gradient-to-br from-primary-light to-secondary rounded-3xl p-8 shadow-solar">
              <div className="w-full h-full bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="relative w-full h-full">
                  <img src="/images/sobre.png" alt="Sistema Solar em Operação" className="absolute inset-0 w-full h-full object-cover rounded-2xl" style={{ objectPosition: '40% center' }} />
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