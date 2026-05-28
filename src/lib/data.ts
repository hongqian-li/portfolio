export const skills = [
  {
    category: "Cloud & Infrastructure",
    items: ["Azure", "Terraform", "Docker", "Linux", "Nginx", "Apache", "Kubernetes"],
  },
  {
    category: "AI & Machine Learning",
    items: ["RAG Pipelines", "ChromaDB", "MCP Servers", "LLM Integration", "Agentic AI", "Prompt Engineering"],
  },
  {
    category: "Languages & Frameworks",
    items: ["Python", "Flask", "Java", "SQL", "Bash", "HTML/CSS", "REST APIs", "UiPath (RPA)", "Robot Framework"],
  },
  {
    category: "DevOps & Tooling",
    items: ["GitHub Actions", "CI/CD", "Git", "Azure DevOps", "Agile/Scrum", "Jira", "Postman", "Figma"],
  },
  {
    category: "Data & Analytics",
    items: ["Power BI", "Excel", "Google Analytics"],
  },
  {
    category: "Compliance & Security",
    items: ["EU AI Act", "GDPR Article 9", "Privacy by Design", "Zero Trust", "Security by Design", "Risk Classification"],
  },
];

export const projects = [
  {
    number: "01",
    title: "accommodation-chatbot",
    tagline: "Thesis concepts, working tools",
    description:
      "My first Finnish summer was spent at HAMK's service desk handling repetitive student arrival emails, exactly the kind of task automation solves better. Built with Claude Code as a hands-on extension of my GDPR-compliant AI chatbot research: RAG on a verified accommodation knowledge base, plus a custom MCP server for real agentic tool use. The thesis privacy classifier runs on every request, routing sensitive queries to human support instead of the LLM.",
    tech: ["Python", "Flask", "ChromaDB", "Ollama", "MCP Server", "RAG"],
    github: "https://github.com/hongqian-li/accommodation-chatbot",
    highlights: [
      "4 live MCP tools: VR train schedules, weather, housing listings, web search",
      "Web search fallback when RAG confidence is low",
      "Built with Claude Code, turning thesis research into a working agentic app",
    ],
  },
  {
    number: "02",
    title: "Azure Cloud File Sharing App",
    tagline: "Enterprise-grade cloud infrastructure from scratch",
    description:
      "The capstone for Cloud Computing at UAS Technikum Wien (Erasmus 2025/26), synthesising a semester of hands-on Terraform labs and Azure service work into one fully architected application. A Flask file-sharing app backed by Azure Blob Storage and SQL Database, deployed across a three-tier private network: Application Gateway as the single public entry point, App Service on a delegated subnet, and backend services behind private endpoints with no direct internet access. Every resource is defined via Terraform across five sequential phases, no manual portal configuration.",
    tech: ["Azure", "Terraform", "Python", "Flask", "Blob Storage", "Azure SQL"],
    github: "https://github.com/hongqian-li/cloud-computing-technikum-wien/tree/main/azure-cloud-file-sharing-app",
    highlights: [
      "Three-tier network: App Gateway / App Service / private endpoints",
      "Blob Storage and SQL isolated behind private endpoints, no public data access",
      "Terraform across 5 phases: networking, storage, DB, app, gateway",
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
      "Five months in Vienna as an Erasmus student, the most memorable of my degree. Built a wide social circle with students from across the world. Focused on cloud computing and IT infrastructure, with additional courses spanning industrial informatics, Python, and international marketing.",
  },
  {
    period: "Jun – Aug 2025",
    role: "Project Intern",
    org: "HAMK Häme University of Applied Sciences, Hämeenlinna, Finland",
    description:
      "Invited to join based on my previous experience at HAMK and local knowledge of Hämeenlinna. The project aimed to increase the number of students staying in Hämeenlinna after graduation. Conducted user research with 30+ student interviews to identify retention challenges. Designed an app prototype (Figma, 8 screens) and presented technical architecture and business case to stakeholders at Hämeenlinna City Hall.",
  },
  {
    period: "Apr – May 2025",
    role: "RUN-EU: BIP Smart Everything",
    org: "Universidad de Burgos, Burgos, Spain",
    link: "https://run-eu.eu/2025/03/01/bip-smart-everything-connecting-artificial-intelligence-tools-with-business-ideas/",
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
      "Career pivot: moved from China to Finland to build a systematic IT foundation, covering programming, web development, data, machine learning, and automation. The degree laid the groundwork for specialising in software and cloud engineering.",
  },
  {
    period: "Oct 2020 – Aug 2023",
    role: "Student Development Coach",
    org: "Easyke (易课教育), Chengdu, Sichuan, China",
    description:
      "Guided 100+ Chinese students pursuing education abroad (Australia, Canada, UK) with study plans and course selection. Weekly check-ins with students and parents. Handled daily administrative issues and managed renewals and satisfaction.",
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
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Thesis", href: "#thesis" },
  { label: "Background", href: "#background" },
  { label: "Photography", href: "#photography" },
  { label: "Contact", href: "#contact" },
];
