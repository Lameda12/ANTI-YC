import React from 'react';

interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  height?: string;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({ title, children, className = '', height = 'h-64' }) => {
  return (
    <div className={`rounded-lg border border-neutral-800 bg-carbon overflow-hidden flex flex-col shadow-2xl ${className}`}>
      {/* Terminal Header */}
      <div className="bg-neutral-900 px-4 py-2 border-b border-neutral-800 flex items-center justify-between select-none">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
          {title}
        </div>
        <div className="w-8" /> {/* Spacer for balance */}
      </div>
      
      {/* Terminal Body */}
      <div className={`p-4 font-mono text-sm overflow-y-auto ${height} scrollbar-thin`}>
        {children}
      </div>
    </div>
  );
};