const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const projects = [
  {
    title: "Portfolio Website",
    description: "A premium, HR-friendly developer portfolio showcasing projects and skills with a modern professional aesthetic and seamless animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "",
    github: "https://github.com/selvameenasubramanian27-art",
    demo: "",
  },
  {
    title: "Organic Egg Farm",
    description: "A professional landing page for an organic farm business, featuring product displays, mission statement, and responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "",
    github: "https://github.com/selvameenasubramanian27-art",
    demo: "",
  },
  {
    title: "Quiz Website",
    description: "A responsive and interactive quiz platform built using HTML, CSS, and JavaScript featuring dynamic score tracking, multiple question flows, and user-friendly UI interactions.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: publicAsset("Projects/quiz/preview.png"),
    github: "https://github.com/selvameenasubramanian27-art/quiz-website",
    demo: "https://selvameenasubramanian27-art.github.io/quiz-website",
    screenshots: [
      {
        src: publicAsset("Projects/quiz/preview.png"),
        title: "Dashboard Overview",
      },
      {
        src: publicAsset("Projects/quiz/quiz-login.png"),
        title: "Login Screen",
      },
      {
        src: publicAsset("Projects/quiz/quiz-signup.png"),
        title: "Signup Flow",
      },
      {
        src: publicAsset("Projects/quiz/quiz-student-login.png"),
        title: "Student Login",
      },
      {
        src: publicAsset("Projects/quiz/mcq-mode.png"),
        title: "MCQ Mode",
      },
      {
        src: publicAsset("Projects/quiz/voice-quiz-mode.png"),
        title: "Voice Quiz Mode",
      },
      {
        src: publicAsset("Projects/quiz/leaderboard.png"),
        title: "Leaderboard",
      },
      {
        src: publicAsset("Projects/quiz/admin-login.png"),
        title: "Admin Login",
      },
      {
        src: publicAsset("Projects/quiz/admin-panel1.png"),
        title: "Admin Panel",
      },
      {
        src: publicAsset("Projects/quiz/admin-panel2.png"),
        title: "Admin Management",
      },
    ],
  },
  {
    title: "Modern Calculator",
    description: "A functional and sleek calculator application capable of handling basic arithmetic with an elegant dark theme UI.",
    tech: ["JavaScript", "CSS", "HTML"],
    image: "",
    github: "https://github.com/selvameenasubramanian27-art",
    demo: "",
  },
];
