"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { RefreshCw } from "lucide-react";

export function Terminal() {
  const [terminalStep, setTerminalStep] = useState(0);
  const shouldReduceMotion = useReducedMotion() === true;
  
  useEffect(() => {
    const commands = [
      { cmd: "whoami", wait: 500, out: `atul@developer` },
      { cmd: "focus", wait: 800, out: `full-stack-development` },
      { cmd: "status", wait: 600, out: `building things...` },
      { cmd: "contact.sh", wait: 1000, out: `github: ${portfolio.social.github}\nemail:  ${portfolio.social.email}` },
    ];
    let timeout: NodeJS.Timeout;
    if (terminalStep < commands.length * 2) {
      if (terminalStep % 2 === 0) {
        // typing command
        timeout = setTimeout(() => {
          setTerminalStep((s) => s + 1);
        }, shouldReduceMotion ? 50 : commands[terminalStep / 2].wait);
      } else {
        // showing output
        timeout = setTimeout(() => {
          setTerminalStep((s) => s + 1);
        }, shouldReduceMotion ? 50 : 400);
      }
    }
    return () => clearTimeout(timeout);
  }, [terminalStep, shouldReduceMotion]);

  const commands = [
    { cmd: "whoami", wait: 500, out: `atul@developer` },
    { cmd: "focus", wait: 800, out: `full-stack-development` },
    { cmd: "status", wait: 600, out: `building things...` },
    { cmd: "contact.sh", wait: 1000, out: `github: ${portfolio.social.github}\nemail:  ${portfolio.social.email}` },
  ];

  const resetTerminal = () => {
    setTerminalStep(0);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 md:px-12 flex justify-center">
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="w-full max-w-3xl rounded-lg bg-[#070b12] border border-white/10 overflow-hidden shadow-2xl shadow-blue-500/5 group"
        >
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-[#05070b]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="text-[10px] font-mono text-white/50 tracking-wider">atul@environment ~</div>
            <button 
              onClick={resetTerminal}
              className="text-white/50 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
              aria-label="Restart terminal animation"
            >
              <RefreshCw size={14} aria-hidden="true" />
            </button>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm leading-relaxed min-h-[300px]">
            {commands.map((c, i) => {
              const isActiveCmd = terminalStep >= i * 2;
              const isOutputReady = terminalStep >= i * 2 + 1;
              if (!isActiveCmd) return null;

              return (
                <div key={i} className="mb-4">
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-2">$</span>
                    <span className="text-white/90">
                      {isActiveCmd ? c.cmd : ""}
                      {terminalStep === i * 2 && <span className="w-2 h-4 bg-white/70 ml-1 inline-block animate-pulse align-middle" />}
                    </span>
                  </div>
                  {isOutputReady && (
                    <div className="text-white/60 mt-1 whitespace-pre-wrap ml-1 pl-4 border-l border-white/10">
                      {c.out}
                    </div>
                  )}
                </div>
              );
            })}
            
            {terminalStep >= commands.length * 2 && (
              <div className="flex items-start">
                <span className="text-blue-400 mr-2">$</span>
                <span className="w-2 h-4 bg-white/70 ml-1 inline-block animate-pulse align-middle" />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}