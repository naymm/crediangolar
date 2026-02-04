import news1 from '@/assets/news-1.jpg';
import news2 from '@/assets/news-2.jpg';
import news3 from '@/assets/news-3.jpg';

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  date: string; // ex: 01.04.25
  image: string;
  excerpt: string;
  content: string[];
}

export const newsData: NewsItem[] = [
  {
    id: 'financiamento-empreendedores-pme',
    slug: 'financiamento-empreendedores-pme',
    title: 'Financiamento para vários empreendedores e médias empresas',
    date: '01.04.25',
    image: news1,
    excerpt:
      'A Crediangolar reforça o compromisso com o crescimento sustentável, disponibilizando soluções de crédito ajustadas à realidade dos microempreendedores e PME.',
    content: [
      'A Crediangolar tem vindo a apoiar o tecido empresarial com soluções financeiras acessíveis e adequadas às necessidades dos microempreendedores e pequenas e médias empresas.',
      'Com condições flexíveis, prazos ajustados e acompanhamento próximo, continuamos empenhados em impulsionar projectos que geram emprego, renda e desenvolvimento local.',
      'Para saber qual produto melhor se adapta ao seu negócio, visite a nossa página de produtos ou utilize o simulador de crédito.',
    ],
  },
  {
    id: 'fidar-2025-feira-internacional-luanda',
    slug: 'fidar-2025-feira-internacional-luanda',
    title: 'FIDAR 2025 - Feira Internacional de Luanda',
    date: '11.07.25',
    image: news2,
    excerpt:
      'Participação da Crediangolar na FIDAR 2025, promovendo inclusão financeira, parcerias e novas oportunidades para empreendedores.',
    content: [
      'A presença da Crediangolar na FIDAR 2025 reforça o nosso compromisso com a proximidade aos clientes e parceiros.',
      'Durante o evento, apresentámos produtos de crédito, esclarecemos dúvidas e estreitámos relações com empreendedores e instituições.',
      'Acreditamos que a cooperação e a troca de experiências são fundamentais para construir soluções financeiras mais eficientes e inclusivas.',
    ],
  },
  {
    id: 'primeira-fase-campanha-agricola',
    slug: 'primeira-fase-campanha-agricola',
    title: 'Primeira fase da Campanha Agrícola',
    date: '04.12.25',
    image: news3,
    excerpt:
      'A campanha agrícola reforça o apoio ao sector rural, com soluções para produtores que pretendem aumentar a produtividade e expandir operações.',
    content: [
      'Com o objectivo de fortalecer a produção nacional, a Crediangolar apoia iniciativas no sector rural através de produtos pensados para a realidade do campo.',
      'O acesso ao financiamento permite melhorar insumos, logística e investimento em tecnologias que aumentam a produtividade.',
      'Se é produtor ou empreendedor do sector, consulte os requisitos do produto e simule o seu crédito.',
    ],
  },
];

export const getNewsBySlug = (slug: string): NewsItem | undefined => {
  return newsData.find((n) => n.slug === slug);
};

