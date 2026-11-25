import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/useLanguage';

function Tech() {
    const { t } = useLanguage();

    const marqueeSkills = [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ];

    const duplicatedMarquee = [...marqueeSkills, ...marqueeSkills];

    const skillCategories = [
        {
            key: "FRONTEND",
            skills: [
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "Tailwind CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "Framer Motion", icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
            ]
        },
        {
            key: "BACKEND",
            skills: [
                { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
                { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
                { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            ]
        },
        {
            key: "DEVOPS",
            skills: [
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
                { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
                { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
                { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" },
                { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
            ]
        },
        {
            key: "DESIGN",
            skills: [
                { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
                { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
                { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
            ]
        },
        {
            key: "TOOLS",
            skills: [
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
                { name: "Postman", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg" },
                { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
                { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
    };

    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
    };

    return (
        <section id="skills" className="w-full py-24 relative z-10 font-sans overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-block border border-indigo-400/25 bg-indigo-500/10 px-4 py-1.5 rounded-full mb-6">
                        <span className="text-indigo-300 text-xs font-mono font-bold tracking-widest uppercase">
                            {t.tech.badge}
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-zinc-50 leading-tight mb-4 tracking-tight">
                        {t.tech.title}
                    </h2>
                    <p className="max-w-2xl mx-auto text-zinc-400 text-sm md:text-base leading-relaxed">
                        {t.tech.subtitle}
                    </p>
                </motion.div>
            </div>

            {/* Marquee */}
            <div
                className="relative max-w-6xl mx-auto w-full flex overflow-hidden py-4 mb-14 px-6"
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
                }}
            >
                <motion.div
                    className="flex gap-4 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                >
                    {duplicatedMarquee.map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-5 py-2.5 bg-[#11121A]/90 border border-white/[0.08] rounded-full min-w-max hover:border-indigo-400/40 transition-colors cursor-default"
                        >
                            <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
                            <span className="text-zinc-300 font-medium text-sm">{skill.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Category Grid */}
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.key}
                            variants={cardVariants}
                            className="bg-[#11121A]/85 backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 transition-all duration-300 flex flex-col h-full group/card hover:border-indigo-400/35"
                        >
                            <h3 className="text-xs font-mono font-bold text-indigo-300 tracking-widest uppercase mb-5 group-hover/card:text-sky-300 transition-colors duration-300">
                                {t.tech.categories[category.key]}
                            </h3>

                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-lg hover:border-indigo-400/40 hover:bg-white/[0.07] transition-all duration-200 cursor-default group"
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-4 h-4 object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                                        />
                                        <span className="text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
}

export default Tech;
