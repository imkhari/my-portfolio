import React from 'react';
import Me from '../assets/Me.png';
import Gradient from '../assets/Gradient.png';
// 1. Import motion từ thư viện framer-motion
import { motion } from 'framer-motion';

function Hero() {
    
    // Biến thể 1: Container cha (Chứa logic "thác đổ")
    const containerVariants = {
        hidden: { opacity: 0 }, // Trạng thái ban đầu: Ẩn hoàn toàn
        visible: {
            opacity: 1, // Trạng thái kết thúc: Hiện rõ
            transition: {
                // Các con (staggerChildren) sẽ hiện lần lượt cách nhau 0.3 giây
                staggerChildren: 0.3, 
                delayChildren: 0.2, // Đợi 0.2 giây trước khi con đầu tiên hiện
            },
        },
    };

    // Biến thể 2: Dùng cho các phần tử con (Lời chào, Chữ tiêu đề, v.v.)
    // Hiệu ứng: Hiện mờ và trượt nhẹ từ dưới lên
    const itemVariants = {
        hidden: { y: 30, opacity: 0 }, // Bắt đầu ở dưới 30px và ẩn
        visible: {
            y: 0, // Về vị trí chuẩn
            opacity: 1, // Hiện rõ
            transition: { 
                type: "spring", // Dùng kiểu spring cho cảm giác nảy tự nhiên
                stiffness: 100, // Độ cứng
                damping: 15,    // Độ giảm chấn
            },
        },
    };

    // Biến thể 3: Dùng riêng cho mũi tên (Slide từ bên trái sang)
    const arrowVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: { delay: 0.5, duration: 0.6, ease: "easeOut" } // Xuất hiện trễ hơn một chút
        }
    }

    return (
        // Đổi thẻ <section> thành <motion.section> và áp dụng containerVariants
        <motion.section 
            id="home" 
            className="w-full flex flex-col items-center justify-center min-h-[80vh] pt-32 pb-16 px-6 text-center"
            initial="hidden"    // Định nghĩa trạng thái bắt đầu
            animate="visible"   // Định nghĩa trạng thái đích
            variants={containerVariants} // Gán các biến thể đã định nghĩa ở trên
        >

            <div className="relative mb-12 flex flex-col items-center mt-10">

                <motion.div 
                    className="absolute -top-12 md:-top-10 md:left-32 flex flex-col items-start sm:flex"
                    variants={itemVariants}
                >
                    <span className="text-sm text-gray-300 font-tech tracking-wide mb-1">
                        Hello! I am <span className="text-neon-accent">Lê Tuấn Khải</span>
                    </span>
                    <motion.svg 
                        width="40" 
                        height="40" 
                        viewBox="0 0 100 100" 
                        className="text-gray-500 stroke-current transform rotate-12 -ml-4" 
                        fill="none"
                        variants={arrowVariants}
                    >
                        <path d="M10,90 Q10,10 90,10" strokeWidth="2" strokeLinecap="round" />
                        <path d="M80,0 L90,10 L80,20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                </motion.div>

                {/* Tăng độ nảy (stiffness) cho khối ảnh khi xuất hiện */}
                <motion.div 
                    className="relative w-60 h-60 md:w-64 md:h-64 flex items-center justify-center mt-10"
                    variants={{
                        hidden: { scale: 0.8, opacity: 0 },
                        visible: { 
                            scale: 1, 
                            opacity: 1, 
                            transition: { 
                                type: "spring", 
                                stiffness: 120, 
                                damping: 10,
                                delay: 0.3 // Ảnh hiện cùng lúc với khối text chào
                            } 
                        }
                    }}
                >
                    {/* Thêm hiệu ứng Pulse nhẹ cho ảnh Gradient làm nền */}
                    <motion.img
                        src={Gradient}
                        alt="Gradient Background"
                        className="absolute z-0 w-[150%] md:w-[180%] max-w-none object-contain opacity-90"
                        animate={{
                            opacity: [0.7, 1, 0.7], // Đổi độ mờ liên tục
                            scale: [1, 1.05, 1],    // Co giãn liên tục
                        }}
                        transition={{
                            duration: 5,            // Thời gian một vòng lặp
                            repeat: Infinity,       // Lặp vô tận
                            ease: "linear"
                        }}
                    />

                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                        <img
                            src={Me}
                            alt="Khai Avatar"
                            className="w-full h-full object-contain drop-shadow-2xl"
                        />
                    </div>

                </motion.div>
            </div>

            <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
                variants={itemVariants}
            >
                I'm a Software Engineer<span className="animate-pulse text-neon-accent ml-1 font-mono">|</span>
            </motion.h1>

            <motion.p 
                className="text-gray-400 text-lg md:text-xl mb-8 font-tech"
                variants={itemVariants}
            >
                Currently, I'm focusing on <span className="text-white">Machine Learning</span> & <span className="text-white">DevOps</span>.
            </motion.p>

            <motion.p 
                className="max-w-2xl text-gray-500 text-sm md:text-base leading-relaxed font-sans"
                variants={itemVariants}
            >
                A passionate developer and VKU student, functioning in the tech industry.
                I make meaningful and delightful digital products that create an equilibrium
                between user needs and technical optimization.
            </motion.p>

        </motion.section>
    );
}

export default Hero;