import { useState, useEffect, useMemo, useCallback } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroBg from '@/assets/hero-bg.jpg';
import { Button } from '@/components/ui/button';
import { productsData } from '@/data/products';

const Simulator = () => {
  const products = useMemo(() => productsData.map((product) => ({
    name: `${product.name} ${product.subtitle}${product.subtitle2 ? ' ' + product.subtitle2 : ''}`,
    shortName: product.subtitle + (product.subtitle2 ? ' ' + product.subtitle2 : ''),
    taxa: parseFloat(product.taxaJuros.replace('%', '')),
    id: product.id,
    maxAmount: parseInt(product.montante.maximo.replace(/[^\d]/g, '')),
    minAmount: parseInt(product.montante.minimo.replace(/[^\d]/g, '')),
    maxTerm: parseInt(product.prazo.maximo.replace(/[^\d]/g, '')),
    minTerm: parseInt(product.prazo.minimo.replace(/[^\d]/g, '')),
  })), []);

  const [selectedProduct, setSelectedProduct] = useState(0);
  const currentProduct = products[selectedProduct];
  
  // Inicializar valores baseados no primeiro produto
  const getInitialAmount = () => {
    const product = products[0];
    return Math.floor((product.minAmount + product.maxAmount) / 2);
  };
  
  const getInitialTerm = () => {
    const product = products[0];
    return Math.floor((product.minTerm + product.maxTerm) / 2);
  };
  
  const [amount, setAmount] = useState(getInitialAmount);
  const [term, setTerm] = useState(getInitialTerm);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const monthlyRate = currentProduct.taxa / 100;

  // Função para formatar número com separadores (sem decimais para montante)
  const formatNumber = useCallback((num: number, decimals: number = 2): string => {
    if (decimals === 0) {
      return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
    const parts = num.toFixed(decimals).split('.');
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ',' + parts[1];
  }, []);

  // Função para calcular prestação mensal
  const calculateMonthlyPayment = useCallback((principal: number, months: number, rate: number): number => {
    if (rate === 0) {
      return principal / months;
    }
    if (months === 0) return 0;
    const monthlyRate = rate;
    const numerator = principal * monthlyRate * Math.pow(1 + monthlyRate, months);
    const denominator = Math.pow(1 + monthlyRate, months) - 1;
    return numerator / denominator;
  }, []);

  // Atualizar valores quando produto mudar
  useEffect(() => {
    const product = products[selectedProduct];
    const newAmount = Math.max(product.minAmount, Math.min(amount, product.maxAmount));
    const newTerm = Math.max(product.minTerm, Math.min(term, product.maxTerm));
    
    setAmount(newAmount);
    setTerm(newTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProduct]);

  // Atualizar cálculo quando valores mudarem
  useEffect(() => {
    if (amount > 0 && term > 0) {
      const payment = calculateMonthlyPayment(amount, term, monthlyRate);
      setMonthlyPayment(payment);
    }
  }, [amount, term, monthlyRate, calculateMonthlyPayment]);

  const handlePrint = () => {
    window.print();
  };

  const getSliderPercentage = (value: number, min: number, max: number): number => {
    if (max === min) return 0;
    return ((value - min) / (max - min)) * 100;
  };

  return (
    <>
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
            <div className="relative h-full container mx-auto px-4 flex items-center justify-center">
              <div className="text-right">
                <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold uppercase">
                  SIMULADOR DE CRÉDITO
                </h1>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="section-padding bg-background">
            <div className="container mx-auto px-4">
              {/* Product Buttons */}
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                {products.map((product, index) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(index)}
                    className={`flex flex-col items-center justify-center gap-3 h-16 min-w-[150px] max-w-[200px] px-4 border-2 rounded-lg transition-all duration-300 transform ${
                      selectedProduct === index
                        ? 'bg-primary border-primary text-primary-foreground shadow-lg scale-105'
                        : 'bg-background border-primary/50 text-primary hover:bg-primary/5 hover:border-primary hover:scale-102'
                    }`}
                  >
                    <span className="text-xs font-semibold text-center leading-tight uppercase">
                      {product.shortName}
                    </span>
                  </button>
                ))}
              </div>

              {/* Simulation Panel */}
              <div className="bg-primary rounded-[40px] p-8 md:p-12 max-w-2xl mx-auto shadow-xl print:hidden">
                {/* Result Section */}
                <div className="mb-10">
                  <h3 className="text-white text-lg font-normal mb-4">
                    Quanto vou pagar por mês
                  </h3>
                  <h2 className="text-white text-4xl md:text-5xl font-bold mb-2">
                    {formatNumber(monthlyPayment)} AOA / mês
                  </h2>
                  <p className="text-white text-sm font-light">
                    Taxa fixa mensal de {currentProduct.taxa}%
                  </p>
                </div>

                {/* Sliders */}
                <div className="space-y-8 mb-8">
                  {/* Amount Slider */}
                  <div>
                    <label htmlFor="amountSlider" className="block text-white text-sm font-medium mb-3">
                      Montante
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 relative">
                        <input
                          type="range"
                          id="amountSlider"
                          min={currentProduct.minAmount}
                          max={currentProduct.maxAmount}
                          value={amount}
                          step="1000"
                          onChange={(e) => setAmount(parseInt(e.target.value))}
                          className="w-full h-2 rounded-full bg-white/30 appearance-none cursor-pointer slider-custom"
                          style={{
                            background: `linear-gradient(to right, white 0%, white ${getSliderPercentage(amount, currentProduct.minAmount, currentProduct.maxAmount)}%, rgba(255,255,255,0.3) ${getSliderPercentage(amount, currentProduct.minAmount, currentProduct.maxAmount)}%, rgba(255,255,255,0.3) 100%)`
                          }}
                        />
                      </div>
                      <span className="text-white text-base font-semibold min-w-[150px] text-right whitespace-nowrap">
                        {formatNumber(amount, 0)} AOA
                      </span>
                    </div>
                  </div>

                  {/* Term Slider */}
                  <div>
                    <label htmlFor="termSlider" className="block text-white text-sm font-medium mb-3">
                      Prazo
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 relative">
                        <input
                          type="range"
                          id="termSlider"
                          min={currentProduct.minTerm}
                          max={currentProduct.maxTerm}
                          value={term}
                          step="1"
                          onChange={(e) => setTerm(parseInt(e.target.value))}
                          className="w-full h-2 rounded-full bg-white/30 appearance-none cursor-pointer slider-custom"
                          style={{
                            background: `linear-gradient(to right, white 0%, white ${getSliderPercentage(term, currentProduct.minTerm, currentProduct.maxTerm)}%, rgba(255,255,255,0.3) ${getSliderPercentage(term, currentProduct.minTerm, currentProduct.maxTerm)}%, rgba(255,255,255,0.3) 100%)`
                          }}
                        />
                      </div>
                      <span className="text-white text-base font-semibold min-w-[150px] text-right whitespace-nowrap">
                        {term} {term === 1 ? 'mês' : 'meses'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="text-white/80 text-xs leading-relaxed mb-8">
                  Esta simulação é meramente informativa e o valor da prestação é calculado com base num conjunto de pressupostos pré-definidos.
                </p>

                {/* Print Button */}
                <Button
                  onClick={handlePrint}
                  className="w-full bg-primary border-2 border-white text-white hover:bg-white hover:text-primary uppercase font-bold py-4 rounded-[40px] transition-all duration-300"
                >
                  IMPRIMIR RESULTADOS
                </Button>
              </div>

              {/* Print Section - Hidden on screen */}
              <div className="hidden print:block print:max-w-4xl print:mx-auto print:mt-8 print:px-4">
                <div className="print:flex print:gap-10 print:mb-10">
                  {/* Left Section */}
                  <div className="print:flex-1 print:border print:border-gray-300 print:rounded-lg print:p-6">
                    <h3 className="print:text-sm print:font-bold print:mb-4">Quanto vou pagar por mês</h3>
                    <h2 className="print:text-3xl print:font-bold print:my-2 print:text-primary">
                      {formatNumber(monthlyPayment)} AOA / mês
                    </h2>
                    <p className="print:text-sm print:mb-6">
                      Taxa fixa mensal de {currentProduct.taxa}%
                    </p>
                    
                    <div className="print:mt-6 print:space-y-2">
                      <div className="print:flex print:mb-2">
                        <span className="print:font-semibold print:min-w-[100px]">Produto:</span>
                        <span className="print:text-primary">{currentProduct.name}</span>
                      </div>
                      <div className="print:flex print:mb-2">
                        <span className="print:font-semibold print:min-w-[100px]">Montante:</span>
                        <span className="print:text-primary">{formatNumber(amount, 0)} AOA</span>
                      </div>
                      <div className="print:flex print:mb-2">
                        <span className="print:font-semibold print:min-w-[100px]">Prazo:</span>
                        <span className="print:text-primary">{term} {term === 1 ? 'mês' : 'meses'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="print:flex-1 print:border print:border-gray-300 print:rounded-lg print:p-6">
                    <h3 className="print:text-sm print:font-bold print:mb-4">Condições Gerais:</h3>
                    <p className="print:text-xs print:leading-relaxed print:mb-2">
                      Taxa de esforço máxima de 40%. Salvo situações excepcionais Prazo: até 3 anos (36 meses)
                    </p>
                    <p className="print:text-xs print:leading-relaxed print:mb-2">
                      Montante máximo: 2.500.000 AKZ
                    </p>
                    <p className="print:text-xs print:leading-relaxed">
                      Processo de crédito sujeito às comissões indicadas no nosso preçário
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="print:mt-6 print:text-xs print:leading-relaxed">
                  <p className="print:mb-4">
                    Os valores apresentados são meramente indicativos, não constituindo qualquer compromisso quanto à sua aprovação, tendo sido calculados com base nas taxas e normas em vigor, as quais poderão ser alvo de alterações.
                  </p>
                  <p className="print:font-bold print:mb-2">Protocolos:</p>
                  <p>
                    Se possui Protocolo com a CREDIANGOLAR, poderá ter condições vantajosas, pelo que, deve contactar o nosso balcão.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>

      <style jsx global>{`
        .slider-custom {
          -webkit-appearance: none;
          appearance: none;
        }

        .slider-custom::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
          transition: transform 0.2s ease;
        }

        .slider-custom::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }

        .slider-custom::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
          transition: transform 0.2s ease;
        }

        .slider-custom::-moz-range-thumb:hover {
          transform: scale(1.1);
        }

        @media print {
          header,
          footer,
          nav,
          .print\\:hidden {
            display: none !important;
          }
          
          body {
            background: white !important;
          }
        }
      `}</style>
    </>
  );
};

export default Simulator;
