import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/useLanguage';

function Contact() {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const { t } = useLanguage();

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
            .then(() => {
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
        <motion.section
            id="contact"
            className="w-full py-24 px-6 relative z-10 font-sans"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="max-w-5xl mx-auto">

                {/* --- Header Section --- */}
                <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-16">
                    <span className="text-indigo-300 text-xs font-mono font-bold tracking-widest uppercase border border-indigo-400/25 bg-indigo-500/10 px-4 py-1.5 rounded-full mb-6">
                        {t.contact.badge}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-zinc-50 mb-4 tracking-tight">
                        {t.contact.titleLine1} <br className="hidden md:block" /> {t.contact.titleLine2}
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-sans">
                        {t.contact.subtitle}
                    </p>
                </motion.div>

                {/* --- Main Content Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mt-12">

                    {/* Left Column: Contact Info */}
                    <motion.div variants={itemVariants} className="flex flex-col space-y-10">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-indigo-400 shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500 font-mono font-bold tracking-wider uppercase mb-1">{t.contact.emailLabel}</p>
                                <a href="mailto:letuankhai.hk@gmail.com" className="text-zinc-100 text-sm hover:text-indigo-300 transition-colors">
                                    letuankhai.hk@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-indigo-400 shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500 font-mono font-bold tracking-wider uppercase mb-1">{t.contact.locationLabel}</p>
                                <p className="text-zinc-100 text-sm">{t.contact.locationValue}</p>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/10">
                            <p className="text-xs text-zinc-500 font-mono font-bold tracking-wider uppercase mb-4">{t.contact.findMeOn}</p>
                            <div className="flex gap-4">
                                <a href="https://github.com/imkhari" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-400/50 hover:bg-indigo-500/15 transition-all">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-400/50 hover:bg-indigo-500/15 transition-all">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                                <a href="https://www.facebook.com/le.tuankhai2110/" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-400/50 hover:bg-indigo-500/15 transition-all">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.form variants={itemVariants} ref={formRef} onSubmit={sendEmail} className="flex flex-col space-y-6 font-sans">
                        <div>
                            <label className="block text-xs font-mono font-bold text-zinc-400 tracking-wider uppercase mb-2">{t.contact.nameLabel}</label>
                            <input
                                type="text"
                                name="user_name"
                                placeholder={t.contact.namePlaceholder}
                                required
                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-indigo-400 focus:bg-white/[0.05] transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono font-bold text-zinc-400 tracking-wider uppercase mb-2">{t.contact.emailLabel}</label>
                            <input
                                type="email"
                                name="user_email"
                                placeholder={t.contact.emailPlaceholder}
                                required
                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-indigo-400 focus:bg-white/[0.05] transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono font-bold text-zinc-400 tracking-wider uppercase mb-2">{t.contact.messageLabel}</label>
                            <textarea
                                name="message"
                                rows="5"
                                placeholder={t.contact.messagePlaceholder}
                                required
                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-indigo-400 focus:bg-white/[0.05] transition-all resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`relative z-30 w-full font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 mt-4 transition-all duration-300 pointer-events-auto ${isSubmitting
                                    ? 'bg-indigo-800 text-zinc-400 cursor-not-allowed'
                                    : submitStatus === 'success'
                                        ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                                        : 'bg-indigo-500 text-white hover:bg-indigo-400 shadow-[0_0_22px_rgba(99,102,241,0.3)]'
                                }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    {t.contact.sending}
                                </>
                            ) : submitStatus === 'success' ? (
                                t.contact.sentSuccess
                            ) : (
                                <>
                                    {t.contact.sendButton}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </>
                            )}
                        </button>

                        {submitStatus === 'error' && (
                            <p className="text-rose-400 text-xs text-center mt-2">{t.contact.errorMessage}</p>
                        )}
                    </motion.form>

                </div>
            </div>
        </motion.section>
    );
}

export default Contact;
