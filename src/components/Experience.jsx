import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
    const experiences = [
        {
            id: 1,
            date: "09/2024 - Present",
            title: "Backend Engineer & Infrastructure",
            company: "TECHFLINES JSC",
            badge: "Part-time",
            description: "Phát triển và bảo trì hệ thống backend cho ứng dụng di động, thiết kế cơ sở dữ liệu và tối ưu hóa luồng xử lý dữ liệu với Docker."
        },
        {
            id: 2,
            date: "08/2024 - Present",
            title: "Frontend Developer (TESTBANK.VN)",
            company: "GREEN EDUCATION TECHNOLOGY JSC",
            badge: "Outsource",
            description: "Xây dựng giao diện cho nền tảng thi trắc nghiệm trực tuyến TESTBANK.VN, tối ưu hiệu năng render và tương tác mượt mà trên mọi thiết bị."
        },
        {
            id: 3,
            date: "03/2024 - Present",
            title: "Fullstack Software Developer",
            company: "NVANH TEAMS",
            badge: "Contract",
            description: "Tham gia các dự án outsource đa dạng, xây dựng ứng dụng web hiện đại từ giao diện React/Vue đến REST API backend."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
    };

    const cardVariants = (isLeft) => ({
        hidden: { opacity: 0, x: isLeft ? -30 : 30, y: 15 },
        visible: { opacity: 1, x: 0, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
    });

    return (
        <section id="experience" className="w-full py-20 px-6 relative z-10 font-sans">
            <div className="max-w-5xl mx-auto flex flex-col items-center">
                
                {/* --- HEADER --- */}
                <motion.div 
                    className="flex flex-col items-center text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.div variants={headerVariants} className="inline-block border border-purple-500/30 bg-purple-500/10 px-3 py-1 rounded-full mb-3">
                        <span className="text-purple-300 text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase">
                            Career Journey
                        </span>
                    </motion.div>
                    
                    <motion.h2 variants={headerVariants} className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3 tracking-tight">
                        Experience & Roles
                    </motion.h2>
                    
                    <motion.p variants={headerVariants} className="max-w-lg text-gray-400 text-sm leading-relaxed">
                        Hành trình tích lũy kinh nghiệm thông qua các dự án thực tế và môi trường làm việc chuyên nghiệp.
                    </motion.p>
                </motion.div>

                {/* --- TIMELINE --- */}
                <motion.div 
                    className="relative w-full max-w-4xl mx-auto mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    {/* Vertical timeline line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-purple-500/20 md:-translate-x-1/2 rounded-full" />

                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0; 
                        
                        return (
                            <motion.div 
                                key={exp.id} 
                                className={`relative flex items-center justify-between md:justify-normal w-full mb-8 last:mb-0 ${isLeft ? 'md:flex-row-reverse' : ''}`}
                                variants={cardVariants(isLeft)}
                            >
                                {/* Center node */}
                                <div className="absolute left-4 md:left-1/2 w-3.5 h-3.5 rounded-full border-2 border-purple-400 bg-[#080312] md:-translate-x-1/2 z-10 shadow-[0_0_12px_rgba(168,85,247,0.7)]" />

                                {/* Card Block */}
                                <div className={`w-full md:w-[47%] pl-10 md:pl-0 ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}>
                                    <div className="bg-[#0e061c]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-[#130826]/90 hover:border-purple-500/40 hover:shadow-[0_8px_25px_rgba(168,85,247,0.15)] transition-all duration-300 group">
                                        
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-purple-300/80 text-[11px] font-mono tracking-wide">{exp.date}</span>
                                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                                                {exp.badge}
                                            </span>
                                        </div>

                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold text-sm md:text-base leading-snug mb-0.5 group-hover:text-purple-300 transition-colors">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-purple-400 text-[10px] font-mono font-bold tracking-wider uppercase">
                                                    {exp.company}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-gray-300/80 text-xs md:text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

export default Experience;
