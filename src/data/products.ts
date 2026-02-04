import productRural from '@/assets/rural.jpg';
import productConsignado from '@/assets/consignado.png';
import productEmpreendedor from '@/assets/empreendedor.png';
import productExpress from '@/assets/empreendedor-express.png';
import productProtocolo from '@/assets/protocolo.png';

export interface ProductRequirement {
  title: string;
  items: string[];
}

export interface ProductAdvantage {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  subtitle2?: string;
  image: string;
  tagline: string;
  description: string;
  requirements: {
    empreendedores: ProductRequirement;
    particulares: ProductRequirement;
  };
  montante: {
    minimo: string;
    maximo: string;
  };
  taxaJuros: string;
  prazo: {
    minimo: string;
    maximo: string;
  };
  documentos: string[];
  vantagens: ProductAdvantage[];
}

export const productsData: Product[] = [
  {
    id: 'producao-rural',
    slug: 'producao-rural',
    name: 'ANGOLAR',
    subtitle: 'PRODUÇÃO RURAL',
    image: productRural,
    tagline: 'Há anos ao seu lado, mantendo o foco no futuro.',
    description: 'O Angolar Produção Rural é uma solução financeira destinada a pessoas singulares e colectivas do sector rural, com o objetivo de apoiar o desenvolvimento e expansão de projectos relacionados com a exploração de terras, agricultura, pecuária e outras actividades rurais.',
    requirements: {
      empreendedores: {
        title: 'Empreendedores',
        items: [
          'Carta dirigida à Crediangolar',
          'Alvará Comercial',
          'DAR (Declaração de Ajustamento de Rendimentos)',
          'Diário da República',
          'Cartão de Contribuinte',
          'Certificado de Admissibilidade',
          'Estatutos',
          'Registo Estatístico',
          'Cópia do BI',
          'Fotografias tipo passe',
          'Extratos bancários',
          'Registos contabilísticos (fluxo de caixa mensal)',
          'Plano de Investimento',
        ],
      },
      particulares: {
        title: 'Particulares',
        items: [
          'Carta dirigida à Crediangolar',
          'Declaração de Serviço actualizada',
          'Últimos 3 recibos de vencimento',
          'Cartão de Contribuinte do requerente e cônjuge (se aplicável)',
          'Cópia do BI do requerente e cônjuge (se aplicável)',
          'Fotografias tipo passe',
          'Extrato bancário dos últimos 6 meses',
        ],
      },
    },
    montante: {
      minimo: '100.000 kz',
      maximo: '2.500.000 kz',
    },
    taxaJuros: '4.91%',
    prazo: {
      minimo: '3 meses',
      maximo: '24 meses',
    },
    documentos: [
      'Checklist de Crédito',
      'Ficha Técnica do Produto',
      'Carta de Solicitação de Crédito',
      'Carta de Adesão de Crédito',
    ],
    vantagens: [
      {
        title: 'Valor Adequado',
        description: 'Adequado para cobertura de despesas pontuais.',
      },
      {
        title: 'Acesso Rápido e Fácil',
        description: 'Menos burocracia, facilita a obtenção do crédito.',
      },
      {
        title: 'Taxa Acessível',
        description: 'Taxa de juro favorável, que tornam o financiamento mais económico.',
      },
      {
        title: 'Flexibilidade no Pagamento',
        description: 'Flexibilidade de pagamento em prestação única.',
      },
    ],
  },
  {
    id: 'consignado',
    slug: 'consignado',
    name: 'ANGOLAR',
    subtitle: 'CONSIGNADO',
    image: productConsignado,
    tagline: 'Crédito descontado diretamente no seu salário.',
    description: 'O Angolar Consignado é uma linha de crédito pessoal destinada a funcionários públicos e privados, com desconto automático na folha de pagamento. Uma solução rápida e segura para suas necessidades financeiras.',
    requirements: {
      empreendedores: {
        title: 'Empreendedores',
        items: [
          'Carta dirigida à Crediangolar',
          'Alvará Comercial',
          'DAR (Declaração de Ajustamento de Rendimentos)',
          'Diário da República',
          'Cartão de Contribuinte',
          'Certificado de Admissibilidade',
          'Estatutos',
          'Registo Estatístico',
          'Cópia do BI',
          'Fotografias tipo passe',
          'Extratos bancários',
          'Registos contabilísticos (fluxo de caixa mensal)',
          'Plano de Investimento',
        ],
      },
      particulares: {
        title: 'Particulares',
        items: [
          'Carta dirigida à Crediangolar',
          'Declaração de Serviço actualizada',
          'Últimos 3 recibos de vencimento',
          'Cartão de Contribuinte do requerente e cônjuge (se aplicável)',
          'Cópia do BI do requerente e cônjuge (se aplicável)',
          'Fotografias tipo passe',
          'Extrato bancário dos últimos 6 meses',
        ],
      },
    },
    montante: {
      minimo: '100.000 kz',
      maximo: '2.500.000 kz',
    },
    taxaJuros: '4.91%',
    prazo: {
      minimo: '3 meses',
      maximo: '24 meses',
    },
    documentos: [
      'Checklist de Crédito',
      'Ficha Técnica do Produto',
      'Carta de Solicitação de Crédito',
      'Carta de Adesão de Crédito',
    ],
    vantagens: [
      {
        title: 'Desconto Automático',
        description: 'Pagamento automático descontado diretamente na folha de pagamento.',
      },
      {
        title: 'Processo Simplificado',
        description: 'Menos documentação e aprovação mais rápida.',
      },
      {
        title: 'Taxa Competitiva',
        description: 'Taxa de juro atrativa para funcionários.',
      },
      {
        title: 'Sem Fiador',
        description: 'Não necessita de fiador, o desconto na folha garante o pagamento.',
      },
    ],
  },
  {
    id: 'empreendedor',
    slug: 'empreendedor',
    name: 'ANGOLAR',
    subtitle: 'EMPREENDEDOR',
    image: productEmpreendedor,
    tagline: 'Financiamento para impulsionar o seu negócio.',
    description: 'O Angolar Empreendedor é uma solução financeira desenvolvida especialmente para pequenos e médios empresários, oferecendo capital de giro e financiamento para investimentos que impulsionem o crescimento dos seus negócios.',
    requirements: {
      empreendedores: {
        title: 'Empreendedores',
        items: [
          'Carta dirigida à Crediangolar',
          'Alvará Comercial',
          'DAR (Declaração de Ajustamento de Rendimentos)',
          'Diário da República',
          'Cartão de Contribuinte',
          'Certificado de Admissibilidade',
          'Estatutos',
          'Registo Estatístico',
          'Cópia do BI',
          'Fotografias tipo passe',
          'Extratos bancários',
          'Registos contabilísticos (fluxo de caixa mensal)',
          'Plano de Investimento',
        ],
      },
      particulares: {
        title: 'Particulares',
        items: [
          'Carta dirigida à Crediangolar',
          'Declaração de Serviço actualizada',
          'Últimos 3 recibos de vencimento',
          'Cartão de Contribuinte do requerente e cônjuge (se aplicável)',
          'Cópia do BI do requerente e cônjuge (se aplicável)',
          'Fotografias tipo passe',
          'Extrato bancário dos últimos 6 meses',
        ],
      },
    },
    montante: {
      minimo: '100.000 kz',
      maximo: '2.500.000 kz',
    },
    taxaJuros: '4.91%',
    prazo: {
      minimo: '3 meses',
      maximo: '12 meses',
    },
    documentos: [
      'Checklist de Crédito',
      'Ficha Técnica do Produto',
      'Carta de Solicitação de Crédito',
      'Carta de Adesão de Crédito',
    ],
    vantagens: [
      {
        title: 'Capital de Giro',
        description: 'Financiamento adequado para necessidades operacionais do negócio.',
      },
      {
        title: 'Aprovação Rápida',
        description: 'Processo de análise e aprovação ágil para não perder oportunidades.',
      },
      {
        title: 'Condições Flexíveis',
        description: 'Prazos e valores adaptados às necessidades do seu negócio.',
      },
      {
        title: 'Apoio ao Crescimento',
        description: 'Financiamento para investimentos que impulsionam a expansão.',
      },
    ],
  },
  {
    id: 'empreendedor-express',
    slug: 'empreendedor-express',
    name: 'ANGOLAR',
    subtitle: 'EMPREENDEDOR',
    subtitle2: 'EXPRESS',
    image: productExpress,
    tagline: 'Crédito rápido para o seu negócio.',
    description: 'O Angolar Empreendedor Express é uma linha de crédito acelerada para pequenos e médios empresários que precisam de capital de forma urgente. Aprovação em tempo recorde com condições especiais.',
    requirements: {
      empreendedores: {
        title: 'Empreendedores',
        items: [
          'Carta dirigida à Crediangolar',
          'Alvará Comercial',
          'DAR (Declaração de Ajustamento de Rendimentos)',
          'Diário da República',
          'Cartão de Contribuinte',
          'Certificado de Admissibilidade',
          'Estatutos',
          'Registo Estatístico',
          'Cópia do BI',
          'Fotografias tipo passe',
          'Extratos bancários',
          'Registos contabilísticos (fluxo de caixa mensal)',
          'Plano de Investimento',
        ],
      },
      particulares: {
        title: 'Particulares',
        items: [
          'Carta dirigida à Crediangolar',
          'Declaração de Serviço actualizada',
          'Últimos 3 recibos de vencimento',
          'Cartão de Contribuinte do requerente e cônjuge (se aplicável)',
          'Cópia do BI do requerente e cônjuge (se aplicável)',
          'Fotografias tipo passe',
          'Extrato bancário dos últimos 6 meses',
        ],
      },
    },
    montante: {
      minimo: '100.000 kz',
      maximo: '2.500.000 kz',
    },
    taxaJuros: '4.91%',
    prazo: {
      minimo: '3 meses',
      maximo: '12 meses',
    },
    documentos: [
      'Checklist de Crédito',
      'Ficha Técnica do Produto',
      'Carta de Solicitação de Crédito',
      'Carta de Adesão de Crédito',
    ],
    vantagens: [
      {
        title: 'Aprovação Express',
        description: 'Aprovação em até 48 horas para clientes qualificados.',
      },
      {
        title: 'Documentação Simplificada',
        description: 'Menos documentos necessários para agilizar o processo.',
      },
      {
        title: 'Disponibilização Rápida',
        description: 'Dinheiro na conta em tempo recorde após aprovação.',
      },
      {
        title: 'Ideal para Emergências',
        description: 'Solução perfeita para necessidades financeiras urgentes do negócio.',
      },
    ],
  },
  {
    id: 'protocolo',
    slug: 'protocolo',
    name: 'ANGOLAR',
    subtitle: 'PROTOCOLO',
    image: productProtocolo,
    tagline: 'Soluções financeiras através de parcerias estratégicas.',
    description: 'O Angolar Protocolo é uma linha de crédito especial desenvolvida através de parcerias com empresas e instituições, oferecendo condições diferenciadas para colaboradores e membros de entidades parceiras.',
    requirements: {
      empreendedores: {
        title: 'Empreendedores',
        items: [
          'Carta dirigida à Crediangolar',
          'Alvará Comercial',
          'DAR (Declaração de Ajustamento de Rendimentos)',
          'Diário da República',
          'Cartão de Contribuinte',
          'Certificado de Admissibilidade',
          'Estatutos',
          'Registo Estatístico',
          'Cópia do BI',
          'Fotografias tipo passe',
          'Extratos bancários',
          'Registos contabilísticos (fluxo de caixa mensal)',
          'Plano de Investimento',
        ],
      },
      particulares: {
        title: 'Particulares',
        items: [
          'Carta dirigida à Crediangolar',
          'Declaração de Serviço actualizada',
          'Últimos 3 recibos de vencimento',
          'Cartão de Contribuinte do requerente e cônjuge (se aplicável)',
          'Cópia do BI do requerente e cônjuge (se aplicável)',
          'Fotografias tipo passe',
          'Extrato bancário dos últimos 6 meses',
        ],
      },
    },
    montante: {
      minimo: '100.000 kz',
      maximo: '2.500.000 kz',
    },
    taxaJuros: '5%',
    prazo: {
      minimo: '3 meses',
      maximo: '12 meses',
    },
    documentos: [
      'Checklist de Crédito',
      'Ficha Técnica do Produto',
      'Carta de Solicitação de Crédito',
      'Carta de Adesão de Crédito',
    ],
    vantagens: [
      {
        title: 'Condições Especiais',
        description: 'Taxas e condições diferenciadas através de parcerias.',
      },
      {
        title: 'Processo Facilitado',
        description: 'Aprovação simplificada para membros de entidades parceiras.',
      },
      {
        title: 'Valores Maiores',
        description: 'Possibilidade de valores mais elevados para clientes protocolados.',
      },
      {
        title: 'Prazos Estendidos',
        description: 'Prazos de pagamento mais longos e flexíveis.',
      },
    ],
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return productsData.find((product) => product.slug === slug);
};
