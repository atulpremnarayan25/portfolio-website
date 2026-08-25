"use client";

import { motion, useReducedMotion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import {
  Triangle,
  Atom,
  Code2,
  Palette,
  Smartphone,
  Server,
  TerminalSquare,
  Database,
  Network,
  GitCommit,
  Box,
  FileTerminal,
  Cpu,
  Eye,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Triangle,
  Atom,
  Code2,
  Palette,
  Smartphone,
  Server,
  TerminalSquare,
  Database,
  Network,
  GitCommit,
  Box,
  FileTerminal,
  Cpu,
  Eye,
};

const categories = [
  { key: "frontend", title: "Frontend & Mobile", items: portfolio.skills.frontend },
  { key: "backend", title: "Backend & Data", items: portfolio.skills.backend },
  { key: "tools", title: "DevOps & Tools", items: portfolio.skills.tools },
  { key: "hardware", title: "Hardware & Vision", items: portfolio.skills.hardware },
] as const;

export function Stack() {
  const shouldReduceMotion = useReducedMotion() === true;

  return (
    <section id="stack" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono tracking-widest text-[#3b82f6] uppercase mb-4">
            Technical Stack
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
            Tools & Technologies
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.key}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : catIdx * 0.1,
              }}
              className="p-6 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm relative overflow-hidden group hover:border-white/10 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <h4 className="text-xs font-mono tracking-widest text-white/40 uppercase mb-6">
                {category.title}
              </h4>
              <div className="flex flex-col gap-4 relative z-10">
                {category.items.map((skill) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 group-hover:border-white/10 transition-all hover:bg-white/[0.04]"
                    >
                      {Icon && (
                        <div className="p-2 rounded bg-blue-500/10 text-blue-400">
                          <Icon size={18} aria-hidden="true" />
                        </div>
                      )}
                      <span className="text-sm font-medium text-white/80">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
