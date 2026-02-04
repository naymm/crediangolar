import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroBg from '@/assets/hero-bg.jpg';
import organograma1 from '@/assets/organograma-1.png';
import organograma2 from '@/assets/organograma-2.png';

const Organogram = () => {
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
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
            <p className="text-white/80 text-sm md:text-base mb-2 uppercase tracking-wider text-center">
              INSTITUCIONAL
            </p>
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center">
              ORGANOGRAMA
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Introductory Text */}
              <div className="mb-12 text-center">
                <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                  Conheça a estrutura organizacional da Crediangolar e a hierarquia que sustenta o nosso compromisso com a excelência e o crescimento sustentável.
                </p>
              </div>

              {/* Organograma Images Section */}
              <div className="space-y-8">
                {/* Container para as imagens do organograma */}
                <div className="grid grid-cols-1 gap-6">
                  {/* Esta área está preparada para receber as imagens do organograma */}
                  {/* Exemplo de como adicionar uma imagem:
                  
                  <div className="bg-white rounded-lg border border-border p-4 shadow-sm overflow-hidden">
                    <img 
                      src="/path/to/organogram-image.jpg" 
                      alt="Organograma Crediangolar" 
                      className="w-full h-auto"
                    />
                  </div>
                  
                  */}
                  
                  {/* Placeholder temporário - remover quando as imagens forem adicionadas */}
                  <div className="bg-white rounded-lg border border-border p-8 shadow-sm">
                    <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-muted">
                      <p className="text-muted-foreground text-center">
                        <img src={organograma1} alt="Organograma Crediangolar" className="w-full h-auto organograma" />
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-border p-8 shadow-sm">
                    <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-muted">
                      <p className="text-muted-foreground text-center">
                        <img src={organograma2} alt="Organograma Crediangolar" className="w-full h-auto organograma" />
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Organogram;
