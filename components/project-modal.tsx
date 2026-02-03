'use client'

import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'
import { X, ExternalLink, Github } from 'lucide-react'

interface ProjectFeature {
    title: string
    description: string
    icon: React.ReactNode
}

interface Project {
    id: string
    title: string
    image: string
    shortDescription: string
    fullDescription: string
    techStack: string[]
    features?: ProjectFeature[]
    techDetails?: { label: string; value: string }[]
    demoLink?: string
    githubLink?: string
}

interface ProjectModalProps {
    isOpen: boolean
    onClose: () => void
    project: Project | null
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!isMounted || !project) return null

    return createPortal(
        <div
            className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className={`
        fixed inset-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
        bg-card border border-white/10 shadow-2xl
        w-full h-full md:w-[1000px] md:h-auto md:max-h-[90vh] md:rounded-2xl
        flex flex-col overflow-hidden
        transition-all duration-300 ease-out transform
        ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}
      `}>

                {/* Header */}
                <div className="flex justify-between items-start p-6 md:p-8 border-b border-white/5 bg-background/50 backdrop-blur-xl shrink-0">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold font-mono text-white mb-2">
                            {project.title}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 md:px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto flex-1 p-6 md:p-8 space-y-8 md:space-y-10 custom-scrollbar bg-background/95">

                    {/* Description */}
                    <div className="prose prose-invert max-w-none">
                        <p className="text-base md:text-lg text-foreground/80 leading-relaxed whitespace-pre-line">
                            {project.fullDescription.split('**').map((part, index) =>
                                index % 2 === 1 ? <strong key={index} className="text-white font-bold">{part}</strong> : part
                            )}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {/* Features */}
                        {project.features && (
                            <div className="space-y-6">
                                <h3 className="text-xl md:text-2xl font-bold text-white/90 border-l-4 border-primary pl-4">
                                    ✨ Features
                                </h3>
                                <div className="space-y-4">
                                    {project.features.map((feature, idx) => (
                                        <div key={idx} className="bg-card/50 border border-white/5 rounded-xl p-4 hover:border-primary/30 transition-colors">
                                            <div className="flex items-start gap-4">
                                                <div className="shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                                                    {feature.icon}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-white text-sm md:text-base">{feature.title}</h4>
                                                    <p className="text-xs md:text-sm text-foreground/70 mt-1">{feature.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Tech Stack Details */}
                        {project.techDetails && (
                            <div className="space-y-6">
                                <h3 className="text-xl md:text-2xl font-bold text-white/90 border-l-4 border-primary pl-4">
                                    🛠️ Tech Stack
                                </h3>
                                <div className="grid gap-3">
                                    {project.techDetails.map((item, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-3 bg-card/30 rounded-lg border border-white/5 hover:bg-card/50 transition-colors">
                                            <span className="font-mono text-xs md:text-sm text-foreground/60">{item.label}</span>
                                            <span className="font-semibold text-primary text-xs md:text-sm text-right">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Links */}
                    {(project.demoLink || project.githubLink) && (
                        <div className="flex gap-4 pt-6 border-t border-white/5">
                            {project.demoLink && (
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 md:flex-none px-8 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2"
                                >
                                    <ExternalLink size={20} />
                                    Try Now
                                </a>
                            )}

                            {project.githubLink && (
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 md:flex-none px-8 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Github size={20} />
                                    View Code
                                </a>
                            )}
                        </div>
                    )}
                </div>

            </div>
        </div>,
        document.body
    )
}
