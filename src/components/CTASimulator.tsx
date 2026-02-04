import { Button } from '@/components/ui/button';
import ctaPerson from '@/assets/cta-person.jpg';

const CTASimulator = () => {
  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-br from-secondary to-primary rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                Simule o seu crédito e descubra a melhor opção para si
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Preencha os dados e descubra qual o crédito adequado para si e receba uma proposta personalizada
              </p>
              <Button
                variant="outline"
                className="btn-outline-white text-base px-8 py-6"
              >
                Simular
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative h-64 lg:h-full min-h-[300px]">
              <img
                src={ctaPerson}
                alt="Simule seu crédito"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-secondary/50 lg:hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASimulator;
