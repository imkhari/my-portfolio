import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/useLanguage';

const ExternalLinkIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);
const GithubIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);
const StarIcon = () => (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

function Projects() {
    const [filter, setFilter] = useState('All');
    const { t } = useLanguage();

    const filteredProjects = t.projects.items.filter(project => 
        filter === 'All' ? true : project.category === filter
    );

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -15 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
    };

    return (
        <section id="projects" className="w-full py-20 px-6 relative z-10 font-sans">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                
                {/* --- HEADER --- */}
                <motion.div 
                    className="flex flex-col items-center text-center mb-10"
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
                >
                    <motion.div variants={headerVariants} className="inline-block border border-indigo-400/25 bg-indigo-500/10 px-3.5 py-1 rounded-full mb-4">
                        <span className="text-indigo-300 text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase">
                            {t.projects.badge}
                        </span>
                    </motion.div>
                    
                    <motion.h2 variants={headerVariants} className="text-3xl md:text-4xl font-extrabold text-zinc-50 leading-tight mb-3 tracking-tight">
                        {t.projects.title}
                    </motion.h2>
                    
                    <motion.p variants={headerVariants} className="max-w-xl text-zinc-400 text-sm leading-relaxed">
                        {t.projects.subtitle}
                    </motion.p>
                </motion.div>

                {/* --- FILTER BUTTONS --- */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-2 mb-10"
                    initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                >
                    {t.projects.filters.map(f => (
                        <button
                            key={f.key}
                            onClick={() => setFilter(f.key)}
                            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                                filter === f.key 
                                ? 'bg-indigo-500 text-white shadow-[0_0_16px_rgba(99,102,241,0.35)] border border-indigo-400/60' 
                                : 'bg-white/[0.04] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.08] border border-white/[0.06]'
                            }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </motion.div>

                {/* --- PROJECTS GRID --- */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.25 }}
                                className="group flex flex-col bg-[#11121A]/85 backdrop-blur-md border border-white/[0.08] rounded-2xl overflow-hidden hover:border-indigo-400/40 hover:shadow-[0_12px_35px_rgba(99,102,241,0.12)] transition-all duration-300"
                            >
                                {/* 1. Mockup Header & Banner */}
                                <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${project.gradient} border-b border-white/[0.06] flex flex-col justify-between p-4`}>
                                    
                                    {/* Tech Window Bar */}
                                    <div className="flex items-center justify-between z-10">
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-2.5 h-2.5 rounded-full bg-zinc-600/80 inline-block group-hover:bg-rose-400/80 transition-colors" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-zinc-600/80 inline-block group-hover:bg-amber-400/80 transition-colors" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-zinc-600/80 inline-block group-hover:bg-emerald-400/80 transition-colors" />
                                        </div>
                                        <span className="text-[10px] font-mono text-zinc-400 bg-black/40 px-2.5 py-0.5 rounded-full border border-white/[0.06]">
                                            {project.domain}
                                        </span>
                                    </div>

                                    {/* Center Graphic Silhouette */}
                                    <div className="flex flex-col items-center justify-center my-auto z-0 opacity-85 group-hover:scale-105 transition-transform duration-500">
                                        <span className="text-xs font-mono font-semibold tracking-wider text-indigo-200 uppercase px-3 py-1 rounded-md bg-white/[0.04] border border-white/10">
                                            {project.badge}
                                        </span>
                                    </div>

                                    {/* Bottom badges */}
                                    <div className="flex items-center justify-between z-10">
                                        {project.featured && (
                                            <span className="bg-indigo-500/85 backdrop-blur-md text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                                                <StarIcon /> {t.projects.featuredBadge}
                                            </span>
                                        )}
                                        <span className="text-[10px] font-mono text-sky-300/80 ml-auto">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Hover Overlay Buttons */}
                                    <div className="absolute inset-0 bg-[#09090F]/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20">
                                        <a 
                                            href={project.live} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            title={t.projects.viewDemo}
                                            className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center hover:bg-indigo-400 hover:scale-110 transition-all shadow-[0_0_20px_rgba(99,102,241,0.45)]"
                                        >
                                            <ExternalLinkIcon />
                                        </a>
                                        <a 
                                            href={project.github} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            title={t.projects.githubCode}
                                            className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center border border-white/20 hover:bg-white/20 hover:scale-110 transition-all"
                                        >
                                            <GithubIcon />
                                        </a>
                                    </div>
                                </div>

                                {/* 2. Content Info */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <h3 className="text-zinc-100 font-bold text-base mb-2 group-hover:text-indigo-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-zinc-400 text-xs leading-relaxed mb-5 line-clamp-3">
                                        {project.description}
                                    </p>
                                    
                                    {/* Tech Tags */}
                                    <div className="mt-auto flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                                        {project.tech.map(techName => (
                                            <span key={techName} className="text-[9px] font-mono text-zinc-300 bg-white/[0.04] border border-white/[0.08] px-2 py-0.5 rounded-md">
                                                {techName}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}

export default Projects;
