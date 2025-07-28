import { Phone, Instagram, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // You could add error state here
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefone',
      value: '(34) 99232-0853',
      action: 'tel:+5534992320853'
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'megaphoton.ei@gmail.com',
      action: 'mailto:megaphoton.ei@gmail.com'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@megaphoton.ei',
      action: 'https://instagram.com/megaphoton.ei'
    },
    {
      icon: Clock,
      label: 'Horário',
      value: 'Seg-Sex: 8h-18h | Sáb: 8h-12h'
    }
  ];

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em <span className="bg-solar-gradient bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para transformar sua necessidade energética em uma solução solar eficiente.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h3 className="text-xl font-semibold mb-6">Envie sua mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva sua necessidade ou dúvida"
                  required
                  className="w-full min-h-[120px]"
                />
              </div>
              
              <div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Enviar mensagem
                    </span>
                  )}
                </Button>
                
                {submitSuccess && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md text-sm">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </div>
                )}
              </div>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div className="bg-gray-50 rounded-xl p-8 mb-6">
              <h3 className="text-xl font-semibold mb-6">Informações de contato</h3>
              
              <div className="space-y-5">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.action ? (
                          <a 
                            href={item.action} 
                            target={item.action.startsWith('http') ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-primary/90 rounded-xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12 blur-xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Atendimento rápido
                </h3>
                <p className="mb-6 text-white/90 text-sm leading-relaxed">
                  Precisa de uma resposta imediata? Entre em contato por WhatsApp ou telefone.
                </p>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-white text-primary hover:bg-gray-100 font-medium transition-all duration-300 shadow-sm"
                    asChild
                  >
                    <a href="https://wa.me/5534992320853" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-white text-white hover:bg-white/20 transition-all duration-300 bg-white/10"
                    asChild
                  >
                    <a href="tel:+5534992320853" className="flex items-center justify-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Ligar agora
                    </a>
                  </Button>
                </div>
                <div className="mt-5 pt-4 border-t border-white/20 flex items-center justify-center">
                  <span className="text-xs text-white/70">Resposta rápida garantida</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map/Location Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-full md:w-1/3 flex-shrink-0">
                <img 
                  src="/images/br.svg" 
                  alt="Mapa do Brasil" 
                  className="w-full h-auto object-contain"
                  style={{ filter: 'hue-rotate(30deg) saturate(200%) brightness(105%)' }} 
                />
            </div>
            <div className="w-full md:w-2/3 text-left">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Área de Atuação</h3>
              </div>
              <p className="text-muted-foreground">
                Atendemos <span className="font-medium text-primary">todo o território nacional</span> com equipe especializada e suporte técnico completo.
                Nossa infraestrutura permite atender projetos em qualquer região do Brasil.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;