import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../constants';

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl overflow-y-auto"
      >
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={onClose}
          className="fixed top-8 right-8 z-[110] w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform interactive"
        >
          <X size={24} />
        </motion.button>

        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* Header */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <span className="text-zinc-500 uppercase tracking-widest text-sm mb-4 block">
              {project.category} / {project.year}
            </span>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-2 glass rounded-full text-xs uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Main Media (Video or Image) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="aspect-video rounded-3xl overflow-hidden mb-20 bg-zinc-900 relative group/media"
          >
            {project.video ? (
              <video 
                src={project.video} 
                controls 
                autoPlay 
                muted 
                loop 
                className="w-full h-full object-cover"
                poster={project.image}
              />
            ) : (
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            )}
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
            <div className="lg:col-span-4 space-y-12">
              <section>
                <h4 className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-4">核心挑战</h4>
                <p className="text-xl text-zinc-300 leading-relaxed">{project.details.problem}</p>
              </section>
              
              <section>
                <h4 className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-4">解决方案</h4>
                <p className="text-xl text-white leading-relaxed">{project.details.solution}</p>
              </section>

              {project.details.marketInsight && (
                <section className="p-6 glass rounded-2xl">
                  <h4 className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-4">市场洞察</h4>
                  <p className="text-sm text-zinc-400 italic">"{project.details.marketInsight}"</p>
                </section>
              )}
            </div>

            <div className="lg:col-span-8 space-y-16">
              <section>
                <h4 className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-8">制作流程</h4>
                <div className="space-y-6">
                  {project.details.process.map((step, i) => (
                    <motion.div 
                      key={i}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-6 items-start group"
                    >
                      <span className="text-zinc-700 font-mono text-lg group-hover:text-white transition-colors">0{i + 1}</span>
                      <div className="flex-1 pb-6 border-b border-white/5">
                        <p className="text-lg text-zinc-300 group-hover:text-white transition-colors">{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section className="bg-white text-black p-10 rounded-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <CheckCircle2 size={32} />
                  <h4 className="uppercase tracking-widest text-sm font-bold">最终成果与价值</h4>
                </div>
                <p className="text-2xl font-medium leading-tight">{project.details.results}</p>
              </section>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="mt-32 pt-12 border-t border-white/10 flex justify-center">
             <button 
              onClick={onClose}
              className="group flex items-center gap-4 text-zinc-500 hover:text-white transition-colors interactive"
             >
               <span className="uppercase tracking-[0.3em] text-sm">返回作品集</span>
               <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                 <ArrowRight size={18} />
               </div>
             </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
