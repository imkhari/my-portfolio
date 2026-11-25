import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/useLanguage';

function Testimonials() {
  const { t } = useLanguage();

  const allTestimonials = [
    { name: "Sarah Chen", title: "CTO, TechCorp Inc.", avatar: "https://api.dicebear.com/8.x/initials/svg?seed=SC", quote: "Khai transformed our product vision into reality. His attention to detail and commitment to quality made all the difference." },
    { name: "Marcus Johnson", title: "Product Manager, StartupXYZ", avatar: "https://api.dicebear.com/8.x/initials/svg?seed=MJ", quote: "Working with Khai was a dream. He bridges the gap between design and development like no one else. Pixel-perfect implementations every time." },
    { name: "Emily Rodriguez", title: "Design Lead, Digital Agency Co.", avatar: "https://api.dicebear.com/8.x/initials/svg?seed=ER", quote: "Khai built our entire platform from scratch in record time. His technical expertise and proactive communication made the project seamless." },
    { name: "Alex Kim", title: "Founder, LaunchPad", avatar: "https://api.dicebear.com/8.x/initials/svg?seed=AK", quote: "One of the most talented developers I've worked with. Khai's ability to translate complex requirements into elegant solutions is exceptional." },
    { name: "Michael Brown", title: "Lead Engineer, InnoSoft", avatar: "https://api.dicebear.com/8.x/initials/svg?seed=MB", quote: "Working with Khai was an absolute pleasure. His architectural decisions and code quality are top-notch." },
    { name: "Sophia Lee", title: "UX Researcher, CreateCo", avatar: "https://api.dicebear.com/8.x/initials/svg?seed=SL", quote: "Khai's focus on user experience is apparent in everything he builds. Our conversion rates soared after the redesign." },
    { name: "David Garcia", title: "Project Lead, WebSolv", avatar: "https://api.dicebear.com/8.x/initials/svg?seed=DG", quote: "Working with Khai was a turning point for our team. The automation solutions he provided were ingenious." }
  ];

  const duplicatedTestimonials = [...allTestimonials, ...allTestimonials];

  const TestimonialCard = ({ name, title, avatar, quote }) => (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0px 8px 30px rgba(99, 102, 241, 0.14)",
        borderColor: "rgba(129, 140, 248, 0.35)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="bg-[#11121A]/90 backdrop-blur-md border border-white/[0.08] rounded-xl p-6 flex flex-col min-w-[340px] h-[190px] cursor-default group/card relative overflow-hidden"
    >
      <div className="flex items-center gap-3 mb-4 border-b border-white/[0.06] pb-4">
        <img 
          src={avatar} 
          alt={name} 
          className="w-10 h-10 rounded-full object-contain border border-white/10" 
        />
        <div>
          <h4 className="text-xs font-semibold text-zinc-100 tracking-wide group-hover/card:text-indigo-300 transition-colors">
            {name}
          </h4>
          <p className="text-[10px] text-zinc-500 tracking-wider">
            {title}
          </p>
        </div>
      </div>

      <div className="flex items-start gap-1.5">
        <span className="text-xl font-serif text-indigo-400/60 -mt-1 block">
          "
        </span>
        <p className="text-xs text-zinc-300 leading-relaxed font-sans">
          {quote}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section className="relative w-full py-24 z-10 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center px-6">
        <div className="text-center mb-14">
          <div className="inline-block border border-indigo-400/25 bg-indigo-500/10 px-4 py-1.5 rounded-full mb-5">
            <span className="text-indigo-300 text-xs font-mono font-bold tracking-widest uppercase">
              {t.testimonials.badge}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-zinc-50 leading-tight mb-4 tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-400 text-sm md:text-base leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>
      </div>

      <div 
        className="relative w-full flex overflow-hidden py-8"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
        }}
      >
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
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
