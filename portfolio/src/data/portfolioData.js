// ─────────────────────────────────────────
//  Portfolio Content — Edit this file to
//  update all text, links, and data easily
// ─────────────────────────────────────────

export const personalInfo = {
  name: "Harshavardhan M V",
  shortName: "HMV",
  title: "MERN Stack Developer",
  tagline: "Building scalable web applications with modern UI/UX",
  description:
    "Results-driven MERN Stack Developer with hands-on experience designing and developing scalable web applications. I thrive at the intersection of clean code and compelling user experiences — turning business requirements into reliable, high-performance products.",
  location: "Bangalore, Karnataka, India",
  email: "harshavardhandevang@gmail.com",
  phone: "+91 636 103 3030",
  linkedin: "https://www.linkedin.com/in/harshavardhan-devang1508",
  github: "https://github.com/Vardhan158",
  resumeUrl: "/resume.pdf", // place your resume PDF in /public
  available: true,
  stats: [
    { number: "4+", label: "Projects" },
    { number: "2", label: "Companies" },
    { number: "1yr+", label: "Experience" },
  ],
};

export const typingRoles = [
  "MERN Stack Developer",
  "Full-Stack Engineer",
  "React.js Developer",
  "Node.js Backend Dev",
];

export const skills = [
  {
    category: "Frontend",
    items: ["React.js", "HTML5", "CSS3", "JavaScript ES6+", "Responsive Design"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Mongoose"],
  },
  {
    category: "Database",
    items: ["MongoDB", "CRUD Operations", "DB Design", "Schema Optimization"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "Agile / Scrum", "SEO Optimization", "Cross-browser Testing"],
  },
  {
    category: "AI Tools",
    items: ["ChatGPT", "GitHub Copilot", "Codex", "Claude.ai"],
  },
];

export const projects = [
  {
    id: 1,
    icon: "📅",
    title: "Event Management System",
    description:
      "Full-stack event booking platform enabling users to browse, book, and manage events with secure authentication and role-based access control for admins and regular users.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Mongoose"],
    category: "fullstack",
    github: "https://github.com/Vardhan158/Event",
    live: "https://event-1-0366.onrender.com",
  },
  {
    id: 2,
    icon: "✍️",
    title: "Blog Management System",
    description:
      "Feature-rich blogging platform with complete CRUD operations, JWT-based authentication, role-based access, and optimized database queries for fast, scalable performance.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    category: "fullstack",
    github: "https://github.com/Vardhan158/Blog",
    live: "https://blog-1-eajx.onrender.com",
  },
  {
    id: 3,
    icon: "⚡",
    title: "Solar EV Charging System",
    description:
      "Solar-powered EV charging management app with real-time monitoring dashboard, session tracking, and energy metrics — promoting sustainable infrastructure adoption.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Real-time"],
    category: "fullstack",
    github: "https://github.com/Vardhan158/solar-ev",
    live: "https://solar-ev-frontend.onrender.com",
  },
  {
    id: 4,
    icon: "🐾",
    title: "PetPal — Pet Adoption Platform",
    description:
      "Pet adoption and care platform allowing users to browse pets and submit adoption requests. Includes JWT auth, RBAC, and full admin management workflow.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT/RBAC"],
    category: "fullstack",
    github: "https://github.com/Vardhan158/pet-pal",
    live: "https://pet-pal-front.onrender.com",
  },
  {
    id: 5,
    icon: "🤖",
    title: "LumarQi AI Website",
    description:
      "Official corporate website for an AI analytics company. SEO-optimized, fully responsive, with modular React components and Node.js backend API integration.",
    tech: ["React.js", "HTML5", "CSS3", "Node.js", "SEO"],
    category: "frontend",
    github: null,
    live: "https://www.lumarqi.com/",
  }
];

export const projectFilters = [
  { key: "all", label: "All" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
];

export const experience = [
  {
    type: "Work Experience",
    title: "Software Developer",
    org: "LumarQi AI",
    period: "Sep 2025 – Present · Bangalore",
    color: "purple",
    points: [
      "Designed and developed the official corporate website — modern, responsive, and SEO-optimized",
      "Built modular React components improving maintainability, scalability, and front-end performance",
      "Integrated RESTful APIs using Node.js and Express.js for reliable content management",
      "Collaborated directly with the Founder & CEO to translate product vision into technical solutions",
      "Managed deployment and version control using Git/GitHub for streamlined collaboration",
    ],
  },
  {
    type: "Work Experience",
    title: "Software Developer",
    org: "Varcon's Technologies",
    period: "Feb 2025 – Jun 2025 · Bangalore",
    color: "purple",
    points: [
      "Developed 3+ responsive full-stack web applications using the MERN stack",
      "Implemented reusable React components and efficient state management",
      "Designed scalable MongoDB database schemas and integrated RESTful APIs",
      "Participated in Agile sprints, sprint planning, task tracking, and code reviews",
      "Optimized application load speed and cross-browser compatibility",
    ],
  },
  {
    type: "Education",
    title: "B.E. — Electronics & Communication Engineering",
    org: "Navkis College of Engineering, VTU",
    period: "Visvesvaraya Technological University · Karnataka",
    color: "green",
    points: [],
  },
];
