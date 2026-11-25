import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/useLanguage';

function AboutMe() {
    const { t } = useLanguage();

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
                    <motion.div variants={itemVariants} className="inline-block border border-indigo-400/25 bg-indigo-500/10 px-3.5 py-1 rounded-full mb-4">
                        <span className="text-indigo-300 text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase">
                            {t.about.badge}
                        </span>
                    </motion.div>
                    
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold text-zinc-50 leading-tight mb-4 tracking-tight">
                        {t.about.title}
                    </motion.h2>
                    
                    <motion.p variants={itemVariants} className="max-w-xl text-zinc-400 text-sm leading-relaxed">
                        {t.about.subtitle}
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
                        <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-5">
                            {t.about.p1Start} <span className="text-white font-semibold">{t.about.p1Role}</span> {t.about.p1Mid} <span className="text-indigo-300 font-semibold">VKU</span>{t.about.p1End}
                        </p>
                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
                            {t.about.p2Start} <span className="text-zinc-200 font-medium">React, Vue &amp; Tailwind CSS</span> {t.about.p2Mid} <span className="text-zinc-200 font-medium">NestJS, Node.js &amp; Docker</span>.
                        </p>
                        
                        {/* Location */}
                        <div className="flex items-center gap-3 mt-auto opacity-80">
                            <div className="h-[1px] bg-white/10 flex-1" />
                            <span className="text-[10px] font-mono text-indigo-300/90 tracking-[0.2em] uppercase">
                                {t.about.location}
                            </span>
                            <div className="h-[1px] bg-white/10 flex-1" />
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: 4 Stat Cards */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 md:gap-4">
                        {t.about.stats.map((stat, index) => (
                            <motion.div 
                                key={index}
                                className="bg-[#11121A]/80 backdrop-blur-md border border-white/[0.08] rounded-2xl p-5 md:p-6 flex flex-col items-start justify-center hover:bg-[#161822]/90 hover:border-indigo-400/35 hover:shadow-[0_8px_25px_rgba(99,102,241,0.12)] transition-all duration-300 group"
                            >
                                <h3 className="text-2xl md:text-3xl font-extrabold text-indigo-400 mb-1 group-hover:scale-105 transform origin-left transition-transform duration-300">
                                    {stat.number}
                                </h3>
                                <p className="text-[10px] md:text-xs text-zinc-400 font-mono tracking-wide">
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
