export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Residencial' | 'Comercial' | 'Interiores' | 'Reformas';
  tagline: string;
  area: string;
  location: string;
  year: string;
  image: any;
  gallery: any[];
  description: string;
  highlights: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'mondrian',
    title: 'Mondrian',
    subtitle: 'Residência Minimalista',
    category: 'Residencial',
    tagline: 'Linhas puras, planos geométricos e integração absoluta com a paisagem.',
    area: '850 m²',
    location: 'Alphaville, SP',
    year: '2025',
    image: require('../../assets/mondrian.png'),
    gallery: [
      require('../../assets/mondrian.png'),
      require('../../assets/hero.png'),
      require('../../assets/featured.png')
    ],
    description: 'A Casa Mondrian foi concebida a partir da premissa da arquitetura essencialista. Painéis de madeira nobre e volumes estruturais aparentes criam uma dinâmica visual marcante entre o interior aquecido e a natureza externa.',
    highlights: [
      'Estrutura em concreto protendido e caixilhos invisíveis',
      'Iluminação natural bioclimática',
      'Interiores assinados com mobiliário italiano exclusivo'
    ]
  },
  {
    id: 'nirnia',
    title: 'Nirnia',
    subtitle: 'Cobertura Duplex Luxury',
    category: 'Interiores',
    tagline: 'Sofisticação cosmopolita em uma paleta monocromática acolhedora.',
    area: '620 m²',
    location: 'Jardins, São Paulo',
    year: '2025',
    image: require('../../assets/nirnia.png'),
    gallery: [
      require('../../assets/nirnia.png'),
      require('../../assets/brera.png'),
      require('../../assets/featured.png')
    ],
    description: 'Projetada para um colecionador de arte, a Cobertura Nirnia combina lâminas de nogueira escura, ilhas monolíticas em mármore nero marquina e iluminação cênica automatizada.',
    highlights: [
      'Ilha gourmet integrada em mármore importado',
      'Marcenaria sob medida com ferragens ocultas',
      'Automação residencial de última geração'
    ]
  },
  {
    id: 'artex',
    title: 'Artex',
    subtitle: 'Villa Sustentável & Atemporal',
    category: 'Residencial',
    tagline: 'Pé-direito duplo e arquitetura que respira luz natural.',
    area: '1.100 m²',
    location: 'Quinta da Baroneza, SP',
    year: '2024',
    image: require('../../assets/artex.png'),
    gallery: [
      require('../../assets/artex.png'),
      require('../../assets/hero.png'),
      require('../../assets/mondrian.png')
    ],
    description: 'A Villa Artex redefine o conceito de refúgio no campo. Amplas vãos livres sem pilares intermediários proporcionam vista panorâmica ininterrupta para as montanhas.',
    highlights: [
      'Cobertura verde com captação de água da chuva',
      'Piso em travertino navona em réguas gigantes',
      'Paisagismo nativo integrado à piscina de borda infinita'
    ]
  },
  {
    id: 'brera',
    title: 'Brera',
    subtitle: 'Lounge & Residência Urbana',
    category: 'Interiores',
    tagline: 'Texturas táteis, iluminação suave e conforto arquitetônico.',
    area: '480 m²',
    location: 'Lago Sul, Brasília',
    year: '2024',
    image: require('../../assets/brera.png'),
    gallery: [
      require('../../assets/brera.png'),
      require('../../assets/nirnia.png'),
      require('../../assets/featured.png')
    ],
    description: 'O Projeto Brera foca na experiência sensorial. Sofás modulares curvos em couro conhaque e paredes em estuque veneziano criam uma atmosfera intimista e extremamente elegante.',
    highlights: [
      'Design orgânico e móveis curvos sob medida',
      'Lareira ecológica integrada em pedra vulcânica',
      'Revestimentos cerâmicos artesanais'
    ]
  },
  {
    id: 'alea-pro',
    title: 'Alea Pro',
    subtitle: 'Corporate Suite & Showroom',
    category: 'Comercial',
    tagline: 'Espaço corporativo de prestígio com identidade contemporânea.',
    area: '750 m²',
    location: 'Faria Lima, São Paulo',
    year: '2025',
    image: require('../../assets/featured.png'),
    gallery: [
      require('../../assets/featured.png'),
      require('../../assets/nirnia.png'),
      require('../../assets/hero.png')
    ],
    description: 'Desenvolvido para uma gestora de investimentos de alto padrão, o projeto Alea Pro une sobriedade, acústica impecável e layouts de trabalho adaptáveis.',
    highlights: [
      'Tratamento acústico camuflado em marcenaria',
      'Divisórias duplas em vidro acústico com opacidade ajustável',
      'Espaços de descompressão com café boutique privativo'
    ]
  }
];
