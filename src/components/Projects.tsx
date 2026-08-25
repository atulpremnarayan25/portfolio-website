"use client";

import { motion, useReducedMotion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const AbstractDiagram = ({ diagram, shouldReduceMotion }: { diagram: string[]; shouldReduceMotion: boolean }) => {
  return (
    <div className="w-full h-full min-h-[200px] md:min-h-[300px] flex flex-col items-center justify-center p-4 sm:p-8 bg-[#0a0f18] rounded-xl border border-white/5 relative overflow-hidden group-hover:border-white/10 transition-colors">
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="flex flex-col items-center justify-center space-y-3 z-10 w-full max-w-[240px]">
        {diagram.map((step, i) => (
          <div key={i} className="flex flex-col items-center w-full">
            <motion.div
              initial={false}
              className="w-full px-4 py-2 bg-[#05070b] border border-white/10 rounded text-center text-xs font-mono text-white/70 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors"
            >
              {step}
            </motion.div>
            {i !== diagram.length - 1 && (
              <div className="h-4 w-px bg-white/10 my-1 relative overflow-hidden">
                {!shouldReduceMotion && (
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-[3px] bg-blue-500"
                    animate={{ y: [0, 16] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear", delay: i * 0.2 }}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export function Projects() {
  const shouldReduceMotion = useReducedMotion() === true;

  return (
    <section id="work" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="mb-20"
        >
          <h2 className="text-sm font-mono tracking-widest text-[#3b82f6] uppercase mb-4">
            Selected Work
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
            Proof of Ability
          </h3>
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-24">
          {portfolio.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.1 }}
              className={cn(
                "group grid lg:grid-cols-12 gap-8 items-center",
                idx % 2 === 1 && "lg:grid-flow-col-dense"
              )}
            >
              <div className={cn(
                "lg:col-span-5 flex flex-col items-start",
                idx % 2 === 1 && "lg:col-start-8"
              )}>
                <span className="text-xs font-mono tracking-wider text-white/30 mb-4 block">
                  {project.id}
                </span>
                <h4 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all">
                  {project.title}
                </h4>
                <p className="text-white/60 leading-relaxed mb-8">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full text-xs font-medium text-white/70">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-6">
                  {project.demo && project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                      View Project <ExternalLink size={16} aria-hidden="true" className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                    <GithubIcon size={16} aria-hidden="true" /> Source
                  </a>
                </div>
              </div>

              <div className={cn(
                "lg:col-span-7",
                idx % 2 === 1 && "lg:col-start-1"
              )}>
                {project.diagram ? (
                  <AbstractDiagram diagram={project.diagram} shouldReduceMotion={shouldReduceMotion} />
                ) : (
                  <div className="w-full aspect-[4/3] md:aspect-[16/9] flex items-center justify-center bg-[#0a0f18] rounded-xl border border-white/5 group-hover:border-white/10 transition-colors relative overflow-hidden">
                     <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                     <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
                     <span className="text-white/30 font-mono tracking-widest text-sm uppercase relative z-10 text-center px-4">
                       [ SYSTEM ARCHITECTURE VISUALIZATION ]
                     </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}