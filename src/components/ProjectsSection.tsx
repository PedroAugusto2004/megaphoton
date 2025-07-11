import { PenTool, Building, Factory, Tractor, MapPin, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProjectsSection = () => {
  return (
    <section id="projetos" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <PenTool className="h-8 w-8 text-primary" />
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">PROJETOS</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Desenvolvemos projetos e soluções de engenharia para a construção de usinas solares fotovoltaicas, 
            seguindo os padrões do modelo EPC (Engineering, Procurement and Construction – Engenharia, Suprimentos e Construção)
          </p>
        </div>

        {/* Segments */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="hover-lift group border-0 shadow-soft">
            <CardContent className="p-8 text-center">
              <div className="mb-6 mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Building className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Comercial</h3>
              <p className="text-muted-foreground">
                Soluções para empresas e estabelecimentos comerciais
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift group border-0 shadow-soft">
            <CardContent className="p-8 text-center">
              <div className="mb-6 mx-auto w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Factory className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Industrial</h3>
              <p className="text-muted-foreground">
                Projetos de grande escala para indústrias
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift group border-0 shadow-soft">
            <CardContent className="p-8 text-center">
              <div className="mb-6 mx-auto w-20 h-20 bg-green-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Tractor className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Rural</h3>
              <p className="text-muted-foreground">
                Sistemas para propriedades rurais e agronegócio
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Project Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <h3 className="text-3xl font-bold text-foreground">
              Projetos Elaborados com Excelência
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Análise Precisa de Localização</h4>
                  <p className="text-muted-foreground">Estudo detalhado do local e orientação ideal dos painéis</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Escolha de Equipamentos</h4>
                  <p className="text-muted-foreground">Seleção criteriosa dos melhores componentes para cada projeto</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <PenTool className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Estimativa de Geração</h4>
                  <p className="text-muted-foreground">Projeção precisa da energia gerada ao longo do tempo</p>
                </div>
              </div>
            </div>

            <div className="bg-white/50 rounded-xl p-6 border-l-4 border-primary">
              <p className="text-foreground leading-relaxed">
                <strong>A elaboração cuidadosa do projeto</strong> envolve a análise precisa de fatores como localização, 
                orientação dos painéis solares, escolha dos equipamentos e estimativa da geração de energia ao longo do tempo. 
                Essa abordagem garante que a usina opere com máxima eficiência, proporcionando o retorno esperado sobre o investimento.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="animate-fade-in-right">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary-light to-primary rounded-3xl p-8 shadow-solar">
              <div className="w-full h-full bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center text-white">
                  <PenTool className="h-20 w-20 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Espaço para imagem</p>
                  <p className="text-sm opacity-80">Projeto Solar em Desenvolvimento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;