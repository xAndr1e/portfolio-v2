

export const projects = [
    {
        slug: "coffee-dev",
        title: "Coffee.Dev",
        subtitle: "A coffee-themed development blog built for makers and caffeine lovers.",
        description: "A full-stack development blog with a coffee aesthetic. Features authentication, blog posts, and a clean reading experience.",
        image: "/projects/Coffee-Dev.png",
        liveUrl: "https://coffee-dev-rho.vercel.app/",
        githubUrl: "https://github.com/xAndr1e/coffee-dev",
        techs: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
    },
    {
        slug: "hrms",
        title: "Human Resource Management System",
        subtitle: "A comprehensive HR management platform.",
        description: "A comprehensive HR management platform with employee records, payroll, and attendance tracking.",
        image: "/projects/HRMS.png",
        githubUrl: "https://github.com/xAndr1e/hrms",
        techs: ["PHP", "MySQL", "XAMPP"],
    },
    {
        slug: "my-portfolio",
        title: "My Portfolio",
        subtitle: "A personal portfolio website.",
        description: "A modern portfolio website to showcase my work and skills.",
        image: "/projects/My-Portfolio.png",
        liveUrl: "https://andrie-elbambuena.vercel.app",
        githubUrl: "https://github.com/xAndr1e/portfolio-v2",
        techs: ["Next.js", "Tailwind CSS", "Vercel"],
    },
    {
        slug: "sms",
        title: "School Management System",
        subtitle: "A system for managing student information and records.",
        description: "A comprehensive student management system with features for enrollment, grades, and communication.",
        image: "/projects/SMS.png",
        githubUrl: "https://github.com/xAndr1e/SchoolManagement",
        techs: ["PHP", "MySQL", "XAMPP"],
    },
];

export type Project = typeof projects[0];