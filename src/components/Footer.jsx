import React from 'react';

function Footer() {
  // Setup các link mạng xã hội thực tế của bạn
  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/imkhari', // Thay bằng link thật của bạn
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/yourusername', // Thay bằng link thật của bạn
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg'
    },
    { 
      name: 'Email', 
      url: 'mailto:your.email@example.com', // Thay bằng email thật của bạn
      // Dùng icon thư đơn giản
      icon: 'https://api.dicebear.com/8.x/icons/svg?seed=mail&backgroundColor=transparent'
    }
  ];

  return (
    // Dùng nav-bg để làm màu nền khác biệt một chút với body tối
    <footer className="w-full bg-nav-bg py-10 px-6 mt-16 relative z-10 font-preah">
      
      {/* Hiệu ứng viền phát sáng mờ ở đỉnh footer (Glow border) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#BB86FC]/50 to-transparent blur-[1px]"></div>

      <div className="max-w-[1980px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Phần 1: Bản quyền */}
        <div className="text-gray-400 text-sm flex flex-col sm:flex-row items-center gap-2">
          <span>&copy; {new Date().getFullYear()} Lê Tuấn Khải. All rights reserved.</span>
          <span className="hidden sm:inline text-gray-700">|</span>
          <span className="text-gray-600">VKU Software Engineer</span>
        </div>

        {/* Phần 2: Các liên kết Social (Tech Stack Style) */}
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/5 hover:border-[#00f3ff]/30 hover:bg-white/10 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.2)]"
              title={`Connect on ${link.name}`}
            >
              {/* Icon nhỏ phát sáng nhẹ khi hover */}
              <img 
                src={link.icon} 
                alt={link.name} 
                className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_#00f3ff] transition-all"
              />
              <span className="text-xs text-gray-300 font-tech uppercase tracking-widest group-hover:text-white transition-colors">
                {link.name}
              </span>
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}

export default Footer;