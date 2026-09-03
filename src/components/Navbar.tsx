"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const navItems = [
  { label: "home", href: "#home" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "about-me", href: "#about-me" },
  { label: "contacts", href: "#contacts" },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#C778DD] rounded" aria-label="Home">
      {/* Geometric cross/plus shape */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="8" y="0" width="8" height="8" fill="#FFFFFF" />
        <rect x="0" y="8" width="8" height="8" fill="#C778DD" />
        <rect x="8" y="8" width="8" height="8" fill="#FFFFFF" />
        <rect x="16" y="8" width="8" height="8" fill="#C778DD" />
        <rect x="8" y="16" width="8" height="8" fill="#FFFFFF" />
      </svg>
      <span className="text-white font-semibold text-base">
        {portfolio.shortName}
      </span>
    </a>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.label);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#282C33] h-16"
      aria-label="Main navigation"
    >
      <div className="max-w-[1024px] mx-auto h-full flex items-center justify-between px-4">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-[#C778DD] rounded px-1 ${
                activeSection === item.label
                  ? "text-white"
                  : "text-[#ABB2BF]"
              }`}
            >
              <span className="text-[#C778DD]">#</span>
              {item.label}
            </a>
          ))}
          <span className="text-[#ABB2BF] text-sm ml-2">EN</span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus:ring-2 focus:ring-[#C778DD] rounded"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-[#D9D9D9] transition-transform ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#D9D9D9] transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#D9D9D9] transition-transform ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile overlay with AnimatePresence */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-[#282C33] border-t border-[#ABB2BF]/20 px-4 py-6 flex flex-col gap-4 overflow-hidden"
            initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C778DD] rounded ${
                  activeSection === item.label
                    ? "text-white"
                    : "text-[#ABB2BF]"
                }`}
                initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
              >
                <span className="text-[#C778DD]">#</span>
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
