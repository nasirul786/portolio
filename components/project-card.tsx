'use client'

import { ArrowRight } from 'lucide-react'

interface Project {
    id: string
    title: string
    image: string
    shortDescription: string
    techStack: string[]
}

interface ProjectCardProps {
    project: Project
    onOpen: (project: any) => void
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
    return (
        <div
            className="group relative bg-card/50 backdrop-blur-sm border-2 border-white/5 rounded-xl overflow-hidden hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
        >
            {/* Image Container - Aspect Ratio 16/10 (close to 1.5) to fit 1800x1300 reasonably well without being too tall */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/50">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                />
                {/* Removed hover overlay to keep image fully visible and clean */}
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col space-y-4">
                <div>
                    <h3 className="text-xl font-bold font-mono text-white mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                        {project.techStack.slice(0, 3).map(tech => (
                            <span key={tech} className="text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded">
                                {tech}
                            </span>
                        ))}
                        {project.techStack.length > 3 && (
                            <span className="text-xs text-muted-foreground px-1">+</span>
                        )}
                    </div>
                    <p className="text-foreground/70 text-sm line-clamp-3">
                        {project.shortDescription}
                    </p>
                </div>

                <div className="mt-auto pt-4">
                    <button
                        onClick={() => onOpen(project)}
                        className="w-full py-2 flex items-center justify-center gap-2 bg-white/5 hover:bg-primary hover:text-primary-foreground border border-white/10 hover:border-transparent rounded-lg transition-all duration-300 group/btn"
                    >
                        <span className="font-semibold uppercase tracking-wider text-sm">Read More</span>
                        <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    )
}
