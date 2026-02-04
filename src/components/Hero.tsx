import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import heroBg from '@/assets/hero-bg.jpg';
import slide1 from '@/assets/slide-0.jpg';
import slide2 from '@/assets/slide-2.jpg';
import slide3 from '@/assets/slide-3.jpeg';

const slides = [
  {
    id: 1,
    badge: '9',
    badgeText: 'ANOS',
    title: 'TRANSFORMANDO',
    titleHighlight: 'VIDAS',
    subtitle: 'Há quase uma década fazemos a diferença e seguimos firmes no nosso compromisso',
    ctaPrimary: 'Simule o crédito',
    ctaSecondary: 'Produtos',
    ctaPrimaryLink: '/simulador',
    ctaSecondaryLink: '/produtos',
    image: slide1,
  },
  {
    id: 2,
    badge: 'CRÉDITO',
    badgeText: 'ACESSÍVEL',
    title: 'SOLUÇÕES',
    titleHighlight: 'FINANCEIRAS',
    subtitle: 'Produtos personalizados para impulsionar o crescimento do seu negócio e realizar os seus sonhos',
    ctaPrimary: 'Ver Produtos',
    ctaSecondary: 'Contacto',
    ctaPrimaryLink: '/produtos',
    ctaSecondaryLink: '/contacto',
    image: slide2,
  },
  {
    id: 3,
    badge: 'INOVAÇÃO',
    badgeText: 'DESCUBRA',
    title: 'O CRÉDITO',
    titleHighlight: 'CERTO PARA SI',
    subtitle: 'Simule o seu crédito em poucos minutos e veja qual solução se adapta melhor às suas necessidades',
    ctaPrimary: 'Simulador',
    ctaSecondary: 'Produtos',
    ctaPrimaryLink: '/simulador',
    ctaSecondaryLink: '/produtos',
    image: slide3,
  },
];

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrent = () => {
      const selectedIndex = api.selectedScrollSnap();
      setCurrent(selectedIndex + 1);
    };

    updateCurrent();
    api.on('select', updateCurrent);
    api.on('reInit', updateCurrent);

    return () => {
      api.off('select', updateCurrent);
      api.off('reInit', updateCurrent);
    };
  }, [api]);

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Muda de slide a cada 5 segundos

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <Carousel 
        setApi={setApi} 
        className="w-full"
        opts={{
          loop: true,
          align: 'start',
        }}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="relative">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.image}
                  alt="Equipe Crediangolar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
              </div>

              {/* Content */}
              <div className="container mx-auto px-4 relative z-10 min-h-[90vh] flex items-center">
                <div className="max-w-2xl">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
                    <span className="text-accent font-bold text-lg">{slide.badge}</span>
                    <span className="text-primary-foreground/90 text-sm font-medium">{slide.badgeText}</span>
                  </div>

                  {/* Main Title */}
                  <h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up"
                    style={{ animationDelay: '0.1s' }}
                  >
                    {slide.title}<br />
                    <span className="text-accent">{slide.titleHighlight}</span>
                  </h1>

                  {/* Subtitle */}
                  <p 
                    className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg animate-fade-in-up"
                    style={{ animationDelay: '0.2s' }}
                  >
                    {slide.subtitle}
                  </p>

                  {/* CTA Buttons */}
                  <div 
                    className="flex flex-wrap gap-4 animate-fade-in-up"
                    style={{ animationDelay: '0.3s' }}
                  >
                    <a href={slide.ctaPrimaryLink}>
                      <Button className="btn-gold text-base px-8 py-6">
                        {slide.ctaPrimary}
                      </Button>
                    </a>
                    <a href={slide.ctaSecondaryLink}>
                      <Button className="btn-outline-white text-base px-8 py-6 !text-white hover:!text-primary">
                        {slide.ctaSecondary}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <button
          onClick={() => api?.scrollPrev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={() => api?.scrollNext()}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Próximo slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index + 1
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce pointer-events-none">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
