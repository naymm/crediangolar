import { ArrowRight } from 'lucide-react';
import news1 from '@/assets/news-1.jpg';
import news2 from '@/assets/news-2.jpg';
import news3 from '@/assets/news-3.jpg';

const newsItems = [
  {
    title: 'Financiamento para vários empreendedores e médias empresas',
    date: '01.04.25',
    image: news1,
  },
  {
    title: 'FIDAR 2025 - Feira Internacional de Luanda',
    date: '11.07.25',
    image: news2,
  },
  {
    title: 'Primeira fase da Campanha Agrícola',
    date: '04.12.25',
    image: news3,
  },
];

const News = () => {
  return (
    <section id="noticias" className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Últimas Notícias
          </h2>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            VER TODAS
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {newsItems.map((news, index) => (
            <article
              key={index}
              className="card-elevated bg-card rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-card-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{news.date}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
                >
                  LER ARTIGO
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            VER TODAS
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;
