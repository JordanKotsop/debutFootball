"use client";

import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-debut-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Row 1 — Three Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Left — Logo + Cities */}
          <div>
            <Image
              src="/logo.jpg"
              alt="Debut Football"
              width={100}
              height={33}
              className="h-7 sm:h-8 w-auto mb-3"
            />
            <p className="font-body text-[11px] sm:text-xs tracking-[0.06em] text-white/35 mt-2">
              Toronto | Miami | Barcelona | London
            </p>
          </div>

          {/* Center — Nav Links */}
          <div className="flex flex-row sm:flex-col flex-wrap gap-x-6 gap-y-2 sm:gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/50 hover:text-white text-sm font-medium transition-colors duration-150 min-h-[44px] sm:min-h-0 inline-flex items-center"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right — Social + FIFA Badge */}
          <div className="flex flex-col items-start sm:col-span-2 md:col-span-1 md:items-end gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-5 sm:gap-4">
              <a
                href="https://www.linkedin.com/in/michaeltaitllm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors duration-150 p-2 -m-2"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-white transition-colors duration-150 p-2 -m-2"
                aria-label="X (Twitter)"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-white transition-colors duration-150 p-2 -m-2"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>

            {/* FIFA Badge */}
            <span className="inline-block bg-white/5 border border-white/15 px-3 py-1.5 rounded font-body font-medium text-[10px] tracking-[0.10em] uppercase text-white/50 mt-2">
              FIFA Licensed Football Agency
            </span>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-white/[0.08] my-8 sm:my-10" />

        {/* Row 2 — Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs text-white/30 font-body">
          <p>&copy; 2026 Debut Football. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/50 transition-colors duration-150 min-h-[44px] sm:min-h-0 inline-flex items-center">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white/50 transition-colors duration-150 min-h-[44px] sm:min-h-0 inline-flex items-center">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
