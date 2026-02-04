import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroBg from '@/assets/hero-bg.jpg';
import { Card, CardContent } from '@/components/ui/card';

const AboutUs = () => {
  const timeline = [
    {
      year: '2017',
      title: 'Fundação e Início',
      description: 'Fundada em Abril de 2017 como sociedade de microcrédito com capital inicial de 5 milhões de Kz.',
    },
    {
      year: '2018',
      title: 'Processo de Reestruturação',
      description: 'Alienação de 100% dos direitos da Sociedade de Microcrédito RMARCA.',
    },
    {
      year: '2020',
      title: 'Rebranding da Marca',
      description: 'Adopção da denominação comercial "Crediangolar Sociedade de Microcrédito".',
    },
    {
      year: '2023',
      title: 'Alargamento das actividades',
      description: 'Expansão a nível nacional, rede comercial, novos sistemas, capital humano e gestão.',
    },
    {
      year: '2024',
      title: 'Aumento do Capital Social',
      description: 'Aumento de capital com Sanep Group e outros accionistas, inauguração de nova sede e diversificação de produtos/serviços.',
    },
  ];

  const valores = [
    {
      title: 'Inovação',
      description: 'Busca constante por soluções financeiras inovadoras.',
    },
    {
      title: 'Sustentabilidade',
      description: 'Compromisso com práticas financeiras responsáveis e sustentáveis.',
    },
    {
      title: 'Acesso justo',
      description: 'Crença em oportunidades iguais e acesso justo ao capital financeiro.',
    },
    {
      title: 'Parceria',
      description: 'Valorização de relacionamentos baseados em parceria.',
    },
    {
      title: 'Excelência no atendimento',
      description: 'Compromisso com serviço excepcional, atenção personalizada, agilidade e transparência.',
    },
    {
      title: 'Aprendizado contínuo',
      description: 'Aprendizado contínuo, evolução e adaptação às mudanças do mercado.',
    },
  ];

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
            <p className="text-white/80 text-sm md:text-base mb-2 uppercase tracking-wider">
              INSTITUCIONAL
            </p>
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold">
              SOBRE NÓS
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            {/* Top Section - Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Left Column - Company Introduction */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  RMARCA - SOCIEDADE DE MICROCRÉDITO, LDA.
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    A nossa instituição está comprometida em fornecer soluções financeiras inovadoras e acessíveis para micro-empresários e pequenas e médias empresas, contribuindo para o desenvolvimento económico e social de Angola.
                  </p>
                  <p>
                    Somos uma instituição financeira não bancária, regida pela lei angolana, de capital privado, constituída como sociedade unipessoal por quotas, com sede na Rua Rei Katyavala, Bairro Maculusso, Distrito da Ingombota, Província de Luanda.
                  </p>
                  <p>
                    O nosso foco está no microcrédito e na abordagem centrada no cliente, oferecendo produtos e serviços financeiros que atendem às necessidades específicas dos nossos clientes.
                  </p>
                </div>
              </div>

              {/* Right Column - Timeline */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  História
                </h2>
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
                  
                  {/* Timeline Items */}
                  <div className="space-y-8">
                    {timeline.map((item, index) => (
                      <div key={index} className="relative flex gap-6">
                        {/* Year Badge */}
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg md:text-xl relative z-10">
                            {item.year}
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 pt-1">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mission and Vision Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Mission */}
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    Missão
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Capacitar micro-empresários e PME através de soluções financeiras inovadoras e sustentáveis, proporcionando acesso justo ao capital e contribuindo para o desenvolvimento económico e social de Angola através da inclusão financeira.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    Visão
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Ser reconhecida como líder de mercado e principal Instituição Financeira Não Bancária para micro-empresários e PME, oferecendo uma experiência excepcional ao cliente e sendo o parceiro financeiro preferido.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Values Section */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Valores
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {valores.map((valor, index) => (
                  <Card key={index} className="card-elevated">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-3">
                        {valor.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {valor.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
