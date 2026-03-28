import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Dọn dẹp event listener khi component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <nav 
      // Dùng template literal (dấu backtick) để thay đổi class động
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-main-bg/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg' // Khi cuộn: Hiện kính mờ, thu nhỏ padding
          : 'bg-transparent py-6 border-b border-transparent'                        // Khi ở trên cùng: Trong suốt, không viền, padding to
      }`}
    >
      <div className="max-w-[1980px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        <a href="#home" className="text-2xl font-bold text-white font-sans tracking-wider hover:opacity-80 transition-opacity">
          LTK<span className="text-neon-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group font-sans tracking-wide"
            >
              {item}
              {/* Hiệu ứng gạch chân khi hover giống mẫu */}
              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-neon-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          className="hidden md:inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white bg-neon-accent/10 border border-neon-accent/30 rounded-full hover:bg-neon-accent/20 hover:border-neon-accent hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300 font-sans"
        >
          Let's Talk
        </a>

        <button className="md:hidden text-gray-300 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;