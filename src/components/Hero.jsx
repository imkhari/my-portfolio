import React, { useState, useEffect } from 'react';
import four_points from '../assets/four_points.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/useLanguage';

const GithubIcon = () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
const LinkedInIcon = () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
const FacebookIcon = () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>;

function Hero() {
    const { t } = useLanguage();
    const roles = t.hero.roles;
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2800);
        return () => clearInterval(interval);
    }, [roles.length]);
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { y: 18, opacity: 0 }, 
        visible: {
            y: 0, opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 },
        },
    };

    const avatarVariants = {
        hidden: { scale: 0.85, opacity: 0 },
        visible: {
            scale: 1, opacity: 1,
            transition: { type: "spring", stiffness: 120, damping: 16, delay: 0.15 },
        },
    };

    return (
        <motion.section 
            id="home" 
            className="w-full flex flex-col items-center justify-between min-h-screen pt-24 pb-8 px-6 text-center relative z-10" 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="hidden md:block h-1" />

            <div className="relative z-10 flex flex-col items-center max-w-3xl w-full my-auto justify-center"> 
                
                {/* 1. INTRO PILL & AVATAR */}
                <div className="relative mb-5 flex flex-col items-center">
                    <motion.div 
                        className="flex items-center gap-2 mb-4"
                        variants={itemVariants}
                    >
                        <span className="text-xs text-zinc-300 font-mono tracking-wide bg-white/[0.03] backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-sm">
                            <span className="text-indigo-400 mr-1">&gt;</span> {t.hero.greetingPrefix}
                        </span>
                    </motion.div>

                    <motion.div 
                        className="relative w-32 h-32 md:w-36 md:h-36 group"
                        variants={avatarVariants}
                        whileHover={{ scale: 1.03 }} 
                    >
                        <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-400/10 to-transparent blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10 w-full h-full rounded-full border border-indigo-400/35 bg-[#11121A] p-1 overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.18)] flex items-center justify-center">
                            <img
                                src={four_points}
                                alt={t.name}
                                className="w-full h-full object-cover object-[50%_82%] scale-[1.08] rounded-full transition-transform duration-500 group-hover:scale-[1.14]"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* 2. PROMINENT NAME HEADLINE */}
                <motion.h1 
                    className="text-4xl sm:text-5xl lg:text-[3.5rem] font-sans font-extrabold text-zinc-50 mb-2 tracking-tight leading-tight"
                    variants={itemVariants}
                >
                    {t.name}
                    <span className="animate-pulse text-indigo-400 ml-1 font-mono font-light">_</span>
                </motion.h1>

                {/* 3. ROLE SUBHEADING */}
                <motion.h2
                    className="text-base md:text-xl font-sans font-semibold text-indigo-300/95 tracking-wide mb-2"
                    variants={itemVariants}
                >
                    {t.hero.headline}
                </motion.h2>

                {/* 4. DYNAMIC ROLE ROTATION */}
                <motion.div 
                    className="text-zinc-400 text-sm md:text-base mb-5 font-mono tracking-wide flex items-center justify-center flex-wrap gap-1 min-h-[2rem]"
                    variants={itemVariants}
                >
                    <span className="text-indigo-400 font-medium">{t.hero.rolePrefix}</span> 
                    <span className="text-zinc-500">"</span>
                    <span className="inline-flex items-center overflow-hidden py-0.5">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={roleIndex}
                                initial={{ y: 12, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -12, opacity: 0 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className="text-sky-300 font-semibold whitespace-nowrap inline-block"
                            >
                                {roles[roleIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </span>
                    <span className="text-zinc-500">";</span>
                </motion.div>

                {/* 5. BIO PARAGRAPH */}
                <motion.p 
                    className="max-w-xl text-zinc-400 text-sm md:text-base leading-relaxed font-sans font-normal mb-7 mx-auto"
                    variants={itemVariants}
                >
                    {t.hero.bioStart} <span className="text-indigo-300 font-medium">VKU</span>{t.hero.bioEnd}
                </motion.p>

                {/* 6. ACTION BUTTONS & SOCIALS */}
                <motion.div variants={itemVariants} className="flex flex-col items-center gap-5 z-20">
                    <div className="flex flex-wrap items-center justify-center gap-3.5">
                        <motion.a 
                            href="#projects"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-6 py-2.5 md:px-7 md:py-3 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white font-sans font-semibold text-sm shadow-[0_0_24px_rgba(99,102,241,0.3)] transition-all border border-indigo-400/40"
                        >
                            {t.hero.viewProjects}
                        </motion.a>
                        
                        <motion.a 
                            href="#contact"
                            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.06)" }}
                            whileTap={{ scale: 0.97 }}
                            className="px-6 py-2.5 md:px-7 md:py-3 rounded-full border border-white/15 text-zinc-200 font-sans font-medium text-sm hover:border-indigo-400/50 hover:text-white transition-all flex items-center gap-2 bg-white/[0.02]"
                        >
                            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {t.hero.viewCv}
                        </motion.a>

                        <motion.a 
                            href="#contact"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-4 py-2.5 md:py-3 rounded-full text-zinc-400 hover:text-zinc-100 font-sans text-sm transition-colors"
                        >
                            {t.hero.contactMe} &rarr;
                        </motion.a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 mt-1">
                        <a href="https://github.com/imkhari" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-400/60 hover:bg-indigo-500/15 transition-all">
                            <GithubIcon />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-400/60 hover:bg-indigo-500/15 transition-all">
                            <LinkedInIcon />
                        </a>
                        <a href="https://www.facebook.com/le.tuankhai2110/" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-400/60 hover:bg-indigo-500/15 transition-all">
                            <FacebookIcon />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll down indicator */}
            <motion.div 
                variants={itemVariants}
                className="mt-6 flex flex-col items-center gap-2 z-10"
            >
                <span className="text-[10px] text-zinc-500 font-mono tracking-[0.2em] uppercase">{t.hero.scroll}</span>
                <motion.a 
                    href="#about"
                    aria-label={t.hero.scroll}
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 h-8 border border-zinc-600/80 rounded-full flex justify-center p-1 hover:border-indigo-400 transition-colors"
                >
                    <motion.div className="w-1 h-1.5 bg-indigo-400 rounded-full" />
                </motion.a>
            </motion.div>
        </motion.section>
    );
}

export default Hero;
