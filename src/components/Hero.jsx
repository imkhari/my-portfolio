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
        "Full Stack Developer",
        "Backend Engineer",
        "Frontend Developer",
        "Software Engineer"
    ];
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2600);
        return () => clearInterval(interval);
    }, [roles.length]);
    
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
            className="w-full flex flex-col items-center justify-center min-h-screen pt-24 pb-12 px-6 text-center relative z-10" 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Ambient Background Particles */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }} className="absolute top-[10%] left-[5%] w-[3px] h-[3px] bg-purple-400 rounded-full blur-[0.5px]" />
                <motion.div animate={{ y: [0, 30, 0], opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-[15%] left-[25%] w-[3px] h-[3px] bg-purple-300 rounded-full" />
                <motion.div animate={{ x: [0, 15, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-[8%] right-[15%] w-[3px] h-[3px] bg-fuchsia-400 rounded-full blur-[1px]" />
                <motion.div animate={{ y: [0, -25, 0], opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[25%] right-[30%] w-[3px] h-[3px] bg-indigo-400 rounded-full" />
                <motion.div animate={{ x: [0, -20, 0], opacity: [0.1, 0.6, 0.1] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute top-[40%] left-[10%] w-[3px] h-[3px] bg-cyan-300 rounded-full blur-[0.5px]" />
                <motion.div animate={{ y: [0, 40, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }} className="absolute top-[35%] left-[45%] w-[3px] h-[3px] bg-purple-500 rounded-full" />
                <motion.div animate={{ y: [0, -15, 0], opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} className="absolute top-[45%] right-[10%] w-[3px] h-[3px] bg-purple-400 rounded-full blur-[1px]" />
                <motion.div animate={{ y: [0, 25, 0], opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 3 }} className="absolute top-[55%] right-[45%] w-[3px] h-[3px] bg-fuchsia-300 rounded-full" />
            </div>

            <div className="relative z-10 flex flex-col items-center max-w-4xl w-full flex-grow justify-center"> 
                
                {/* 1. AVATAR & INTRO GREETING */}
                <div className="relative mb-6 flex flex-col items-center mt-4">
                    <motion.div 
                        className="flex items-center gap-2 mb-3"
                        variants={itemVariants}
                    >
                        <span className="text-xs text-gray-300 font-mono tracking-widest bg-white/[0.04] backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg">
                            {'>'} Hello_World, I am <span className="text-purple-300 font-bold">Lê Tuấn Khải</span>
                        </span>
                    </motion.div>

                    <motion.div 
                        className="relative w-36 h-36 md:w-40 md:h-40 mt-4 group"
                        variants={avatarVariants}
                        whileHover={{ scale: 1.03 }} 
                    >
                        <motion.img
                            src={Gradient} alt="Glow Background"
                            className="absolute z-0 w-[180%] h-[180%] -top-[40%] -left-[40%] max-w-none object-contain opacity-70 blur-md group-hover:opacity-90 transition-opacity duration-300"
                            animate={{ opacity: [0.6, 0.85, 0.6], scale: [1, 1.05, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />

                        <div className="relative z-10 w-full h-full rounded-full border-2 border-purple-500/40 bg-[#0d0318] p-1.5 overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.35)] flex items-center justify-center backdrop-blur-sm">
                            <img
                                src={four_points} alt="Khai Avatar"
                                className="w-full h-full object-cover rounded-full drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* 2. MAIN HEADLINE */}
                <motion.h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-white mb-3 tracking-tight leading-tight"
                    variants={itemVariants}
                >
                    Software Engineer
                    <span className="animate-pulse text-purple-400 ml-1 font-mono font-light">_</span>
                </motion.h1>

                {/* 3. DYNAMIC ROLE ROTATION */}
                <motion.div 
                    className="text-gray-300 text-sm md:text-base mb-5 font-mono tracking-wide flex items-center justify-center gap-1.5 h-8"
                    variants={itemVariants}
                >
                    <span className="text-purple-400 font-semibold">const role =</span> 
                    <span className="text-gray-500">"</span>
                    
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

                {/* 4. BIO PARAGRAPH */}
                <motion.p 
                    className="max-w-xl text-gray-300/80 text-sm md:text-base leading-relaxed font-sans font-normal mb-8 mx-auto"
                    variants={itemVariants}
                >
                    Passionate developer and student at <span className="text-purple-300 font-medium">VKU</span>. 
                    I build reliable web applications, mobile experiences, and scalable backend infrastructure 
                    with a focus on clean architecture and high performance.
                </motion.p>

                {/* 5. ACTION BUTTONS & SOCIALS */}
                <motion.div variants={itemVariants} className="flex flex-col items-center gap-6 z-20">
                    <div className="flex flex-wrap items-center justify-center gap-3.5">
                        <motion.a 
                            href="#projects"
                            whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)" }}
                            whileTap={{ scale: 0.96 }}
                            className="px-6 py-2.5 md:px-7 md:py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-sans font-bold text-sm shadow-[0_0_15px_rgba(168,85,247,0.35)] transition-all border border-purple-400/40"
                        >
                            View Projects
                        </motion.a>
                        
                        <motion.a 
                            href="#contact"
                            whileHover={{ scale: 1.04, background: "rgba(255,255,255,0.08)" }}
                            whileTap={{ scale: 0.96 }}
                            className="px-6 py-2.5 md:px-7 md:py-3 rounded-full border border-purple-400/30 text-purple-200 font-sans font-semibold text-sm hover:border-purple-400 hover:text-white transition-all flex items-center gap-2 bg-white/[0.02]"
                        >
                            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            View CV / Resume
                        </motion.a>

                        <motion.a 
                            href="#contact"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="px-5 py-2.5 md:py-3 rounded-full text-gray-400 hover:text-white font-sans text-sm transition-colors"
                        >
                            Contact Me &rarr;
                        </motion.a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-5 mt-1">
                        <a href="https://github.com/imkhari" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-400 hover:bg-purple-600/20 transition-all">
                            <GithubIcon />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-400 hover:bg-purple-600/20 transition-all">
                            <LinkedInIcon />
                        </a>
                        <a href="https://www.facebook.com/le.tuankhai2110/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-400 hover:bg-purple-600/20 transition-all">
                            <FacebookIcon />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll down indicator */}
            <motion.div 
                variants={itemVariants}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">Scroll</span>
                <motion.a 
                    href="#about"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 h-9 border-2 border-gray-600/80 rounded-full flex justify-center p-1 hover:border-purple-400 transition-colors"
                >
                    <motion.div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                </motion.a>
            </motion.div>
        </motion.section>
    );
}

export default Hero;
