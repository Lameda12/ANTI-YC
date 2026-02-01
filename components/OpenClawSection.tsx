import React from 'react';
import { Terminal, FileCode, Send, Github } from 'lucide-react';

export const OpenClawSection: React.FC = () => {
  return (
    <section className="py-24 bg-carbon border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-sm tracking-widest border-b border-cyan-900/50 pb-1">
              <Terminal className="w-4 h-4" />
              CORE_ENGINE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Powered by <a href="https://openclaw.ai/" className="text-cyan-400 underline decoration-dotted hover:decoration-solid">OpenClaw.ai</a>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              We leverage the world's most advanced open-source agent framework. 
              Draft, refine, and submit your application entirely through a decentralized infrastructure.
            </p>
            
            <ul className="space-y-4 pt-4">
              {[
                "Open-source transparency on selection algorithms.",
                "Automated due diligence via GitHub & on-chain analysis.",
                "Self-hosted agent swarms for privacy."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                  <span className="text-neutral-300 font-mono text-sm">{item}</span>
                </li>
              ))}
            </ul>

             <div className="flex flex-wrap gap-4 mt-6">
               <a href="https://openclaw.ai/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 border border-cyan-400/30 px-4 py-2 rounded hover:bg-cyan-900/10 transition-all font-mono text-sm">
                View OpenClaw Docs <FileCode className="w-3 h-3" />
              </a>
               <a href="https://github.com/openclaw" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-neutral-400 border border-neutral-700 px-4 py-2 rounded hover:text-white hover:border-white transition-all font-mono text-sm">
                GitHub <Github className="w-3 h-3" />
              </a>
             </div>
          </div>

          <div className="relative">
             {/* Decorative Elements */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-20"></div>
            
            <div className="relative bg-[#0c0c0c] border border-neutral-800 rounded-lg p-6 font-mono text-sm shadow-2xl">
              <div className="flex gap-2 mb-4 border-b border-neutral-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
                <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
              </div>
              <div className="space-y-3">
                <div className="text-neutral-500">// OpenClaw Integration Module</div>
                <div className="text-cyan-400">
                  <span className="text-purple-400">import</span> {'{ Agent }'} <span className="text-purple-400">from</span> <span className="text-green-400">'@openclaw/core'</span>;
                </div>
                <div className="text-neutral-300">
                  <span className="text-purple-400">const</span> accelerator = <span className="text-purple-400">new</span> Agent({'{'}
                </div>
                <div className="pl-4 text-neutral-300">
                  role: <span className="text-green-400">"VC_Associate"</span>,
                </div>
                <div className="pl-4 text-neutral-300">
                  model: <span className="text-green-400">"llama-3-70b"</span>,
                </div>
                <div className="pl-4 text-neutral-300">
                  tools: [<span className="text-green-400">"github_scanner"</span>, <span className="text-green-400">"market_analysis"</span>]
                </div>
                <div className="text-neutral-300">{'}'});</div>
                <br />
                <div className="text-neutral-500">// Live Analysis</div>
                <div className="text-neutral-300">
                  <span className="text-cyan-400">{'>'}</span> Scanning repo... <span className="text-green-500">98% Clean Code</span>
                </div>
                <div className="text-neutral-300 animate-pulse">
                   <span className="text-cyan-400">{'>'}</span> Generating term sheet...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};