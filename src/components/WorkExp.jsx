import React from 'react';
import { motion } from 'framer-motion';

function WorkExperience() {
  const experiences = [
    {
      id: 1,
      title: "React & Spring Boot Banking",
      desc: "Developed a robust banking system utilizing React for the interactive frontend and Spring Boot for secure backend operations.",
      icon: "https://api.dicebear.com/7.x/shapes/svg?seed=bank&backgroundColor=transparent", 
    },
    {
      id: 2,
      title: "C++ Custom Web Server",
      desc: "Built a high-performance web server from scratch using C++, demonstrating a deep understanding of core network protocols.",
      icon: "https://api.dicebear.com/7.x/shapes/svg?seed=server&backgroundColor=transparent",
    },
    {
      id: 3,
      title: "DevOps CI/CD Pipeline",
      desc: "Collaborated on a Linux & Open Source Software project, implementing automated CI/CD workflows for seamless deployment.",
      icon: "https://api.dicebear.com/7.x/shapes/svg?seed=pipeline&backgroundColor=transparent",
    },
    {
      id: 4,
      title: "Real-time ChatRoom Web",
      desc: "Created a real-time communication platform similar to Google Meet, focusing on robust network programming architectures.",
      icon: "https://api.dicebear.com/7.x/shapes/svg?seed=chat&backgroundColor=transparent",
    }
  ];

  // --- Cấu hình Animations ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Các thẻ sẽ xuất hiện cách nhau 0.2s
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Bắt đầu từ dưới và mờ
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 12 } 
    },
  };

  return (
    <section id="experience" className="relative w-full max-w-[1980px] mx-auto px-6 py-32 flex flex-col items-center z-10 font-preah">
      
      {/* Tiêu đề Section với hiệu ứng trượt lên */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }} // Chỉ chạy 1 lần khi cuộn tới 50% khối này
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl mb-16 relative z-10 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tighter">
          Work Experience<span className="text-neon-accent">.</span>
        </h2>
      </motion.div>

      {/* --- Vùng chứa Grid và Hào quang nền --- */}
      <div className="relative w-full max-w-5xl">
        
        {/* Hào quang nền (Đã làm mờ và mở rộng hơn để ánh sáng mềm mại) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-[radial-gradient(circle_at_center,_#7b1fa2_0%,_transparent_60%)] blur-[120px] opacity-40 z-0 pointer-events-none"></div>

        {/* Lưới 2x2 chứa các thẻ Card (Dùng motion.div để kích hoạt hiệu ứng cuộn) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Kích hoạt khi cuộn tới 20% danh sách
        >
          
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id} 
              variants={cardVariants}
              // --- NÂNG CẤP UI: Glassmorphism Cao Cấp ---
              className="
                relative overflow-hidden
                flex flex-col sm:flex-row items-center sm:items-start 
                p-8 rounded-3xl 
                bg-white/[0.02] backdrop-blur-xl 
                border border-white/10 border-t-white/20 border-l-white/20
                shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:bg-white/[0.04] hover:shadow-[0_8px_32px_0_rgba(0,243,255,0.15)] hover:border-[#00f3ff]/40
                group
              "
            >
              {/* Icon 3D / Hình minh họa */}
              <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 mb-6 sm:mb-0 sm:mr-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <img 
                  src={exp.icon} 
                  alt="Project Icon" 
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(123,31,162,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(0,243,255,0.6)] transition-all duration-500"
                />
              </div>

              {/* Nội dung chữ và Nút bấm */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
                <h3 className="text-xl font-sans font-bold text-white mb-3 tracking-tight group-hover:text-neon-accent transition-colors duration-300">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed font-sans">
                  {exp.desc}
                </p>
                <button className="px-6 py-2 rounded-full border border-white/20 text-xs text-white hover:bg-neon-accent hover:border-neon-accent hover:text-black font-semibold tracking-widest uppercase transition-all duration-300 mt-auto">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>

    </section>
  );
}

export default WorkExperience;