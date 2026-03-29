import React from 'react';

function Footer() {
  return (
    <footer className="w-full relative z-20 border-t border-white/5 py-10 mt-16 font-sans">
      
      {/* - Thay đổi px-8 md:px-16 thành px-12 md:px-24 hoặc px-32 để đẩy 2 đầu vào trong nhiều hơn.
          - Sử dụng items-baseline thay vì items-center để các chữ to (LTK) và chữ nhỏ (Bản quyền) 
            cùng nằm trên 1 đường kẻ ngang ở chân chữ.
      */}
      <div className="w-full max-w-[1440px] mx-auto px-12 md:px-24 lg:px-32 grid grid-cols-1 md:grid-cols-3 items-baseline gap-8 md:gap-4">
        
        <div className="text-xl font-bold text-white tracking-wide text-center md:text-left">
          LTK<span className="text-purple-800">.</span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm text-gray-400 font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          <p className="text-[8px] text-gray-600 tracking-widest uppercase text-center">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>

        <div className="text-[11px] text-gray-500 flex flex-col xl:flex-row items-center justify-center md:justify-end gap-2 text-center md:text-right self-baseline">
          <span className="whitespace-nowrap">&copy; {new Date().getFullYear()} Le Tuan Khai</span>
          {/* <span className="hidden xl:inline text-gray-700">|</span> */}
          {/* <span className="text-gray-600 whitespace-nowrap">Software Engineer</span> */}
        </div>

      </div>
    </footer>
  );
}

export default Footer;