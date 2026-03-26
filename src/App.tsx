import React, { useEffect, useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Scene } from './components/Scene';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { RenderingSlider } from './components/RenderingSlider';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { ProjectDetail } from './components/ProjectDetail';
import { Project } from './constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
          },
        }
      );
    });
  }, []);

  // Prevent scrolling when detail view is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <Scene />
      <Navbar />
      
      <main>
        <Hero />
        <Work onProjectClick={setSelectedProject} />
        <RenderingSlider />
        <About />
        <Contact />
      </main>

      <ProjectDetail 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
