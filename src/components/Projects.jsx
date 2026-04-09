import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- ICONS (Thu nhỏ nhẹ) ---
const ExternalLinkIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
);
const GithubIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
);
const StarIcon = () => (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
);

function Projects() {
    const [filter, setFilter] = useState('All');

    // --- DỮ LIỆU PROJECTS TỪ ẢNH ---
    const projects = [
        {
            id: 1,
            title: "ERP (WORKOS) - OMEGA CORP", // Chỉnh sửa nội dung đại đi
            description: "WorkOS is a comprehensive, internal operation system built to optimize productivity for Omega Corp.",
            // Tạm thời dùng gradient làm ảnh, ông thay link ảnh thật vào đây nhé
            image: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 100%)", 
            category: "Web App",
            tech: ["Next.js", "TypeScript", "NodeJS", "NestJS", "MySQL", "N8n"],
            featured: true,
            github: "#",
            live: "#"
        },
        {
            id: 2,
            title: "PETSOCIAL CHAT APP", // Chỉnh sửa nội dung đại đi
            description: "PETSOCIAL CHAT APP is used for secure, internal company chat within LTK Group.",
            image: "linear-gradient(135deg, #312e81 0%, #1e3a8a 100%)",
            category: "Mobile",
            tech: ["React Native", "Expo", "Node.js", "Firebase"],
            featured: true,
            github: "#",
            live: "#"
        },
        {
            id: 3,
            title: "CHOBAN.COM.VN - IT FREELANCER PLATFORM", // Chỉnh sửa nội dung đại đi
            description: "Freelance Marketplace — connects clients with 25,000+ local IT freelancers for web development, software creation, and tech-driven projects.",
            image: "linear-gradient(135deg, #4c1d95 0%, #701a75 100%)",
            category: "Web App",
            tech: ["VueJS", "NuxtJS", "NestJS", "MongoDB", "Docker", "Gitlab CI/CD", "Nginx"],
            featured: true,
            github: "#",
            live: "#"
        },
        {
            id: 4,
            title: "Personal Portfolio Website", // Thêm 2 dự án mới
            description: "Showcase of skills, projects, and experiences with interactive elements and optimized UI.",
            image: "linear-gradient(135deg, #1e1b4b 0%, #1e3a8a 100%)",
            category: "Web App",
            tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
            featured: false,
            github: "#",
            live: "#"
        },
        {
            id: 5,
            title: "E-commerce Platform", // Thêm 2 dự án mới
            description: "Full-stack online store with user authentication, product catalog, and payment integration.",
            image: "linear-gradient(135deg, #4c1d95 0%, #312e81 100%)",
            category: "Web App",
            tech: ["Node.js", "Express", "MongoDB", "React", "Redux", "Stripe"],
            featured: false,
            github: "#",
            live: "#"
        },
        {
            id: 6,
            title: "Personal Blog", // Thêm 2 dự án mới
            description: "A clean, modern blog platform for sharing thoughts, articles, and tutorials.",
            image: "linear-gradient(135deg, #701a75 0%, #ffffff 100%)",
            category: "Web App",
            tech: ["Gatsby", "GraphQL", "Markdown", "Netlify"],
            featured: false,
            github: "#",
            live: "#"
        }
    ];

    const filters = ['All', 'Web App', 'Mobile']; // Chỉnh sửa lại các bộ lọc phù hợp

    // Lọc danh sách dự án
    const filteredProjects = projects.filter(project => 
        filter === 'All' ? true : project.category === filter
    );

    // --- CẤU HÌNH ANIMATION ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
    };

    return (
        <section id="projects" className="w-full py-16 px-6 relative z-10 font-sans"> {/* Giảm py-20 xuống py-16 */}
            <div className="max-w-5xl mx-auto flex flex-col items-center"> {/* Giảm max-w-6xl xuống max-w-5xl */}
                
                {/* --- HEADER --- */}
                <motion.div 
                    className="flex flex-col items-center text-center mb-10" // Giảm mb-16 xuống mb-10
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
                >
                    <motion.div variants={headerVariants} className="inline-block border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 rounded-full mb-5">
                        <span className="text-purple-400 text-[10px] md:text-xs font-bold tracking-widest uppercase">Projects</span>
                    </motion.div>
                    
                    {/* Giảm size chữ tiêu đề */}
                    <motion.h2 variants={headerVariants} className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4 tracking-tight">
                        Featured Work
                    </motion.h2>
                    
                    {/* Giảm size mô tả */}
                    <motion.p variants={headerVariants} className="max-w-xl text-gray-400 text-sm leading-relaxed">
                        A selection of projects that showcase my skills and passion for building exceptional digital products.
                    </motion.p>
                </motion.div>

                {/* --- FILTER BUTTONS --- */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10" // Giảm gap/margin
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                >
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                filter === f 
                                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.5)]' 
                                : 'bg-white/5 text-gray-400 hover:text-purple-300 hover:bg-white/10'
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
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group flex flex-col bg-[#11071F]/60 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
                            >
                                {/* 1. Phần Image & Hover Overlay */}
                                <div className="relative h-48 md:h-52 w-full overflow-hidden bg-gray-900"> {/* Giảm chiều cao */}
                                    {/* Mẹo: Ở đây tôi dùng thẻ div có background là dải màu. 
                                        Khi nào ông có ảnh thật, đổi thẻ div này thành <img src={project.image} className="w-full h-full object-cover" /> nhé */}
                                    <div 
                                        className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                                        style={{ background: project.image }}
                                    ></div>
                                    
                                    {/* Badge Featured (Thu nhỏ nhẹ) */}
                                    {project.featured && (
                                        <div className="absolute top-2.5 right-2.5 bg-purple-600/90 backdrop-blur-md text-white text-[9px] font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg z-10">
                                            <StarIcon /> Featured
                                        </div>
                                    )}

                                    {/* Hover Overlay: Hiện 2 nút Link và Github (Thu nhỏ icon) */}
                                    <div className="absolute inset-0 bg-[#0d0318]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                        <a href={project.live} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-500 hover:scale-110 transition-all shadow-[0_0_20px_rgba(147,51,234,0.6)]">
                                            <ExternalLinkIcon />
                                        </a>
                                        <a href={project.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center border border-white/20 hover:bg-white/20 hover:scale-110 transition-all">
                                            <GithubIcon />
                                        </a>
                                    </div>
                                </div>

                                {/* 2. Phần Nội dung (Text) (Giảm padding/font size) */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <h3 className="text-white font-bold text-base mb-1.5 line-clamp-1 group-hover:text-purple-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-xs leading-relaxed mb-5 line-clamp-3">
                                        {project.description}
                                    </p>
                                    
                                    {/* Nơi chứa Tech Stack (Thu nhỏ tag) */}
                                    <div className="mt-auto flex flex-wrap gap-1.5">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-[9px] font-mono text-gray-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
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