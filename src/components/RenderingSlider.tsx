import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { productRenderings } from '../constants';

export const RenderingSlider = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollXProgress } = useScroll({
    container: targetRef,
  });

  // Prevent scrolling when image is enlarged
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  const scroll = (direction: 'left' | 'right') => {
    if (targetRef.current) {
      const scrollAmount = 500;
      targetRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-32 bg-zinc-900/50 relative group/slider">
      <div className="px-6 md:px-20 mb-16 flex justify-between items-end">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">PRODUCT RENDERS</h2>
          <p className="text-zinc-500 uppercase tracking-widest text-sm">产品渲染图合集 / 点击放大浏览</p>
        </div>
      </div>

      <div className="relative px-6 md:px-20">
        {/* Navigation Arrows with Glassmorphism */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-10 top-[40%] -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-all duration-500 hover:bg-white hover:text-black hover:scale-110 hidden md:flex"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-10 top-[40%] -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-all duration-500 hover:bg-white hover:text-black hover:scale-110 hidden md:flex"
        >
          <ChevronRight size={24} />
        </button>

        {/* Mobile Navigation Arrows */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-8 top-[40%] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white md:hidden"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-8 top-[40%] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white md:hidden"
        >
          <ChevronRight size={20} />
        </button>

        <div 
          ref={targetRef}
          className="flex overflow-x-auto hide-scrollbar gap-8 pb-12 cursor-grab active:cursor-grabbing scroll-smooth"
        >
          {productRenderings.map((render) => (
            <motion.div
              key={render.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[300px] md:w-[450px] group cursor-pointer"
              onClick={() => setSelectedImage(render.image)}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-zinc-800">
                <img 
                  src={render.image} 
                  alt={render.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-zinc-400 font-medium tracking-tight group-hover:text-white transition-colors">
                {render.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-20"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform z-[210]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </motion.button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Enlarged render"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
