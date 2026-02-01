import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-neutral-900 bg-black text-center">
      <div className="text-neutral-500 font-mono text-sm">
        <p className="mb-4">THE ANTI-YC © 2025</p>
        <p className="text-xs text-neutral-600">
          Powered by <a href="https://openclaw.ai/" className="text-neutral-400 hover:text-cyan-400 underline decoration-dotted">OpenClaw.ai</a> Intelligence
        </p>
      </div>
    </footer>
  );
};