import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center px-6 md:px-20">
      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-zinc-500 uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            3D Animator & Designer / 三维动画师 & 设计师
          </span>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-8">
            CRAFTING <br />
            <span className="text-gradient">DIMENSIONS</span>
            <div className="text-2xl md:text-4xl mt-6 opacity-50 tracking-[0.8em] font-light">维度创生</div>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-zinc-400 max-w-lg text-lg md:text-xl leading-relaxed"
        >
          Specializing in high-end product visualization and creative motion design. 
          Transforming complex technology into breathtaking visual narratives.
          <br />
          <span className="text-sm mt-2 block opacity-60">
            专注于高端产品视觉化与创意动效设计。将复杂的科技转译为震撼人心的视觉叙事。
          </span>
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-zinc-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};
