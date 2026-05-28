const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const experience = [
  {
    role: "Full Stack Web DevelopementIntern",
    company: "Incrix",
    duration: "June 2024 (15 Days)",
    location: "Remote / Hybrid",
    description: "Completed an intensive internship program focusing on software development lifecycles. Gained hands-on experience in building fundamental web structures and understanding industry-standard coding practices.",
    skills: ["Web Development", "Software Architecture", "Problem Solving"],
    certificate: publicAsset("Certificates/Incrix-Certificate.png")
  },
];
