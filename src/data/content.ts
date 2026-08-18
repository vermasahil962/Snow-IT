import { ProgramTrack, Mentor, Testimonial, FAQItem } from '../types';
import { getFormattedBatchDate, getFormattedWeekendBatchDate } from '../utils/dateUtils';

export const PRIMARY_KEYWORD = "IT training institute with placement assistance";
export const TARGET_DOMAIN = "snowitexpertinstitute.com";

export const HERO_CONTENT = {
  h1: "IT Training Institute with Placement Assistance",
  subhead: "Three career tracks, each led by its own dedicated mentor — built for freshers, career switchers, and career-gap candidates who want a real path into IT.",
  ctaPrimary: "Enquire Now",
  ctaSecondary: "Talk to a Career Counsellor: Call +91 95607 21315",
  trustHighlights: [
    { label: "Live Google Meet Batches", sub: "Mon – Sat Interactive" },
    { label: "No Coding Track Available", sub: "IT Process Manager (21 Days)" },
    { label: "5 to 40+ LPA Packages", sub: "Based on Selected Track" },
    { label: "End-to-End Placement", sub: "Till You Get Placed" },
  ]
};

export const VALUE_PROPOSITION_CONTENT = {
  h2: "What Makes Snow IT Expert Institute Different",
  bodyParagraph: "Every program at Snow IT Expert Institute is led live by a named, experienced mentor — not pre-recorded content or rotating trainers. Training is built around real production scenarios and hands-on practice rather than theory alone, so what you learn maps directly to what the job actually requires. Placement support doesn't end at certification: it continues through resume preparation, mock interviews, and follow-up until you're placed. This is the same structure across our ITSM, ServiceNow, and Generative AI & Data Science programs — consistent, accountable training from day one to offer letter.",
  introSubtext: "Most online IT courses lean heavily on theory. Here, every batch follows a guided path built around what hiring managers actually test for:",
  pillars: [
    {
      title: "Concept clarity sessions",
      description: "Fundamentals taught properly before anything else.",
      icon: "Lightbulb"
    },
    {
      title: "Hands-on tool practice",
      description: "Working directly in ServiceNow, Python, or whichever tools the role uses daily.",
      icon: "Terminal"
    },
    {
      title: "Scenario-based assignments",
      description: "Modeled on real production and business situations, not textbook exercises.",
      icon: "Briefcase"
    },
    {
      title: "Interview-focused preparation",
      description: "Practicing the specific question formats employers actually use.",
      icon: "Target"
    }
  ]
};

export const TRACKS_DATA: ProgramTrack[] = [
  {
    id: "it-process-manager",
    title: "IT Process Manager",
    shortTitle: "IT Process Manager",
    duration: "21 Days",
    mentorName: "Lavi",
    mentorTitle: "ITSM & Major Incident Specialist",
    noCodingRequired: true,
    salaryRange: "5–35 LPA",
    keyTopics: [
      "ITIL & ITSM",
      "Incident & Major Incident Management",
      "Problem & Change Management",
      "ServiceNow Ticketing"
    ],
    description: "Ideal for non-IT candidates and career switchers wanting a high-growth IT role with zero programming requirement.",
    fullOverview: "The IT Process Manager track trains you to coordinate major incidents, drive root-cause problem investigation, and manage IT service changes using ITIL v4 frameworks and ServiceNow ITSM tools.",
    curriculumModules: [
      {
        title: "Module 1: ITIL v4 Framework & ITSM Fundamentals",
        duration: "Days 1–5",
        topics: [
          "Service Value System & 34 ITIL Management Practices",
          "SLA, OLA, and Service Desk Workflows",
          "Service Catalog & Request Fulfillment Operations"
        ]
      },
      {
        title: "Module 2: Incident & Major Incident Management (MIM)",
        duration: "Days 6–12",
        topics: [
          "P1/P2 Incident Command Center Setup",
          "Bridge Call Handling & Technical Escalation Matrix",
          "Executive Communication & Post-Incident Reviews (PIR)"
        ]
      },
      {
        title: "Module 3: Problem & Change Management in Practice",
        duration: "Days 13–18",
        topics: [
          "Root Cause Analysis (5-Whys, Fishbone Diagram)",
          "Change Advisory Board (CAB) Approval Workflows",
          "Risk Assessment & Emergency Change Handling"
        ]
      },
      {
        title: "Module 4: Live ServiceNow Ticketing & Interview Simulation",
        duration: "Days 19–21",
        topics: [
          "Handling Real-World Incident/Change Tickets in ServiceNow",
          "Scenario-Based Interview Questions & P1 War Room Drills"
        ]
      }
    ],
    targetRoles: ["IT Process Manager", "Incident Manager", "Major Incident Lead", "Change Manager", "Service Desk Lead"],
    toolsCovered: ["ServiceNow ITSM", "JIRA Service Management", "ITIL v4 Framework", "Confluence", "PagerDuty"],
    batchSchedule: {
      nextBatch: getFormattedBatchDate('full'),
      timing: "8:00 PM – 9:30 PM IST",
      days: "Monday – Saturday (Live over Google Meet)",
      mode: "100% Live Interactive"
    },
    suitableFor: [
      "Freshers from B.Com, B.A, B.Sc, BBA, B.E/B.Tech",
      "Non-IT Career Switchers (Sales, Ops, HR, BPO, Customer Support)",
      "Candidates returning after a career gap"
    ]
  },
  {
    id: "servicenow-developer",
    title: "ServiceNow Developer",
    shortTitle: "ServiceNow Developer",
    duration: "21 Days",
    mentorName: "Disha",
    mentorTitle: "Senior ServiceNow Architect",
    certificationGuidance: "CSA, CAD, CIS-ITSM",
    salaryRange: "6–30+ LPA",
    keyTopics: [
      "ServiceNow Admin & Scripting",
      "Flow Designer",
      "Business Rules",
      "REST/SOAP Integrations"
    ],
    description: "Hands-on classroom focused 70% on live ServiceNow instances, taking you from Admin basics to custom script integrations.",
    fullOverview: "Master the fastest growing Enterprise Cloud Platform. Learn to customize ServiceNow, write Client Scripts & Business Rules, automate workflows with Flow Designer, and integrate third-party APIs.",
    curriculumModules: [
      {
        title: "Module 1: ServiceNow System Administration Essentials",
        duration: "Days 1–6",
        topics: [
          "Tables, Fields, Form Layouts & Schema Map",
          "User Administration, Roles, Groups & ACL Security",
          "Update Sets, Import Sets & Transform Maps"
        ]
      },
      {
        title: "Module 2: ServiceNow Development & Scripting Fundamentals",
        duration: "Days 7–13",
        topics: [
          "Client Scripts (onLoad, onChange, onSubmit, onCellEdit)",
          "UI Policies, UI Actions, and Catalog Client Scripts",
          "Server-side Scripting: Business Rules & GlideRecord API"
        ]
      },
      {
        title: "Module 3: Advanced Workflows, Flow Designer & Service Catalog",
        duration: "Days 14–17",
        topics: [
          "Designing Service Catalog Items & Order Guides",
          "Flow Designer Triggers, Actions & Subflows",
          "Script Includes & Asynchronous GlideAjax calls"
        ]
      },
      {
        title: "Module 4: REST/SOAP Web Service Integrations & Certification Prep",
        duration: "Days 18–21",
        topics: [
          "Outbound & Inbound REST/SOAP Integration",
          "Guided CSA (Certified System Admin) Mock Tests",
          "Guided CAD (Certified Application Developer) Exam Dumps & Drills"
        ]
      }
    ],
    targetRoles: ["ServiceNow Developer", "ServiceNow Administrator", "ServiceNow Consultant", "ITSM Technical Consultant"],
    toolsCovered: ["ServiceNow PDI", "JavaScript (ES6)", "Flow Designer", "REST/SOAP API", "Glide API"],
    batchSchedule: {
      nextBatch: getFormattedBatchDate('full'),
      timing: "7:00 AM – 8:30 AM or 8:30 PM – 10:00 PM IST",
      days: "Monday – Saturday (Live over Google Meet)",
      mode: "Live Instance Classroom (70% Practical)"
    },
    suitableFor: [
      "Software Engineers, Testers, Java/.NET Developers",
      "Support Engineers moving into ServiceNow ecosystem",
      "Freshers with basic programming/scripting familiarity"
    ]
  },
  {
    id: "applied-genai-data-science",
    title: "Applied GenAI & Data Science",
    shortTitle: "GenAI & Data Science",
    duration: "60 Days",
    mentorName: "Aashish Sir",
    mentorTitle: "Principal AI Engineer & Data Scientist",
    format: "Live + 55 Hours Recorded",
    salaryRange: "8–40+ LPA",
    keyTopics: [
      "Python to ML/DL",
      "RAG",
      "Prompt Engineering",
      "Agentic AI (LangChain, CrewAI)"
    ],
    description: "Comprehensive end-to-end journey from Python fundamentals to building and deploying production-grade AI Agents and RAG pipelines.",
    fullOverview: "A 60-day deep dive into modern AI engineering. Cover foundational Python, Machine Learning algorithms, Deep Learning, Large Language Models (LLMs), RAG architectures, and multi-agent frameworks.",
    curriculumModules: [
      {
        title: "Module 1: Advanced Python, Data Science Stack & Math Foundations",
        duration: "Days 1–15",
        topics: [
          "Python ES6 & Object-Oriented Programming for AI",
          "Pandas, NumPy, EDA & Data Preprocessing Pipelines",
          "Linear Algebra, Probability & Statistics for ML"
        ]
      },
      {
        title: "Module 2: Machine Learning & Deep Learning Core",
        duration: "Days 16–30",
        topics: [
          "Supervised & Unsupervised Learning (Scikit-Learn)",
          "Neural Networks, PyTorch & TensorFlow Core",
          "Computer Vision & NLP Fundamentals"
        ]
      },
      {
        title: "Module 3: Generative AI, LLMs, Vector DBs & RAG",
        duration: "Days 31–45",
        topics: [
          "Transformer Architecture & Modern LLMs (Gemini, OpenAI)",
          "Vector Databases (Pinecone, ChromaDB, FAISS)",
          "Advanced Retrieval-Augmented Generation (RAG) Pipelines"
        ]
      },
      {
        title: "Module 4: Agentic AI, LangChain, CrewAI & Deployment",
        duration: "Days 46–60",
        topics: [
          "Multi-Agent Orchestration with LangChain & CrewAI",
          "Prompt Engineering & Fine-Tuning Strategies",
          "Deploying GenAI APIs to Cloud Containers (Docker, FastAPI)"
        ]
      }
    ],
    targetRoles: ["GenAI Developer", "AI Engineer", "Data Scientist", "Machine Learning Engineer", "LLM Application Developer"],
    toolsCovered: ["Python", "PyTorch", "LangChain", "CrewAI", "ChromaDB", "FastAPI", "Gemini API"],
    batchSchedule: {
      nextBatch: `${getFormattedBatchDate('standard')} (Weekend Hybrid Batch)`,
      timing: "Live Saturday/Sunday Workshops + 55 hrs Recorded On-Demand",
      days: "60 Days Structured Program",
      mode: "Live Interactive + 55 Hours Recorded Access"
    },
    suitableFor: [
      "Freshers seeking modern high-demand AI roles",
      "Data Analysts & Software Engineers looking to transition to GenAI",
      "Tech Enthusiasts wanting hands-on LLM/Agentic AI project portfolio"
    ]
  }
];

export const TARGET_AUDIENCE = [
  {
    title: "Freshers",
    desc: "Freshers who want structured, job-focused training rather than a generic add-on to a degree",
    badge: "Graduates & Final Years",
    icon: "GraduationCap",
    color: "from-teal-500/10 to-teal-500/5 border-teal-500/20"
  },
  {
    title: "Career Switchers",
    desc: "Career switchers moving into IT from an unrelated field",
    badge: "Non-IT to Tech",
    icon: "ArrowRightLeft",
    color: "from-blue-500/10 to-blue-500/5 border-blue-500/20"
  },
  {
    title: "Career-Gap Candidates",
    desc: "Candidates returning to work after a career gap",
    badge: "Restart Your Career",
    icon: "RotateCcw",
    color: "from-amber-500/10 to-amber-500/5 border-amber-500/20"
  },
  {
    title: "Working Professionals",
    desc: "Working professionals upgrading their skills alongside a current job",
    badge: "Upskill & Move Up",
    icon: "TrendingUp",
    color: "from-emerald-500/10 to-emerald-500/5 border-emerald-500/20"
  },
  {
    title: "Support & Dev Transitioners",
    desc: "Support engineers, testers, and Java/.NET developers moving specifically into ServiceNow",
    badge: "Specialized Upskilling",
    icon: "Cpu",
    color: "from-cyan-500/10 to-cyan-500/5 border-cyan-500/20"
  }
];

export const PLACEMENT_STEPS = [
  {
    step: "01",
    title: "ATS-Friendly Profile Rebuild",
    desc: "Resume rebuilt in ATS-friendly format, alongside LinkedIn and Naukri profile optimization.",
    detail: "We align your key skills, project keywords, and technical accomplishments with employer resume parsing tools."
  },
  {
    step: "02",
    title: "Mandatory Mock Interview",
    desc: "A mandatory mock interview, with direct feedback before you speak to any employer.",
    detail: "Conducted by active industry mentors to test technical clarity, scenario handling, and communication confidence."
  },
  {
    step: "03",
    title: "Recruiter Network Sharing",
    desc: "Daily job openings shared, and your profile sent to multiple recruiters.",
    detail: "Direct referral access to top hiring partners, staffing firms, and enterprise recruiters across India & global remote hubs."
  },
  {
    step: "04",
    title: "Interview Scheduling & Prep",
    desc: "Interview calls scheduled, with preparation and last-minute doubt-clearing before each one.",
    detail: "Company-specific interview round guidance, recent question dumps, and one-on-one pre-interview briefing."
  },
  {
    step: "05",
    title: "Offer & Salary Discussion Support",
    desc: "Offer letter, documentation, and salary discussion support once an offer comes in.",
    detail: "Guidance through offer verification, CTC negotiation, background check clearance, and onboarding paperwork."
  }
];

export const MENTORS_DATA: Mentor[] = [
  {
    id: "lavi",
    name: "Lavi",
    track: "IT Process Manager",
    role: "ITSM & Major Incident Lead",
    bio: "Teaches Major Incident and Problem Management through real production scenarios instead of slide-based theory.",
    highlights: [
      "10+ Years managing P1/P2 Major Incidents for Fortune 500 enterprises",
      "Focuses on war-room escalation scenarios and bridge management",
      "Zero coding required teaching framework"
    ],
    experienceYears: "10+ Yrs",
    avatarBg: "bg-teal-600"
  },
  {
    id: "disha",
    name: "Disha",
    track: "ServiceNow Developer",
    role: "Senior ServiceNow Developer & Architect",
    bio: "Runs a hands-on-first classroom, with roughly 70% of class time spent practicing on a live ServiceNow instance.",
    highlights: [
      "Certified System Administrator (CSA) & CAD mentor",
      "Spearheaded enterprise ServiceNow implementations & integrations",
      "70% hands-on live instance training in every session"
    ],
    experienceYears: "8+ Yrs",
    avatarBg: "bg-blue-600"
  },
  {
    id: "aashish",
    name: "Aashish Sir",
    track: "Applied GenAI & Data Science",
    role: "AI Tech Lead & Data Scientist",
    bio: "Covers the full path from Python basics to deployed AI agents, with weekly project checkpoints.",
    highlights: [
      "Architected custom RAG systems & Autonomous AI Agent swarms",
      "Weekly live coding checkpoints & repository reviews",
      "Guided 300+ professionals into AI & Data Engineering"
    ],
    experienceYears: "12+ Yrs",
    avatarBg: "bg-amber-600"
  }
];

export const SUCCESS_STORIES: Testimonial[] = [
  {
    id: "1",
    candidateName: "Priya Sharma",
    batch: "IT Process Manager Batch 18",
    companyName: "Cognizant",
    roleTitle: "Incident Manager",
    prevRole: "Customer Care Executive (Non-IT)",
    ctc: "8.5 LPA",
    hike: "140% Hike",
    trackId: "it-process-manager",
    quote: "Switching from BPO to IT seemed daunting until Lavi Sir taught Major Incident Management with real incident war room scenarios. I passed my interview on the first attempt!",
    featured: true
  },
  {
    id: "2",
    candidateName: "Rohan Kulkarni",
    batch: "ServiceNow Dev Batch 24",
    companyName: "Infosys",
    roleTitle: "ServiceNow Developer",
    prevRole: "Manual QA Engineer",
    ctc: "12.0 LPA",
    hike: "110% Hike",
    trackId: "servicenow-developer",
    quote: "Disha Ma'am's 70% live instance practice gave me the confidence to handle Flow Designer and Business Rules live during the technical round.",
    featured: true
  },
  {
    id: "3",
    candidateName: "Ananya Roy",
    batch: "GenAI & Data Science Batch 09",
    companyName: "Deloitte",
    roleTitle: "GenAI Application Developer",
    prevRole: "Software Developer (3 Yr Gap)",
    ctc: "16.5 LPA",
    hike: "Returned after 3 Yr Career Gap",
    trackId: "applied-genai-data-science",
    quote: "Aashish Sir's step-by-step guidance on LangChain & CrewAI helped me build a portfolio of deployed AI agents that impressed the Deloitte team.",
    featured: true
  },
  {
    id: "4",
    candidateName: "Vikas Verma",
    batch: "IT Process Manager Batch 21",
    companyName: "TCS",
    roleTitle: "Change Manager",
    prevRole: "BBA Graduate (Fresher)",
    ctc: "6.8 LPA",
    hike: "Direct Campus-to-Corporate Placement",
    trackId: "it-process-manager",
    quote: "As a BBA fresher with zero coding skills, this 21-day program gave me exact ITIL knowledge that got me placed immediately.",
    featured: false
  },
  {
    id: "5",
    candidateName: "Siddharth Nair",
    batch: "ServiceNow Dev Batch 26",
    companyName: "Wipro",
    roleTitle: "ServiceNow Consultant",
    prevRole: "Technical Support Analyst",
    ctc: "14.2 LPA",
    hike: "95% Hike",
    trackId: "servicenow-developer",
    quote: "The mock interviews and profile optimization were crucial. The recruiters knew I wasn't just book-smart, but instance-ready.",
    featured: false
  },
  {
    id: "6",
    candidateName: "Megha Patel",
    batch: "GenAI & Data Science Batch 11",
    companyName: "Accenture",
    roleTitle: "AI Solution Engineer",
    prevRole: "Data Analyst",
    ctc: "18.0 LPA",
    hike: "130% Hike",
    trackId: "applied-genai-data-science",
    quote: "Building real RAG vector search applications during the 60 days set my profile apart from standard Data Science applicants.",
    featured: false
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Is placement guaranteed after training?",
    answer: "We provide dedicated placement assistance — resume preparation, mock interviews, recruiter connections, and interview support — for as long as it takes to get you in front of the right employers. The final decision sits with the hiring company, so how you perform in interviews still matters most.",
    category: "Placement"
  },
  {
    id: "faq-2",
    question: "Is this IT training institute good for freshers with no experience?",
    answer: "Yes. All three programs are built to take someone with little or no prior IT background to job-ready, through live instruction followed by a structured interview simulation period.",
    category: "Eligibility"
  },
  {
    id: "faq-3",
    question: "Do I need a coding background to join?",
    answer: "Not for the IT Process Manager program — it's built as a no-coding track. The ServiceNow Developer and Applied GenAI & Data Science programs include scripting and Python respectively, taught from the fundamentals up.",
    category: "Eligibility"
  },
  {
    id: "faq-4",
    question: "Which course fits someone switching careers from a non-IT background?",
    answer: "IT Process Manager is the most common starting point for non-IT switchers, since it requires no coding. If you're open to learning some scripting, ServiceNow Developer or Applied GenAI & Data Science are also open to switchers with no prior tech job.",
    category: "Courses"
  },
  {
    id: "faq-5",
    question: "How are the classes conducted?",
    answer: "IT Process Manager and ServiceNow Developer run live over Google Meet, Monday through Saturday, about 1.5 hours per session. Applied GenAI & Data Science combines live and recorded sessions across 60 days. All programs include session recordings for revision.",
    category: "Schedule"
  }
];

export const COMPANY_LOGOS = [
  "TCS", 
  "Accenture", 
  "Infosys", 
  "Cognizant", 
  "Wipro", 
  "HCLTech", 
  "Deloitte", 
  "Tech Mahindra"
];
