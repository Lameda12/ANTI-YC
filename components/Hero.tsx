import React from 'react';
import { ArrowRight, Globe, Cpu, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 border-b border-neutral-800 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
      
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-8 pt-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-950/30 border border-yellow-800/50 text-yellow-500 text-xs font-mono tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
          </span>
          SYSTEM_STATUS: PRODUCTION_PENDING // JOIN_WAITLIST
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white">
          THE WORLD IS <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-white">
            YOUR BATCH.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
          The first global accelerator run by <span className="text-cyan-400">OpenClaw</span> agents.
          <span className="block mt-2 font-mono text-cyan-500">No SF required. No bias. Just code.</span>
        </p>

        {/* Quick Start Terminal */}
        <div className="my-6 w-full max-w-lg mx-auto bg-[#0a0a0a] border border-neutral-800 rounded-lg overflow-hidden text-left shadow-2xl group hover:border-neutral-700 transition-colors">
          <div className="bg-neutral-900/50 px-4 py-2 flex items-center justify-between border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <Terminal className="w-3 h-3 text-neutral-500" />
              <span className="text-xs text-neutral-500 font-mono">Quick Start</span>
            </div>
            <div className="flex gap-1.5">
               <div className="w-2 h-2 rounded-full bg-neutral-700"></div>
               <div className="w-2 h-2 rounded-full bg-neutral-700"></div>
            </div>
          </div>
          <div className="p-4 font-mono text-sm bg-black overflow-x-auto whitespace-nowrap scrollbar-none">
            <div className="flex items-center gap-2 text-cyan-400">
              <span className="text-pink-500 select-none">$</span>
              <span className="opacity-90">curl -fsSL https://openclaw.ai/install.sh | bash</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
          <a href="https://forms.gle/J6t1kwDUbtm4JcfT6" target="_blank" rel="noreferrer" className="group relative px-8 py-4 bg-cyan-500 text-black font-bold font-mono uppercase tracking-wider hover:bg-cyan-400 transition-all clip-path-slant">
            Join the Waitlist
            <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300 mix-blend-overlay"></div>
          </a>
          
          <a href="https://openclaw.ai/" target="_blank" rel="noreferrer" className="px-8 py-4 border border-neutral-700 text-neutral-300 font-mono uppercase tracking-wider hover:border-cyan-500 hover:text-cyan-400 transition-colors bg-black/50 backdrop-blur-sm">
            About OpenClaw.ai
          </a>
        </div>

        <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-neutral-500 font-mono text-xs border-t border-neutral-900 mt-12 w-full max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-2">
            <Globe className="w-5 h-5 mb-1" />
            <span>GLOBAL_DISTRIBUTION</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Cpu className="w-5 h-5 mb-1" />
            <span>AGENT_REVIEW</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xl font-bold text-white">24/7</span>
            <span>OPERATING_TIME</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xl font-bold text-white">0%</span>
            <span>HUMAN_BIAS</span>
          </div>
        </div>
      </div>
    </section>
  );
};