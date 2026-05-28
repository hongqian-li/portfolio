export const skillTiers = [
  {
    tier: "Core",
    items: ["Azure", "Terraform", "Python", "Flask", "Docker", "Linux", "SQL", "Git", "GitHub Actions", "RAG Pipelines", "ChromaDB"],
  },
  {
    tier: "Working knowledge",
    items: ["Kubernetes", "MCP Servers", "LLM Integration", "Hugging Face", "scikit-learn", "pandas", "Prompt Engineering", "Azure DevOps", "Power BI"],
  },
  {
    tier: "Focus",
    items: ["Secure AI Systems", "GDPR-compliant Design", "Cloud-native Infrastructure", "Privacy by Design"],
  },
];

export const projects = [
  {
    number: "01",
    title: "Privacy-Conscious AI Support System",
    tech: ["Python", "Flask", "ChromaDB", "Ollama", "MCP Server", "RAG"],
    github: "https://github.com/hongqian-li/accommodation-chatbot",
    context: "Built with Claude Code, derived from the thesis architecture, for the student housing queries I handled at HAMK's service desk.",
    system: "RAG pipeline over a verified knowledge base with a custom MCP server exposing four live tools (VR train schedules, weather, housing listings, web search). Deterministic classifier routes sensitive queries to human support before any LLM processing. Fail-safe design: uncertain inputs route to human support, not to the model.",
    engineeringHighlight: "LLM-first routing was abandoned due to inconsistent behaviour across models, which led to adopting deterministic-first classification for auditability and GDPR compliance.",
  },
  {
    number: "02",
    title: "Azure Private Network File Sharing System",
    tech: ["Azure", "Terraform", "Python", "Flask", "Blob Storage", "Azure SQL"],
    github: "https://github.com/hongqian-li/cloud-computing-technikum-wien/tree/main/azure-cloud-file-sharing-app",
    context: "Erasmus cloud computing capstone at UAS Technikum Wien (2025/26): secure file sharing deployed on Azure with no manual portal configuration.",
    system: "Three-tier private network: Application Gateway as the only public entry point, App Service on a delegated subnet, Blob Storage and SQL behind private endpoints. Application Insights for monitoring; secrets injected via Terraform environment variables, no hardcoded credentials.",
    engineeringHighlight: "Entire infrastructure across five phases provisioned through Terraform, with an estimated monthly cost of €237 (Norway East, Dec 2024). App Gateway accounts for 78% of spend.",
  },
];

export type TimelineEntry = {
  period: string;
  role: string;
  org: string;
  description: string;
  link?: string;
  github?: string;
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
      "Designed a smart curtain prototype for Getzner Textil AG, integrating intelligence into textile to regulate indoor temperature, lighting, and wellbeing in a single product. Multicultural international team project.",
  },
  {
    period: "Feb – May 2026",
    role: "Thesis – Security by Design for Enterprise AI Chatbots",
    org: "HAMK Häme University of Applied Sciences, Hämeenlinna, Finland",
    description:
      "Designed and built a GDPR-compliant AI chatbot on Azure with Terraform. Researched Security by Design for enterprise AI.",
  },
  {
    period: "Sep 2025 – Jan 2026",
    role: "Exchange Semester – IT Infrastructure & Cloud Computing",
    org: "UAS Technikum Wien, Vienna, Austria",
    description:
      "Five months in Vienna as an Erasmus student, the most memorable of my degree. Worked alongside students from many different countries across Europe, Asia, and the Americas. Focused on cloud computing and IT infrastructure, with additional courses spanning industrial informatics, Python, and international marketing.",
  },
  {
    period: "Jun – Aug 2025",
    role: "Project Intern",
    org: "HAMK Häme University of Applied Sciences, Hämeenlinna, Finland",
    description:
      "Invited to join based on my previous experience at HAMK and local knowledge of Hämeenlinna. The project aimed to increase the number of students staying in Hämeenlinna after graduation. Conducted user research with 30+ student interviews to identify retention challenges. Designed an app prototype (Figma, 8 screens) and presented system architecture and implementation details to stakeholders at Hämeenlinna City Hall.",
  },
  {
    period: "Apr – May 2025",
    role: "RUN-EU: BIP Smart Everything",
    org: "Universidad de Burgos, Burgos, Spain",
    link: "https://run-eu.eu/2025/03/01/bip-smart-everything-connecting-artificial-intelligence-tools-with-business-ideas/",
    github: "https://github.com/Tupolaa/BIP-AI-model",
    image: "/images/run-eu-smart-everything.jpeg",
    description:
      "Built an AI tool to process paper and digital invoices: automatic data extraction, calculations, and summaries. Coded front-end and integrated AI models using Python and Hugging Face. Recognised as one of the best presenters at the final showcase.",
  },
  {
    period: "Oct – Dec 2024",
    role: "Demola Global Innovator",
    org: "Tampere, Finland",
    link: "https://portal.demola.net/projects/1017",
    certificate: "/images/certificate-demola.jpeg",
    image: "/images/demola.jpeg",
    description:
      "Collaborated on the 'AI where you need it?' innovation project. Designed and prototyped Content Pilot, a concept for an AI tool for content creators. Conducted user research, iterated on product design, visited M-Files office, and presented at Demola National Finals supported by Business Finland.",
  },
  {
    period: "Oct – Nov 2024",
    role: "RUN-EU: Game Changing Games",
    org: "IPCA, Barcelos, Portugal",
    link: "https://run-eu.eu/2024/08/01/sap-game-changing-games-4th-edition/",
    github: "https://github.com/hongqian-li/The-Mouras-Odyssey",
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
      "First summer job in Finland. Handled 30+ daily student inquiries about housing, arrival, and orientation. Tracked 900+ requests in Excel. Coordinated arrival logistics for 100+ international students. Received positive recognition from the HAMK kiinteistöpalvelut team.",
  },
  {
    period: "Aug 2023",
    role: "Started BBA – Degree Programme in Computer Applications (DevOps / Delivering Software Products)",
    org: "HAMK Häme University of Applied Sciences, Hämeenlinna, Finland",
    description:
      "Career pivot: moved from China to Finland to build a core IT foundation, covering programming, web development, data, machine learning, and automation. The degree led to a focus on software and cloud engineering.",
  },
  {
    period: "Oct 2020 – Aug 2023",
    role: "Student Development Coach",
    org: "Easyke (易课教育), Chengdu, Sichuan, China",
    description:
      "Guided 100+ Chinese students pursuing education abroad (Australia, Canada, UK) with study plans and course selection. Weekly check-ins with students and parents. Handled daily administrative issues, subscription renewals, and customer follow-ups.",
  },
  {
    period: "Dec 2018 – Apr 2020",
    role: "Progress Advisor & MC",
    org: "EF English First, Chengdu, Sichuan, China",
    image: "/images/ef-mc.jpeg",
    description:
      "Worked with students aged 3–8 on study planning. Served as NPS specialist, helped drive campus NPS into the top 10 nationally across all EF China campuses. Managed student retention. Hosted the annual gala event twice as MC and provided voice-over for awards ceremony videos.",
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
  { label: "Projects", href: "#projects" },
  { label: "Thesis", href: "#thesis" },
  { label: "Skills", href: "#skills" },
  { label: "Background", href: "#background" },
  { label: "Photography", href: "#photography" },
  { label: "Contact", href: "#contact" },
];
