"use client";

import { use, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/sections/Footer";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    const project = projects.find((p) => p.slug === slug);
    if (!project) {
        notFound();
        return null;
    }

    const fadeUp = (delay: string) =>
        `transition-all duration-700 ease-out ${delay} ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`;

    return (
        <>
            <Navbar />

            <div className="w-full flex flex-col items-center justify-center text-center pt-16 pb-8 px-8 border-b-1 border-white">
                <h1 className={`font-bold text-6xl text-white uppercase tracking-tight ${fadeUp("delay-0")}`}>
                    {project.title}
                </h1>
                <p className={`text-white/50 text-lg font-bold mt-4 max-w-xl ${fadeUp("delay-150")}`}>
                    {project.subtitle}
                </p>
                <div className={`mt-8 animate-bounce text-white/30 ${fadeUp("delay-300")}`}>
                    ↓
                </div>
            </div>

            <div className={`w-full flex justify-center px-8 py-12 ${fadeUp("delay-300")}`}>
                <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-white">
                    <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
                </div>
            </div>

            <div className={`w-full max-w-4xl mx-auto px-8 pb-16 ${fadeUp("delay-400")}`}>
                <div className="grid grid-cols-[1fr_1fr] gap-12 border-t border-white pt-10">
                    <div>
                        <h2 className="text-white font-bold text-2xl mb-6">Project Overview</h2>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.techs.map((tech) => (
                                <span key={tech} className="text-xs px-3 py-1 rounded-md border border-white text-white">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-3 mt-6">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors">
                                View Demo
                            </a>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full border border-white/30 text-white text-sm font-bold hover:bg-white/10 transition-colors">
                                Source Code
                            </a>
                        </div>
                    </div>

                    <div>
                        <p className="text-white/50 leading-relaxed">{project.description}</p>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center pb-16">
                <Link href="/projects" className="text-white/40 hover:text-white hover:-translate-x-1 transition-all duration-200 text-sm font-bold">
                    ← Back to Projects
                </Link>
            </div>
            <Footer />
        </>
    );
}