import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroBg from '@/assets/hero-bg.jpg';

const ChairmanMessage = () => {
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
              MENSAGEM DO PCA
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction Paragraphs */}
              <div className="space-y-6 mb-8">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  É com grande satisfação e entusiasmo que me dirijo como PCA da CREDIANGOLAR para partilhar a nossa visão, valores e missão. A nossa instituição está comprometida em capacitar micro-empresários e pequenas e médias empresas através de soluções financeiras inovadoras e sustentáveis, proporcionando acesso justo ao capital e contribuindo para o desenvolvimento económico e social de Angola através da inclusão financeira.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  Acreditamos que ao proporcionar capital justo e acessível, estamos a contribuir para o crescimento económico e social, criando oportunidades para que os nossos clientes possam realizar os seus sonhos e expandir os seus negócios.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  Valorizamos profundamente os relacionamentos com os nossos clientes e estamos comprometidos em fornecer soluções financeiras personalizadas que atendam às suas necessidades específicas, sempre com transparência, agilidade e excelência no atendimento.
                </p>
              </div>

              {/* Two Column Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Estamos orgulhosos de ser o seu parceiro financeiro de confiança. A inovação é uma força motriz na nossa organização, e estamos constantemente a procurar formas de melhorar os nossos serviços e produtos para melhor servir os nossos clientes.
                  </p>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    A tecnologia desempenha um papel fundamental na simplificação dos processos financeiros e na melhoria da experiência do cliente. Investimos continuamente em soluções digitais, análise de dados e ferramentas que nos permitem oferecer serviços mais eficientes e personalizados. Além disso, estamos comprometidos com a sustentabilidade e a proteção do meio ambiente, integrando práticas responsáveis em todas as nossas operações.
                  </p>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Integramos práticas financeiras responsáveis em todas as nossas operações e apoiamos projectos com impacto social positivo. A nossa equipa está dedicada a fornecer um serviço excepcional, sempre com foco nas necessidades dos nossos clientes e no desenvolvimento sustentável das comunidades que servimos.
                  </p>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Estamos entusiasmados com o futuro e as oportunidades que se apresentam. Continuaremos a trabalhar incansavelmente para criar valor, inovar e transformar a forma como os micro-empresários e PME acedem a soluções financeiras, sempre com o compromisso de ser o seu parceiro de confiança no caminho para o sucesso.
                  </p>
                </div>
              </div>

              {/* Signature */}
              <div className="mt-12 space-y-2">
                <p className="text-muted-foreground text-lg">Atenciosamente,</p>
                <p className="text-foreground text-xl font-semibold">Luis Manuel Troso</p>
                <p className="text-muted-foreground text-lg">Presidente do Conselho de Administração</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ChairmanMessage;
