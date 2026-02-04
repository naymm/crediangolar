import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, FileText, DollarSign, Percent, Calendar, Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getProductBySlug, productsData } from '@/data/products';

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return <Navigate to="/" replace />;
  }

  // Get related products (exclude current product)
  const relatedProducts = productsData
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={product.image}
            alt={`${product.name} ${product.subtitle}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
          <div className="relative h-full container mx-auto px-4 flex items-end pb-12">
            <div>
              <Link
                to="/#produtos"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar aos produtos</span>
              </Link>
              <h1 className="text-white text-3xl md:text-5xl font-bold uppercase mb-2">
                {product.name}
              </h1>
              <h2 className="text-white text-2xl md:text-4xl font-bold uppercase mb-2">
                {product.subtitle}
              </h2>
              {product.subtitle2 && (
                <h2 className="text-white text-2xl md:text-4xl font-bold uppercase mb-4">
                  {product.subtitle2}
                </h2>
              )}
              <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                {product.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Sobre o Produto
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              REQUISITOS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Empreendedores */}
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {product.requirements.empreendedores.title}
                  </h3>
                  <ul className="space-y-3">
                    {product.requirements.empreendedores.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Particulares */}
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {product.requirements.particulares.title}
                  </h3>
                  <ul className="space-y-3">
                    {product.requirements.particulares.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Metrics Section */}
        <section className="section-padding bg-background fundo-overlay ">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Montante */}
              <Card className="card-elevated text-center">
                <CardContent className="p-6">
                  <DollarSign className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase">
                    Mínimo
                  </h3>
                  <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {product.montante.minimo}
                  </p>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase">
                    Máximo
                  </h3>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">
                    {product.montante.maximo}
                  </p>
                </CardContent>
              </Card>

              {/* Taxa de Juros */}
              <Card className="card-elevated text-center">
                <CardContent className="p-6">
                  <Percent className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase">
                    Taxa de Juros
                  </h3>
                  <p className="text-4xl md:text-5xl font-bold text-foreground">
                    {product.taxaJuros}
                  </p>
                </CardContent>
              </Card>

              {/* Prazo */}
              <Card className="card-elevated text-center">
                <CardContent className="p-6">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase">
                    Prazo (meses)
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Mínimo</p>
                      <p className="text-xl font-bold text-foreground">{product.prazo.minimo}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Máximo</p>
                      <p className="text-xl font-bold text-foreground">{product.prazo.maximo}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Documents and Advantages Section */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Documents */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  DOCUMENTOS
                </h2>
                <ul className="space-y-4 mb-6">
                  {product.documentos.map((doc, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
                <Button className="btn-gold w-full md:w-auto">
                  <Download className="w-4 h-4 mr-2" />
                  FAÇA UMA SIMULAÇÃO
                </Button>
              </div>

              {/* Advantages */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  VANTAGENS
                </h2>
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <ul className="space-y-6">
                      {product.vantagens.map((vantagem, index) => (
                        <li key={index}>
                          <h3 className="font-bold text-lg mb-2">{vantagem.title}</h3>
                          <p className="text-primary-foreground/80">{vantagem.description}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="section-padding bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
                OUTROS PRODUTOS RELACIONADOS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    to={`/produtos/${relatedProduct.slug}`}
                    className="product-card group cursor-pointer aspect-[4/3] rounded-2xl overflow-hidden block relative"
                  >
                    <img
                      src={relatedProduct.image}
                      alt={`${relatedProduct.name} ${relatedProduct.subtitle}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                    <div className="absolute inset-0 flex items-end">
                      <div className="p-6 md:p-8">
                        <h3 className="text-white text-xl md:text-2xl font-bold leading-tight uppercase mb-1">
                          {relatedProduct.name}
                        </h3>
                        <h4 className="text-white text-xl md:text-2xl font-bold leading-tight uppercase mb-1">
                          {relatedProduct.subtitle}
                        </h4>
                        {relatedProduct.subtitle2 && (
                          <h4 className="text-white text-xl md:text-2xl font-bold leading-tight uppercase">
                            {relatedProduct.subtitle2}
                          </h4>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
