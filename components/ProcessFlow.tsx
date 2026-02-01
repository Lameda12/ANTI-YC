import React from 'react';
import { Bot, Network, Globe2 } from 'lucide-react';

const steps = [
  {
    title: "Agent Consultation",
    desc: "Interact with our specialized agent swarm to refine your value proposition.",
    icon: Bot,
    color: "text-cyan-400",
    borderColor: "border-cyan-500/30"
  },
  {
    title: "On-Chain Application",
    desc: "Submit your refined proposal via OpenClaw. Immutable, transparent, and fast.",
    icon: Network,
    color: "text-purple-400",
    borderColor: "border-purple-500/30"
  },
  {
    title: "Global Distribution",
    desc: "Instant access to capital, mentorship, and a global network of founders.",
    icon: Globe2,
    color: "text-green-400",
    borderColor: "border-green-500/30"
  }
];

export const ProcessFlow: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            System Architecture
          </h2>
          <p className="text-neutral-400 font-mono text-sm">
            OPTIMIZED FOR VELOCITY AND MERIT
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
               {/* Connector Line (Desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-[1px] bg-gradient-to-r from-neutral-800 to-neutral-800/0 z-0"></div>
              )}
              
              <div className={`relative z-10 h-full p-8 bg-[#111] border ${step.borderColor} rounded-xl hover:bg-[#161616] transition-all duration-300 hover:-translate-y-2`}>
                <div className={`w-16 h-16 rounded-lg bg-neutral-900 flex items-center justify-center mb-6 border border-neutral-800 group-hover:border-white/20 transition-colors`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                
                <div className="font-mono text-neutral-500 text-xs mb-2">0{index + 1}_STEP</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};