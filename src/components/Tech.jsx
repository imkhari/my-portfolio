import React from 'react';
import { motion } from 'framer-motion';

function Tech() {
    // 1. Dữ liệu cho dải băng cuộn ngang (Marquee)
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

    // Nhân đôi mảng để tạo hiệu ứng vòng lặp không bị đứt quãng
    const duplicatedMarquee = [...marqueeSkills, ...marqueeSkills];

    // 2. Dữ liệu Grid phân loại (Giữ nguyên sự chuyên nghiệp)
    const skillCategories = [
        {
            title: "FRONTEND",
            skills: [
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "Tailwind CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "Framer Motion", icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
            ]
        },
        {
            title: "BACKEND",
            skills: [
                { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
                { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
                { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            ]
        },
        {
            title: "DEVOPS",
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
            title: "DESIGN",
            skills: [
                { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
                { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
                { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
            ]
        },
        {
            title: "TOOLS",
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
        <section className="w-full py-24 relative z-10 font-sans overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center px-6">

                {/* --- Tiêu đề & Thông điệp (Cập nhật giống ảnh) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-block border border-purple-primary/30 bg-purple-primary/10 px-4 py-1.5 rounded-full mb-6">
                        <span className="text-purple-primary text-xs font-bold tracking-widest uppercase">
                            Skills
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tight">
                        Tools & Technologies
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-500 text-sm md:text-base leading-relaxed">
                        The technologies I use to bring ideas to life.
                    </p>
                </motion.div>
            </div>

            {/* --- DẢI BĂNG CUỘN NGANG (INFINITE MARQUEE) --- */}
            {/* maskImage giúp làm mờ 2 bên viền để trông dải băng chìm vào nền mượt mà hơn */}
            <div
                className="relative max-w-6xl mx-auto w-full flex overflow-hidden py-4 mb-16 px-6"
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
                }}
            >
                <motion.div
                    className="flex gap-4 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                    {duplicatedMarquee.map((skill, index) => (
                        <div
                            key={index}
                            // Đã sửa: Dùng bg-[#121212] đặc khối, viền rõ nét hơn, hover lên màu xám sẫm #1e1e1e
                            className="flex items-center gap-3 px-6 py-3 bg-[#0d0318] border border-white/10 rounded-full min-w-max hover:border-purple-primary/50 transition-colors cursor-default shadow-md"
                        >
                            <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
                            <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* --- Grid --- */}
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
                            key={category.title}
                            variants={cardVariants}
                            className="bg-[#0d0318] border border-white/10 rounded-2xl p-6 transition-all duration-500 flex flex-col h-full group/card relative overflow-hidden"
                        >
                            <h3 className="text-xs font-tech font-bold text-purple-300 tracking-widest uppercase mb-5 group-hover/card:text-purple-400 transition-colors duration-300">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        // LÀM ĐẶC PILL: Bỏ trắng trong suốt, dùng bg-[#1a1a1a] đặc, viền xám nổi bật
                                        className="flex items-center gap-2 px-3 py-1.5 bg-[#401e4d] border border-gray-700/60 rounded-lg transition-all duration-300 cursor-default shadow-md group"
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-4 h-4 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                        <span className="text-xs font-medium text-gray-200 group-hover:text-white transition-colors">
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