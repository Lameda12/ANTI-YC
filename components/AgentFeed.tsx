import React, { useState, useEffect, useRef } from 'react';
import { TerminalWindow } from './TerminalWindow';
import { LOCATIONS, PROJECTS, STATUSES, AGENT_IDS } from '../constants';
import { FeedItem } from '../types';

export const AgentFeed: React.FC = () => {
  const [logs, setLogs] = useState<FeedItem[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initial Seed
  useEffect(() => {
    const initialLogs: FeedItem[] = Array.from({ length: 8 }).map((_, i) => ({
      id: `init-${i}`,
      timestamp: new Date(Date.now() - i * 5000).toISOString(),
      location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
      status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
      project: PROJECTS[Math.floor(Math.random() * PROJECTS.length)],
      agentId: AGENT_IDS[Math.floor(Math.random() * AGENT_IDS.length)]
    })).reverse();
    setLogs(initialLogs);
  }, []);

  // Live Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      const newLog: FeedItem = {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toISOString(),
        location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
        project: PROJECTS[Math.floor(Math.random() * PROJECTS.length)],
        agentId: AGENT_IDS[Math.floor(Math.random() * AGENT_IDS.length)]
      };

      setLogs(prev => {
        const updated = [...prev, newLog];
        if (updated.length > 30) updated.shift();
        return updated;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="w-full max-w-4xl mx-auto my-12 px-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-cyan-400 font-mono text-sm tracking-widest uppercase flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Live OpenClaw Swarm Activity
        </h3>
        <span className="text-neutral-600 font-mono text-xs">NET_STATUS: ACTIVE</span>
      </div>
      
      <TerminalWindow title="root@anti-yc-node:~" height="h-96">
        <div ref={scrollRef} className="h-full overflow-y-auto font-mono text-xs md:text-sm text-neutral-300 space-y-1">
          <div className="text-neutral-500 mb-4 select-none">
            Linux anti-yc-core 6.5.0-14-generic #14-Ubuntu SMP PREEMPT_DYNAMIC x86_64<br/>
            Welcome to OpenClaw.ai OS v1.0.2<br/>
            System load: 0.02, 0.04, 0.00<br/>
            ----------------------------------------------------------------<br/>
            Initializing Swarm Listener... OK<br/>
          </div>
          
          {logs.map((log) => (
            <div key={log.id} className="break-all hover:bg-white/5 pl-1 border-l-2 border-transparent hover:border-cyan-500/50">
              <span className="text-green-500 mr-2">➜</span>
              <span className="text-neutral-500">[{log.timestamp.split('T')[1].slice(0,8)}]</span>
              <span className="text-cyan-600 mx-2">user@{log.agentId}:</span>
              <span className="text-yellow-100">processed_app </span>
              <span className="text-purple-400">--project="{log.project}" </span>
              <span className="text-neutral-400">--origin="{log.location}" </span>
              <span className={`${
                log.status === 'ACCEPTED' ? 'text-green-400' : 
                log.status === 'REJECTED' ? 'text-red-400' : 'text-yellow-400'
              }`}>
                {'>>'} {log.status}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-2 mt-2 text-cyan-400">
            <span className="text-green-500">➜</span>
            <span className="animate-cursor">_</span>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
};