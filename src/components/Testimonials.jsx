import React from 'react';
import { motion } from 'framer-motion';

function Testimonials() {
  // --- 1. Dữ liệu Testimonial Gốc & Mở rộng (Giữ nguyên) ---
  const allTestimonials = [
    { name: "Sarah Chen", title: "CTO, TechCorp Inc.", avatar: "https://api.dicebear.com/8.x/initials/svg?seed=SC", quote: "Khai transformed our product vision into reality. His attention to detail and commitment to quality made all the difference." },
    { name: "Marcus Johnson", title: "Product Manager, StartupXYZ", avatar: "https://api.dicebear.com/8.x/initials/svg?seed=MJ", quote: "Working with Khai was a dream. He bridges the gap between design and development like no one else. Pixel-perfect implementations every time." },
    { name: "Emily Rodriguez", title: "Design Lead, Digital Agency Co.", avatar: "https://api.dicebear.com/8.x/initials/svg?seed=ER", quote: "Khai built our entire platform from scratch in record time. His technical expertise and proactive communication made the project seamless." },
    { name: "Alex Kim", title: "Founder, LaunchPad", avatar: "https://api.dicebear.com/8.x/initials/svg?seed=AK", quote: "One of the most talented developers I've worked with. Khai's ability to translate complex requirements into elegant solutions is exceptional." },
    { name: "Michael Brown", title: "Lead Engineer, InnoSoft", avatar: "https://api.dicebear.com/8.x/initials/svg?seed=MB", quote: "Working with Khai was an absolute pleasure. His architectural decisions and code quality are top-notch." },
    { name: "Sophia Lee", title: "UX Researcher, CreateCo", avatar: "https://api.dicebear.com/8.x/initials/svg?seed=SL", quote: "Khai's focus on user experience is apparent in everything he builds. Our conversion rates soared after the redesign." },
    { name: "David Garcia", title: "Project Lead, WebSolv", avatar: "https://api.dicebear.com/8.x/initials/svg?seed=DG", quote: "Working with Khai was a turning point for our team. The automation solutions he provided were ingenious." }
  ];

  // Nhân đôi mảng để tạo hiệu ứng vòng lặp không bị đứt quãng
  const duplicatedTestimonials = [...allTestimonials, ...allTestimonials];

  // --- 1a. Cấu hình Animation NGAY LẬP TỨC (Không Tàng hình) ---
  const immediateVariants = {
    // Đảm bảo trạng thái ban đầu và cuối cùng đều là 1 (không tàng hình)
    hidden: { opacity: 1, y: 0, scale: 1 }, 
    present: { opacity: 1, y: 0, scale: 1 },
  };

  // --- 2. THÀNH PHẦN CARD TESTIMONIAL (PHIÊN BẢN HIỆN SẴN & TECH GỌN GÀNG) ---
  const TestimonialCard = ({ name, title, avatar, quote }) => (
    <motion.div
      // Đặt variants để kiểm soát chính xác trạng thái xuất hiện
      variants={immediateVariants}
      // Ép buộc trạng thái là 'present' ngay từ đầu, không dùng entrance stagger
      initial="present"
      animate="present"

      // Thêm borderColor vào whileHover để motion phát sáng rõ ràng hơn
      whileHover={{ 
        scale: 1.03, // Tăng scale lên 1.03 để nhìn rõ hơn
        boxShadow: "0px 0px 30px rgba(168, 85, 247, 0.25)",
        borderColor: "rgba(168, 85, 247, 0.4)" // borderColor: hover:border-purple-primary/40
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }} // Tùy chọn: Thêm transition của Framer Motion cho mượt

      // Giữ nguyên các class Tailwind khác cho style (bao gồm bg đen, rounded, và group)
      className="bg-[#0d0318] border border-gray-700/50 rounded-xl p-6 flex flex-col min-w-[340px] h-[190px] cursor-default group/card relative overflow-hidden"
    >
      
      {/* 1. Header Card (Lên đỉnh): Avatar + Info nằm side-by-side */}
      <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-4">
        <img 
          src={avatar} 
          alt={name} 
          // Thu nhỏ avatar xuống w-10 h-10
          className="w-10 h-10 rounded-full object-contain border border-white/10" 
        />
        <div>
          <h4 className="text-xs font-semibold text-white tracking-wide group-hover/card:text-purple-300 transition-colors">
            {name}
          </h4>
          <p className="text-[9px] text-gray-500 tracking-wider">
            {title}
          </p>
        </div>
      </div>

      {/* 2. Body Card (Bên dưới): Quote nằm ngang */}
      <div className="flex items-start gap-1">
        {/* Biểu tượng dấu ngoặc kép nhỏ, tinh tế, màu tím mờ */}
        <span className="text-xl font-serif text-purple-primary opacity-60 -mt-1 block">
          "
        </span>
        
        {/* Văn bản trích dẫn (Chữ xám mờ hơn, text-sm) */}
        <p className="text-xs text-gray-300 leading-relaxed font-sans">
          {quote}
        </p>
      </div>

    </motion.div>
  );

  return (
    // relative z-10 để đè lên background lưới grid chạy phía sau
    <section className="relative w-full py-24 z-10 font-sans overflow-hidden">
      
      {/* Thêm các Particulate light trails (dải ánh sáng hạt) để đồng bộ style */}
      <div className="absolute inset-0 opacity-15">
        {/* Khải có thể tự thêm div chứa canvas WebGL Particulates ở đây */}
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center px-6">
        
        {/* --- 3. Tiêu đề & Thông điệp --- */}
        {/* THAY ĐỔI LỚN: Loại bỏ entrance animation cho toàn bộ phần chứa này */}
        <div className="text-center mb-16">
          {/* Badge tiêu đề nhỏ, chuẩn style image_13.png */}
          <div className="inline-block border border-purple-primary/30 bg-purple-primary/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-purple-primary text-xs font-bold tracking-widest uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
            What People Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-sm md:text-base leading-relaxed">
            Kind words from clients and colleagues I've had the pleasure of working with.
          </p>
        </div>
      </div>

      <div 
        className="relative w-full flex overflow-hidden py-10"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
        }}
      >
        <motion.div
          className="flex gap-6 w-max"
          // Di chuyển từ 0% đến -50% (vì mảng đã được nhân đôi) để tạo vòng lặp vô hạn
          animate={{ x: ["0%", "-50%"] }}
          // Tăng duration lên 60-80s để cuộn thật chậm, dễ đọc
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          // UX CẢI THIỆN: Dừng lại khi chạm chuột vào! (Pause on hover)
          whileHover={{ animationPlayState: 'paused' }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>
      </div>

    </section>
  );
}

export default Testimonials;