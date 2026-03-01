"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-debut-border h-[72px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0">
          <Image
            src="/logo.jpg"
            alt="Debut Football"
            width={120}
            height={40}
            className="h-8 sm:h-10 w-auto"
            priority
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-debut-text-muted font-medium text-sm tracking-wide hover:text-debut-navy transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:contact@debutfootball.com"
            className="border border-debut-navy text-debut-navy text-sm font-semibold px-5 py-2 rounded-md hover:bg-debut-navy hover:text-white transition-all duration-200"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-3 -mr-1 min-w-[44px] min-h-[44px] items-center justify-center"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-debut-navy transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-debut-navy transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-debut-navy transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-[72px] bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-debut-navy text-2xl font-heading font-bold hover:text-debut-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:contact@debutfootball.com"
              onClick={() => setMobileOpen(false)}
              className="bg-debut-navy text-white text-sm font-semibold px-8 py-3.5 rounded-md tracking-wide uppercase"
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
