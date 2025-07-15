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

      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          src="videos/solar-video.mp4"
          className="w-full h-full object-cover"
          style={{ objectPosition: '40% center' }}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 w-full h-full text-center">
        <h1 className="text-5xl lg:text-7xl font-light mb-6 text-white" style={{ fontFamily: 'Google Sans, sans-serif' }}>
          SUA USINA EM BOAS MÃOS
        </h1>
        <p className="text-2xl lg:text-3xl mb-8 text-white font-light" style={{ fontFamily: 'Google Sans, sans-serif' }}>
          A MEGAPHOTON oferece serviços de qualidade em usinas solares, realizados por profissionais capacitados
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            size="lg" 
            className="bg-white text-black font-semibold group shadow-solar rounded-full px-8 py-3 hover:bg-gray-100 border border-white"
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
            className="bg-transparent text-white font-semibold rounded-full px-8 py-3 border border-white transition-colors duration-200 hover:bg-white hover:text-black"
            asChild
          >
            <a href="#contato">Entre em Contato</a>
          </Button>
        </div>
        {/* Contact info removed as requested */}
      </div>
    </section>
  );
};

export default HeroSection;