export const portfolio = {
  name: "Atul Prem Narayan",
  role: "Full Stack Developer",
  status: "Building & Learning",
  availability: "AVAILABLE FOR OPPORTUNITIES",
  
  social: {
    github: "YOUR_GITHUB_URL",
    linkedin: "YOUR_LINKEDIN_URL",
    email: "YOUR_EMAIL",
    resume: "#"
  },

  about: {
    heading: "I enjoy turning ideas, problems and experiments into working software.",
    bio: "I am a B.Tech CSE (Hons.) student at Lovely Professional University with a deep interest in software engineering. I specialize in full-stack development, UI/UX, automation, and AI-assisted development. I'm constantly experimenting with new technologies, from modern web frameworks like Next.js and Flutter for multi-platform apps, to hardware integrations involving Arduino, ESP32, and computer vision.",
    education: "B.Tech CSE (Hons.)",
    focus: "Web • Backend • Flutter • Systems"
  },

  skills: {
    frontend: [
      { name: "Next.js", icon: "Triangle" },
      { name: "React", icon: "Atom" },
      { name: "TypeScript", icon: "Code2" },
      { name: "Tailwind CSS", icon: "Palette" },
      { name: "Flutter", icon: "Smartphone" },
    ],
    backend: [
      { name: "Node.js", icon: "Server" },
      { name: "Python", icon: "TerminalSquare" },
      { name: "Databases", icon: "Database" },
      { name: "APIs", icon: "Network" },
    ],
    tools: [
      { name: "Git", icon: "GitCommit" },
      { name: "Docker", icon: "Box" },
      { name: "Linux", icon: "FileTerminal" },
    ],
    hardware: [
      { name: "Arduino & ESP32", icon: "Cpu" },
      { name: "OpenCV", icon: "Eye" }
    ]
  },

  projects: [
    {
      id: "01",
      title: "Medical ERP System",
      description: "Comprehensive medical inventory and enterprise resource planning platform.",
      technologies: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      github: "PROJECT_GITHUB_URL",
      demo: "PROJECT_DEMO_URL",
      diagram: [
        "Inventory",
        "Purchases",
        "Sales",
        "Suppliers",
        "Reports"
      ]
    },
    {
      id: "02",
      title: "ProofOfLearning",
      description: "Smart virtual classroom with engagement monitoring and analytics.",
      technologies: ["Next.js", "WebRTC", "Python", "Computer Vision"],
      github: "PROJECT_GITHUB_URL",
      demo: "PROJECT_DEMO_URL",
      diagram: [
        "Teacher",
        "Virtual Classroom",
        "Monitoring",
        "Analytics"
      ]
    },
    {
      id: "03",
      title: "Poképedia",
      description: "Interactive encyclopedia for Pokémon with detailed stats and abilities.",
      technologies: ["React", "API Integration", "Framer Motion"],
      github: "PROJECT_GITHUB_URL",
      demo: "PROJECT_DEMO_URL",
    },
    {
      id: "04",
      title: "Crypto Price Tracker",
      description: "Real-time cryptocurrency tracking platform with live chart integrations.",
      technologies: ["Next.js", "WebSockets", "Tailwind"],
      github: "PROJECT_GITHUB_URL",
      demo: "PROJECT_DEMO_URL",
    },
    {
      id: "05",
      title: "Eye-Blink HCI",
      description: "Human-Computer Interface controlled entirely by eye blinks.",
      technologies: ["Python", "OpenCV", "Dlib"],
      github: "PROJECT_GITHUB_URL",
      demo: "PROJECT_DEMO_URL",
      diagram: [
        "L-BLINK → LEFT",
        "R-BLINK → RIGHT",
        "B-BLINK → ENTER"
      ]
    }
  ],

  stats: [
    { label: "Projects", value: "06+" },
    { label: "Technologies", value: "10+" },
    { label: "Technical Domains", value: "02+" },
    { label: "Ideas", value: "∞" },
  ]
};