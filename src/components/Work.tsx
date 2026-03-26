import React from 'react';
import { motion } from 'motion/react';
import { projects, Project } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface WorkProps {
  onProjectClick: (project: Project) => void;
}

export const Work = ({ onProjectClick }: WorkProps) => {
  return (
    <section id="work" className="py-32 px-6 md:px-20">
      <div className="flex justify-between items-end mb-20">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">SELECTED WORKS / 精选作品</h2>
        <span className="text-zinc-500 text-sm font-mono">/ 05</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group cursor-none"
            onClick={() => onProjectClick(project)}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 rounded-2xl mb-6">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <div className="flex justify-between items-end w-full">
                  <div>
                    <p className="text-sm font-mono text-zinc-400 mb-1">{project.year}</p>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                <p className="text-zinc-500 text-sm">{project.category}</p>
              </div>
              <div className="flex gap-2">
                {project.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-wider text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
