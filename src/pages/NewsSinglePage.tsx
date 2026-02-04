import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getNewsBySlug, newsData } from '@/data/news';

const NewsSinglePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const news = slug ? getNewsBySlug(slug) : undefined;

  if (!news) {
    return <Navigate to="/noticias" replace />;
  }

  const related = newsData.filter((n) => n.id !== news.id).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative h-[320px] md:h-[420px] overflow-hidden">
          <img
            src={news.image}
            alt={news.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
          <div className="relative h-full container mx-auto px-4 flex items-end pb-10">
            <div className="max-w-4xl">
              <Link
                to="/noticias"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar às notícias</span>
              </Link>
              <p className="text-white/80 text-sm md:text-base mb-2">
                {news.date}
              </p>
              <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
                {news.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 texto-justificado">
                {news.excerpt}
              </p>

              <div className="space-y-6">
                {news.content.map((paragraph, idx) => (
                  <p key={idx} className="text-lg text-foreground/90 leading-relaxed texto-justificado">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="section-padding bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                  OUTRAS NOTÍCIAS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {related.map((item) => (
                    <article
                      key={item.id}
                      className="card-elevated bg-card rounded-2xl overflow-hidden group"
                    >
                      <Link to={`/noticias/${item.slug}`} className="block">
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-card-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.date}
                          </p>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default NewsSinglePage;

