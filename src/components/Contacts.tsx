"use client";

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

const fadeUp = {
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

function ContactCard({
  method,
}: {
  method: { label: string; value: string; icon: string };
}) {
  return (
    <motion.div
      className="border border-[#ABB2BF] px-4 py-3 flex items-center gap-3"
      variants={fadeUp}
      transition={{ duration: 0.4 }}
    >
      {method.icon === "mail" ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ABB2BF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="#ABB2BF"
          aria-hidden="true"
        >
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
        </svg>
      )}
      <div>
        <p className="text-[#ABB2BF] text-sm">{method.value}</p>
      </div>
    </motion.div>
  );
}

export function Contacts() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contacts" className="py-16 px-4 scroll-mt-20">
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
            <span className="text-white">contacts</span>
          </motion.h2>
          <motion.div
            className="h-px bg-[#C778DD] flex-1 max-w-[200px]"
            aria-hidden="true"
            variants={lineGrow}
          />
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row gap-12"
          variants={staggerContainer}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left: description */}
          <motion.div
            className="flex-1"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#ABB2BF] text-base leading-relaxed">
              {portfolio.contacts.description}
            </p>
          </motion.div>

          {/* Right: contact methods */}
          <motion.div
            className="flex flex-col gap-3"
            variants={staggerContainer}
          >
            {portfolio.contacts.methods.map((method) => (
              <ContactCard key={method.label} method={method} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.footer
      className="border-t border-[#ABB2BF]/30 mt-8"
      role="contentinfo"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1024px] mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          {/* Left: Logo + tagline */}
          <div className="flex items-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <rect x="8" y="0" width="8" height="8" fill="#FFFFFF" />
              <rect x="0" y="8" width="8" height="8" fill="#C778DD" />
              <rect x="8" y="8" width="8" height="8" fill="#FFFFFF" />
              <rect x="16" y="8" width="8" height="8" fill="#C778DD" />
              <rect x="8" y="16" width="8" height="8" fill="#FFFFFF" />
            </svg>
            <div>
              <span className="text-white font-semibold text-sm">
                {portfolio.shortName}
              </span>
              <p className="text-[#ABB2BF] text-xs">
                Web designer and full-stack developer
              </p>
            </div>
          </div>

          {/* Right: Social icons */}
          <div className="flex gap-4">
            <a
              href={portfolio.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#ABB2BF] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C778DD] rounded"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={portfolio.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#ABB2BF] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C778DD] rounded"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={`mailto:${portfolio.social.email}`}
              aria-label="Email"
              className="text-[#ABB2BF] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C778DD] rounded"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>

        <p className="text-[#ABB2BF] text-sm text-center">
          &copy; {new Date().getFullYear()} Made with ❤ by {portfolio.shortName}
        </p>
      </div>
    </motion.footer>
  );
}
