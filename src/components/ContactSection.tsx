import { Phone, Instagram, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefones',
      info: '(34) 99232-0853',
      secondary: '(34) 99870-5215',
      action: 'tel:+5534992320853',
      color: 'text-green-500'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      info: '@megaphoton.ei',
      action: 'https://instagram.com/megaphoton.ei',
      color: 'text-pink-500'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@megaphoton.com.br',
      action: 'mailto:contato@megaphoton.com.br',
      color: 'text-blue-500'
    }
  ];

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Entre em <span className="bg-solar-gradient bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Pronto para dar o próximo passo rumo à energia solar? Nossa equipe está aqui para ajudar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Fale Conosco
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Estamos prontos para transformar sua necessidade energética em uma solução solar eficiente e econômica.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card 
                    key={method.title}
                    className="border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-lg bg-white group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-6">
                        <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center border border-gray-200 group-hover:bg-primary group-hover:border-primary transition-all duration-300`}>
                          <Icon className={`h-7 w-7 ${method.color} group-hover:text-white transition-colors duration-300`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{method.title}</h4>
                          <p className="text-muted-foreground">{method.info}</p>
                          {method.secondary && (
                            <p className="text-muted-foreground">{method.secondary}</p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          asChild
                        >
                          <a href={method.action} target={method.action.startsWith('http') ? '_blank' : '_self'}>
                            Contatar
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="bg-muted rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Horário de Atendimento</h4>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="animate-fade-in-right">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 lg:p-12 text-white h-full flex flex-col justify-center">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <MessageCircle className="h-10 w-10" />
                </div>
                
                <h3 className="text-3xl font-bold">
                  Solicite um Orçamento
                </h3>
                
                <p className="text-lg text-white/90">
                  Nossa equipe de especialistas está pronta para desenvolver a solução solar 
                  perfeita para suas necessidades.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-gray-100 font-semibold w-full"
                    asChild
                  >
                    <a href="tel:+5534992320853">
                      <Phone className="mr-2 h-5 w-5" />
                      Ligar Agora
                    </a>
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-primary font-semibold w-full"
                    asChild
                  >
                    <a href="https://wa.me/5534992320853" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-white/70">
                  Resposta rápida garantida • Orçamento sem compromisso
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="bg-muted rounded-3xl p-8 lg:p-12 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <MapPin className="h-8 w-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">Nossa Localização</h3>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atendemos toda a região com equipe especializada e suporte técnico completo. 
            Entre em contato para conhecer nossa área de cobertura.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;