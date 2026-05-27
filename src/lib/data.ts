export const skills = [
  {
    category: "Cloud & Infrastructure",
    items: ["Azure", "Terraform", "Docker", "Kubernetes", "Azure Functions"],
  },
  {
    category: "AI & Development",
    items: ["Python", "RAG Pipelines", "ChromaDB", "MCP Servers", "LLM Integration", "Agentic AI"],
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
  link?: string;
  certificate?: string;
  image?: string;
};

export const timeline: TimelineEntry[] = [
  {
    period: "Apr – May 2026",
    role: "RUN-EU: Future Explorations",
    org: "FHV, Vorarlberg, Austria",
    link: "https://run.eu/products/bip-futexplo-01",
    image: "/images/run-eu-future-explorations.jpeg",
    description:
      "Designed a smart curtain prototype for Getzner Textil AG — integrating intelligence into textile to regulate indoor temperature, lighting, and wellbeing in a single product. Multicultural international team project.",
  },
  {
    period: "Feb – May 2026",
    role: "Thesis – Security by Design for Enterprise AI Chatbots",
    org: "HAMK Häme University of Applied Sciences, Hämeenlinna, Finland",
    description:
      "Designed and built a GDPR-compliant AI chatbot on Azure with Terraform. Researched Security by Design for enterprise AI. Developed agentic AI application with custom MCP servers and RAG pipelines.",
  },
  {
    period: "Sep 2025 – Jan 2026",
    role: "Exchange Semester – IT Infrastructure & Cloud Computing",
    org: "UAS Technikum Wien, Vienna, Austria",
    description:
      "Focused on cloud computing and IT infrastructure. Part of an international student cohort in Vienna.",
  },
  {
    period: "Jun – Aug 2025",
    role: "Project Intern",
    org: "HAMK Häme University of Applied Sciences, Hämeenlinna, Finland",
    description:
      "Part of the HAMK Home Design Factory project. Conducted user research with 30+ student interviews to identify retention challenges. Designed an app prototype (Figma, 8 screens) and presented technical architecture and business case to stakeholders at Hämeenlinna City Hall.",
  },
  {
    period: "Apr – May 2025",
    role: "RUN-EU: BIP Smart Everything",
    org: "Universidad de Burgos, Burgos, Spain",
    link: "https://run-eu.eu/2025/03/01/bip-smart-everything-connecting-artificial-intelligence-tools-with-business-ideas/",
    image: "/images/run-eu-smart-everything.jpeg",
    description:
      "Built an AI tool to process paper and digital invoices — automatic data extraction, calculations, and summaries. Coded front-end and integrated AI models using Python and Hugging Face. Recognised as one of the best presenters at the final showcase.",
  },
  {
    period: "Oct – Dec 2024",
    role: "Demola Global Innovator",
    org: "Tampere, Finland",
    link: "https://portal.demola.net/projects/1017",
    certificate: "/images/certificate-demola.jpeg",
    image: "/images/demola.jpeg",
    description:
      "Collaborated on the 'AI where you need it?' innovation project. Built Content Pilot — an AI tool for content creators. Conducted user research, iterated on product design, visited M-Files office, and presented at Demola National Finals supported by Business Finland.",
  },
  {
    period: "Oct – Nov 2024",
    role: "RUN-EU: Game Changing Games",
    org: "IPCA, Barcelos, Portugal",
    link: "https://run-eu.eu/2024/08/01/sap-game-changing-games-4th-edition/",
    certificate: "/images/certificate-run-eu-game.jpeg",
    image: "/images/run-eu-game-changing.jpeg",
    description:
      "Designed 3D game environments in Unity (modern and ancient eras). Coded game menu and NPC panel in C#.",
  },
  {
    period: "May – Aug 2024",
    role: "Customer Service Specialist",
    org: "HAMK Häme University of Applied Sciences, Hämeenlinna, Finland",
    description:
      "Handled 30+ daily student inquiries about housing, arrival, and orientation. Tracked 900+ requests in Excel. Coordinated arrival logistics for 100+ international students.",
  },
  {
    period: "Aug 2023",
    role: "Started BBA – Degree Programme in Computer Applications (DevOps / Delivering Software Products)",
    org: "HAMK Häme University of Applied Sciences, Hämeenlinna, Finland",
    description:
      "Career pivot: moved from China to Finland to retrain in software and cloud engineering.",
  },
  {
    period: "Oct 2020 – Aug 2023",
    role: "Student Development Coach",
    org: "Easyke (易课教育), Chengdu, Sichuan, China",
    description:
      "Guided 100+ international students (Australia, Canada, UK) with study plans and course selection. Weekly check-ins with students and parents. Managed renewals and satisfaction.",
  },
  {
    period: "Dec 2018 – Apr 2020",
    role: "Progress Advisor & MC",
    org: "EF English First, Chengdu, Sichuan, China",
    image: "/images/ef-mc.jpeg",
    description:
      "Worked with students aged 3–8. Led initiative to improve campus NPS across 10 Chengdu campuses — from bottom-ranked nationally to top 10. Hosted EF Chengdu annual gala events as MC.",
  },
  {
    period: "2014 – 2018",
    role: "Bachelor of Fine Arts – Broadcasting and Hosting",
    org: "Sichuan University of Media and Communications (SUMC), Chengdu, China",
    image: "/images/news-broadcast.jpeg",
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
