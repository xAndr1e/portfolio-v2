interface Project {
  image: string;
  title: string;
  techs: string[];
}

export default function ProjectCards({ project }: { project: Project }) {
    return (
        <div className="group w-full border border-white/30 rounded-lg mb-8 p-4 flex flex-col gap-4 transition-all duration-300 hover:border-white hover:bg-white/5 hover:-translate-y-1 hover:scale-[1.01] cursor-pointer">
            <div className="border border-white/30 w-full h-72 rounded-lg overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <h1 className="font-bold text-2xl text-white transition-colors duration-300 group-hover:text-gray-300">
                {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                    <span
                        key={tech}
                        className="text-sm px-3 py-1 rounded-md border border-white/30 text-white/70 transition-all duration-300 group-hover:border-white group-hover:text-white"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}