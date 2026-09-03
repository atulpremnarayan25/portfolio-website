"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { assetPath } from "@/lib/utils";

const headerFromLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const lineGrow = {
  hidden: { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.5, delay: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function DotGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-5 gap-3 ${className}`} aria-hidden="true">
      {Array.from({ length: 25 }).map((_, i) => (
        <div key={i} className="w-1 h-1 rounded-full bg-[#ABB2BF]" />
      ))}
    </div>
  );
}

export function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about-me" className="py-16 px-4 scroll-mt-20">
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
            <span className="text-white">about-me</span>
          </motion.h2>
          <motion.div
            className="h-px bg-[#C778DD] flex-1 max-w-[200px]"
            aria-hidden="true"
            variants={lineGrow}
          />
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-12 items-start"
          variants={staggerContainer}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left: Text */}
          <div className="flex-1">
            <motion.p
              className="text-[#ABB2BF] text-base leading-relaxed mb-6"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              {portfolio.about.heading}
            </motion.p>
            <motion.p
              className="text-[#ABB2BF] text-base leading-relaxed mb-8"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              {portfolio.about.bio}
            </motion.p>
            <motion.a
              href="#"
              className="inline-block border border-[#C778DD] text-white px-4 py-2 text-sm hover:bg-[#C778DD]/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C778DD]"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
            >
              Read more -&gt;
            </motion.a>
          </div>

          {/* Right: Image area with decorative elements */}
          <motion.div
            className="relative hidden lg:block shrink-0"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="w-[260px] h-[300px] relative">
              {/* Main image */}
              <div className="w-full h-full bg-[#282C33] border border-[#ABB2BF] overflow-hidden relative">
                <Image
                  src={assetPath("/images/photo.jpg")}
                  alt={portfolio.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              {/* Dot grid */}
              <div className="absolute -top-6 -left-6">
                <DotGrid />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
