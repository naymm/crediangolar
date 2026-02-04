import { Phone, MapPin, Mail } from 'lucide-react';

const footerLinks = {
  institucional: [
    { name: 'Sobre nós', href: '#' },
    { name: 'O que fazemos', href: '#' },
    { name: 'Parceiros', href: '#' },
    { name: 'Política de Privacidade', href: '#' },
    { name: 'Contacto', href: '#' },
  ],
  ofertas: [
    { name: 'Produtos', href: '#produtos' },
    { name: 'Notícias', href: '#noticias' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'FAQ', href: '#' },
  ],
  financeira: [
    { name: 'Notícias', href: '#' },
    { name: 'Boletim COSEC', href: '#' },
    { name: 'Tarifários', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: '#', icon: 'F' },
  { name: 'LinkedIn', href: '#', icon: 'in' },
  { name: 'Instagram', href: '#', icon: 'IG' },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">Crediangolar</span>
            </a>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Sociedade de Microcrédito, SA. Transformando vidas há mais de 9 anos com soluções financeiras acessíveis.
            </p>
            <p className="text-xs text-primary-foreground/50">
              Sociedade Registada na Comissão do Mercado de Capitais
            </p>
          </div>

          {/* Column 2: Institucional */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-accent">
              Institucional
            </h4>
            <ul className="space-y-2">
              {footerLinks.institucional.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Ofertas */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-accent">
              Ofertas
            </h4>
            <ul className="space-y-2">
              {footerLinks.ofertas.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Financeira */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-accent">
              Financeira
            </h4>
            <ul className="space-y-2">
              {footerLinks.financeira.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contactos */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-accent">
              Contactos
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-accent" />
                <div className="text-sm text-primary-foreground/70">
                  <p>+244 947 713 815</p>
                  <p>+244 947 713 818</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <p className="text-sm text-primary-foreground/70">
                  Rua Rei Katyavala, Bairro Maculusso, Ingombota, Luanda
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-accent" />
                <a
                  href="mailto:geral@crediangolar.ao"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  geral@crediangolar.ao
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-sm font-medium text-primary-foreground/70 hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-primary-foreground/50">
            © 2017 - 2025 Crediangolar. • O futuro ao nosso encontro
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
