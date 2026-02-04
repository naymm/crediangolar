import productRural from '@/assets/rural.jpg';
import productConsignado from '@/assets/consignado.png';
import productEmpreendedor from '@/assets/empreendedor.png';
import productExpress from '@/assets/empreendedor-express.png';
import productProtocolo from '@/assets/protocolo.png';

const products = [
  {
    name: 'ANGOLAR',
    subtitle: 'PRODUÇÃO RURAL',
    image: productRural,
  },
  {
    name: 'ANGOLAR',
    subtitle: 'CONSIGNADO',
    image: productConsignado,
  },
  {
    name: 'ANGOLAR',
    subtitle: 'EMPREENDEDOR',
    image: productEmpreendedor,
  },
  {
    name: 'ANGOLAR',
    subtitle: 'EMPREENDEDOR',
    subtitle2: 'EXPRESS',
    image: productExpress,
  },
  {
    name: 'ANGOLAR',
    subtitle: 'PROTOCOLO',
    image: productProtocolo,
  },
];

const Products = () => {
  return (
    <section id="produtos" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explore. Escolha. <span className="text-accent">Avance.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções financeiras personalizadas para o crescimento do seu negócio
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First row - 3 items */}
          {products.slice(0, 3).map((product, index) => (
            <div
              key={index}
              className="product-card group cursor-pointer aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <img
                src={product.image}
                alt={`${product.name} ${product.subtitle}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute inset-0 flex items-end">
                <div className="p-6 md:p-8">
                  <h3 className="text-white text-xl md:text-2xl font-bold leading-tight uppercase mb-1">
                    {product.name}
                  </h3>
                  <h4 className="text-white text-xl md:text-2xl font-bold leading-tight uppercase">
                    {product.subtitle}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second row - 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {products.slice(3).map((product, index) => (
            <div
              key={index}
              className="product-card group cursor-pointer aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <img
                src={product.image}
                alt={`${product.name} ${product.subtitle} ${product.subtitle2 || ''}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute inset-0 flex items-end">
                <div className="p-6 md:p-8">
                  <h3 className="text-white text-xl md:text-2xl font-bold leading-tight uppercase mb-1">
                    {product.name}
                  </h3>
                  <h4 className="text-white text-xl md:text-2xl font-bold leading-tight uppercase mb-1">
                    {product.subtitle}
                  </h4>
                  {product.subtitle2 && (
                    <h4 className="text-white text-xl md:text-2xl font-bold leading-tight uppercase">
                      {product.subtitle2}
                    </h4>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
