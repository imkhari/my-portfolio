import React, { useState, useEffect } from 'react';
import four_points from '../assets/four_points.jpg'; 
import Gradient from '../assets/Gradient.png';
import { motion, AnimatePresence } from 'framer-motion';

// --- CÁC ICON MẠNG XÃ HỘI ---
const GithubIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
const LinkedInIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
const FacebookIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>;

function Hero() {
    const roles = [
        "ML Engineer",
        "DevOps Specialist",
        "Frontend Developer",
        "Backend Engineer",
        "Full Stack Developer"
    ];
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 }, 
        visible: {
            y: 0, opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 18 },
        },
    };

    const avatarVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1, opacity: 1,
            transition: { type: "spring", stiffness: 120, damping: 12, delay: 0.2 },
        },
    };

    return (
        <motion.section 
            id="home" 
            className="w-full flex flex-col items-center justify-center min-h-screen pt-24 pb-10 px-6 text-center relative z-10" 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* --- 25 ĐỐM SÁNG LI TI CỠ 3px --- */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div animate={{ y: [0, -20, 0], opacity: [0.1, 0.7, 0.1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }} className="absolute top-[10%] left-[5%] w-[3px] h-[3px] bg-purple-400 rounded-full blur-[0.5px]" />
                <motion.div animate={{ y: [0, 30, 0], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-[15%] left-[25%] w-[3px] h-[3px] bg-purple-300 rounded-full" />
                <motion.div animate={{ x: [0, 15, 0], opacity: [0.1, 0.8, 0.1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-[8%] right-[15%] w-[3px] h-[3px] bg-fuchsia-400 rounded-full blur-[1px]" />
                <motion.div animate={{ y: [0, -25, 0], opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[25%] right-[30%] w-[3px] h-[3px] bg-indigo-400 rounded-full" />
                <motion.div animate={{ x: [0, -20, 0], opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute top-[40%] left-[10%] w-[3px] h-[3px] bg-cyan-300 rounded-full blur-[0.5px]" />
                <motion.div animate={{ y: [0, 40, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }} className="absolute top-[35%] left-[45%] w-[3px] h-[3px] bg-purple-500 rounded-full" />
                <motion.div animate={{ y: [0, -15, 0], x: [0, 10, 0], opacity: [0.1, 0.6, 0.1] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} className="absolute top-[45%] right-[10%] w-[3px] h-[3px] bg-purple-400 rounded-full blur-[1px]" />
                <motion.div animate={{ y: [0, 25, 0], opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 3 }} className="absolute top-[55%] right-[45%] w-[3px] h-[3px] bg-fuchsia-300 rounded-full" />
                <motion.div animate={{ x: [0, -15, 0], opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }} className="absolute top-[65%] left-[20%] w-[3px] h-[3px] bg-indigo-300 rounded-full blur-[0.5px]" />
                <motion.div animate={{ y: [0, -35, 0], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 2.2 }} className="absolute top-[75%] left-[5%] w-[3px] h-[3px] bg-purple-300 rounded-full" />
                
                <motion.div animate={{ y: [0, 20, 0], opacity: [0.1, 0.6, 0.1] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} className="absolute bottom-[15%] left-[30%] w-[3px] h-[3px] bg-purple-400 rounded-full blur-[1px]" />
                <motion.div animate={{ x: [0, 20, 0], opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }} className="absolute bottom-[25%] right-[20%] w-[3px] h-[3px] bg-cyan-400 rounded-full" />
                <motion.div animate={{ y: [0, -25, 0], opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 2.7 }} className="absolute bottom-[10%] right-[5%] w-[3px] h-[3px] bg-fuchsia-400 rounded-full blur-[0.5px]" />
                <motion.div animate={{ y: [0, 30, 0], x: [0, -10, 0], opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut", delay: 0.9 }} className="absolute bottom-[45%] left-[60%] w-[3px] h-[3px] bg-purple-500 rounded-full" />
                <motion.div animate={{ y: [0, -15, 0], opacity: [0.1, 0.6, 0.1] }} transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut", delay: 3.2 }} className="absolute top-[20%] left-[60%] w-[3px] h-[3px] bg-indigo-400 rounded-full blur-[1px]" />

                <motion.div animate={{ y: [0, 25, 0], opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute top-[85%] right-[40%] w-[3px] h-[3px] bg-purple-300 rounded-full" />
                <motion.div animate={{ x: [0, -15, 0], opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} className="absolute bottom-[30%] right-[60%] w-[3px] h-[3px] bg-purple-400 rounded-full blur-[0.5px]" />
                <motion.div animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 5.7, repeat: Infinity, ease: "easeInOut", delay: 2.1 }} className="absolute top-[5%] left-[50%] w-[3px] h-[3px] bg-cyan-300 rounded-full" />
                <motion.div animate={{ y: [0, 15, 0], x: [0, 15, 0], opacity: [0.1, 0.6, 0.1] }} transition={{ duration: 6.1, repeat: Infinity, ease: "easeInOut", delay: 0.7 }} className="absolute bottom-[5%] left-[15%] w-[3px] h-[3px] bg-fuchsia-300 rounded-full blur-[1px]" />
                <motion.div animate={{ y: [0, -20, 0], opacity: [0.2, 0.9, 0.2] }} transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 3.5 }} className="absolute top-[60%] right-[5%] w-[3px] h-[3px] bg-purple-500 rounded-full" />

                <motion.div animate={{ x: [0, 25, 0], opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 1.1 }} className="absolute top-[30%] left-[80%] w-[3px] h-[3px] bg-indigo-300 rounded-full blur-[0.5px]" />
                <motion.div animate={{ y: [0, 35, 0], opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 6.9, repeat: Infinity, ease: "easeInOut", delay: 2.8 }} className="absolute bottom-[60%] left-[5%] w-[3px] h-[3px] bg-purple-400 rounded-full" />
                <motion.div animate={{ y: [0, -15, 0], opacity: [0.1, 0.6, 0.1] }} transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} className="absolute bottom-[75%] right-[15%] w-[3px] h-[3px] bg-cyan-400 rounded-full blur-[1px]" />
                <motion.div animate={{ y: [0, 20, 0], x: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 5.9, repeat: Infinity, ease: "easeInOut", delay: 1.9 }} className="absolute top-[90%] left-[40%] w-[3px] h-[3px] bg-fuchsia-400 rounded-full" />
                <motion.div animate={{ y: [0, -25, 0], opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut", delay: 3.1 }} className="absolute bottom-[50%] right-[80%] w-[3px] h-[3px] bg-purple-300 rounded-full blur-[0.5px]" />
            </div>

            <div className="relative z-10 flex flex-col items-center max-w-5xl w-full flex-grow justify-center"> 
                
                {/* 1. KHỐI AVATAR & LỜI CHÀO */}
                <div className="relative mb-8 flex flex-col items-center mt-5">
                    <motion.div 
                        className="absolute -top-12 left-1/2 -translate-x-1/2 md:-top-8 md:left-[110%] md:-translate-x-0 flex flex-col items-center md:items-start sm:flex whitespace-nowrap z-20"
                        variants={itemVariants}
                    >
                        <span className="text-xs text-gray-300 font-mono tracking-widest bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-xl mb-1">
                            {'>'} Hello_World, I am <span className="text-purple-300 font-bold">Lê Tuấn Khải</span>
                        </span>
                        
                        <motion.svg 
                            width="25" height="25" viewBox="0 0 100 100" 
                            className="text-gray-500 stroke-current transform rotate-12 ml-4 hidden md:block" 
                            fill="none" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ delay: 1, duration: 1 }}
                        >
                            <path d="M10,90 Q10,10 90,10" strokeWidth="2" strokeLinecap="round" />
                            <path d="M80,0 L90,10 L80,20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </motion.svg>
                    </motion.div>

                    <motion.div 
                        className="relative w-36 h-36 md:w-40 md:h-40 mt-6 md:mt-8 group"
                        variants={avatarVariants}
                        whileHover={{ scale: 1.03 }} 
                    >
                        <motion.img
                            src={Gradient} alt="Glow Background"
                            className="absolute z-0 w-[180%] h-[180%] -top-[40%] -left-[40%] max-w-none object-contain opacity-70 blur-md group-hover:opacity-90 transition-opacity duration-300"
                            animate={{ opacity: [0.6, 0.9, 0.6], scale: [1, 1.05, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />

                        <div className="relative z-10 w-full h-full rounded-full border border-purple-500/30 bg-[#11071F]/50 p-1.5 overflow-hidden shadow-[0_0_20px_rgba(123,31,162,0.3)] flex items-center justify-center backdrop-blur-sm">
                            <img
                                src={four_points} alt="Khai Avatar"
                                className="w-full h-full object-cover rounded-full drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>
                </div>

                <motion.h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-white mb-4 tracking-tight leading-tight"
                    variants={itemVariants}
                >
                    I'm a Software Engineer
                    <span className="animate-pulse text-purple-400 ml-1 font-mono font-light">|</span>
                </motion.h1>

                <motion.div 
                    className="text-gray-300 text-sm md:text-base mb-6 font-mono tracking-wide flex items-center justify-center gap-1.5 h-8"
                    variants={itemVariants}
                >
                    <span className="text-purple-300/70">const openFor =</span> 
                    <span className="text-gray-500">"</span>
                    
                    {/* AnimatePresence giúp tạo hiệu ứng trượt lên xuống khi đổi chữ */}
                    <div className="relative overflow-hidden h-full flex items-center min-w-[200px] md:min-w-[240px] justify-center">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={roleIndex}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-purple-300 font-semibold whitespace-nowrap absolute"
                            >
                                {roles[roleIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                    
                    <span className="text-gray-500">";</span>
                </motion.div>

                {/* 4. ĐOẠN MÔ TẢ */}
                <motion.p 
                    className="max-w-xl text-gray-400 text-sm md:text-base leading-relaxed font-sans font-normal mb-8"
                    variants={itemVariants}
                >
                    A passionate developer and <span className="text-purple-200 font-medium">VKU student</span>, functioning in the tech industry.
                    I make meaningful and delightful digital products that create an equilibrium
                    between user needs and technical optimization.
                </motion.p>

                {/* 5. NÚT BẤM VÀ MẠNG XÃ HỘI */}
                <motion.div variants={itemVariants} className="flex flex-col items-center gap-6 z-20">
                    
                    {/* Hai nút chính */}
                    <div className="flex flex-row items-center justify-center gap-4">
                        <motion.a 
                            href="#projects"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(156, 39, 176, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2.5 md:px-7 md:py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-sans font-bold text-sm md:text-base shadow-lg transition-colors border border-purple-500"
                        >
                            View Projects
                        </motion.a>
                        <motion.a 
                            href="#contact"
                            whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.05)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2.5 md:px-7 md:py-3 rounded-full border border-purple-300/30 text-white font-sans font-semibold text-sm md:text-base hover:border-purple-300 transition-colors"
                        >
                            Contact Me
                        </motion.a>
                    </div>

                    {/* Hàng Icon Mạng xã hội */}
                    <div className="flex items-center gap-5 mt-2">
                        <a href="https://github.com/imkhari" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-purple-300 transition-colors transform hover:scale-110">
                            <GithubIcon />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-purple-300 transition-colors transform hover:scale-110">
                            <LinkedInIcon />
                        </a>
                        <a href="https://www.facebook.com/le.tuankhai2110/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-purple-300 transition-colors transform hover:scale-110">
                            <FacebookIcon />
                        </a>
                    </div>

                </motion.div>
            </div>

            {/* 6. MŨI TÊN SCROLL XUỐNG PHẦN ABOUT */}
            <motion.div 
                variants={itemVariants}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Scroll</span>
                <motion.a 
                    href="#about"
                    animate={{ y: [0, 8, 0] }} // Hiệu ứng nhún nhảy (Bounce)
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1 hover:border-purple-400 transition-colors"
                >
                    <motion.div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                </motion.a>
            </motion.div>
            
        </motion.section>
    );
}

export default Hero;