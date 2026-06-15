

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
        slug: "project-2",
        title: "Project 2",
        subtitle: "A simple todo app.",
        description: "A clean and minimal todo application with real-time updates.",
        image: "/projects/project2.jpg",
        liveUrl: "#",
        githubUrl: "#",
        techs: ["Vue", "Firebase"],
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
        slug: "project-4",
        title: "Project 4",
        subtitle: "An e-commerce website.",
        description: "A full e-commerce platform with cart, checkout, and payment integration.",
        image: "/projects/project4.jpg",
        liveUrl: "#",
        githubUrl: "#",
        techs: ["React", "Node.js", "MongoDB"],
    },
];

export type Project = typeof projects[0];