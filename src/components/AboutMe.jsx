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

    // --- Dữ liệu Thống kê (Đã thu gọn) ---
    const stats = [
        { number: "2+", label: "Years Experience" },
        { number: "15+", label: "Projects Completed" },
        { number: "8+", label: "Tech Stacks" },
        { number: "100%", label: "Passion & Focus" }
    ];

    return (
        // Đã giảm py-24 xuống py-16 để section gọn gàng hơn
        <section id="about" className="w-full py-16 px-6 relative z-10 font-sans">
            {/* Giảm max-w-5xl xuống max-w-4xl để ép khối nội dung ôm sát nhau hơn */}
            <div className="max-w-5xl mx-auto flex flex-col items-center">
                
                {/* --- Phần Header --- */}
                <motion.div 
                    className="flex flex-col items-center text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="inline-block border border-purple-primary/30 bg-purple-500/10 px-3 py-1 rounded-full mb-4">
                        <span className="text-purple-primary text-[10px] md:text-xs font-bold tracking-widest uppercase">
                            About Me
                        </span>
                    </motion.div>
                    
                    {/* Giảm size tiêu đề từ 5xl xuống 4xl */}
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4 tracking-tight">
                        Crafting Digital Experiences
                    </motion.h2>
                    
                    {/* Giảm size subtitle */}
                    <motion.p variants={itemVariants} className="max-w-xl text-gray-400 text-sm leading-relaxed">
                        A creative developer passionate about building products that merge great design with robust engineering.
                    </motion.p>
                </motion.div>

                {/* --- Phần Nội dung 2 cột --- */}
                <motion.div 
                    // Giảm gap từ 20 xuống 12
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 w-full items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {/* CỘT TRÁI: Text Tiểu sử Full Stack */}
                    <motion.div variants={itemVariants} className="flex flex-col justify-center pr-0 lg:pr-6">
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
                            I'm a passionate <span className="text-white font-semibold">Full Stack Developer</span> and a student at <span className="text-purple-300 font-semibold">VKU</span>. I have a strong love for crafting beautiful, responsive user interfaces and building scalable, high-performance backend systems.
                        </p>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                            I specialize in building end-to-end modern applications. From pixel-perfect frontends using <span className="text-white">React & Tailwind</span> to robust backend architectures with <span className="text-white">Spring Boot & Node.js</span>. When I'm not coding, you'll find me exploring new technologies or contributing to open-source.
                        </p>
                        
                        {/* Dòng Location gọn gàng */}
                        <div className="flex items-center gap-3 mt-auto opacity-70">
                            <div className="h-[1px] bg-white/10 flex-1"></div>
                            <span className="text-[9px] md:text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase">
                                Da Nang City, Vietnam
                            </span>
                            <div className="h-[1px] bg-white/10 flex-1"></div>
                        </div>
                    </motion.div>

                    {/* CỘT PHẢI: Lưới Grid 4 thẻ Thống kê (Nhỏ gọn hơn) */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 md:gap-4">
                        {stats.map((stat, index) => (
                            <motion.div 
                                key={index}
                                // Giảm padding thẻ từ p-8 xuống p-5 md:p-6
                                className="bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col items-start justify-center hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-300 group"
                            >
                                {/* Giảm size số từ 4xl xuống 3xl */}
                                <h3 className="text-2xl md:text-3xl font-extrabold text-purple-400 mb-1 group-hover:scale-105 transform origin-left transition-transform duration-300">
                                    {stat.number}
                                </h3>
                                {/* Giảm size chữ phụ */}
                                <p className="text-[10px] md:text-xs text-gray-500 font-mono tracking-wide">
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