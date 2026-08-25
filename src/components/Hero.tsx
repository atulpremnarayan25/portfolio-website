"use client";

import { motion, useReducedMotion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

const SystemDiagram = ({ shouldReduceMotion }: { shouldReduceMotion: boolean }) => {
  const nodes = ["USER", "FRONTEND", "API", "BACKEND", "DATABASE"];
  
  return (
    <div className="hidden lg:flex flex-col items-center justify-center space-y-4 opacity-70">
      {nodes.map((node, i) => (
        <div key={node} className="flex flex-col items-center">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 1 + i * 0.2, duration: shouldReduceMotion ? 0 : 0.8 }}
            className="px-4 py-2 border border-white/10 rounded-md bg-white/[0.02] text-xs font-mono tracking-widest text-[#3b82f6]"
          >
            {node}
          </motion.div>
          {i !== nodes.length - 1 && (
            <motion.div
              initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: 24, opacity: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 1.2 + i * 0.2, duration: shouldReduceMotion ? 0 : 0.4 }}
              className="w-[1px] bg-gradient-to-b from-[#3b82f6]/50 to-transparent my-1 relative"
            >
              {!shouldReduceMotion && (
                <motion.div
                  animate={{ y: [0, 24] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                  className="absolute top-0 left-[50%] -translate-x-[50%] w-[3px] h-[6px] bg-[#3b82f6] rounded-full blur-[1px]"
                />
              )}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion() === true;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-3 gap-12 items-center relative z-10">
        
        <div className="lg:col-span-2 flex flex-col items-start">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02]"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-white/70 uppercase">
              {portfolio.availability}
            </span>
          </motion.div>

          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-6"
          >
            I BUILD <br />
            <span className="text-gradient">SOFTWARE</span> <br />
            THAT MATTERS.
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.5 }}
            className="hidden md:block text-lg md:text-xl text-white/60 max-w-xl font-light leading-relaxed mb-10"
          >
            {portfolio.name} — {portfolio.role}. <br />
            I build thoughtful software, from interfaces and APIs to complete systems.
          </motion.p>
          
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.5 }}
            className="md:hidden text-base sm:text-lg text-white/60 max-w-xl font-light leading-relaxed mb-10"
          >
            {portfolio.name} — {portfolio.role}.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a 
              href="#work" 
              className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium transition-all hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a 
              href={portfolio.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <GithubIcon size={18} aria-hidden="true" />
              GitHub
            </a>
          </motion.div>
        </div>

        <div className="hidden lg:flex justify-end">
          <SystemDiagram shouldReduceMotion={shouldReduceMotion} />
        </div>

      </div>
    </section>
  );
}