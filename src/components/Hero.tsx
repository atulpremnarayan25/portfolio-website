"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { assetPath } from "@/lib/utils";

function DotGrid({
  rows = 5,
  cols = 5,
  className = "",
}: {
  rows?: number;
  cols?: number;
  className?: string;
}) {
  return (
    <div className={`grid gap-3 ${className}`} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }} aria-hidden="true">
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div
          key={i}
          className="w-1 h-1 rounded-full bg-[#ABB2BF]"
        />
      ))}
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const wordContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Hero() {
  const { hero, quotes } = portfolio;
  const prefersReducedMotion = useReducedMotion();

  // Split heading into tokens for word-by-word animation
  // The heading is like "Atul is a " and then we append highlights
  const headingWords = hero.heading.trim().split(/\s+/);

  return (
    <section id="home" className="pt-24 pb-16 px-4 scroll-mt-20">
      <div className="max-w-[1024px] mx-auto">
        {/* Main hero content */}
        <motion.div
          className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16"
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {/* Left: Heading + CTA */}
          <div className="flex-1 max-w-xl">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-[2.5rem] font-semibold text-white leading-tight mb-6"
              variants={wordContainer}
              initial={prefersReducedMotion ? false : "hidden"}
              animate="visible"
            >
              {headingWords.map((word, i) => (
                <motion.span key={i} variants={wordVariant} className="inline-block mr-[0.3em]">
                  {word}
                </motion.span>
              ))}
              <motion.span variants={wordVariant} className="inline-block text-[#C778DD] mr-[0.3em]">
                {hero.highlights[0]}
              </motion.span>
              <motion.span variants={wordVariant} className="inline-block text-white mr-[0.3em]">
                and
              </motion.span>
              <motion.span variants={wordVariant} className="inline-block text-[#C778DD]">
                {hero.highlights[1]}
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-[#ABB2BF] text-base mb-8 leading-relaxed"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              {hero.tagline}
            </motion.p>
            <motion.a
              href="#contacts"
              className="inline-block border border-[#C778DD] text-white px-4 py-2 text-sm hover:bg-[#C778DD]/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C778DD]"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
            >
              Contact me!!
            </motion.a>
          </div>

          {/* Right: Decorative image area + dot grid */}
          <motion.div
            className="relative flex-shrink-0 hidden lg:block"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="w-[280px] h-[320px] relative">
              {/* Profile image */}
              <div className="w-full h-full bg-[#282C33] border border-[#ABB2BF] overflow-hidden relative">
                <Image
                  src={assetPath("/images/profile.png")}
                  alt={portfolio.name}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Dot grid with gentle float */}
              <motion.div
                className="absolute -bottom-6 -right-6"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { y: [0, -6, 0] }
                }
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }
              >
                <DotGrid rows={5} cols={5} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Quote block */}
        {quotes[0] && (
          <motion.div
            className="max-w-xl mb-12"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="border border-[#ABB2BF] p-4 relative">
              <span className="text-[#ABB2BF] text-2xl absolute -top-3 left-3 bg-[#1E1E1E] px-1" aria-hidden="true">
                &ldquo;
              </span>
              <p className="text-[#ABB2BF] text-base pl-2">
                {quotes[0].text}
              </p>
              <span className="text-[#ABB2BF] text-2xl absolute -bottom-3 right-3 bg-[#1E1E1E] px-1" aria-hidden="true">
                &rdquo;
              </span>
            </div>
            <div className="border border-[#ABB2BF] border-t-0 px-4 py-2 w-fit ml-auto">
              <p className="text-[#ABB2BF] text-sm">
                - {quotes[0].author}
              </p>
            </div>
          </motion.div>
        )}

        {/* Second decorative quote */}
        {quotes[1] && (
          <motion.div
            className="max-w-lg mx-auto"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <div className="bg-[#282C33] border border-[#ABB2BF] p-6">
              <p className="text-[#ABB2BF] text-base text-center">
                &ldquo;{quotes[1].text}&rdquo;
              </p>
              <p className="text-[#ABB2BF] text-sm text-right mt-2">
                - {quotes[1].author}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
