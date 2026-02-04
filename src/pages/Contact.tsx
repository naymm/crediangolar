import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroBg from '@/assets/hero-bg.jpg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    assunto: '',
    mensagem: '',
    termos: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log('Form submitted:', formData);
    // Exemplo: enviar para API, email, etc.
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, termos: checked }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] overflow-hidden">
          <img
            src={heroBg}
            alt="Equipe Crediangolar"
            className="absolute inset-0 w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-primary/90" />
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="flex-1">
              <p className="text-white/80 text-sm md:text-base mb-2 uppercase tracking-wider">
                CONTACTO
              </p>
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold">
                FALE
              </h1>
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold">
                CONNOSCO
              </h1>
            </div>
            {/* Right side - Woman with headset (placeholder) */}
            <div className="hidden lg:block flex-1 relative h-full">
              <div className="absolute right-0 bottom-0 w-64 h-80 bg-primary-foreground/10 rounded-lg" />
            </div>
          </div>
        </section>

        {/* Introductory Text */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Estamos aqui para ajudar! Se você tiver dúvidas, ou precisar de mais informações sobre nossos produtos ou desejar assistência personalizada, não hesite em entrar em contacto.
              </p>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-muted rounded-lg p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome and E-mail Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="text-foreground font-medium">
                        Nome
                      </Label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome"
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        E-mail
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="seu@email.com"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  {/* Telefone */}
                  <div className="space-y-2">
                    <Label htmlFor="telefone" className="text-foreground font-medium">
                      Telefone
                    </Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      placeholder="+244 XXX XXX XXX"
                      className="bg-background"
                    />
                  </div>

                  {/* Assunto */}
                  <div className="space-y-2">
                    <Label htmlFor="assunto" className="text-foreground font-medium">
                      Assunto
                    </Label>
                    <Input
                      id="assunto"
                      name="assunto"
                      type="text"
                      value={formData.assunto}
                      onChange={handleChange}
                      required
                      placeholder="Assunto da mensagem"
                      className="bg-background"
                    />
                  </div>

                  {/* Mensagem */}
                  <div className="space-y-2">
                    <Label htmlFor="mensagem" className="text-foreground font-medium">
                      Mensagem
                    </Label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      required
                      placeholder="Sua mensagem..."
                      rows={6}
                      className="bg-background resize-none"
                    />
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="termos"
                      checked={formData.termos}
                      onCheckedChange={handleCheckboxChange}
                      required
                      className="mt-1"
                    />
                    <Label
                      htmlFor="termos"
                      className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                    >
                      Ao submeter os seus dados, está a concordar com os Termos e Condições da Crediangolar.
                    </Label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto px-8 py-6 uppercase font-semibold"
                    >
                      ENVIAR
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full">
          <div className="w-full h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1234567890123!2d13.23456789012345!3d-8.812345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDgnNDQuNSJTIDEzwrAxNCcwNC40IkU!5e0!3m2!1spt-PT!2sao!4v1234567890123!5m2!1spt-PT!2sao&q=Rua+Rei+Katyavala,+Bairro+Maculusso,+Ingombota,+Luanda"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Crediangolar - Rua Rei Katyavala, Bairro Maculusso, Ingombota, Luanda"
              className="w-full h-full"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
