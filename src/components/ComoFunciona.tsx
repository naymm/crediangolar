const steps = [
  {
    number: 1,
    title: 'Consulta',
    description:
      'Entre em contacto connosco para uma análise preliminar da sua necessidade de financiamento.',
  },
  {
    number: 2,
    title: 'Documentação',
    description:
      'Reúna os documentos necessários para análise do seu pedido de crédito.',
  },
  {
    number: 3,
    title: 'Análise',
    description:
      'Nossa equipa analisará sua solicitação considerando o potencial do seu negócio.',
  },
  {
    number: 4,
    title: 'Desembolso',
    description:
      'Após aprovação, os recursos são disponibilizados para impulsionar seu empreendimento.',
  },
];

const ComoFunciona = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo simplificado para acesso ao microcrédito
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-muted rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-lg"
            >
              {/* Number Badge */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl mb-4">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
