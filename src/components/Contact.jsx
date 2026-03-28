import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'; 

function Contact() {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs.sendForm(
            'service_vkevhsb',
            'template_qy0byye',
            formRef.current,
            'QyujRjBZR3DiJnWKb'
        )
            .then((result) => {
                setIsSubmitting(false);
                setSubmitStatus('success');
                formRef.current.reset();
                setTimeout(() => setSubmitStatus(null), 3000);
            }, (error) => {
                setIsSubmitting(false);
                setSubmitStatus('error');
                console.log(error.text);
            });
    };

    // --- Cấu hình Animation ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0,
            transition: { type: "spring", stiffness: 80, damping: 15 }
        }
    };

    return (
        // Đổi thẻ section thành motion.section để bắt sự kiện cuộn trang
        <motion.section
            id="contact"
            className="w-full py-24 px-6 relative z-10 font-preah"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Chạy hiệu ứng khi cuộn tới 20%
            variants={containerVariants}
        >
            <div className="max-w-5xl mx-auto">

                {/* --- Header Section --- */}
                <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-16">
                    <span className="text-purple-primary text-xs font-bold tracking-widest uppercase border border-purple-primary/30 bg-purple-primary/10 px-4 py-1.5 rounded-full mb-6">
                        Contact
                    </span>
                    <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-4 tracking-tight">
                        Let's Build Something <br className="hidden md:block" /> Together
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl font-sans">
                        Have a project in mind? I'd love to hear about it. Drop me a message and let's create something extraordinary.
                    </p>
                </motion.div>

                {/* --- Main Content Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mt-12">

                    {/* Cột Trái: Thông tin liên hệ */}
                    <motion.div variants={itemVariants} className="flex flex-col space-y-10">
                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-bold tracking-wider uppercase mb-1">Email</p>
                                <a href="mailto:letuankhai.hk@gmail.com" className="text-white text-sm hover:text-purple-primary transition-colors">
                                    letuankhai.hk@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-bold tracking-wider uppercase mb-1">Location</p>
                                <p className="text-white text-sm">Da Nang City, Vietnam</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-6 border-t border-white/10">
                            <p className="text-xs text-gray-500 font-bold tracking-wider uppercase mb-4">Find Me On</p>
                            <div className="flex gap-4">
                                {/* GitHub */}
                                <a href="https://github.com/imkhari" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-primary hover:bg-purple-primary/10 transition-all">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </a>
                                {/* LinkedIn */}
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-primary hover:bg-purple-primary/10 transition-all">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                                {/* Facebook - Đã thay thế icon Twitter */}
                                <a href="https://www.facebook.com/le.tuankhai2110/" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-primary hover:bg-purple-primary/10 transition-all">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cột Phải: Form Điền Thông Tin */}
                    <motion.form variants={itemVariants} ref={formRef} onSubmit={sendEmail} className="flex flex-col space-y-6 font-sans">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 tracking-wider uppercase mb-2">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                placeholder="John Doe"
                                required
                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-primary focus:bg-white/[0.05] transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 tracking-wider uppercase mb-2">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                placeholder="john@example.com"
                                required
                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-primary focus:bg-white/[0.05] transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 tracking-wider uppercase mb-2">Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Tell me about your project..."
                                required
                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-primary focus:bg-white/[0.05] transition-all resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            // Thêm z-index cao hẳn lên để chắc chắn không bị lớp nào đè
                            className={`relative z-30 w-full font-bold py-4 rounded-xl flex items-center justify-center gap-2 mt-4 transition-all duration-300 pointer-events-auto ${isSubmitting
                                    ? 'bg-purple-800 text-gray-400 cursor-not-allowed'
                                    : submitStatus === 'success'
                                        ? 'bg-neon-accent text-white shadow-[0_0_20px_rgba(34,197,94,0.6)]'
                                        : 'bg-[#9937f5] text-white hover:bg-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.5)]'
                                }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : submitStatus === 'success' ? (
                                'Message Sent Successfully!'
                            ) : (
                                <>
                                    Send Message
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </>
                            )}
                        </button>

                        {submitStatus === 'error' && (
                            <p className="text-red-400 text-xs text-center mt-2">Oops! Something went wrong. Please try again.</p>
                        )}
                    </motion.form>

                </div>
            </div>
        </motion.section>
    );
}

export default Contact;