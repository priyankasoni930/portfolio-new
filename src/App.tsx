import React from 'react';
import { FloatingIcons } from './components/FloatingIcons';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { BottomDock } from './components/BottomDock';
export function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] font-sans text-gray-900 dark:text-white relative overflow-hidden selection:bg-blue-200 selection:text-blue-900 dark:selection:bg-blue-800 dark:selection:text-blue-100">
      {/* Background gradient blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 dark:bg-blue-500/5 blur-[100px] pointer-events-none z-[2]"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-100/50 dark:bg-purple-500/5 blur-[100px] pointer-events-none z-[2]"></div>

      <FloatingIcons />

      <main className="max-w-4xl mx-auto px-8 md:px-16 relative z-10 pb-32">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />

        <footer className="py-12 text-center text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Priyanka. All rights reserved.</p>
        </footer>
      </main>

      <BottomDock />
    </div>);

}