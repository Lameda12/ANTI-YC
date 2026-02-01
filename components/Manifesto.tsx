import React from 'react';
import { Building2, Globe, Users, Cpu, Briefcase, Zap } from 'lucide-react';

export const Manifesto: React.FC = () => {
  return (
    <section className="py-24 bg-carbon border-t border-neutral-900">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">THE MANIFESTO</h2>
          <p className="text-neutral-400 max-w-2xl">
            The traditional accelerator model is a relic of the physical world. 
            We are building for the cloud-native, agent-native future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-neutral-800 border border-neutral-800 rounded-2xl overflow-hidden">
          
          {/* Old Way */}
          <div className="bg-[#0f0f0f] p-8 md:p-12 space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 text-neutral-700 opacity-20 font-black text-6xl select-none group-hover:text-red-900/20 transition-colors">OLD</div>
            <h3 className="text-neutral-500 font-mono text-sm tracking-widest uppercase mb-8">Legacy System (YC, etc.)</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <Building2 className="w-6 h-6 text-neutral-600 shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-1">San Francisco Centric</h4>
                  <p className="text-neutral-500 text-sm">Requires relocation. High cost of living. Visa issues.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="w-6 h-6 text-neutral-600 shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-1">Human Bias</h4>
                  <p className="text-neutral-500 text-sm">Selections based on "warm intros" and pattern matching.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Briefcase className="w-6 h-6 text-neutral-600 shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-1">Physical Batches</h4>
                  <p className="text-neutral-500 text-sm">Limited by cohort size and physical space.</p>
                </div>
              </div>
            </div>
          </div>

          {/* New Way */}
          <div className="bg-[#141414] p-8 md:p-12 space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 text-cyan-900/20 font-black text-6xl select-none group-hover:text-cyan-500/20 transition-colors">NEW</div>
            <div className="absolute inset-0 bg-cyan-500/5 mix-blend-overlay pointer-events-none"></div>
            <h3 className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-8">The Agent Way</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Globe className="w-6 h-6 text-cyan-400 shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-1">Cloud Native</h4>
                  <p className="text-neutral-400 text-sm">Build from anywhere. No visas. Pure merit.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Cpu className="w-6 h-6 text-cyan-400 shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-1">Algorithmic Selection</h4>
                  <p className="text-neutral-400 text-sm">Data-driven decisions via OpenClaw agents.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Zap className="w-6 h-6 text-cyan-400 shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-1">Continuous Flow</h4>
                  <p className="text-neutral-400 text-sm">Rolling applications. Real-time funding.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};