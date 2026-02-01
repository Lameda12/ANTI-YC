import React from 'react';
import { Hero } from './components/Hero';
import { OpenClawSection } from './components/OpenClawSection';
import { ProcessFlow } from './components/ProcessFlow';
import { AgentFeed } from './components/AgentFeed';
import { Manifesto } from './components/Manifesto';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="bg-carbon min-h-screen text-neutral-200 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* Navigation (Simple Overlay) */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="font-mono font-bold text-lg tracking-tight text-white flex items-center gap-2">
          <div className="w-4 h-4 bg-cyan-500 rounded-sm"></div>
          ANTI-YC
        </div>
        <a 
          href="https://forms.gle/J6t1kwDUbtm4JcfT6" 
          target="_blank" 
          rel="noreferrer"
          className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-xs font-mono rounded text-white transition-colors border border-neutral-700"
        >
          JOIN WAITLIST
        </a>
      </nav>

      <Hero />
      <AgentFeed />
      <OpenClawSection />
      <ProcessFlow />
      <Manifesto />
      
      {/* Sticky CTA for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-black/90 border-t border-neutral-800 z-50 backdrop-blur">
        <a href="https://forms.gle/J6t1kwDUbtm4JcfT6" target="_blank" rel="noreferrer" className="block w-full py-3 bg-cyan-600 text-center font-bold text-black uppercase tracking-wider rounded">
          Join Waitlist
        </a>
      </div>

      <Footer />
    </main>
  );
}

export default App;