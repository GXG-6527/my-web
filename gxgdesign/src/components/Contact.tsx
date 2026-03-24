import React from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, Linkedin, Github } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-bold tracking-tighter mb-12"
        >
          LET'S CREATE <br />
          <span className="text-gradient">TOGETHER</span>
          <div className="text-2xl md:text-4xl mt-4 opacity-50">期待与您共同创作</div>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-8"
        >
          <a 
            href="mailto:1397364357@qq.com" 
            className="text-2xl md:text-4xl font-light hover:text-zinc-400 transition-colors border-b border-white/20 pb-2"
          >
            1397364357@qq.com
          </a>

          <div className="flex gap-8 mt-8">
            <SocialLink icon={<Instagram />} href="#" />
            <SocialLink icon={<Linkedin />} href="#" />
            <SocialLink icon={<Github />} href="#" />
          </div>
        </motion.div>
      </div>

      <footer className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs uppercase tracking-[0.3em]">
        <p>© 2026 GUO ZIHAO. ALL RIGHTS RESERVED.</p>
        <p>BUILT WITH PASSION & PIXELS</p>
      </footer>
    </section>
  );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <motion.a
    href={href}
    whileHover={{ y: -5, color: "#fff" }}
    className="text-zinc-500 transition-colors"
  >
    {icon}
  </motion.a>
);
