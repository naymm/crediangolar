import { useState } from 'react';
import { Calendar, FileText, Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroBg from '@/assets/hero-bg.jpg';
import { Button } from '@/components/ui/button';

const ReportsAndAccounts = () => {
  const [selectedYear, setSelectedYear] = useState('2012');
  
  const availableYears = ['2012', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];

  const handleDownload = () => {
    // Aqui você pode adicionar a lógica de download do arquivo
    // Por exemplo, redirecionar para um arquivo PDF ou fazer download
    const fileName = `Relatório e Contas ${selectedYear}.pdf`;
    // Simulação de download - substitua pela URL real do arquivo
    console.log(`Downloading ${fileName}`);
    // window.open(`/reports/${fileName}`, '_blank');
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
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
            <p className="text-white/80 text-sm md:text-base mb-2 uppercase tracking-wider text-center">
              INSTITUCIONAL
            </p>
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center">
              RELATÓRIO E CONTAS
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introductory Text */}
              <div className="mb-12">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Estes documentos reflectem as nossas principais realizações, lições aprendidas e metas futuras, destacando a resiliência da equipe e o impacto positivo de nossas iniciativas. Nosso compromisso com a transparência, excelência, inovação e sustentabilidade guia nossas estratégias. Agradecemos a todos que nos apoiaram e esperamos que este relatório inspire confiança e parceria.
                </p>
              </div>

              {/* Year Selection Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <label className="text-foreground font-medium">
                    Seleccione o ano
                  </label>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {availableYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-4 py-2 text-sm font-medium transition-all ${
                        selectedYear === year
                          ? 'bg-primary/20 border border-muted text-foreground rounded'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Download Link Section */}
              <div className="mt-8">
                <Button
                  onClick={handleDownload}
                  className="btn-gold inline-flex items-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  <span>Relatório e Contas {selectedYear}.pdf</span>
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ReportsAndAccounts;
