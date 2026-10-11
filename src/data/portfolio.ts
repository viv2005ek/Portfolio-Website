export const personalInfo = {
  name: "Vivek Kumar Garg",
  title: "Full-Stack Developer | AI Engineer | Blockchain Builder | Founder @ IndoMate",
  email: "viv2005ek@gmail.com",
  phone: "+91 7877485641",
  location: "Jaipur, Rajasthan",
  linkedin: "https://www.linkedin.com/in/vivek-kumar-garg-097677280/",
  X: "https://x.com/viv2005ek",
  github: "https://github.com/viv2005ek",
  HF: "https://huggingface.co/viv2005ek",
  leetcode: "https://leetcode.com/u/viv2005ek/",
  devto: "https://dev.to/viv2005ek",
  followers: "4k+",
  bio: "Computer Science undergraduate with strong full-stack development skills, leadership experience, startup exposure, with 2+ years of hands-on project and internship experience. Built and deployed scalable web applications; mentored open-source contributors across multiple tech communities.",
  cgpa: 9.28,
  university: "Manipal University Jaipur",
  degree: "BTech in Computer Science",
  duration: "2023 – Present"
};

export const workExperience = [
  {
    title: "Data Engineering Intern",
    company: "moneyHop, Bangalore | Remote",
    duration: "May 2026 – Present",
    type: "Internship",
    description: [
      "Developed 3 internal data platforms: an AI-powered Enterprise SQL Assistant, a Manual and Automated Data Lineage Platform, and an Analytics Reporting System, enabling self-service data querying, data governance, and operational reporting.",
      "Built scalable backend services using Python, FastAPI, MCP (Model Context Protocol), Gemini API, MySQL, PostgreSQL, SQLAlchemy, JDBC, React, WebSockets, Docker, Google Sheets API, and AWS Lightsail.",
      "Implemented schema discovery, metadata management, lineage automation, data profiling, and AI-assisted SQL generation that reduced query generation time by 40%."
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Cardio Flow Design, Japan | Remote",
    duration: "Oct 2025 – Mar 2026",
    type: "Internship",
    description: [
      "Delivered a medical imaging desktop application featuring DICOM parsing, real-time image rendering, and cine playback for 500 MB+ high-resolution DICOM datasets (C#, WPF, fo-dicom).",
      "Implemented diagnostic measurement, annotation tools, image transformations, and report export using a modular service-oriented architecture.",
      "Built real-time GPU-accelerated compute shaders using WebGPU in an Electron.js desktop application, processing 1000+ parallel threads."
    ]
  },
  {
    title: "Startup Founder",
    company: "IndoMate, Jaipur | On-site",
    duration: "Nov 2024 – Apr 2026",
    type: "Startup",
    description: [
      "Founded a patent-backed, pre-incubated emergency response platform featuring 5+ SOS modules for real-time user safety and incident reporting.",
      "Presented the product at 7+ national-level innovation competitions, including the AICTE National Innovation Contest, and secured 2nd Runner-up at E-Summit '25 Ideathon while ranking 9th among 600+ teams at Startup Conclave."
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "Software Development Center – MUJ, Jaipur | On-site",
    duration: "May 2024 – May 2026",
    type: "Internship",
    description: [
      "Engineered a full-stack Elective Management System serving 10,000+ students, enabling subject preference management, algorithmic elective allotment, and academic administration.",
      "Developed scalable backend APIs and responsive frontend modules using React.js, TypeScript, Node.js, Express.js, Prisma ORM, PostgreSQL, Docker, and CI/CD, implementing RBAC and authentication."
    ]
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    duration: "Jan 2025 – Present",
    type: "Remote",
    description: [
      "Delivered 3+ full-stack web applications, including custom e-commerce platforms and business solutions, managing the complete development lifecycle from requirements gathering to deployment.",
      "Built responsive, database-driven applications with secure authentication, payment integration, admin dashboards, order management, and REST APIs that processed over 500 successful transactions."
    ]
  }
];

export const leadership = [
  { title: "Technical Team Lead", org: "MUJ Oneiros", duration: "Feb 2026 – Mar 2026" },
  { title: "Technical Lead", org: "TechIdeate MUJ 2026", duration: "Jan 2026 – Feb 2026" },
  { title: "Campus Ambassador", org: "Unstop", duration: "Aug 2025 – Aug 2026" },
  { title: "Web Development Co-Lead", org: "GDG MUJ", duration: "Oct 2024 – Sep 2025" },
  { title: "Technical Head", org: "International Student Cell (ISC), MUJ", duration: "Oct 2024 – Dec 2025" },
  { title: "Mentor", org: "GirlScript Summer of Code 2025", duration: "July 2025 – Nov 2025" },
  { title: "Team Head WebDev", org: "MUJ ACM SIGAI Student Chapter", duration: "Jun 2024 - Sep 2024" },
  { title: "Web Developer", org: "MUJHackX 2.0", duration: "Jun 2024 – Sep 2024" },
  { title: "Contributor", org: "GirlScript Summer of Code (Extended Edition) 2024", duration: "Sep 2024 - Nov 2024" }
];

export const projects = [
  {
    title: "Thread.ai",
    subtitle: "Real-Time AI Video Persona System with RAG & Vision AI",
    description: "A real-time multimodal AI system combining conversational AI, RAG (Pinecone), computer vision, OCR, and AI-generated avatar video. Supports document-grounded responses, object detection, PDF ingestion, and persistent chat memory across sessions. Winner – 1st Position (AI Track) at National Project Expo.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Firebase",
      "Firestore",
      "Pinecone",
      "TensorFlow.js",
      "Tesseract.js",
      "pdfjs",
      "Gooey.ai",
      "WebRTC",
      "TailwindCSS"
    ],
    links: {
      website: "https://threadai-bharat-aws-genai.vercel.app/",
      demo: "https://youtu.be/ci9qdkgSVss",
      github: "https://github.com/viv2005ek/ThreadAi-RealTimeAiVideoCall",
      presentation: "https://drive.google.com/file/d/1j74qSU0fiax_Je0gJxyRurgjA-CeSZgP/view?usp=sharing",
      customs: [{ name: "Technical Doc", url: "https://docs.google.com/document/d/1Uqi4W7bhbHs56ksUohuj69Ux1aw64ah1xIvUzm2ykf0/edit?usp=sharing" }]
    },
    featured: true
  },
  {
    title: "Elective Desk",
    subtitle: "Scalable Elective Management System for University Operations",
    description: "A high-performance Elective Management System built for 10,000+ students, enabling seamless course selection, role-based access, automated seat allocation, and real-time data management. Designed and deployed in a production environment with robust backend architecture, optimized database workflows, and an intuitive frontend interface.",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "Prisma ORM", "PostgreSQL"],
    links: {
      website: "https://elective-management-system-latest.vercel.app/login",
      github: "https://github.com/viv2005ek/ElectiveManagementSystemLatest"
    },
    featured: true
  },
  {
    title: "EffortX",
    subtitle: "AI-Powered Developer Reputation & Contribution Verification Platform",
    description: "An AI-powered platform that analyzes GitHub commits and pull requests to measure real engineering impact instead of activity metrics. EffortX generates AI reviews, stores verifiable contribution proofs on Solana, rewards developers with ECOIN, and enables AI access through a multi-model AI Playground. Built with GitHub OAuth, GitHub App integrations, Redis-backed infrastructure, and on-chain verification to create a transparent reputation layer for developers.",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "Redis", "Solana", "Anchor", "GitHub OAuth", "GitHub App", "Gemini AI", "Dappier AI"],
    links: {
      website: "https://effort-x-seven.vercel.app/",
      demo: "https://www.youtube.com/watch?v=obsvaDMGX60",
      X: "https://x.com/EffortX05",
      github: "https://github.com/viv2005ek/EffortX---GitHub-contribution-verification-on-Solana",
      presentation: "https://drive.google.com/file/d/1MF7-03Cyu7L1MSdAE0lbDUr6RnczowOx/view?usp=sharing",
      customs: [{ name: "Details Document", url: "https://docs.google.com/document/d/1euj_EaTQ9MYlRs-LcdBlGw-yLovbWCClQ0XBH_NFy54/edit?usp=sharing" }]
    },
    featured: true
  },
  {
    "title": "Slangyy",
    "subtitle": "Style‑Adaptive AI Text Rewriter – Chrome Extension",
    "description": "A Chrome extension that rewrites selected text in different styles using a QLoRA‑fine‑tuned Phi‑3 model. Fine‑tuned with Unsloth on Google Colab (free T4), the adapter (≈50 MB) is served via a Gradio Space on Hugging Face (CPU tier). The extension (Manifest V3) detects text selection, shows a floating UI, and calls the API to rewrite text with a copy button.",
    "tech": [
      "Hugging Face Transformers-Spaces-Datasets",
      "PEFT",
      "QLoRA",
      "Unsloth",
      "BitsAndBytes",
      "TRL",
      "Gradio",
      "Chrome Extension Manifest V3",
      "Google Colab",
      "Git Xet",
    ],
    "links": {

      "demo": "https://youtu.be/qiU4OSuuXTM",
      "github": "https://github.com/viv2005ek/Slangyy-Extension_to_rewrite_in_tones_and_grammerly",
      customs: [{ name: "HuggingFace Space", url: "https://huggingface.co/spaces/viv2005ek/text-rewriter-api-SLANGY" }]

    },
    "featured": true
  },
  {
    title: "Stock Analyzer App",
    subtitle: "Interactive Virtual Trading & Financial Analytics",
    description: "Architected an AI-driven trading education platform, integrating 9+ software tools. Embedded conversational AIs configured to answer user financial queries in natural language in the form of text, AI-supported voice calls, and real-time AI-supported video calls.",
    tech: ["React", "RevenueCat", "Tavus", "ElevenLabs", "Stripe", "Lingo", "Yahoo Finance API", "Finnhub API", "Dappier AI", "Supabase"],
    links: {
      website: "https://vralytics-tradesmart-riskfree-learnai.netlify.app/",
      demo: "https://www.youtube.com/watch?v=B5TVuqSOuSg",
      github: "https://github.com/viv2005ek/VRAlytics-TradeSmart-RiskFree-LearnWithAI",
      post: "https://www.linkedin.com/posts/vivek-kumar-garg-097677280_stockmarketrevolution-aifortrading-bolthackathon-activity-7343948591985586179-Tst2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERxLrMB9ZjxsIyKIhm06sxQqmckV3pfIfQ"

    },
    featured: true
  },
  {
    title: "Deloitte Capstone Project",
    subtitle: "AI-Based Career Guidance System",
    description: "Built a career guidance system focused on generating personalized recommendations using non-traditional inputs such as user preferences, behavioral patterns, and constraints. Worked as part of Team Ignite focusing on practical problem-solving and real-world applicability.",
    tech: ["AI", "Large Language Models (LLM)", "Recommendation Logic", "User-Centric Design"],
    links: {
      customs: [{ name: "Certificate", url: "https://drive.google.com/file/d/1BEHQ8_dcdfzyvKOy1IX5hT0dxMQJ8t2T/view?usp=sharing" }]
    },
    featured: true
  },


  {
    title: "E-Store",
    subtitle: "Kids Store E-Commerce Platform",
    description: "Freelance e-commerce platform for kids store. Clone version - original delivered to client. Full admin panel, product management, secure payments, and responsive design.",
    tech: ["React", "Supabase", "RazorPay"],
    links: {
      website: "https://kid-cloths-webstore.vercel.app/",
      demo: "",
      github: "https://github.com/viv2005ek/Fashion-Kid-s-WebStore"
    },
    featured: true
  }, {
    title: "GreenGarv",
    subtitle: "Fullstack Sustainability Platform",
    description: "A full-stack sustainability platform featuring 6+ eco-focused modules, including recyclability detection, carbon tracking, and an eco-store, aligned with the principles of Reuse, Recycle, and Reduce.",
    tech: ["React", "Supabase", "AI", "Sustainability"],
    links: {
      website: "https://green-garv-6zuv.vercel.app/",
      demo: "https://www.youtube.com/watch?v=Am3PfOpo40Y",
      github: "https://github.com/viv2005ek/GreenGarv"
    },
    featured: true
  }, {
    title: "PayPaglu",
    subtitle: "Web3 Transaction Dapp",
    description: "Developed a decentralized application enabling seamless crypto transactions via QR code scans, phone numbers, or usernames, with an average processing time of under 5 seconds by eliminating the need for lengthy wallet addresses.",
    tech: ["Web3", "Solidity", "React", "Blockchain"],
    links: {
      website: "https://pay-paglu-sepolia-net.vercel.app/",
      demo: "https://www.youtube.com/watch?v=OcNhNN4h-OA",
      github: "https://github.com/viv2005ek/PayPaglu---Sepolia-net",
      post: "https://www.linkedin.com/posts/vivek-kumar-garg-097677280_firstweb3project-morphbuildathon-paypaglu-activity-7355557181242429440-xR7p?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERxLrMB9ZjxsIyKIhm06sxQqmckV3pfIfQ"
    },
    featured: true
  },

  {
    title: "DICOM Viewer (WPF)",
    subtitle: "Lightweight Medical Imaging Application (WPF C# XAML)",
    description:
      "A cross-platform DICOM image viewer built using C# (WPF) and fo-dicom. Supports DICOM loading, slice navigation, measurements, annotations, and exporting with CT Hounsfield Unit visualization. Designed for radiology learning and medical imaging analysis.",
    tech: ["C#", "WPF", "fo-dicom", ".NET 6", "Newtonsoft.Json"],
    links: {
      website: "",
      demo: "https://youtu.be/wTvmLghDK9U",
      github: "https://github.com/viv2005ek/DICOM_Viewer"
    },
    featured: true
  }, {
    title: "StreamEngine",
    subtitle: "Electron + C# Large File Streaming Engine",
    description: "Engineered a cross-platform desktop architecture where Electron handles UI and a C# backend performs high-performance disk-based streaming of 1GB+ files. Achieved ~510 MB/s throughput using chunked disk reads without IPC payload transfer.",
    tech: [
      "Electron",

      "C#",
      ".NET 9",
      "Disk Streaming",
      "IPC",
      "Process I/O"
    ],
    links: {
      github: "https://github.com/viv2005ek/StreamEngine-Electron-Csharp"
    },
    featured: true
  }, {
    title: "99 Dresses",
    subtitle: "Peer-to-Peer Sustainable Fashion Marketplace",
    description: "Built a clothing resale and bidding platform using a dual-currency system (in-app buttons + real currency). Enabled listing, bidding, buying, and token transactions to simulate a gamified second-hand marketplace economy.",
    tech: [
      "React",
      "Supabase",
      "Payment Gateway",
      "Vercel"
    ],
    links: {
      website: "https://unicorn-two-ivory.vercel.app/",
      github: "https://github.com/viv2005ek/unicorn----ieeeSB-hackathon"
    },
    featured: true
  },


  {
    title: "IndoMate",
    subtitle: "Redefining safety, Trust & Local Connections",
    description: "Building a patented SOS security application focused on real-time emergency alerts, trusted network verification, and community-driven safety. Secured pre-incubation approval among 30+ startups at Atal Incubation Centre, MUJ, and led development and pitching at 5+ national innovation events.",
    tech: ["MERN", "OpenMap Api", "Socket.io"],
    links: {
      post: "https://www.linkedin.com/feed/update/urn:li:activity:7293259665650462720"

    },
    featured: false
  },  {
    title: "Northstar Portfolio",
    subtitle: "Institutional Multi-Tenant Portfolio Analytics Engine",
    description: "A full-stack, institutional-grade investment portfolio telemetry platform featuring strict multi-tenant Row-Level Security (RLS), atomic CSV dataset validation with error rollback, period return analytics, asset allocation spectrum meters, and a modern terminal UI design system built with custom Framer Motion animations.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
      "TailwindCSS",
      "Vite"
    ],
    links: {
      demo: "https://www.youtube.com/watch?v=xgGmRU1oPXU",
      github: "https://github.com/viv2005ek/NorthStar-Portfolio-Telemetry-System"
    },
    featured: false
  },
  {
    title: "Nodely",
    subtitle: " Visual workflows no code required ",
    description: "Build, connect, and automate with a modern node‑based editor. Drag‑and‑drop nodes, create sub‑pipelines (blackboxes), connect APIs, run LLMs, and orchestrate complex logic – all without writing code. Features real‑time validation, undo/redo, copy/paste, minimap navigation, dark mode, and a secure FastAPI backend for DAG analysis.",
    tech: [
      "React",
      "AtuoMating",
      "n8n",
      "VectorShift",
      "TailwindCSS",
      "UI/UX Research",
      "Prototyping"
    ],
    links: {
      website: "https://nodely-visual-workflows-no-code-req.vercel.app/",
      demo: "https://www.youtube.com/watch?v=t5dixYjnnSs",
      github: "https://github.com/viv2005ek/Nodely---Visual-workflows-no-code-required"
    },
    featured: false
  },  {
    title: "BBC News IR System",
    subtitle: " Hybrid Information Retrieval & Semantic Intelligence Pipeline ",
    description: "An advanced Information Retrieval engine combining lexical search (TF-IDF, BM25) with neural dense embeddings (Sentence Transformers) via Reciprocal Rank Fusion (RRF). Features interactive 3D semantic vector projection via PCA, WordNet-powered query expansion, automated query-focused extractive summarization (Featured Snippets), live news classification with dynamic index ingestion, and comprehensive evaluation with real-time Precision@10, Recall, MAP, and nDCG metrics.",
    tech: [
      "Python",
      "Streamlit",
      "Sentence Transformers",
      "Rank-BM25",
      "Scikit-learn",
      "NLTK",
      "Plotly 3D",
      "tf-idf",
      "Information Retrieval"
    ],
    links: {
      website: "https://vivek-bbc-news-retrieval.streamlit.app/",
      demo: "https://www.youtube.com/watch?v=CIP9QjaomTc",
      github: "https://github.com/viv2005ek/BBC_News_Retrieval"
    },
    featured: false
  },
  {
    title: "India Health Intelligence Hub",
    subtitle: " UI/UX Designathon Winner",
    description: "Designed and developed a health intelligence dashboard prototype focused on data-driven public health insights, user accessibility, and intuitive workflow systems. Awarded Winner at national-level UI/UX Designathon.",
    tech: [
      "React",
      "TailwindCSS",
      "Figma",
      "UI/UX Research",
      "Prototyping"
    ],
    links: {
      website: "https://uiux-csc-event.vercel.app/",
      github: "https://github.com/viv2005ek/UIUX---CSC-event"
    },
    featured: false
  },

  {
    title: "Smart Attendance System",
    subtitle: "Precision Attendance Through Location Intelligence",
    description: "Built a sophisticated attendance system leveraging GPS technology and geofencing capabilities. Developed intelligent algorithms that calculate location overlap percentages and automatically determine attendance status with faculty oversight features.",
    tech: ["React", "Firebase"],
    links: {
      website: "https://attendance-app-se.vercel.app/",
      demo: "",
      github: "https://github.com/viv2005ek/AttendanceAppSE"
    },
    featured: false
  },
  {
    title: "TechIdeate 2026",
    subtitle: "Official MUJ Techfest Website",
    description: "Developed and deployed the official website for MUJ TechFest as Technical Lead. Designed event pages, registration flows, and responsive UI, ensuring smooth access for participants and organizers during the event lifecycle.",
    tech: [
      "Next.js",
      "TailwindCSS",
      "Vercel"
    ],
    links: {
      website: "https://techideate-beta.vercel.app/",
      github: "https://github.com/viv2005ek/techideate"
    },
    featured: false
  },




  {
    title: "Portfolio Website",
    subtitle: "Crafted with Passion and Code",
    description: "Developed a personal portfolio website to showcase projects, skills, and achievements. Implemented responsive design and optimized performance for better user experience.",
    tech: ["React", "NodeMailer", "Three.js"],
    links: {
      website: "https://vivekfolio-six.vercel.app/",
      demo: "https://www.youtube.com/watch?v=5O5n0G0b6ok",
      github: "https://github.com/viv2005ek/Portfolio-Website"
    },
    featured: false
  },
  {
    title: "GDG Website",
    subtitle: "Web Dev Co-Lead",
    description: "Created the GDG MUJ website with responsive UI and accessibility standards in just 2 weeks, leveraging React and 5+ JavaScript libraries. Improved accessibility and responsiveness across 20+ devices/resolutions.",
    tech: ["React", "JavaScript", "Responsive Design"],
    links: {
      website: "https://gdg-muj.netlify.app/",
      github: "https://github.com/GDSC-Manipal-University-Jaipur/GDG-Website"
    },
    featured: false
  }, {
    title: "WaveForm Visualizer",
    subtitle: "Interactive Digital Line Encoding Simulator",
    description:
      "A web-based simulator to visualize digital line encoding techniques like NRZ-L, NRZ-I, Polar RZ, Manchester, and Differential Manchester. Users can input binary data and generate real-time 2D waveform visualizations for learning and analysis.",
    tech: ["React.js", "TypeScript", "Chart.js"],
    links: {
      website: "https://wave-form-visualizer.vercel.app/",
      github: "https://github.com/viv2005ek/WaveForm-Visualizer"
    },
    featured: false
  }, {
    title: "GemTax AI",
    subtitle: "Intelligent Tax and Compliance Agent",
    description: "Developed GemTax AI on Google AI Studio, an intelligent tax agent using three specialized AI agents to automate financial document processing, provide personalized tax optimization, and perform enterprise compliance checks.",
    tech: ["React", "Google AI Studio", "Multimodal AI"],
    links: {
      website: "https://gem-tax.lovable.app/",
      demo: "https://www.youtube.com/watch?v=waZrOxRla6c&feature=youtu.be",
      github: "https://github.com/viv2005ek/GemTax-AiGenesis"
    },
    featured: false
  }, {
    title: "Travel Go",
    subtitle: "Plan Your Trips with Ease",
    description: "A simple travel planning app that lets users explore destinations and organize trips. Built with HTML, CSS, and JavaScript for a smooth and interactive experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: {
      website: "https://travelgovivek.netlify.app/",
      github: "https://github.com/viv2005ek/TravelGo"
    },
    featured: false
  },
  {
    title: "Janta",
    subtitle: "Civic Issue Reporting & Governance Tracking Platform",
    description: "Built a civic-tech platform enabling citizens to report local issues, automatically route cases to responsible authorities, and generate structured weekly reports summarizing actions, resolved/pending cases, and accountability metrics. Selected as SIH Semi-Finalist.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Role-Based Access Control",
      "Reporting System"
    ],
    links: {
      github: "https://github.com/viv2005ek/JANTA---SIH"
    },
    featured: false
  }, {
    title: "Auto Execuse Maker",
    subtitle: "It's not Lying. It's Surviving.",
    description: "Developed an AI-powered tool to automatically generate excuses for various situations, helping users save time and effort.",
    tech: ["React", "OpenAI API", "Dappier"],
    links: {
      website: "https://auto-execuse-generator.netlify.app/",
      demo: "https://www.youtube.com/watch?v=RBwa6QMYKfg",
      github: "https://github.com/viv2005ek/auto-excuser-generator"
    },
    featured: false
  },


];

export const achievements = [
  "Patent Holder (SOS System & Features - No: 202411079707)",
  "Pre-incubation of Startup by AIC-MUJ",
  "Qualified GATE CS 2026 (Score 577, AIR 3839)",
  "Top-9 Global Finalist NextGenHacks International Hackathon 2026",
  "Global Finalist USAII Global AI Hackathon 2026",
  "Winner (1st Place) – Technovate Project Expo (Ranked #1 AI Project across all tracks) 2026",
  "Winner (1st Place) – UI/UX CyberSpace Hackathon 2026",
  "Winner (1st Place) – MujHackX 3.0 (Out of 500+ Participants) 2025",
  "Winner (1st Place) – 404 Fund Not Found (TechFest MUJ) 2026",
  "Top-10 Finalist – AMD Slingshot AI Innovation Challenge 2026",
  "National Semi-Finalist – ET-AI Hackathon (The Economic Times) 2026",
  "National Finalist – DigiGreen National Hackathon (4th Place out of 200+ teams) 2025",
  "Semi-Finalist – Flipkart GRID 8.0",
  "Semi-Finalist – Flipkart GRID 7.0",
  "Semi-Finalist – Smart India Hackathon (SIH)",
  "2nd Runner-up – Ennovate Ideathon (E-Summit'25)",
  "Top 9 out of 200+ shortlisted teams – Startup Conclave: Pitch-a-Thon",
  "2nd Runner-up – BrandIT 2024 UI/UX Design Showdown",
  "Student Excellence Award for Patent Contribution (2x Recipient)",
  "Student Excellence Award for Hackathon Winning",
  "Dean's List – 5 Consecutive Semesters",
  "Explore more achievements on My LinkedIn"
];

export const skills = {
  AiMl: [
    { name: "GenAI", level: 95 },
    { name: "RAG Systems", level: 90 },
    { name: "LangGraph", level: 85 },
    { name: "MCP (Model Context Protocol)", level: 88 },
    { name: "LangChain", level: 80 },
    { name: "Google AI Studio / Gemini", level: 90 },
    { name: "Pinecone (Vector DB)", level: 88 },
    { name: "Vector Databases", level: 90 },
    { name: "Unsloth / QLoRA / PEFT", level: 82 },
    { name: "TRL", level: 80 },
    { name: "Prompt Engineering", level: 92 },
    { name: "LLM APIs", level: 95 },
    { name: "NLP", level: 80 },
    { name: "OpenCV", level: 78 },
    { name: "TensorFlow.js", level: 75 },
    { name: "Tesseract (OCR)", level: 72 }
  ],
  backend: [
    { name: "FastAPI", level: 85 },
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 88 },
    { name: "TypeScript", level: 90 },
    { name: "REST APIs", level: 92 },
    { name: "WebSockets", level: 85 },
    { name: "LLM API Integration", level: 98 },
    { name: "Prisma ORM", level: 88 },
    { name: "SQLAlchemy", level: 85 },
    { name: "JDBC", level: 82 },
    { name: "Django", level: 82 },
    { name: "Flask", level: 80 }
  ],
  frontend: [
    { name: "React.js", level: 95 },
    { name: "Redux.js", level: 85 },
    { name: "Tailwind", level: 97 },
    { name: "WPF - XAML/C#", level: 90 },
    { name: "Electron.js", level: 85 },
    { name: "Chrome Extension API", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "HTML5", level: 98 },
    { name: "CSS3", level: 97 },
    { name: "Bootstrap", level: 88 },
    { name: "SCSS / SASS", level: 85 },
    { name: "EJS", level: 80 },
    { name: "Handlebars.js", level: 80 }
  ],
  blockchain: [
    { name: "Solidity", level: 85 },
    { name: "Solana / Anchor", level: 80 },
    { name: "Smart Contracts", level: 82 },
    { name: "Web3.js", level: 80 },
    { name: "Ethers.js", level: 78 },
    { name: "Rust", level: 75 },
    { name: "Clarity", level: 75 },
    { name: "Clarinet", level: 76 }
  ],
  languages: [
    { name: "TypeScript", level: 92 },
    { name: "Python", level: 92 },
    { name: "JavaScript", level: 95 },
    { name: "SQL", level: 90 },
    { name: "Java", level: 90 },
    { name: "C#", level: 88 },
    { name: "C", level: 85 }
  ],
  dataEngineering: [
    { name: "Schema Discovery", level: 88 },
    { name: "Data Lineage", level: 85 },
    { name: "Metadata Management", level: 85 },
    { name: "Data Profiling", level: 82 }
  ],
  databases: [
    { name: "PostgreSQL", level: 90 },
    { name: "MongoDB", level: 88 },
    { name: "MySQL", level: 88 },
    { name: "Redis", level: 80 },
    { name: "Supabase", level: 82 },
    { name: "Firebase", level: 75 }
  ],
  DevOps: [
    { name: "Docker", level: 88 },
    { name: "Docker Compose", level: 85 },

    { name: "Kubernetes", level: 80 },
    { name: "Git & Github", level: 95 },
    { name: "Version Control", level: 95 },
    { name: "AWS Lightsail", level: 80 },
    { name: "Google Cloud IAM", level: 78 }
  ],
  tools: [
    { name: "Antigravity", level: 95 },
    { name: "VS Code", level: 98 },
    { name: "Postman", level: 90 },
    { name: "Figma", level: 90 },
    { name: "Hugging Face", level: 85 },
    { name: "Vercel / Netlify", level: 88 }
  ],
  softSkills: [
    { name: "Leadership", level: 92 },
    { name: "Mentoring", level: 94 },
    { name: "Team Collaboration", level: 95 },
    { name: "Problem Solving", level: 96 },
    { name: "Public Speaking", level: 90 }
  ]
};

export const certifications = [
  "Amazon ML Summer School 2026 - Amazon",
  "Fundamentals of Agentic AI - Microsoft",
  "Google AI Essentials - Google",
  "Deloitte Capstone Program 2025 - AI Guidance System",
  "React & Redux Mastery, Node.js, Express.js & MongoDB Suite – Scaler",
  "Stack Full-Stack Bootcamp - RiseIn",
  "HPE Career Preview Program (CPP3) 2026",
  "GirlScript Summer of Code (GSSoC) — Mentor (2025) | Contributor (2024)",
  "Design and Analysis of Algorithms – NPTEL",
  "Data Structures and Algorithms Using Java – NPTEL",
  "Verified C# and DSA Specialist – TestDome",
  "Database Design, Foundations & Programming (SQL & PL/SQL) – Oracle",
  "OOP Using Java – GeeksforGeeks",
  "Postman API Fundamentals Student Expert – Postman",
  "DSA Lab – CodeChef",
  "Fundamentals of Agentic AI – Microsoft Learn Student Community",
  "Explore more achievements on LinkedIn"
];

export const stats = {
  repositories: "120+",
  projects: "30+",
  patents: "2",
  certifications: "35+",
  deansListSemesters: "5",
  followers: "4k+",
  hackathonsWon: "10+",
  studentExcellence: "2x",
  hackathonFinals: "10+"
};
