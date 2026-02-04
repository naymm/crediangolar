import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const institucionalSubmenu = [
  { name: 'Sobre Nós', href: '/sobre-nos' },
  { name: 'Mensagem do PCA', href: '/mensagem-pca' },
  { name: 'Preçário', href: '#precario' },
  { name: 'Relatório e Contas', href: '/relatorio-contas' },
];

const navLinks = [
  { name: 'Produtos', href: '/produtos' },
  { name: 'Notícias', href: '#noticias' },
  { name: 'Contacto', href: '/contacto' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInstitucionalOpen, setIsInstitucionalOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-primary-foreground tracking-tight">
              Crediangolar
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
          <a
                href="/"
                className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Início
              </a>
            {/* Institucional Dropdown with Hover */}
            
            <div className="relative group">
              <button className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-1 outline-none">
                Institucional
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-popover border border-border rounded-md shadow-lg overflow-hidden">
                  {institucionalSubmenu.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Links */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="btn-gold text-sm font-semibold px-5 py-2.5">
              SIMULADOR DE CRÉDITO
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-primary border-t border-primary-foreground/10 animate-fade-in">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {/* Institucional with Submenu */}
              <div>
                <button
                  onClick={() => setIsInstitucionalOpen(!isInstitucionalOpen)}
                  className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors py-2 flex items-center justify-between w-full"
                >
                  <span>Institucional</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isInstitucionalOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isInstitucionalOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {institucionalSubmenu.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors py-2 block"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsInstitucionalOpen(false);
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Links */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="btn-gold text-sm font-semibold mt-2 w-full">
                SIMULADOR DE CRÉDITO
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
