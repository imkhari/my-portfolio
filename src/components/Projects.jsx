import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

    const projects = [
        {
            id: 1,
            title: "ERP WorkOS - Enterprise System",
            domain: "workos.omega.corp",
            description: "Hệ thống vận hành doanh nghiệp toàn diện, chuẩn hóa luồng xử lý dữ liệu và tự động hóa tác vụ liên phòng ban.",
            category: "Web App",
            badge: "Enterprise",
            tech: ["Next.js", "TypeScript", "NestJS", "MySQL", "N8n", "Docker"],
            featured: true,
            gradient: "from-purple-900/60 via-indigo-950/80 to-purple-950/90",
            accentColor: "border-purple-500/30",
            github: "https://github.com/imkhari",
            live: "#"
        },
        {
            id: 2,
            title: "PetSocial Mobile Chat App",
            domain: "app.petsocial.io",
            description: "Ứng dụng nhắn tin di động bảo mật cao cho nội bộ, hỗ trợ kênh chat thời gian thực và quản lý phòng tương tác.",
            category: "Mobile",
            badge: "Mobile App",
            tech: ["React Native", "Expo", "Node.js", "Firebase", "WebSockets"],
            featured: true,
            gradient: "from-blue-950/70 via-indigo-900/60 to-purple-950/80",
            accentColor: "border-cyan-500/30",
            github: "https://github.com/imkhari",
            live: "#"
        },
        {
            id: 3,
            title: "ChoBan.com.vn - Freelance Platform",
            domain: "choban.com.vn",
            description: "Sàn kết nối dự án công nghệ và cộng đồng 25,000+ lập trình viên IT, tích hợp xác thực thanh toán và matching hồ sơ.",
            category: "Web App",
            badge: "Production",
            tech: ["VueJS", "NuxtJS", "NestJS", "MongoDB", "Docker", "CI/CD"],
            featured: true,
            gradient: "from-fuchsia-950/70 via-purple-900/60 to-slate-950/90",
            accentColor: "border-fuchsia-500/30",
            github: "https://github.com/imkhari",
            live: "https://choban.com.vn"
        },
        {
            id: 4,
            title: "Interactive Personal Portfolio",
            domain: "letuankhai.dev",
            description: "Portfolio cá nhân phong cách Cyber-Clean với giao diện tối ưu, Splash Screen mượt mà và hoạt ảnh Framer Motion.",
            category: "Web App",
            badge: "Open Source",
            tech: ["React 19", "Tailwind CSS", "Framer Motion", "Vite"],
            featured: false,
            gradient: "from-purple-950/60 via-slate-900/80 to-indigo-950/80",
            accentColor: "border-purple-400/30",
            github: "https://github.com/imkhari",
            live: "#"
        },
        {
            id: 5,
            title: "E-Commerce & Payment Gateway",
            domain: "shop.techscale.dev",
            description: "Hệ thống bán hàng trực tuyến full-stack tích hợp cổng thanh toán trực tuyến, quản lý tồn kho và xác thực JWT.",
            category: "Web App",
            badge: "Full Stack",
            tech: ["Node.js", "Express", "MongoDB", "React", "Redux", "Stripe"],
            featured: false,
            gradient: "from-indigo-950/70 via-purple-950/60 to-cyan-950/80",
            accentColor: "border-indigo-400/30",
            github: "https://github.com/imkhari",
            live: "#"
        },
        {
            id: 6,
            title: "Tech Articles & Insights Blog",
            domain: "blog.devnotes.vn",
            description: "Nền tảng blog cá nhân chia sẻ kiến thức kiến trúc hệ thống, DevOps và kinh nghiệm tối ưu hiệu năng frontend.",
            category: "Web App",
            badge: "Jamstack",
            tech: ["Next.js", "GraphQL", "Tailwind CSS", "Markdown"],
            featured: false,
            gradient: "from-slate-950/80 via-purple-950/60 to-purple-900/50",
            accentColor: "border-pink-500/30",
            github: "https://github.com/imkhari",
            live: "#"
        }
    ];

    const filters = ['All', 'Web App', 'Mobile'];

    const filteredProjects = projects.filter(project => 
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
                    <motion.div variants={headerVariants} className="inline-block border border-purple-500/30 bg-purple-500/10 px-3 py-1 rounded-full mb-4">
                        <span className="text-purple-300 text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase">
                            Featured Projects
                        </span>
                    </motion.div>
                    
                    <motion.h2 variants={headerVariants} className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3 tracking-tight">
                        Selected Works & Platforms
                    </motion.h2>
                    
                    <motion.p variants={headerVariants} className="max-w-xl text-gray-400 text-sm leading-relaxed">
                        Các sản phẩm thực chiến và dự án tiêu biểu thể hiện năng lực kiến trúc hệ thống, phát triển giao diện và tối ưu hóa trải nghiệm người dùng.
                    </motion.p>
                </motion.div>

                {/* --- FILTER BUTTONS --- */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-2 mb-10"
                    initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                >
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                                filter === f 
                                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-400' 
                                : 'bg-white/5 text-gray-400 hover:text-purple-300 hover:bg-white/10 border border-white/5'
                            }`}
                        >
                            {f}
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
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className={`group flex flex-col bg-[#0e061c]/70 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-purple-400/50 hover:shadow-[0_10px_35px_rgba(168,85,247,0.2)] transition-all duration-300`}
                            >
                                {/* 1. Mockup Header & Banner */}
                                <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${project.gradient} border-b border-white/5 flex flex-col justify-between p-4`}>
                                    
                                    {/* Tech Window Bar */}
                                    <div className="flex items-center justify-between z-10">
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                                        </div>
                                        <span className="text-[10px] font-mono text-gray-400/80 bg-black/40 px-2.5 py-0.5 rounded-full border border-white/5">
                                            {project.domain}
                                        </span>
                                    </div>

                                    {/* Center Graphic Silhouette */}
                                    <div className="flex flex-col items-center justify-center my-auto z-0 opacity-80 group-hover:scale-105 transition-transform duration-500">
                                        <span className="text-xs font-mono font-bold tracking-wider text-purple-200/90 uppercase px-3 py-1 rounded-md bg-white/5 border border-white/10">
                                            {project.badge}
                                        </span>
                                    </div>

                                    {/* Bottom badges */}
                                    <div className="flex items-center justify-between z-10">
                                        {project.featured && (
                                            <span className="bg-purple-600/90 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                                                <StarIcon /> Featured
                                            </span>
                                        )}
                                        <span className="text-[10px] font-mono text-purple-300 ml-auto">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Hover Overlay Buttons */}
                                    <div className="absolute inset-0 bg-[#080312]/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20">
                                        <a 
                                            href={project.live} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            title="View Demo"
                                            className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-500 hover:scale-110 transition-all shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                                        >
                                            <ExternalLinkIcon />
                                        </a>
                                        <a 
                                            href={project.github} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            title="GitHub Code"
                                            className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center border border-white/20 hover:bg-white/20 hover:scale-110 transition-all"
                                        >
                                            <GithubIcon />
                                        </a>
                                    </div>
                                </div>

                                {/* 2. Content Info */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <h3 className="text-white font-bold text-base mb-2 group-hover:text-purple-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-xs leading-relaxed mb-5 line-clamp-3">
                                        {project.description}
                                    </p>
                                    
                                    {/* Tech Tags */}
                                    <div className="mt-auto flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-[9px] font-mono text-purple-200/90 bg-purple-950/40 border border-purple-500/20 px-2 py-0.5 rounded-md">
                                                {t}
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
