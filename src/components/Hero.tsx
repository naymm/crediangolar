import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Equipe Crediangolar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <span className="text-accent font-bold text-lg">9</span>
            <span className="text-primary-foreground/90 text-sm font-medium">ANOS</span>
          </div>

          {/* Main Title */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            TRANSFORMANDO<br />
            <span className="text-accent">VIDAS</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Há quase uma década fazemos a diferença e seguimos firmes no nosso compromisso
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Button className="btn-gold text-base px-8 py-6">
              Simule o crédito
            </Button>
            <Button variant="outline" className="btn-outline-white text-base px-8 py-6">
              Produtos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
