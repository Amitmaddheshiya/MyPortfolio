const resumeLink =
  "https://drive.google.com/file/d/16DcreuJOCqm4p3QMqToi0whb2ogEnjd_/view?usp=sharing";

const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "systems", title: "Systems" },
  { id: "work", title: "Projects" },
  { id: "github", title: "GitHub" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "Full Stack Engineer",
    icon: "./fullStack.png",
    description: "React, React Native, Electron, Node.js, Express, and MongoDB systems delivered across web, mobile, desktop, and TV surfaces.",
  },
  {
    title: "Product Engineer",
    icon: "./frontend.png",
    description: "Business workflows shaped into usable products with admin dashboards, role flows, analytics, and repeatable operations.",
  },
  {
    title: "Software Engineer",
    icon: "./backend.png",
    description: "API-driven architecture, authentication, data modeling, file workflows, exports, and production deployment fundamentals.",
  },
  {
    title: "Systems Builder",
    icon: "./cloud.png",
    description: "Distributed signage, payroll automation, HR documents, ADB device control, and multi-platform delivery pipelines.",
  },
];

const technologies = [
  { name: "React", icon: "./reactjs.png" },
  { name: "Next.js", icon: "./next.png" },
  { name: "TypeScript", icon: "./typescript.png" },
  { name: "React Native", icon: "./reactjs.png" },
  { name: "Electron", icon: "./javascript.png" },
  { name: "Node.js", icon: "./nodejs.png" },
  { name: "Express.js", icon: "./expressjs.png" },
  { name: "MongoDB", icon: "./mongodb.png" },
  { name: "PostgreSQL", icon: "./mongodb.png" },
  { name: "Mongoose", icon: "./mongoose.png" },
  { name: "Tailwind CSS", icon: "./tailwind.png" },
  { name: "Material UI", icon: "./material-ui.png" },
  { name: "Framer Motion", icon: "./frontend.png" },
  { name: "AWS EC2", icon: "./ec2.png" },
  { name: "AWS S3", icon: "./Amazon-S3.png" },
];

const tools = [
  { name: "VS Code", icon: "./vscode.png" },
  { name: "Postman", icon: "./postman.png" },
  { name: "MongoDB Compass", icon: "./mongodbCompass.png" },
  { name: "Git", icon: "./git.png" },
  { name: "GitHub", icon: "./github.png" },
  { name: "Ubuntu", icon: "./ubuntu.png" },
];

const githubProfiles = [
  {
    name: "Amit Maddheshiya",
    role: "Primary engineering profile",
    url: "https://github.com/Amitmaddheshiya",
    focus: ["Portfolio", "MERN apps", "product builds"],
  },
  {
    name: "Amit Web Solution Company",
    role: "Business and client systems",
    url: "https://github.com/amitwebsolutioncompany-maker",
    focus: ["HR tools", "salon SaaS", "desktop apps"],
  },
  {
    name: "Amit NextView",
    role: "Digital signage and platform work",
    url: "https://github.com/amitnextview-crypto",
    focus: ["TV player", "device control", "release builds"],
  },
];

const systemDesigns = [
  {
    title: "Digital Signage Distribution Architecture",
    summary: "Admin-driven content distribution for TV devices with scheduling, grouping, layouts, and remote playback control.",
    nodes: ["Admin Dashboard", "API Layer", "MongoDB", "Media Store", "Scheduler", "TV Devices"],
    flows: ["Authentication flow", "Content publishing", "Device sync", "Playback telemetry"],
  },
  {
    title: "Payroll Management System",
    summary: "Employee, attendance, leave, salary, and export workflows modeled for repeatable HR operations.",
    nodes: ["Admin Panel", "RBAC", "Attendance API", "Payroll Engine", "MongoDB", "Excel/PDF Export"],
    flows: ["Role access", "Daily attendance", "Salary generation", "Report exports"],
  },
  {
    title: "Multi-role Salon Booking SaaS",
    summary: "Salon operations platform with customer booking, staff roles, offers, dashboards, and analytics.",
    nodes: ["Customer App", "Staff Panel", "Admin Dashboard", "Booking API", "MongoDB", "Analytics"],
    flows: ["Customer booking", "Staff assignment", "Offer management", "Business insights"],
  },
];

const engineeringImpact = [
  "Automated payroll processing workflows across attendance, leave, salary, and export operations.",
  "Built a distributed TV content delivery system for multimedia advertising and device-level control.",
  "Developed enterprise-grade HR tooling for payslips and 17+ document generation workflows.",
  "Engineered a multi-role SaaS booking ecosystem with staff operations and analytics dashboards.",
  "Implemented cross-platform device management solutions for Android TV administration.",
  "Delivered production-style releases across APK, desktop installer, web dashboard, and portfolio platforms.",
];

const workExperience = [
  {
    role: "Full Stack Engineer",
    subtitle: "Full Stack Engineer",
    company: "Next View Technologies (India) Pvt. Ltd.",
    period: "March 2025 - Present",
    type: "Product engineering",
    highlights: [
      "Building production systems across React Native, Electron, Express.js, and MongoDB.",
      "Delivered payroll, HR automation, digital signage, Android device control, and business web platforms.",
      "Owns multi-platform product workflows from UI architecture to release artifacts.",
    ],
  },
];

const smallerProjects = [
  {
    name: "Weather Check Website",
    description:
      "City-name based weather search website with responsive UI and API-driven weather results.",
    tags: ["Responsive Web", "REST API", "Real project"],
  },
  {
    name: "Eventfesto Web",
    description:
      "Event booking website created for real-world event discovery, booking flows, and customer-facing UI.",
    tags: ["Event Booking", "MERN", "Responsive UI"],
  },
  {
    name: "Additional Small Builds",
    description:
      "Multiple utility, dashboard, landing page, and workflow projects built while learning and solving practical business use cases.",
    tags: ["Frontend", "Backend", "Business workflows"],
  },
];

const projects = [
  {
    slug: "signage-player-tv",
    name: "SignagePlayerTV.apk",
    platform: "Android TV / React Native",
    ownership: "Built for employer",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    description:
      "Built a distributed digital signage ecosystem supporting TV-based multimedia advertising with remote content management, scheduling, screen layouts, grouping, and device-level control.",
    tech: ["React Native", "Express.js", "MongoDB"],
    features: ["Video, image, PDF, and PPT rendering", "Remote HTTP control", "Scheduling engine", "Screen split layouts", "Content grouping", "TV rotation system"],
    architectureTags: ["Distributed System", "Offline-first", "Media Streaming", "Device Management"],
    links: [
      { label: "Live APK", url: "https://github.com/amitnextview-crypto/NVAPlayerTV/releases/download/NVA-SignagePlayerTV/NVA-SignagePlayerTV.apk" },
      { label: "Loom Video", url: "https://www.loom.com/share/1b8ff78eb54b4f6d998db0681ca5f30a" },
    ],
    caseStudy: {
      problem: "Businesses need centralized signage control without manually touching each TV device.",
      useCase: "An admin can publish media, assign it to screen groups, schedule playback, and control remote TV devices.",
      architecture: "React Native TV clients sync through an Express API backed by MongoDB content, layout, schedule, and device records.",
      stack: "React Native, Express.js, MongoDB, Android TV, remote HTTP commands.",
      challenges: "Reliable media rendering, TV layout rotation, device grouping, and offline playback resilience.",
      scalability: "Group-based publishing and schedule metadata allow many screens to consume the same content plan.",
      security: "API authorization, device-level registration, and controlled command surfaces.",
      performance: "Local caching, predictable layout rendering, and media type-aware playback paths.",
      future: "Device health dashboards, richer telemetry, and content CDN integration.",
    },
  },
  {
    slug: "aws-payroll",
    name: "AWSPayroll.apk",
    platform: "Mobile SaaS / React Native",
    ownership: "Built for employer",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    description:
      "Developed a full employee payroll and attendance management platform with automated salary generation, leave tracking, attendance monitoring, and Excel export workflows.",
    tech: ["React Native", "Express.js", "MongoDB"],
    features: ["Attendance monitoring", "Leave tracking", "Automated salary generation", "Excel export workflows", "Employee records"],
    architectureTags: ["Enterprise SaaS", "RBAC", "HR Automation", "Real-time Tracking"],
    links: [
      { label: "APK", url: "https://github.com/amitnextview-crypto/AWSPayroll/releases/download/AWSPayroll/app-release.apk" },
      { label: "Loom Video", url: "https://www.loom.com/share/06d6f9bdd01f4eb893ae0cd64740c575" },
    ],
    caseStudy: {
      problem: "Manual payroll processing is slow, error-prone, and hard to audit.",
      useCase: "HR teams can manage attendance, leave, salary calculation, and exports from one mobile workflow.",
      architecture: "React Native app communicates with an Express API and MongoDB models for staff, attendance, salary, and leave records.",
      stack: "React Native, Express.js, MongoDB, Excel export workflows.",
      challenges: "Data consistency across attendance, leave, salary, and payroll periods.",
      scalability: "Company and employee records can be extended into tenant-level boundaries and larger HR datasets.",
      security: "Role-based access, authenticated API usage, and restricted admin operations.",
      performance: "Server-side calculations and export generation keep mobile flows responsive.",
      future: "Biometric integrations, audit logs, and multi-company subscription plans.",
    },
  },
  {
    slug: "aws-hr-flow",
    name: "AWSHRFlow.exe",
    platform: "Desktop / Electron",
    ownership: "Built for employer",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    description:
      "Created an Electron-based HR automation desktop suite capable of generating payslips and 17+ HR documents in PDF format.",
    tech: ["Electron.js", "Node.js"],
    features: ["Payslip generation", "17+ HR documents", "PDF workflows", "Desktop installer"],
    architectureTags: ["Desktop Automation", "PDF Generation", "HR Workflow System"],
    links: [
      { label: "Download", url: "https://github.com/amitwebsolutioncompany-maker/AWSHRFlow/releases/download/AWSHRFlow/AWSHRFlow.Setup.1.6.0.exe" },
      { label: "Loom Video", url: "https://www.loom.com/share/60798bf44e104d1dad8114c672dc9b12" },
    ],
    caseStudy: {
      problem: "HR document generation often depends on repeated manual editing and formatting.",
      useCase: "Teams can generate standardized payslips and HR documents from structured inputs.",
      architecture: "Electron shell with Node.js document generation logic and local desktop workflows.",
      stack: "Electron.js, Node.js, PDF generation.",
      challenges: "Consistent document formatting, installer packaging, and desktop workflow ergonomics.",
      scalability: "Document templates can be expanded without changing the core generation pipeline.",
      security: "Local-first processing reduces exposure of sensitive HR data.",
      performance: "Desktop generation avoids network round trips for document creation.",
      future: "Template designer, bulk imports, and encrypted local storage.",
    },
  },
  {
    slug: "android-controller",
    name: "AndroidController.exe",
    platform: "Desktop Utility / ADB",
    ownership: "Built for employer",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    description:
      "Built a desktop utility to remotely manage Android TVs and devices through ADB-based command execution and automation.",
    tech: ["Electron.js", "Node.js", "ADB"],
    features: ["ADB command execution", "Remote TV/device actions", "Desktop automation", "Operational utility workflows"],
    architectureTags: ["Device Control", "System Utility", "Desktop Engineering"],
    links: [
      { label: "Download", url: "https://github.com/amitnextview-crypto/Amitmaddheshiya-NV-A-ANDROID-CONTROLLER-ELECTRONJS/releases/download/ANDROID_CONTROLLER.EXE.2.2.1/NV-A.Android.Controller.Setup.2.2.1.exe" },
    ],
    caseStudy: {
      problem: "Managing multiple Android TVs manually is slow and operationally expensive.",
      useCase: "Operators can execute repeatable ADB actions from a desktop controller.",
      architecture: "Electron interface orchestrates Node.js command execution against connected Android devices.",
      stack: "Electron.js, Node.js, ADB.",
      challenges: "Device discovery, command reliability, and safe automation controls.",
      scalability: "Command presets and device groups can support larger fleets.",
      security: "Local device access and explicit command execution boundaries.",
      performance: "Direct ADB execution gives fast operational feedback.",
      future: "Fleet dashboard, logs, saved device profiles, and remote agent support.",
    },
  },
  {
    slug: "mitpix",
    name: "MitPix.apk",
    platform: "Salon SaaS / React Native",
    ownership: "Own business product",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Built a scalable salon SaaS ecosystem with customer booking, role-based staff systems, analytics dashboards, offers, and operational workflows.",
    tech: ["React Native", "Express.js", "MongoDB"],
    features: ["Customer booking", "Staff roles", "Analytics dashboards", "Offer workflows", "Operational management"],
    architectureTags: ["Multi-tenant SaaS", "Booking Engine", "RBAC", "Analytics Dashboard"],
    links: [
      { label: "APK", url: "https://github.com/amitwebsolutioncompany-maker/MitPixAuraStudio/releases/download/MitPixAuraStudio/app-release.apk" },
      { label: "Loom Video", url: "https://www.loom.com/share/e70da0a6e77943fdb2ede904b860d1a1" },
    ],
    caseStudy: {
      problem: "Salon operations need bookings, staff workflows, offers, and customer management in one place.",
      useCase: "Owners can run customer bookings, staff assignment, offers, and dashboard analytics from a mobile SaaS flow.",
      architecture: "React Native clients consume Express APIs backed by MongoDB records for bookings, users, offers, and analytics.",
      stack: "React Native, Express.js, MongoDB.",
      challenges: "Role-specific UX, booking state transitions, and operational reporting.",
      scalability: "Tenant-oriented data boundaries can support multiple salon businesses.",
      security: "RBAC and authenticated admin/staff/customer surfaces.",
      performance: "Lean mobile screens and API-driven dashboards keep operations quick.",
      future: "Payments, subscriptions, notifications, and multi-branch analytics.",
    },
  },
  {
    slug: "easyemployee-web",
    name: "EasyEmployee Web",
    platform: "Web Dashboard",
    ownership: "Built for employer",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description:
      "Web-based payroll and employee management platform with automated HR workflows and attendance systems.",
    tech: ["React", "Express.js", "MongoDB"],
    features: ["Admin dashboard", "Payroll workflows", "Attendance systems", "Employee management"],
    architectureTags: ["Enterprise Dashboard", "HR SaaS", "Admin Panel"],
    links: [{ label: "Live", url: "https://nextviewpayrollfrontendmerns-5wt1.vercel.app/" }],
    caseStudy: {
      problem: "HR administrators need a web control plane for employee and payroll operations.",
      useCase: "Admins manage staff, attendance, payroll, and HR workflows from a browser dashboard.",
      architecture: "React dashboard, API layer, and MongoDB-backed HR domain models.",
      stack: "React, Express.js, MongoDB.",
      challenges: "Data-heavy admin screens, repeatable workflows, and clean operational UX.",
      scalability: "Dashboard modules can grow into tenant and department-level views.",
      security: "Admin-only routes and authenticated API boundaries.",
      performance: "Dashboard content grouped around common HR tasks to reduce navigation cost.",
      future: "Audit trails, granular permissions, and reporting exports.",
    },
  },
  {
    slug: "signage-business-website",
    name: "Signage Business Website",
    platform: "Business Website",
    ownership: "Built for employer",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    description:
      "Business-facing digital signage platform showcasing advertisement management systems and enterprise signage solutions.",
    tech: ["React", "Vercel", "Responsive UI"],
    features: ["Product storytelling", "Enterprise signage positioning", "Responsive pages", "Conversion CTAs"],
    architectureTags: ["Marketing Site", "B2B Product", "Responsive Web"],
    links: [{ label: "Live", url: "https://signage-nextview-website.vercel.app/" }],
    caseStudy: {
      problem: "The signage product needs a credible business-facing web presence.",
      useCase: "Prospects can understand digital signage capabilities, business value, and solution fit.",
      architecture: "Static React site deployed on Vercel with product sections and calls to action.",
      stack: "React, Vercel, responsive UI.",
      challenges: "Explaining technical signage systems in business-friendly language.",
      scalability: "Content sections can expand into pricing, case studies, and lead capture.",
      security: "Static deployment keeps attack surface small.",
      performance: "Lightweight responsive pages with optimized image usage.",
      future: "Lead forms, demos, analytics, and integration with the signage app.",
    },
  },
  {
    slug: "portfolio-website",
    name: "Portfolio Website",
    platform: "Personal Brand / React",
    ownership: "Personal project",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    description:
      "Personal engineering portfolio designed to present product systems, architecture decisions, platform coverage, and production-ready execution.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    features: ["Project showcases", "Case study pages", "System design section", "Responsive UI"],
    architectureTags: ["Portfolio System", "Frontend Architecture", "Engineering Storytelling"],
    links: [{ label: "Live", url: "https://amit-maddheshiya-portfolio.vercel.app/" }],
    caseStudy: {
      problem: "A senior portfolio needs to prove engineering depth beyond screenshots and short descriptions.",
      useCase: "Recruiters, clients, and technical reviewers can evaluate project scope and architecture thinking.",
      architecture: "React app with reusable section components, data-driven projects, and dynamic detail pages.",
      stack: "React, Tailwind CSS, Framer Motion.",
      challenges: "Balancing visual polish with dense engineering information.",
      scalability: "Project data drives cards and detail pages from the same source.",
      security: "External links are isolated and no sensitive backend surfaces are exposed.",
      performance: "Static data and lightweight animations keep the experience fast.",
      future: "CMS-backed case studies, metrics, and live architecture diagrams.",
    },
  },
];

export {
  engineeringImpact,
  githubProfiles,
  navLinks,
  projects,
  resumeLink,
  services,
  smallerProjects,
  systemDesigns,
  technologies,
  tools,
  workExperience,
};
