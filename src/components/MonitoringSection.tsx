import { Monitor, BarChart3, Eye, Shield, TrendingUp, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MonitoringSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Monitor className="h-8 w-8 text-green-500" />
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              MONITORAMENTO E RELATÓRIOS
            </h2>
          </div>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-medium">
            Como está o <span className="text-green-500">"coração"</span> da sua usina solar?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-left">
            <h3 className="text-3xl font-bold text-foreground">
              Seus <span className="text-green-500">Olhos e Ouvidos</span> no Sistema
            </h3>
            
            <p className="text-lg text-muted-foreground">
              O monitoramento diário são seus olhos e ouvidos no sistema, garantindo que cada raio de sol 
              se transforme em máxima energia. Não é apenas acompanhar; <strong>é otimizar</strong>.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Eye className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Monitoramento Online</h4>
                  <p className="text-muted-foreground">Acompanhamento em tempo real identifica falhas e evita perdas</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Dados em Insights</h4>
                  <p className="text-muted-foreground">Transformamos dados em insights valiosos para sua tomada de decisão</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Controle Total</h4>
                  <p className="text-muted-foreground">Garantem transparência e segurança financeira e operacional</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
              <h4 className="font-bold text-foreground mb-2">💡 Otimização Contínua</h4>
              <p className="text-muted-foreground">
                Cada dado coletado é uma oportunidade de melhorar o desempenho da sua usina, 
                maximizando a geração de energia e o retorno do investimento.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="animate-fade-in-right">
            <div className="aspect-[4/3] bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 shadow-green">
              <div className="w-full h-full bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center text-white">
                  <BarChart3 className="h-20 w-20 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Espaço para imagem</p>
                  <p className="text-sm opacity-80">Dashboard de Monitoramento</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reports Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="h-8 w-8 text-green-500" />
                <h3 className="text-3xl font-bold text-foreground">📄 RELATÓRIOS</h3>
              </div>
              
              <div className="space-y-4">
                <Card className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">Insights Valiosos</h4>
                    <p className="text-muted-foreground">Transformam dados complexos em informações claras e acionáveis</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">Controle Total</h4>
                    <p className="text-muted-foreground">Garantem transparência, segurança financeira e operacional</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">Prevenção de Perdas</h4>
                    <p className="text-muted-foreground">Identificação rápida de falhas evita perdas de geração</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="bg-gradient-to-br from-muted to-gray-100 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-24 w-24 mx-auto mb-4 text-green-500" />
                <p className="text-lg font-semibold text-foreground">Espaço para imagem</p>
                <p className="text-sm text-muted-foreground">Gráficos e Relatórios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringSection;