"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono tracking-widest text-[#3b82f6] uppercase mb-4">
            About The Developer
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl leading-tight">
            {portfolio.about.heading}
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg leading-relaxed space-y-6 font-light"
          >
            <p>{portfolio.about.bio}</p>
          </motion.div>

          {/* Technical Identity Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm relative overflow-hidden group"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="space-y-8 relative z-10">
              <div>
                <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase mb-2">Role</div>
                <div className="text-xl font-medium">{portfolio.role}</div>
              </div>
              
              <div>
                <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase mb-2">Education</div>
                <div className="text-lg text-white/80">{portfolio.about.education}</div>
              </div>
              
              <div>
                <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase mb-2">Focus</div>
                <div className="text-lg text-white/80">{portfolio.about.focus}</div>
              </div>
              
              <div>
                <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase mb-2">Current Status</div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  {portfolio.status}
                </div>
              </div>
            </div>
            
            {/* Decorative Grid on Card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-grid-pattern opacity-10 pointer-events-none" style={{ maskImage: 'radial-gradient(circle at top right, black, transparent)' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}