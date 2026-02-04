import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroBg from '@/assets/hero-bg.jpg';
import { newsData } from '@/data/news';

const NewsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] overflow-hidden">
          <img
            src={heroBg}
            alt="Notícias Crediangolar"
            className="absolute inset-0 w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-primary/90" />
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
            <p className="text-white/80 text-sm md:text-base mb-2 uppercase tracking-wider text-center">
              INFORMAÇÃO
            </p>
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center">
              NOTÍCIAS
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {newsData.map((news) => (
                  <article
                    key={news.id}
                    className="card-elevated bg-card rounded-2xl overflow-hidden group"
                  >
                    <Link to={`/noticias/${news.slug}`} className="block">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg font-bold text-card-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {news.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {news.date}
                        </p>
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                          {news.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors">
                          LER ARTIGO
                        </span>
                      </div>
                    </Link>
                  </article>
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

export default NewsPage;

