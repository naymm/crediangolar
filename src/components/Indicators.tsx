import { Users, Coins, TrendingUp } from 'lucide-react';
import overlayfundo from '@/assets/overlay-branco.png';

const stats = [
  {
    icon: Users,
    number: '+2.523',
    label: 'Clientes Concedidos',
    highlight: false,
  },
  {
    icon: Coins,
    number: '1.4',
    label: 'Carteira de Crédito',
    suffix: 'Bi KZ',
    highlight: true,
  },
  {
    icon: TrendingUp,
    number: '1.8%',
    label: 'Taxa de Incumprimento',
    highlight: false,
  },
];

const Indicators = () => {
  return (
    <section className="section-padding bg-muted fundo-overlay">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-12 max-w-3xl mx-auto">
          Resultados que reflectem o nosso compromisso com o desenvolvimento
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`card-elevated rounded-2xl p-8 text-center transition-all duration-300 ${
                stat.highlight
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-card-foreground'
              }`}
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                  stat.highlight
                    ? 'bg-primary-foreground/10'
                    : 'bg-primary/10'
                }`}
              >
                <stat.icon
                  className={`w-8 h-8 ${
                    stat.highlight ? 'text-accent' : 'text-primary'
                  }`}
                />
              </div>

              {/* Number */}
              <div className="stat-number mb-2 animate-count-up">
                {stat.number}
                {stat.suffix && (
                  <span className="text-2xl ml-1">{stat.suffix}</span>
                )}
              </div>

              {/* Label */}
              <p
                className={`text-sm font-medium ${
                  stat.highlight
                    ? 'text-primary-foreground/70'
                    : 'text-muted-foreground'
                }`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Indicators;
