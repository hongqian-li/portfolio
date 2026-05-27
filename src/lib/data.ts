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

export type TimelineEntry = {
  period: string;
  role: string;
  org: string;
  description: string;
};

export const timelineTech: TimelineEntry[] = [
  {
    period: "Feb – May 2026",
    role: "Thesis – Security by Design for Enterprise AI Chatbots",
    org: "HAMK Häme University of Applied Sciences",
    description:
      "Designed and built a GDPR-compliant AI chatbot on Azure with Terraform. Researched Security by Design for enterprise AI. Developed agentic AI application with custom MCP servers and RAG pipelines.",
  },
  {
    period: "Apr – May 2026",
    role: "RUN-EU: Future Explorations",
    org: "FHV, Vorarlberg, Austria",
    description:
      "Smart textile design challenge. Multicultural team project.",
  },
  {
    period: "Sep 2025 – Jan 2026",
    role: "Exchange Semester – IT Infrastructure & Cloud Computing",
    org: "UAS Technikum Wien, Vienna, Austria",
    description:
      "Focused on cloud computing and IT infrastructure. Part of an international student cohort in Vienna.",
  },
  {
    period: "Apr – May 2025",
    role: "RUN-EU: BIP Smart Everything",
    org: "Universidad de Burgos, Spain",
    description:
      "Built an AI tool to process paper and digital invoices — automatic data extraction, calculations, and summaries. Coded front-end and integrated AI models using Python and Hugging Face. Multicultural team of business and tech students.",
  },
  {
    period: "Oct – Dec 2024",
    role: "Demola Global Innovator",
    org: "Tampere, Finland",
    description:
      "Collaborated on the “AI where you need it?” innovation project. Conducted user research, iterated on product design, visited M-Files office, and presented at Demola National Finals supported by Business Finland.",
  },
  {
    period: "Oct – Nov 2024",
    role: "RUN-EU: Game Changing Games",
    org: "IPCA, Barcelos, Portugal",
    description:
      "Designed game environments in Unity (modern and ancient eras). Coded game menu and NPC panel in C#.",
  },
  {
    period: "May – Aug 2024",
    role: "Customer Service Specialist",
    org: "HAMK Häme University of Applied Sciences",
    description:
      "Handled 30+ daily student inquiries about housing, arrival, and orientation. Tracked 900+ requests in Excel. Coordinated arrival logistics for 100+ international students.",
  },
  {
    period: "Aug 2023",
    role: "Started BBA – Degree Programme in Computer Applications",
    org: "HAMK Häme University of Applied Sciences, Finland",
    description:
      "Career pivot: moved from China to Finland to retrain in software and cloud engineering.",
  },
];

export const timelineBridge: TimelineEntry[] = [
  {
    period: "Jun – Aug 2025",
    role: "Project Intern",
    org: "HAMK Häme University of Applied Sciences",
    description:
      "Conducted user research with 30+ student interviews to identify retention challenges. Designed an app prototype (Figma, 8 screens) and presented technical architecture and business case to stakeholders.",
  },
  {
    period: "May – Aug 2024",
    role: "Customer Service Specialist",
    org: "HAMK Häme University of Applied Sciences",
    description:
      "Handled 30+ daily student inquiries. Tracked 900+ requests. Coordinated 100+ international students' arrival logistics.",
  },
];

export const timelinePrevious: TimelineEntry[] = [
  {
    period: "Oct 2020 – Aug 2023",
    role: "Student Development Coach",
    org: "Easyke (易课教育), Sichuan, China",
    description:
      "Guided 100+ international students (Australia, Canada, UK) with study plans and course selection. Weekly check-ins with students and parents. Managed renewals and satisfaction. Used DingTalk and Excel for student tracking.",
  },
  {
    period: "Dec 2018 – Apr 2020",
    role: "Progress Advisor & MC",
    org: "EF English First, Chengdu, China",
    description:
      "Worked with students aged 3–8. Led initiative to improve campus NPS across 10 Chengdu campuses — from bottom-ranked nationally to top 10. Hosted EF Chengdu annual gala events as MC. Coordinated course renewals and seasonal sales.",
  },
  {
    period: "2014 – 2018",
    role: "Bachelor of Fine Arts – Broadcasters and Hosts",
    org: "Sichuan University of Media and Communications (SUMC), China",
    description:
      "Trained in broadcast journalism, on-camera presentation, and deadline-driven production.",
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
