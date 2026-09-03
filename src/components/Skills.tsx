"use client";

import { motion, useReducedMotion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const skillCategories = [
  {
    title: "Frontend",
    items: portfolio.skills.frontend.map((s) => s.name),
  },
  {
    title: "Backend",
    items: portfolio.skills.backend.map((s) => s.name),
  },
  {
    title: "Tools",
    items: portfolio.skills.tools.map((s) => s.name),
  },
  {
    title: "Hardware",
    items: portfolio.skills.hardware.map((s) => s.name),
  },
];

const headerFromLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const lineGrow = {
  hidden: { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.5, delay: 0.2 } },
};

const boxVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function DotGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-5 gap-2 ${className}`} aria-hidden="true">
      {Array.from({ length: 15 }).map((_, i) => (
        <div key={i} className="w-1 h-1 rounded-full bg-[#ABB2BF]" />
      ))}
    </div>
  );
}

export function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills" className="py-16 px-4 scroll-mt-20">
      <div className="max-w-[1024px] mx-auto">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2
            className="text-2xl font-semibold whitespace-nowrap"
            variants={headerFromLeft}
          >
            <span className="text-[#C778DD]">#</span>
            <span className="text-white">skills</span>
          </motion.h2>
          <motion.div
            className="h-px bg-[#C778DD] flex-1 max-w-[200px]"
            aria-hidden="true"
            variants={lineGrow}
          />
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-16"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Left: decorative elements */}
          <motion.div
            className="hidden lg:flex flex-col items-center justify-center gap-8 relative w-[200px] shrink-0"
            variants={boxVariants}
            transition={{ duration: 0.5 }}
          >
            <DotGrid className="absolute top-0 left-0" />
            <div
              className="w-[100px] h-[100px] border border-[#ABB2BF]"
              aria-hidden="true"
            />
            <DotGrid className="absolute bottom-0 right-0" />
            <div
              className="w-[60px] h-[60px] border border-[#ABB2BF] absolute bottom-12 left-8"
              aria-hidden="true"
            />
          </motion.div>

          {/* Right: Skill boxes */}
          <motion.div
            className="flex-1 flex flex-wrap gap-4"
            variants={staggerContainer}
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                className="border border-[#ABB2BF] min-w-[150px] flex-1 basis-[calc(50%-0.5rem)] lg:basis-auto"
                variants={boxVariants}
                transition={{ duration: 0.4 }}
              >
                <div className="border-b border-[#ABB2BF] px-3 py-2">
                  <h3 className="text-white font-semibold text-sm">
                    {category.title}
                  </h3>
                </div>
                <div className="px-3 py-3">
                  {category.items.map((item) => (
                    <p key={item} className="text-[#ABB2BF] text-sm leading-6">
                      {item}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
