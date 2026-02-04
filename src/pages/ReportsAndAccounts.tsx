import { useMemo, useState } from 'react';
import { Calendar, ExternalLink, Eye } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroBg from '@/assets/hero-bg.jpg';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const ReportsAndAccounts = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const reportFiles = useMemo(
    () => ({
      '2020': '/relatorios/RELATORIO-E-CONTAS-RMARCA-2020.pdf',
      '2021': '/relatorios/RELATORIO-E-CONTAS-RMARCA-2021.pdf',
      '2022': '/relatorios/RELATORIO-E-CONTAS-RMARCA-2022.pdf',
      '2023': '/relatorios/RELATORIO-E-CONTAS-RMARCA-2023.pdf',
      '2024': '/relatorios/RELATORIO-E-CONTAS-RMARCA-2024.pdf',
    }),
    [],
  );

  const availableYears = Object.keys(reportFiles);
  const currentPdf = reportFiles[selectedYear as keyof typeof reportFiles];

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

              {/* Preview + Open */}
              <div className="mt-10 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    Relatório e Contas {selectedYear}
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => setIsPreviewOpen(true)}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2"
                    >
                      Pré-visualizar
                      <Eye className="w-4 h-4" />
                    </Button>
                    <a href={currentPdf} target="_blank" rel="noreferrer">
                      <Button className="btn-gold inline-flex items-center gap-2">
                        Abrir PDF
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  Clique em <span className="font-semibold">Pré-visualizar</span> para ver o relatório num modal. Se o seu navegador não suportar o preview, use <span className="font-semibold">Abrir PDF</span>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-w-5xl w-[95vw] h-[85vh] p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-3">
            <DialogTitle>
              Relatório e Contas {selectedYear}
            </DialogTitle>
          </DialogHeader>
          <div className="h-full px-6 pb-6">
            <div className="h-[calc(85vh-90px)] rounded-xl overflow-hidden border border-border bg-muted">
              <iframe
                key={currentPdf}
                src={currentPdf}
                title={`Relatório e Contas ${selectedYear}`}
                className="w-full h-full bg-white"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReportsAndAccounts;
