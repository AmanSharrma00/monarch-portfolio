export const profile = {
  name: "Aman Sharma",
  brand: "MONARCH",
  title: "Software + AI Engineer",
  graduationYear: "2027",
  status: "OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES",
  tagline: "I DON'T JUST WRITE CODE.\nI BUILD SYSTEMS.",
  subtitle:
    "Building full-stack products, intelligent automation systems, and AI-driven solutions through experimentation, engineering, and measurable outcomes.",
  email: "amansharmaasr00@gmail.com",
  github: "https://github.com/AmanSharrma00",
  linkedin: "https://www.linkedin.com/in/amansharrma00/",
  resumeUrl: "/resume.pdf",
};

export const navItems = [
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "journey", label: "Journey" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const philosophy = [
  {
    phase: "Understand",
    desc: "Define the problem precisely. Map constraints, stakeholders, and success criteria before touching code.",
  },
  {
    phase: "Design",
    desc: "Architect systems with clear boundaries. Choose patterns and data models that survive contact with reality.",
  },
  {
    phase: "Build",
    desc: "Implement with discipline. Clean interfaces, typed contracts, and code the next engineer can read.",
  },
  {
    phase: "Validate",
    desc: "Test assumptions with data. Unit tests, integration tests, and real-world edge cases.",
  },
  {
    phase: "Deploy",
    desc: "Ship to production with confidence. CI/CD pipelines, monitoring, and rollback strategies.",
  },
  {
    phase: "Improve",
    desc: "Measure outcomes. Iterate based on evidence, not opinion. Systems get better with use.",
  },
];

export const capabilities = [
  {
    title: "Full-Stack Systems",
    icon: "Layers",
    tech: [
      "React",
      "Node.js",
      "Express",
      "REST APIs",
      "JWT",
      "MongoDB",
      "React Query",
    ],
    project: "Sahayak",
    desc: "End-to-end web platforms with authentication, data modeling, and production deployment.",
  },
  {
    title: "AI & Intelligent Automation",
    icon: "BrainCircuit",
    tech: [
      "Python",
      "LangChain",
      "LLMs",
      "Prompt Engineering",
      "Structured Output",
      "Computer Vision",
      "Automation",
    ],
    project: "Automation Bot",
    desc: "LLM-driven pipelines that extract, structure, and act on unstructured data.",
  },
  {
    title: "Data & Backend Engineering",
    icon: "Database",
    tech: [
      "Java",
      "JDBC",
      "MySQL",
      "ACID Transactions",
      "Schema Design",
      "RBAC",
      "Data Integrity",
    ],
    project: "Sahayak",
    desc: "Relational data systems with transactional integrity and role-based access control.",
  },
  {
    title: "Intelligent Systems",
    icon: "Cpu",
    tech: ["ESP32", "IoT", "Sensors", "Computer Vision", "AI Pipelines"],
    project: "Smart Agro-Care",
    desc: "Edge devices and AI models working together in real-world physical environments.",
  },
  {
    title: "Cloud & Delivery",
    icon: "Cloud",
    tech: ["Git", "GitHub", "Firebase", "Render", "AWS", "CI/CD"],
    project: "Sahayak",
    desc: "Version control, hosting, and deployment pipelines for production systems.",
  },
  {
    title: "Computer Science",
    icon: "Binary",
    tech: [
      "DSA",
      "OOP",
      "Operating Systems",
      "Computer Networks",
      "Concurrency",
    ],
    project: "Foundational",
    desc: "The fundamentals that make engineering decisions deliberate, not accidental.",
  },
];

export const constellation = [
  {
    group: "Full-Stack",
    nodes: [
      { name: "React", project: "Sahayak", desc: "Frontend UI framework" },
      { name: "Node.js", project: "Sahayak", desc: "JavaScript runtime" },
      { name: "Express", project: "Sahayak", desc: "REST API framework" },
      { name: "MongoDB", project: "Sahayak", desc: "NoSQL database" },
    ],
  },
  {
    group: "AI",
    nodes: [
      {
        name: "Python",
        project: "Automation Bot",
        desc: "Primary AI language",
      },
      {
        name: "LangChain",
        project: "Automation Bot",
        desc: "LLM orchestration",
      },
      { name: "LLM", project: "Automation Bot", desc: "Llama 3.1 via Groq" },
      {
        name: "Structured Output",
        project: "Automation Bot",
        desc: "Pydantic schema validation",
      },
    ],
  },
  {
    group: "Computer Vision",
    nodes: [
      {
        name: "CNN",
        project: "Smart Agro-Care",
        desc: "Custom classification model",
      },
      {
        name: "YOLOv8",
        project: "Smart Agro-Care",
        desc: "Real-time object detection",
      },
      {
        name: "Mask R-CNN",
        project: "Smart Agro-Care",
        desc: "Instance segmentation",
      },
    ],
  },
];

export type ProjectStatus = "DEPLOYED" | "BUILDING" | "RESEARCH";

export interface ProjectCaseStudy {
  problem: string;
  solution: string;
  technologies: string[];
  result: string;
  deepDive: {
    problem: string;
    systemOverview: string;
    architecture: string[];
    engineeringDecisions: string[];
    implementation: string;
    challenges: string[];
    tradeOffs: string[];
    results: string;
    lessons: string[];
    futureImprovements: string[];
  };
}

export interface Project {
  id: string;
  index: number;
  title: string;
  subtitle: string;
  status: ProjectStatus;
  description: string;
  tech: string[];
  highlights: string[];
  links: { github?: string; live?: string; caseStudy?: boolean };
  caseStudy: ProjectCaseStudy;
  accent: "monarch" | "gold" | "signal";
}

export const projects: Project[] = [
  {
    id: "automation-bot",
    index: 1,
    title: "AI-Driven Data-Entry Automation Bot",
    subtitle: "EXTRACTION-TO-STRUCTURING PIPELINE",
    status: "BUILDING",
    description:
      "An extraction-to-structuring pipeline for invoice processing. PDFs are parsed, fed through an LLM with a strict schema, and the resulting structured data is entered into target forms via browser automation.",
    tech: [
      "Python",
      "LangChain",
      "Selenium",
      "Flask",
      "pdfplumber",
      "Groq",
      "Llama 3.1",
      "Pydantic",
      "MongoDB Atlas",
    ],
    highlights: [
      "PDF extraction with pdfplumber",
      "Structured LLM output via Pydantic schemas",
      "Field classification and mapping",
      "Browser automation with Selenium",
      "Flask backend orchestration",
      "MongoDB Atlas for persistence",
    ],
    links: {
      github: "https://github.com/AmanSharrma00",
      caseStudy: true,
    },
    accent: "monarch",
    caseStudy: {
      problem:
        "Manual data entry from PDF invoices is slow, error-prone, and scales poorly with volume. Organizations need a way to extract structured data from unstructured documents and enter it into existing systems without human keystrokes.",
      solution:
        "A pipeline that extracts text from PDF invoices, uses an LLM (Llama 3.1 via Groq) with LangChain to produce structured JSON conforming to a Pydantic schema, classifies fields, and automates form entry via Selenium.",
      technologies: [
        "Python",
        "LangChain",
        "Selenium",
        "Flask",
        "pdfplumber",
        "Groq",
        "Llama 3.1",
        "Pydantic",
        "MongoDB Atlas",
      ],
      result:
        "A working pipeline that processes PDF invoices into structured data and automates form entry. Currently in active development — not yet in full production deployment.",
      deepDive: {
        problem:
          "Invoice processing is a classic unstructured-to-structured data problem. PDFs contain the same logical fields (vendor, date, line items, totals) but in wildly different layouts. Manual entry doesn't scale, and traditional OCR alone doesn't understand semantics.",
        systemOverview:
          "The system is a linear pipeline: PDF ingestion, text extraction, LLM structuring, field classification, and browser automation. Each stage is decoupled so it can be tested and improved independently.",
        architecture: [
          "PDF → pdfplumber extracts raw text and tables",
          "Raw text → LangChain prompt with Groq/Llama 3.1",
          "LLM output → Pydantic schema validation",
          "Validated JSON → field classification logic",
          "Classified fields → Selenium form automation",
          "Flask backend orchestrates the full pipeline",
          "MongoDB Atlas stores processing records",
        ],
        engineeringDecisions: [
          "Chose Groq for low-latency LLM inference over heavier providers",
          "Used Pydantic for schema enforcement — the LLM cannot return invalid structure",
          "Flask for lightweight orchestration rather than a heavier framework",
          "Selenium for browser automation to handle dynamic, JS-rendered forms",
        ],
        implementation:
          "The pipeline is built in Python. pdfplumber handles extraction, LangChain manages the LLM interaction with structured output parsing, Pydantic enforces the schema contract, and Selenium drives the browser. Flask exposes the pipeline as an API.",
        challenges: [
          "PDF layouts vary wildly — extraction quality depends on document structure",
          "LLM hallucination on ambiguous fields requires schema-level guardrails",
          "Selenium form automation is brittle when target forms change",
        ],
        tradeOffs: [
          "Groq speed vs. model capability — Llama 3.1 is fast but not the most powerful model available",
          "Pydantic strictness vs. flexibility — strict schemas reject borderline-valid data",
          "Selenium reliability vs. API-first integration — not all targets have APIs",
        ],
        results:
          "A functional pipeline processing PDF invoices into structured data with automated form entry. The system is in active development and has not been deployed at production scale.",
        lessons: [
          "Structured output is the single most important technique for reliable LLM pipelines",
          "Schema enforcement at the application layer is non-negotiable",
          "Browser automation should be a last resort — API integration is always preferable when available",
        ],
        futureImprovements: [
          "Add support for more document types beyond invoices",
          "Implement confidence scoring for LLM extractions",
          "Replace Selenium with API integration where target systems allow",
          "Add batch processing and queue management",
        ],
      },
    },
  },

  {
    id: "sahayak",
    index: 2,
    title: "Sahayak",
    subtitle: "FULL-STACK E-COMMERCE PLATFORM",
    status: "DEPLOYED",
    description:
      "A full-stack e-commerce platform built end-to-end with the MERN stack. Includes buyer and seller workflows, role-based access control, multi-layer validation, and production deployment.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "REST APIs",
      "JWT",
      "React Query",
      "Firebase",
      "Render",
    ],
    highlights: [
      "End-to-end ownership from requirements to deployment",
      "Requirements analysis and data schema design",
      "REST API development with Express",
      "Role-based access control (RBAC)",
      "Multi-layer validation (client + server)",
      "Buyer and seller workflows",
      "Production deployment on Render",
      "Post-launch issue resolution",
    ],
    links: {
      github: "https://github.com/AmanSharrma00",
      live: "https://sahayak.onrender.com",
      caseStudy: true,
    },
    accent: "signal",
    caseStudy: {
      problem:
        "E-commerce platforms require careful coordination between frontend, backend, database, authentication, and deployment. Building one end-to-end demands mastery of every layer.",
      solution:
        "A MERN-stack e-commerce platform with JWT authentication, RBAC, REST APIs, multi-layer validation, buyer/seller workflows, and production deployment.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB Atlas",
        "REST APIs",
        "JWT",
        "React Query",
        "Firebase",
        "Render",
      ],
      result:
        "A deployed, functional e-commerce platform with real buyer and seller workflows. Post-launch issues were identified and resolved.",
      deepDive: {
        problem:
          "Building a production e-commerce platform requires more than CRUD. It needs authentication, authorization, data integrity, validation at multiple layers, and a deployment strategy that survives real usage.",
        systemOverview:
          "Sahayak is a traditional MERN architecture: React frontend, Express REST API, MongoDB Atlas database, JWT auth, Firebase for additional services, deployed on Render.",
        architecture: [
          "React frontend with React Query for server state",
          "Express REST API with layered middleware",
          "MongoDB Atlas for document storage",
          "JWT for stateless authentication",
          "Firebase for file storage and authentication services",
          "Render for production hosting",
        ],
        engineeringDecisions: [
          "JWT for stateless auth — simpler to scale than sessions",
          "React Query for server state — avoids manual cache management",
          "MongoDB Atlas — managed database reduces ops burden",
          "RBAC at the API layer — authorization enforced server-side, not trusted to client",
          "Multi-layer validation — client for UX, server for security",
        ],
        implementation:
          "The frontend is React with React Query for data fetching. The backend is Express with JWT middleware, RBAC guards, and multi-layer validation. MongoDB Atlas stores user, product, and order data. Firebase handles file storage. Render hosts both frontend and backend.",
        challenges: [
          "Designing a schema that supports both buyer and seller workflows without duplication",
          "Ensuring RBAC is enforced consistently across all API routes",
          "Handling production deployment issues on Render",
        ],
        tradeOffs: [
          "MongoDB flexibility vs. relational integrity — NoSQL is faster to build but requires discipline",
          "JWT statelessness vs. revocation — tokens can't be easily revoked once issued",
          "Render simplicity vs. control — managed hosting limits infrastructure customization",
        ],
        results:
          "A deployed e-commerce platform with working buyer and seller workflows. Post-launch issues were identified and resolved, demonstrating real production debugging ability.",
        lessons: [
          "End-to-end ownership teaches you what each layer costs",
          "Validation must exist at every layer — trust nothing, verify everything",
          "Deployment is not the end — production issues are the real test",
        ],
        futureImprovements: [
          "Add payment integration",
          "Implement proper token revocation",
          "Add admin analytics dashboard",
          "Migrate to a relational database for transactional integrity",
        ],
      },
    },
  },

  {
    id: "smart-agro-care",
    index: 3,
    title: "Smart Agro-Care",
    subtitle: "IoT + AI RESEARCH PROJECT",
    status: "RESEARCH",
    description:
      "An IoT + AI research project combining ESP32 sensors with computer vision models (CNN, YOLOv8, Mask R-CNN) for agricultural monitoring. Achieved Top 10 / 200+ teams at CU Project Expo 2024.",
    tech: [
      "ESP32",
      "CNN",
      "YOLOv8",
      "Mask R-CNN",
      "Computer Vision",
      "IoT",
    ],
    highlights: [
      "ESP32-based IoT sensor network",
      "Three computer vision models benchmarked",
      "CNN vs YOLOv8 vs Mask R-CNN comparison",
      "Accuracy / latency trade-off analysis",
      "Top 10 / 200+ teams — CU Project Expo 2024",
      "~70% reduction in manual monitoring effort (reported)",
      "~25% reduction in irrigation water usage (reported)",
      "20-25% crop yield improvement (reported)",
    ],
    links: { caseStudy: true },
    accent: "gold",
    caseStudy: {
      problem:
        "Agricultural monitoring is labor-intensive and imprecise. Farmers need real-time data on crop health, soil conditions, and pest detection to make informed decisions.",
      solution:
        "An integrated system combining ESP32 IoT sensors for environmental data and computer vision models for crop analysis, with benchmarking across three model architectures.",
      technologies: [
        "ESP32",
        "CNN",
        "YOLOv8",
        "Mask R-CNN",
        "Computer Vision",
        "IoT",
      ],
      result:
        "Top 10 / 200+ teams at CU Project Expo 2024. Reported outcomes: ~70% reduction in manual monitoring effort, ~25% reduction in irrigation water usage, 20-25% crop yield improvement.",
      deepDive: {
        problem:
          "Traditional agriculture relies on manual inspection, which is slow, subjective, and doesn't scale. The challenge was building a system that combines physical sensors with AI vision to give farmers actionable, real-time insights.",
        systemOverview:
          "The system has two pillars: an ESP32-based IoT sensor network for environmental monitoring (soil moisture, temperature, humidity) and a computer vision pipeline for crop analysis (disease detection, growth monitoring).",
        architecture: [
          "ESP32 microcontrollers with sensors for environmental data",
          "Sensor data transmitted to a central processing unit",
          "Image capture for crop analysis",
          "Three CV models benchmarked: CNN, YOLOv8, Mask R-CNN",
          "Model comparison on accuracy vs. latency trade-offs",
          "Results presented to farmers as actionable recommendations",
        ],
        engineeringDecisions: [
          "ESP32 for cost-effective IoT deployment",
          "Benchmarked three models rather than committing to one — evidence over assumption",
          "YOLOv8 for real-time detection when latency matters",
          "Mask R-CNN for precise instance segmentation when accuracy matters",
        ],
        implementation:
          "ESP32 nodes collect and transmit sensor data. Images are processed through the CV pipeline. Three models were trained and benchmarked on the same dataset to compare accuracy, inference latency, and deployment feasibility.",
        challenges: [
          "Balancing model accuracy with edge deployment constraints",
          "Sensor calibration in real agricultural environments",
          "Limited training data for specialized crop conditions",
        ],
        tradeOffs: [
          "CNN simplicity vs. YOLOv8 speed vs. Mask R-CNN precision",
          "Edge processing vs. cloud processing — latency vs. compute power",
          "Cost of sensors vs. coverage area",
        ],
        results:
          "Top 10 / 200+ teams at CU Project Expo 2024. Reported project outcomes: ~70% reduction in manual monitoring effort, ~25% reduction in irrigation water usage, and 20-25% crop yield improvement.",
        lessons: [
          "Benchmarking multiple models is always worth the time — assumptions about model performance are often wrong",
          "IoT + AI is powerful but deployment constraints dictate architecture",
          "Real-world environments are messier than datasets",
        ],
        futureImprovements: [
          "Deploy models on-edge for real-time inference",
          "Expand sensor network for larger coverage",
          "Add automated irrigation control based on sensor data",
          "Collect more training data for diverse crop conditions",
        ],
      },
    },
  },
];

export const journey = [
  {
    year: "2023",
    title: "Engineering Journey Begins",
    desc: "Started formal computer science education. First exposure to programming, data structures, and systems thinking.",
  },
  {
    year: "2023–2024",
    title: "Smart Agro-Care",
    desc: "Built an IoT + AI system combining ESP32 sensors with computer vision models for agricultural monitoring.",
  },
  {
    year: "2024",
    title: "CU Project Expo — Top 10 / 200+",
    desc: "Smart Agro-Care ranked in the top 10 out of 200+ teams at Chandigarh University Project Expo.",
  },
  {
    year: "05/2025–06/2025",
    title: "Cyber-Physical Systems & IoT Program",
    desc: "Completed a focused program on cyber-physical systems and IoT, deepening hardware-software integration skills.",
  },
  {
    year: "2025–2026",
    title: "Sahayak",
    desc: "Designed and deployed a full-stack e-commerce platform with the MERN stack, RBAC, and production hosting.",
  },
  {
    year: "12/2025–Present",
    title: "AI-Driven Data-Entry Automation Bot",
    desc: "Building an LLM-powered pipeline for PDF invoice extraction, structuring, and browser automation.",
  },
  {
    year: "2027",
    title: "Expected Graduation",
    desc: "Expected to complete a Computer Science Engineering degree in 2027, ready for software engineering opportunities.",
  },
];

export const achievements = [
  {
    title: "CU Project Expo",
    detail: "Top 10 / 200+ Teams",
    year: "2024",
    desc: "Smart Agro-Care ranked in the top 10 out of 200+ teams at Chandigarh University Project Expo.",
    evidence: "Smart Agro-Care",
  },
  {
    title: "ACP",
    detail: "Rank 1 University-Wide",
    year: "2023",
    desc: "Achieved Rank 1 in ACP (Assessment of Competence and Proficiency) university-wide.",
    evidence: "Academic Performance",
  },
];

export const certifications = [
  {
    name: "Build a Computer Vision App with Azure Cognitive Services",
    issuer: "Coursera",
  },
  { name: "The Arduino Platform and C Programming", issuer: "Coursera" },
  { name: "IoT Devices", issuer: "Coursera" },
  { name: "Data Analysis Assessment", issuer: "Assessment" },
];

export const buildPipeline = [
  {
    phase: "Idea",
    desc: "Identify a real problem worth solving.",
    project: "Automation Bot — manual data entry",
  },
  {
    phase: "Problem",
    desc: "Define scope, constraints, and success criteria.",
    project: "Sahayak — e-commerce requirements",
  },
  {
    phase: "Design",
    desc: "Architect the system and data models.",
    project: "Sahayak — schema + RBAC design",
  },
  {
    phase: "Build",
    desc: "Implement with typed contracts and clean interfaces.",
    project: "Automation Bot — Pydantic schemas",
  },
  {
    phase: "Test",
    desc: "Validate with unit, integration, and edge cases.",
    project: "Sahayak — multi-layer validation",
  },
  {
    phase: "Measure",
    desc: "Benchmark against alternatives with data.",
    project: "Smart Agro-Care — CNN vs YOLOv8 vs Mask R-CNN",
  },
  {
    phase: "Deploy",
    desc: "Ship to production with monitoring.",
    project: "Sahayak — Render deployment",
  },
  {
    phase: "Improve",
    desc: "Iterate based on real-world evidence.",
    project: "Sahayak — post-launch fixes",
  },
];

export const systemMap = [
  {
    label: "Full-Stack",
    project: "Sahayak",
    desc: "MERN e-commerce platform",
  },
  {
    label: "AI",
    project: "Automation Bot",
    desc: "LLM extraction pipeline",
  },
  {
    label: "Data",
    project: "Sahayak",
    desc: "RBAC + schema design",
  },
  {
    label: "Automation",
    project: "Automation Bot",
    desc: "Selenium form entry",
  },
  {
    label: "Computer Vision",
    project: "Smart Agro-Care",
    desc: "CNN / YOLOv8 / Mask R-CNN",
  },
  {
    label: "IoT",
    project: "Smart Agro-Care",
    desc: "ESP32 sensor network",
  },
];

export const commands = [
  {
    cmd: "explore projects",
    desc: "Scroll to featured work",
    target: "work",
  },
  {
    cmd: "show ai work",
    desc: "Highlight AI projects",
    target: "work",
  },
  {
    cmd: "show full-stack work",
    desc: "Highlight full-stack projects",
    target: "work",
  },
  {
    cmd: "show achievements",
    desc: "View achievements",
    target: "achievements",
  },
  {
    cmd: "open resume",
    desc: "View resume",
    target: "resume",
  },
  {
    cmd: "about",
    desc: "Engineering philosophy",
    target: "about",
  },
  {
    cmd: "contact",
    desc: "Contact options",
    target: "contact",
  },
];

export const aiKnowledge = [
  {
    topic: "Sahayak",
    content:
      "Sahayak is a full-stack e-commerce platform built with the MERN stack (React, Node.js, Express, MongoDB Atlas). It features JWT authentication, role-based access control (RBAC), multi-layer validation, buyer and seller workflows, and is deployed on Render. It demonstrates end-to-end ownership from requirements analysis through production deployment and post-launch issue resolution.",
  },
  {
    topic: "Automation Bot",
    content:
      "The AI-Driven Data-Entry Automation Bot is a pipeline that processes PDF invoices. It uses pdfplumber for text extraction, LangChain with Groq/Llama 3.1 for LLM structuring, Pydantic for schema enforcement, field classification, and Selenium for browser automation. The backend is Flask with MongoDB Atlas for persistence. It is currently in active development.",
  },
  {
    topic: "Smart Agro-Care",
    content:
      "Smart Agro-Care is an IoT + AI research project combining ESP32 sensors with computer vision. Three models were benchmarked: CNN, YOLOv8, and Mask R-CNN, with accuracy/latency trade-off analysis. It achieved Top 10 / 200+ teams at Chandigarh University Project Expo 2024. Reported outcomes include ~70% reduction in manual monitoring, ~25% reduction in irrigation water, and 20-25% crop yield improvement.",
  },
  {
    topic: "AI experience",
    content:
      "Aman has AI experience through the Automation Bot (LangChain, LLMs, structured output, Groq, Llama 3.1, Pydantic) and Smart Agro-Care (computer vision with CNN, YOLOv8, Mask R-CNN). His AI work focuses on practical pipelines: extraction-to-structuring with LLMs and real-time detection with vision models.",
  },
  {
    topic: "full-stack",
    content:
      "Aman's strongest full-stack project is Sahayak — a MERN e-commerce platform with React, Node.js, Express, MongoDB Atlas, JWT, React Query, RBAC, multi-layer validation, Firebase, and Render deployment. It demonstrates end-to-end ownership from requirements to production.",
  },
  {
    topic: "computer vision",
    content:
      "Computer vision work is demonstrated in Smart Agro-Care, which benchmarked CNN, YOLOv8, and Mask R-CNN for agricultural monitoring. The project analyzed accuracy vs. latency trade-offs and achieved Top 10 / 200+ at Chandigarh University Project Expo 2024.",
  },
  {
    topic: "Java",
    content:
      "Aman has Java experience through data and backend engineering work, including JDBC, MySQL, ACID transactions, schema design, and RBAC. Java is part of his data engineering capability alongside his full-stack and AI work.",
  },
  {
    topic: "achievements",
    content:
      "Aman's achievements include Top 10 / 200+ teams at Chandigarh University Project Expo 2024 (Smart Agro-Care) and Rank 1 university-wide in ACP 2023. He also holds certifications in Computer Vision (Azure), Arduino and C Programming, IoT Devices, and Data Analysis.",
  },
  {
    topic: "certifications",
    content:
      "Verified certifications: Build a Computer Vision App with Azure Cognitive Services, The Arduino Platform and C Programming (Coursera), IoT Devices (Coursera), and Data Analysis Assessment.",
  },
  {
    topic: "education",
    content:
      "Aman Sharma is currently pursuing a Computer Science Engineering degree at Chandigarh University and is expected to graduate in 2027. His engineering journey began in 2023.",
  },
  {
    topic: "contact",
    content:
      "You can contact Aman via email at amansharmaasr00@gmail.com, GitHub at github.com/AmanSharrma00, or LinkedIn at https://www.linkedin.com/in/amansharrma00/. His resume is available for viewing and download on the portfolio.",
  },
  {
    topic: "skills",
    content:
      "Aman's core capabilities: Full-Stack Systems (React, Node.js, Express, REST APIs, JWT, MongoDB, React Query), AI & Automation (Python, LangChain, LLMs, Prompt Engineering, Computer Vision), Data & Backend (Java, JDBC, MySQL, ACID, RBAC), Intelligent Systems (ESP32, IoT, Sensors), Cloud & Delivery (Git, GitHub, Firebase, Render, AWS, CI/CD), and Computer Science fundamentals (DSA, OOP, OS, Networks, Concurrency).",
  },
  {
    topic: "resume",
    content:
      "Aman's resume is available for viewing in-browser and downloading from the portfolio. It covers his full-stack, AI, and IoT work, achievements, and certifications. The resume PDF is linked in the hero section, recruiter quick view, and contact section.",
  },
  {
    topic: "strongest project",
    content:
      "Aman's strongest full-stack project is Sahayak — a deployed MERN e-commerce platform. His strongest AI project is the Automation Bot — an LLM-powered PDF extraction and structuring pipeline. His strongest research project is Smart Agro-Care — an IoT + AI system that placed Top 10 / 200+ at Chandigarh University Project Expo 2024.",
  },
  {
    topic: "technologies",
    content:
      "Core technologies: React, Node.js, Express, MongoDB, React Query, JWT, Firebase, Render (full-stack); Python, LangChain, Groq, Llama 3.1, Pydantic, Selenium, Flask (AI/automation); ESP32, CNN, YOLOv8, Mask R-CNN (IoT/CV); Java, JDBC, MySQL (data/backend); Git, GitHub, AWS, CI/CD (cloud).",
  },
];