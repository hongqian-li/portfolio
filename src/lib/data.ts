export const skills = [
  {
    category: "Cloud & Infrastructure",
    items: ["Azure", "Terraform", "Docker", "Kubernetes", "Azure Functions"],
  },
  {
    category: "AI & Development",
    items: ["Python", "RAG Pipelines", "ChromaDB", "MCP Servers", "LLM Integration"],
  },
  {
    category: "DevOps & Security",
    items: ["GitHub Actions", "CI/CD", "Security by Design", "Zero Trust", "GDPR Compliance"],
  },
  {
    category: "Compliance & Regulation",
    items: ["EU AI Act", "GDPR Article 9", "Privacy by Design", "Risk Classification"],
  },
];

export const projects = [
  {
    number: "01",
    title: "accommodation-chatbot",
    tagline: "Agentic AI with privacy built in",
    description:
      "An agentic AI application that goes beyond Q&A — a custom MCP server exposes 4 tools, letting the AI take real actions. Grounded in a verified knowledge base via RAG (ChromaDB + Ollama/llama3), with a 3-layer GDPR privacy classifier baked into every request.",
    tech: ["Python", "MCP Server", "ChromaDB", "Ollama", "Flask", "RAG"],
    github: "https://github.com/hongqian-li/accommodation-chatbot",
    highlights: [
      "Custom MCP server with 4 action tools",
      "RAG pipeline grounded in verified knowledge base",
      "3-layer GDPR privacy classifier",
    ],
  },
  {
    number: "02",
    title: "Enterprise AI Chatbot (Thesis)",
    tagline: "Security by Design for production AI",
    description:
      "GDPR-compliant enterprise AI chatbot deployed on Azure with Terraform. Built a novel 3-layer privacy classification system and discovered that deterministic keyword detection outperforms LLM-based classifiers for compliance-critical use cases.",
    tech: ["Azure", "Terraform", "Python", "GPT-4o-mini", "llama3.2", "IaC"],
    github: null,
    highlights: [
      "Deployed to Norway East for GDPR data residency",
      "Key finding: keyword detection beats LLMs for compliance",
      "Zero Trust + EU AI Act transparency requirements",
    ],
  },
];

export const timeline = [
  {
    period: "2024 – 2026",
    track: "tech",
    role: "Thesis & Capstone Projects",
    org: "HAMK University",
    description:
      "Designed and built a GDPR-compliant AI chatbot on Azure. Researched Security by Design for enterprise AI. Developed agentic AI with MCP servers and RAG pipelines.",
  },
  {
    period: "2023 – 2024",
    track: "tech",
    role: "Cloud & DevOps Studies",
    org: "HAMK + Exchange at UAS Technikum Wien",
    description:
      "Deep focus on Azure, Terraform, Docker, Kubernetes, and CI/CD. Exchange semester in Vienna. Participated in RUN-EU program visiting Portugal, Spain, and Austria.",
  },
  {
    period: "2022 – 2023",
    track: "bridge",
    role: "Arrival Specialist",
    org: "HAMK University",
    description:
      "Managed accommodation, logistics, and orientation for 100+ international students. First operational role in Finland — built practical understanding of cross-cultural communication at scale.",
  },
  {
    period: "2021 – 2022",
    track: "bridge",
    role: "Started BBA in Computer Applications",
    org: "HAMK University, Finland",
    description:
      "Career pivot: moved from China to Finland to retrain in software and cloud. Brought communication skills and audience awareness into a technical domain.",
  },
  {
    period: "2018 – 2021",
    track: "previous",
    role: "Presenter, MC & VIP Student Coordinator",
    org: "EF English First, China",
    description:
      "Led annual gala events for hundreds of guests as MC. Managed VIP student services. Developed the ability to read a room, simplify complex ideas, and keep any audience engaged — now applied to AI demos and technical presentations.",
  },
  {
    period: "2014 – 2018",
    track: "previous",
    role: "Television News Broadcasting",
    org: "Sichuan Media University, China",
    description:
      "Trained in broadcast journalism, on-camera presentation, and deadline-driven production. Foundation for clear, confident communication under pressure.",
  },
];

export const nav = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Thesis", href: "#thesis" },
  { label: "Background", href: "#background" },
  { label: "Photography", href: "#photography" },
  { label: "Contact", href: "#contact" },
];
