export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  deliverables: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'arquitetonico',
    title: 'Projeto Arquitetônico Autoral',
    subtitle: 'Do conceito inicial ao detalhamento executivo completo.',
    iconName: 'compass',
    description: 'Desenvolvimento completo de residências e edifícios de alto padrão. Alinhamos estética contemporânea, estudo de insolação, legislação urbanística e otimização de materiais.',
    deliverables: [
      'Estudo Preliminar e Maquete 3D ultra-realista',
      'Projeto Legal para aprovação em órgãos municipais',
      'Detalhamento Executivo de arquitetura e estruturas',
      'Compatibilização de projetos complementares (hidráulica, elétrica, automação)'
    ]
  },
  {
    id: 'interiores',
    title: 'Design de Interiores & Liofilização',
    subtitle: 'Curadoria de mobiliário, materiais e sensações táteis.',
    iconName: 'layout',
    description: 'Transformação espacial com curadoria de mobiliário assinado por designers nacionais e internacionais, marcenaria sob medida, projetos de iluminação cênica e escolha de texturas.',
    deliverables: [
      'Projeto de Marcenaria Executiva detalhada',
      'Curadoria de Obras de Arte, Peças e Iluminação',
      'Projeto Luminotécnico Cênico',
      'Especificação completa de Revestimentos e Acabamentos'
    ]
  },
  {
    id: 'acompanhamento',
    title: 'Gestão & Acompanhamento de Obra',
    subtitle: 'Rigor técnico para garantir fidelidade absoluta ao projeto.',
    iconName: 'shield-check',
    description: 'Supervisão técnica contínua no canteiro de obras para assegurar que a execução siga rigorosamente os padrões de qualidade, prazos e orçamentos estabelecidos.',
    deliverables: [
      'Visitas periódicas de fiscalização técnica',
      'Relatórios semanais de evolução da obra',
      'Gestão de fornecedores de alto padrão e artesãos',
      'Controle de qualidade e conferência de medidas no local'
    ]
  },
  {
    id: 'consultoria',
    title: 'Consultoria & Masterplan',
    subtitle: 'Orientação estratégica para aquisição e viabilidade de lotes.',
    iconName: 'map',
    description: 'Análise técnica de terrenos, viabilidade construtiva e direcionamento estético para clientes que desejam tomar decisões assertivas antes da compra do imóvel.',
    deliverables: [
      'Análise de topografia, insolação e vistas dominantes',
      'Estudo de viabilidade de metragem e uso do solo',
      'Relatório de potencial construtivo e diretrizes de investimento',
      'Sessão de consultoria estratégica com a arquiteta'
    ]
  }
];
