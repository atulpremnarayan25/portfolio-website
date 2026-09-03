"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const headerFromLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const lineGrow = {
  hidden: { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.5, delay: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
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

function SectionHeader({
  title,
  viewAllHref,
}: {
  title: string;
  viewAllHref?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="flex items-center justify-between mb-12"
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex items-center gap-4 flex-1">
        <motion.h2
          className="text-2xl font-semibold whitespace-nowrap"
          variants={headerFromLeft}
        >
          <span className="text-[#C778DD]">#</span>
          <span className="text-white">{title}</span>
        </motion.h2>
        <motion.div
          className="h-px bg-[#C778DD] flex-1 max-w-[200px]"
          aria-hidden="true"
          variants={lineGrow}
        />
      </div>
      {viewAllHref && (
        <motion.a
          href={viewAllHref}
          className="text-[#ABB2BF] text-sm hover:text-white transition-colors whitespace-nowrap ml-4"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.3 } } }}
        >
          View all ~~&gt;
        </motion.a>
      )}
    </motion.div>
  );
}

{/* Individual Project Terminal Previews */}

function MedicalErpPreview() {
  return (
    <div className="w-full h-full bg-[#1E1E1E] relative overflow-hidden select-none">
      <Image
        src="/images/medical-erp.png"
        alt="Medical ERP System Preview"
        fill
        className="object-cover object-center"
      />
    </div>
  );
}

function CryptoTrackerPreview() {
  return (
    <div className="w-full h-full bg-[#1E1E1E] relative overflow-hidden select-none">
      <Image
        src="/images/crypto-price-tracker.png"
        alt="Crypto Price Tracker Preview"
        fill
        className="object-cover object-center"
      />
    </div>
  );
}

function ProofOfLearningPreview() {
  return (
    <div className="w-full h-full bg-[#1E1E1E] relative overflow-hidden select-none">
      <Image
        src="/images/proof-of-learning.png"
        alt="ProofOfLearning Preview"
        fill
        className="object-cover object-center"
      />
    </div>
  );
}

function PokepediaPreview() {
  return (
    <div className="w-full h-full bg-[#1E1E1E] relative overflow-hidden select-none">
      <Image
        src="/images/pokepedia.png"
        alt="Poképedia Preview"
        fill
        className="object-cover object-center"
      />
    </div>
  );
}

function EyeBlinkPreview() {
  return (
    <div className="w-full h-full bg-[#1E1E1E] relative overflow-hidden select-none">
      <Image
        src="/images/eye-blink-hci.png"
        alt="Eye-Blink HCI Preview"
        fill
        className="object-cover object-center"
      />
    </div>
  );
}

function renderProjectPreview(id: string) {
  switch (id) {
    case "01":
      return <MedicalErpPreview />;
    case "02":
      return <ProofOfLearningPreview />;
    case "03":
      return <PokepediaPreview />;
    case "04":
      return <CryptoTrackerPreview />;
    case "05":
      return <EyeBlinkPreview />;
    default:
      return <MedicalErpPreview />;
  }
}

function ProjectCard({
  project,
}: {
  project: (typeof portfolio.projects)[number];
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="border border-[#ABB2BF] flex flex-col bg-[#282C33]/40 overflow-hidden"
      variants={cardVariants}
      transition={{ duration: 0.4 }}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
    >
      {/* Code Editor Window Preview Header & Canvas */}
      <div className="h-[210px] bg-[#1E1E1E] border-b border-[#ABB2BF] relative">
        {renderProjectPreview(project.id)}
      </div>

      {/* Tech tags */}
      <div className="px-4 py-2.5 border-b border-[#ABB2BF] bg-[#282C33]">
        <p className="text-[#ABB2BF] text-xs font-mono">
          {project.technologies.join(" ")}
        </p>
      </div>

      {/* Title + description + links */}
      <div className="px-4 py-4 flex flex-col flex-1 bg-[#1E1E1E]/80">
        <h3 className="text-white font-semibold text-xl mb-2 font-mono">
          {project.title}
        </h3>
        <p className="text-[#ABB2BF] text-sm mb-5 flex-1 leading-relaxed font-mono">
          {project.description}
        </p>
        <div className="flex gap-3 pt-2">
          {project.demo && (
            <motion.a
              href={project.demo}
              className="border border-[#C778DD] text-white px-4 py-1.5 text-sm font-mono hover:bg-[#C778DD]/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C778DD]"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
            >
              Live &lt;~~&gt;
            </motion.a>
          )}
          {project.github && (
            <motion.a
              href={project.github}
              className="border border-[#ABB2BF] text-[#ABB2BF] px-4 py-1.5 text-sm font-mono hover:text-white hover:border-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C778DD]"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
            >
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="py-16 px-4 scroll-mt-20">
      <div className="max-w-[1024px] mx-auto">
        <SectionHeader title="projects" viewAllHref="#" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {portfolio.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
