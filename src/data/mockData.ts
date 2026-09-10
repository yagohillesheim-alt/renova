import { Service, Unit, BlogPost, Document } from '../types';

export const services: Service[] = [
  {
    id: 'coprocessamento',
    name: 'Coprocessamento',
    description: 'Transformação de resíduos industriais em energia para fornos de cimento, substituindo combustíveis fósseis e eliminando passivos.',
    problemSolved: 'Destinação final de resíduos com alto poder calorífico e redução de passivos ambientais.',
    targetAudience: 'Indústrias com grandes volumes de resíduos sólidos, líquidos ou pastosos.',
    benefits: [
      'Aterro Zero: eliminação total do resíduo',
      'Redução de passivos ambientais',
      'Melhoria nos indicadores ESG',
      'Substituição de matriz energética fóssil'
    ],
    steps: [
      'Diagnóstico da necessidade',
      'Análise laboratorial do material',
      'Definição da blendagem ideal',
      'Logística e recebimento na unidade',
      'Processamento e queima nos fornos'
    ],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200',
    path: '/solucoes/coprocessamento'
  },
  {
    id: 'cdr',
    name: 'CDR — Combustível Derivado de Resíduos',
    description: 'Tecnologia avançada de triagem e processamento mecânico para gerar energia de alto poder calorífico.',
    problemSolved: 'Incentiva a economia circular ao transformar o que seria lixo em recurso energético.',
    targetAudience: 'Indústrias de energia, cimenteiras e grandes geradores.',
    benefits: [
      'Alta eficiência energética controlada',
      'Tecnologia de ponta em valorização',
      'Redução de dependência de recursos naturais',
      'Rastreabilidade total do processo'
    ],
    steps: [
      'Triagem e preparação do resíduo',
      'Processamento mecânico e trituração',
      'Controle de qualidade e poder calorífico',
      'Expedição para valorização energética'
    ],
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1200',
    path: '/cdr'
  },
  {
    id: 'gerenciamento-total',
    name: 'Gerenciamento Total (TWM)',
    description: 'Solução 360° com equipe residente para a gestão completa de resíduos dentro da planta do cliente.',
    problemSolved: 'Complexidade operacional e riscos regulatórios na gestão interna de resíduos.',
    targetAudience: 'Grandes indústrias e parques fabris.',
    benefits: [
      'Foco total no seu core business',
      'Equipe técnica residente qualificada',
      'Redução de custos e desperdícios',
      'Conformidade legal (ISO 14001) garantida'
    ],
    steps: [
      'Mapeamento dos fluxos de resíduos',
      'Implantação de coletores e sinalização',
      'Operação interna e triagem',
      'Logística externa e destinação final'
    ],
    image: 'https://images.unsplash.com/photo-1591336395442-1bf7976e828d?auto=format&fit=crop&q=80&w=1200',
    path: '/solucoes/gerenciamento-total'
  }
];

export const units: Unit[] = [
  {
    id: 'aruja-matriz',
    name: 'Unidade Arujá - Beneficiamento',
    city: 'Arujá',
    state: 'SP',
    services: ['Beneficiamento', 'Logística'],
    address: 'Av. Renova, 420 – Jd. Fazenda Rincão, Arujá – SP',
    phone: '(11) 4654-2740',
    email: 'comercial@gruporenova.com.br',
    hours: '08:00 - 18:00',
    coords: { lat: -23.3956, lng: -46.3214 }
  },
  {
    id: 'aruja-tratamento',
    name: 'Unidade Arujá - Tratamento',
    city: 'Arujá',
    state: 'SP',
    services: ['Tratamento de Resíduos', 'Coprocessamento'],
    address: 'Av. Takara Belmont, 178 – Centro Ind. Arujá – SP',
    phone: '(11) 4655-2445',
    email: 'comercial@gruporenova.com.br',
    hours: '08:00 - 18:00',
    coords: { lat: -23.3960, lng: -46.3220 }
  },
  {
    id: 'guarulhos',
    name: 'Unidade Guarulhos - Reciclagem',
    city: 'Guarulhos',
    state: 'SP',
    services: ['Reciclagem', 'Briquetagem'],
    address: 'Rua João Alfredo, 16 – Cumbica – Guarulhos – SP',
    phone: '(11) 2412-5777',
    email: 'comercial@gruporenova.com.br',
    hours: '08:00 - 18:00',
    coords: { lat: -23.4428, lng: -46.4172 }
  },
  {
    id: 'ijaci',
    name: 'Unidade Ijaci',
    city: 'Ijaci',
    state: 'MG',
    services: ['Tratamento', 'Coprocessamento'],
    address: 'Rod. Agnésio Carvalho de Souza, km 6,5 – Ijaci – MG',
    phone: '(35) 3407-0208',
    email: 'comercial@gruporenova.com.br',
    hours: '08:00 - 18:00',
    coords: { lat: -21.1683, lng: -44.9283 }
  },
  {
    id: 'farroupilha',
    name: 'Unidade Farroupilha',
    city: 'Farroupilha',
    state: 'RS',
    services: ['Tratamento', 'Coprocessamento'],
    address: 'Rod. RS 122, Km 64 – Farroupilha – RS',
    phone: '(54) 3268-0014',
    email: 'comercial@gruporenova.com.br',
    hours: '08:00 - 18:00',
    coords: { lat: -29.2274, lng: -51.3482 }
  },
  {
    id: 'balsa-nova',
    name: 'Unidade Balsa Nova',
    city: 'Balsa Nova',
    state: 'PR',
    services: ['Tratamento', 'CDR', 'Coprocessamento'],
    address: 'Rod. BR 277, km 126,2 – Balsa Nova – PR',
    phone: '(41) 3170-7000',
    email: 'comercial@gruporenova.com.br',
    hours: '08:00 - 18:00',
    coords: { lat: -25.5833, lng: -49.6333 }
  },
  {
    id: 'pojuca',
    name: 'Unidade Pojuca',
    city: 'Pojuca',
    state: 'BA',
    services: ['Tratamento', 'Coprocessamento'],
    address: 'Rod. BA 533, s/n – Pojuca – BA',
    phone: '(71) 3500-2976',
    email: 'comercial@gruporenova.com.br',
    hours: '08:00 - 18:00',
    coords: { lat: -12.4333, lng: -38.3333 }
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'O Papel do CDR na Economia Circular Industrial',
    excerpt: 'Entenda como o Combustível Derivado de Resíduos está revolucionando a matriz energética das indústrias brasileiras.',
    category: 'CDR',
    date: '10 Set 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '2',
    title: 'ESG e a Gestão Total de Resíduos',
    excerpt: 'Como o Gerenciamento Total de Resíduos (TWM) contribui para os indicadores de sustentabilidade da sua empresa.',
    category: 'Gestão',
    date: '05 Set 2026',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200'
  }
];

export const stats = [
  { label: 'Anos de Experiência', value: '38+' },
  { label: 'Unidades no Brasil', value: '7+' },
  { label: 'Certificação Ambiental', value: 'ISO 14001' },
  { label: 'Estados Atendidos', value: '5+' }
];

