import type { Content, Locale } from "./types";

const pt: Content = {
  nav: [
    { id: "sobre", label: "Sobre" },
    { id: "experiencia", label: "Experiência" },
    { id: "projetos", label: "Projetos" },
    { id: "formacao", label: "Formação" },
    { id: "contato", label: "Contato" },
  ],
  hero: {
    eyebrow: "Desenvolvedor Fullstack · São Paulo",
    title: "Sistemas críticos para o setor financeiro.",
    lead: "Sou o João Victor. Trabalho com backend em Java, mensageria e performance em aplicações que não podem parar, e com Angular e React quando o trabalho chega ao front.",
    status: "Atualmente na Avanade",
    primaryCta: "Entrar em contato",
    secondaryCta: "Ver experiência",
    cvCta: "Baixar CV",
  },
  stack: {
    title: "Tecnologias do dia a dia",
  },
  about: {
    label: "Sobre",
    title: "Backend no centro, fullstack na prática.",
    paragraphs: [
      "Desenvolvo software desde 2023. Comecei no técnico em Desenvolvimento de Sistemas da ETEC, me formei em Análise e Desenvolvimento de Sistemas pela Cruzeiro do Sul e hoje faço pós-graduação em Arquitetura de Software na FIAP.",
      "A maior parte da minha experiência é em sistemas financeiros: Banking as a Service, integrações sujeitas às regras do BACEN e aplicações internas da Caixa. No backend uso Java com Spring Boot e Quarkus, PostgreSQL, Redis e RabbitMQ; no front, Angular e React.",
      "Gosto de problemas de performance e confiabilidade: cache no lugar certo, processamento assíncrono quando faz sentido e código que outra pessoa consegue manter depois.",
    ],
    facts: [
      { label: "Local", value: "São Paulo, SP" },
      { label: "Atuação", value: "Fullstack Pleno na Avanade" },
      { label: "Estudando", value: "Pós em Arquitetura de Software (FIAP)" },
      {
        label: "Idiomas",
        value: "Português nativo · Inglês intermediário · Espanhol básico",
      },
    ],
  },
  experience: {
    label: "Experiência",
    title: "Onde trabalhei",
    present: "atual",
    clientsLabel: "Clientes e projetos",
    items: [
      {
        company: "Avanade",
        role: "Desenvolvedor Fullstack Pleno",
        period: "04/2026",
        location: "São Paulo, SP",
        current: true,
        highlights: [
          "Diagnóstico e correção de incidentes em produção, mantendo a estabilidade e a continuidade das aplicações.",
          "Sustentação de sistemas legados de missão crítica, com foco em integridade operacional e redução de riscos.",
          "Participação em iniciativas de modernização para reduzir dívida técnica e melhorar performance e escalabilidade.",
        ],
      },
      {
        company: "Fóton Informática",
        role: "Analista e Desenvolvedor de Software",
        period: "2023",
        location: "São Paulo, SP",
        current: true,
        highlights: [
          "Integração entre microsserviços em Java (Quarkus e Spring Boot) com PostgreSQL e Redis, em pipeline de CI/CD.",
          "Filas no RabbitMQ para processos assíncronos, como a consulta de extratos do FGTS acima de 90 dias e o envio de códigos de verificação por SMS.",
          "Ambientes de teste em contêineres com Docker.",
        ],
        clients: [
          {
            name: "J17 Bank",
            summary: "Banking as a Service",
            highlights: [
              "Sistemas escaláveis que servem de base para outros parceiros financeiros.",
              "Fluxos de TED via STR e proteção de dados sensíveis seguindo as normas do BACEN.",
            ],
          },
          {
            name: "Caixa · SIGCX",
            summary: "Sistema Gerenciador Caixa",
            highlights: [
              "Novas funcionalidades e correção de bugs conforme as regras de negócio.",
              "Camadas de segurança com Spring Security e cache com Spring Cache (Redis) para aliviar o banco em endpoints lentos.",
            ],
          },
        ],
      },
      {
        company: "Exército Brasileiro",
        role: "Aspirante a Oficial",
        period: "01/2023 – 12/2023",
        location: "São Paulo, SP",
        highlights: [
          "Apoio à equipe em demandas variadas, com agilidade e organização.",
          "Planejamento da rotina para otimizar o tempo e antecipar imprevistos.",
          "Tomada de decisão com segurança e autonomia no dia a dia.",
        ],
      },
    ],
  },
  projects: {
    label: "Projetos",
    title: "Projetos e estudos",
    intro:
      "Alguns repositórios públicos, de desafios técnicos a sites publicados.",
    repo: "Código",
    live: "Site",
    items: [
      {
        name: "Compra Programada de Ações",
        kind: "Desafio técnico",
        description:
          "Backend de compra programada de ações (carteira Top Five): adesão de clientes, importação de cotações COTAHIST da B3, motor de compra com lote padrão e fracionário, custódia de resíduos e eventos de IR publicados no Kafka.",
        stack: [".NET 8", "EF Core", "MySQL", "Kafka", "Docker"],
        repoUrl: "https://github.com/joaovdeoliveira/teste-itau",
      },
      {
        name: "Decolando Your English",
        kind: "Site para cliente",
        description:
          "Site de aulas de inglês online com identidade visual de aviação, tema claro e escuro e formulário que monta a mensagem da aula experimental e abre o WhatsApp.",
        stack: ["React", "TypeScript", "Vite", "Vitest"],
        repoUrl: "https://github.com/joaovdeoliveira/decolando-english",
        liveUrl: "https://joaovdeoliveira.github.io/decolando-english/",
      },
      {
        name: "API de Pedidos",
        kind: "Desafio técnico",
        description:
          "API REST de pedidos com CRUD completo, persistência em SQLite, documentação Swagger e testes de integração.",
        stack: ["Node.js", "Express", "SQLite", "Jest"],
        repoUrl: "https://github.com/joaovdeoliveira/teste-api-pedidos",
      },
    ],
  },
  education: {
    label: "Formação",
    title: "Formação e certificados",
    items: [
      {
        course: "Pós-graduação em Arquitetura de Software",
        institution: "FIAP",
        period: "06/2026",
        current: true,
      },
      {
        course: "Análise e Desenvolvimento de Sistemas",
        institution: "Universidade Cruzeiro do Sul",
        period: "01/2023 – 06/2025",
      },
      {
        course: "Técnico em Desenvolvimento de Sistemas",
        institution: "ETEC",
        period: "01/2020 – 12/2022",
      },
    ],
    certificatesTitle: "Certificados",
    showAll: "Ver todos",
    showLess: "Ver menos",
  },
  contact: {
    label: "Contato",
    title: "Vamos conversar.",
    text: "Estou aberto a oportunidades em backend e fullstack, principalmente em times que cuidam de sistemas de alta disponibilidade. O caminho mais rápido é por e-mail ou LinkedIn.",
    copy: "Copiar e-mail",
    copied: "Copiado",
  },
  footer: {
    builtWith: "Feito com React, Vite e Tailwind.",
    backToTop: "Voltar ao topo",
  },
  a11y: {
    toggleTheme: "Alternar tema claro/escuro",
    toggleLanguage: "Switch to English",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
};

const en: Content = {
  nav: [
    { id: "sobre", label: "About" },
    { id: "experiencia", label: "Experience" },
    { id: "projetos", label: "Projects" },
    { id: "formacao", label: "Education" },
    { id: "contato", label: "Contact" },
  ],
  hero: {
    eyebrow: "Fullstack Developer · São Paulo, Brazil",
    title: "Critical systems for the financial sector.",
    lead: "I'm João Victor. I work on Java backends, messaging and performance for applications that can't go down, and on Angular and React when the work reaches the front end.",
    status: "Currently at Avanade",
    primaryCta: "Get in touch",
    secondaryCta: "See experience",
    cvCta: "Download CV",
  },
  stack: {
    title: "Day-to-day stack",
  },
  about: {
    label: "About",
    title: "Backend at the core, fullstack in practice.",
    paragraphs: [
      "I've been building software since 2023. I started with a Systems Development technical course at ETEC, graduated in Systems Analysis and Development at Cruzeiro do Sul University and I'm now taking a postgraduate course in Software Architecture at FIAP.",
      "Most of my experience is in financial systems: Banking as a Service, integrations bound by Central Bank of Brazil (BACEN) rules and internal applications for Caixa. On the backend I use Java with Spring Boot and Quarkus, PostgreSQL, Redis and RabbitMQ; on the front end, Angular and React.",
      "I enjoy performance and reliability problems: caching in the right place, async processing when it pays off and code the next person can actually maintain.",
    ],
    facts: [
      { label: "Location", value: "São Paulo, Brazil" },
      { label: "Role", value: "Mid-level Fullstack Developer at Avanade" },
      { label: "Studying", value: "Postgrad in Software Architecture (FIAP)" },
      {
        label: "Languages",
        value: "Portuguese (native) · English (intermediate) · Spanish (basic)",
      },
    ],
  },
  experience: {
    label: "Experience",
    title: "Where I've worked",
    present: "present",
    clientsLabel: "Clients and projects",
    items: [
      {
        company: "Avanade",
        role: "Mid-level Fullstack Developer",
        period: "04/2026",
        location: "São Paulo, Brazil",
        current: true,
        highlights: [
          "Diagnosing and fixing production issues to keep applications stable, reliable and running.",
          "Ongoing support for mission-critical legacy systems, focused on operational integrity and risk mitigation.",
          "Taking part in modernization initiatives that reduce technical debt and improve performance and scalability.",
        ],
      },
      {
        company: "Fóton Informática",
        role: "Software Analyst and Developer",
        period: "2023",
        location: "São Paulo, Brazil",
        current: true,
        highlights: [
          "Integration between Java microservices (Quarkus and Spring Boot) backed by PostgreSQL and Redis, in a CI/CD pipeline.",
          "RabbitMQ queues for async workloads, such as FGTS statements older than 90 days and SMS verification codes.",
          "Containerized test environments with Docker.",
        ],
        clients: [
          {
            name: "J17 Bank",
            summary: "Banking as a Service",
            highlights: [
              "Scalable systems that other financial partners build on.",
              "Wire transfer (TED via STR) flows and protection of sensitive data under BACEN regulations.",
            ],
          },
          {
            name: "Caixa · SIGCX",
            summary: "Caixa Management System",
            highlights: [
              "New features and bug fixes following established business rules.",
              "Security layers with Spring Security and caching with Spring Cache (Redis) to offload the database on slow endpoints.",
            ],
          },
        ],
      },
      {
        company: "Brazilian Army",
        role: "Officer Candidate",
        period: "01/2023 – 12/2023",
        location: "São Paulo, Brazil",
        highlights: [
          "Supported the team across a range of tasks with speed and organization.",
          "Planned daily work to make the most of time and avoid surprises.",
          "Made decisions with confidence and autonomy in day-to-day situations.",
        ],
      },
    ],
  },
  projects: {
    label: "Projects",
    title: "Projects and studies",
    intro:
      "A few public repositories, from technical challenges to live websites.",
    repo: "Code",
    live: "Website",
    items: [
      {
        name: "Scheduled Stock Purchase",
        kind: "Technical challenge",
        description:
          "Backend for scheduled stock purchases (Top Five basket): client onboarding, B3 COTAHIST quote import, a purchase engine handling standard and fractional lots, residual custody and tax events published to Kafka.",
        stack: [".NET 8", "EF Core", "MySQL", "Kafka", "Docker"],
        repoUrl: "https://github.com/joaovdeoliveira/teste-itau",
      },
      {
        name: "Decolando Your English",
        kind: "Client website",
        description:
          "Website for online English lessons with an aviation-themed identity, light and dark themes and a form that builds the trial-lesson message and opens WhatsApp.",
        stack: ["React", "TypeScript", "Vite", "Vitest"],
        repoUrl: "https://github.com/joaovdeoliveira/decolando-english",
        liveUrl: "https://joaovdeoliveira.github.io/decolando-english/",
      },
      {
        name: "Orders API",
        kind: "Technical challenge",
        description:
          "REST API for orders with full CRUD, SQLite persistence, Swagger docs and integration tests.",
        stack: ["Node.js", "Express", "SQLite", "Jest"],
        repoUrl: "https://github.com/joaovdeoliveira/teste-api-pedidos",
      },
    ],
  },
  education: {
    label: "Education",
    title: "Education and certificates",
    items: [
      {
        course: "Postgraduate Course in Software Architecture",
        institution: "FIAP",
        period: "06/2026",
        current: true,
      },
      {
        course: "Bachelor's in Systems Analysis and Development",
        institution: "Cruzeiro do Sul University",
        period: "01/2023 – 06/2025",
      },
      {
        course: "Systems Development Technician",
        institution: "ETEC",
        period: "01/2020 – 12/2022",
      },
    ],
    certificatesTitle: "Certificates",
    showAll: "Show all",
    showLess: "Show less",
  },
  contact: {
    label: "Contact",
    title: "Let's talk.",
    text: "I'm open to backend and fullstack opportunities, especially on teams that run high-availability systems. Email or LinkedIn is the fastest way to reach me.",
    copy: "Copy email",
    copied: "Copied",
  },
  footer: {
    builtWith: "Built with React, Vite and Tailwind.",
    backToTop: "Back to top",
  },
  a11y: {
    toggleTheme: "Toggle light/dark theme",
    toggleLanguage: "Mudar para português",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
};

export const content: Record<Locale, Content> = { pt, en };
