import React from 'react';
import { motion } from 'motion/react';
import { experiences, skills } from '../constants';

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-20 bg-zinc-950">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">EXPERIENCE / 工作经历</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-white/10 pb-8"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                    <p className="text-zinc-500">{exp.role}</p>
                  </div>
                  <span className="text-sm font-mono text-zinc-600">{exp.period}</span>
                </div>
                <p className="text-zinc-400 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">SKILLS / 专业技能</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,1)", color: "rgba(0,0,0,1)" }}
                className="px-6 py-3 border border-white/10 rounded-full text-sm font-medium transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <div className="mt-20 p-8 glass rounded-3xl">
            <h3 className="text-2xl font-bold mb-4 italic">"Tech's end is a return to nature." / “科技的尽头是回归自然”</h3>
            <p className="text-zinc-400">
              My philosophy blends high-precision industrial structures with minimalist natural elements. 
              I believe in using 3D animation not just to show functions, but to evoke emotions and build brand totems.
              <br />
              <span className="text-sm mt-4 block opacity-60">
                我的设计哲学结合了高精度的工业结构与极简的自然元素。
                三维动画不应只是展示功能，更应唤起情感，构建品牌图腾。
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
