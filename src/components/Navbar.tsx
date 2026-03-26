import React from 'react';
import { motion } from 'motion/react';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference"
    >
      <div className="text-xl font-bold tracking-tighter">GUO ZIHAO 郭子豪</div>
      <div className="flex gap-8 text-sm font-medium uppercase tracking-widest">
        <a href="#work" className="hover:opacity-50 transition-opacity">Work / 作品</a>
        <a href="#about" className="hover:opacity-50 transition-opacity">About / 关于</a>
        <a href="#contact" className="hover:opacity-50 transition-opacity">Contact / 联系</a>
      </div>
    </motion.nav>
  );
};
