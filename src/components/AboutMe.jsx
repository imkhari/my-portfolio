import React from 'react';
import { motion } from 'framer-motion';

function AboutMe() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1, y: 0,
            transition: { type: "spring", stiffness: 80, damping: 15 }
        }
    };

    const stats = [
        { number: "2+", label: "Years Experience" },
        { number: "15+", label: "Projects Completed" },
        { number: "8+", label: "Core Technologies" },
        { number: "100%", label: "Passion & Focus" }
    ];

    return (
        <section id="about" className="w-full py-20 px-6 relative z-10 font-sans">
            <div className="max-w-5xl mx-auto flex flex-col items-center">
                
                {/* --- Header --- */}
                <motion.div 
                    className="flex flex-col items-center text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="inline-block border border-purple-primary/30 bg-purple-500/10 px-3 py-1 rounded-full mb-4">
                        <span className="text-purple-300 text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase">
                            About Me
                        </span>
                    </motion.div>
                    
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4 tracking-tight">
                        Crafting Digital Experiences
                    </motion.h2>
                    
                    <motion.p variants={itemVariants} className="max-w-xl text-gray-400 text-sm leading-relaxed">
                        A creative developer passionate about building products that merge great design with robust engineering.
                    </motion.p>
                </motion.div>

                {/* --- 2 Columns Content --- */}
                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 w-full items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {/* LEFT COLUMN: Bio */}
                    <motion.div variants={itemVariants} className="flex flex-col justify-center pr-0 lg:pr-6">
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
                            Tôi là một <span className="text-white font-semibold">Full Stack Developer</span> hiện đang học tập tại <span className="text-purple-300 font-semibold">VKU</span>. Tôi yêu thích việc xây dựng các giao diện người dùng mượt mà, trực quan cùng hệ thống backend an toàn, có khả năng mở rộng cao.
                        </p>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                            Tôi có kinh nghiệm phát triển ứng dụng từ đầu đến cuối (end-to-end): từ frontend với <span className="text-white font-medium">React, Vue & Tailwind CSS</span> đến kiến trúc backend với <span className="text-white font-medium">NestJS, Node.js & Docker</span>.
                        </p>
                        
                        {/* Location */}
                        <div className="flex items-center gap-3 mt-auto opacity-70">
                            <div className="h-[1px] bg-white/10 flex-1" />
                            <span className="text-[10px] font-mono text-purple-300 tracking-[0.2em] uppercase">
                                Da Nang City, Vietnam
                            </span>
                            <div className="h-[1px] bg-white/10 flex-1" />
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: 4 Stat Cards */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 md:gap-4">
                        {stats.map((stat, index) => (
                            <motion.div 
                                key={index}
                                className="bg-[#0e061c]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col items-start justify-center hover:bg-[#130826]/90 hover:border-purple-500/40 hover:shadow-[0_8px_25px_rgba(168,85,247,0.15)] transition-all duration-300 group"
                            >
                                <h3 className="text-2xl md:text-3xl font-extrabold text-purple-400 mb-1 group-hover:scale-105 transform origin-left transition-transform duration-300">
                                    {stat.number}
                                </h3>
                                <p className="text-[10px] md:text-xs text-gray-400 font-mono tracking-wide">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}

export default AboutMe;
