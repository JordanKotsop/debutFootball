"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Agent() {
  return (
    <section id="agent" className="relative bg-white">
      <div className="h-px bg-debut-border" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-[4/3] sm:aspect-[3/4] max-w-sm mx-auto lg:max-w-none rounded-lg overflow-hidden ring-1 ring-debut-border">
              <Image
                src="/michael-tait.jpg"
                alt="Michael Tait, Principal Agent at Debut Football"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="font-body font-medium text-xs tracking-[0.08em] uppercase text-debut-text-muted/60 mt-3 text-center lg:text-left">
              Michael Tait — Principal Agent
            </p>
          </motion.div>

          {/* Right Column — Bio (condensed) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body font-medium text-[11px] tracking-[0.14em] uppercase text-debut-accent mb-3">
              Principal Agent
            </p>
            <h2 className="font-heading font-bold text-[26px] sm:text-3xl md:text-4xl text-debut-navy leading-[1.2] mb-6 sm:mb-8">
              Meet Michael Tait
            </h2>

            <div className="space-y-4 sm:space-y-5">
              <p className="font-body text-[15px] sm:text-base text-debut-text-muted leading-[1.75]">
                Michael is a FIFA Licensed Football Agent with an LLM
                (Master&apos;s) in International Sports Law. He founded Debut
                Football to represent North American players with integrity and
                connect them to professional opportunities at home and across
                Europe.
              </p>
              <p className="font-body text-[15px] sm:text-base text-debut-text-muted leading-[1.75]">
                He trained at Bichara e Motta Advogados, one of South
                America&apos;s leading sports law firms, working alongside legal
                teams handling disputes before FIFA and the Court of Arbitration
                for Sport (CAS). He also lectures in International Football
                Business at UCFB.
              </p>
              <p className="font-body text-[15px] sm:text-base text-debut-text-muted leading-[1.75]">
                Michael holds active relationships with clubs, scouts, and
                sporting directors across North America, Europe, and South
                America. He has personally introduced multiple North American
                players to European clubs and negotiated first professional
                contracts for young athletes.
              </p>
            </div>

            {/* Credentials Bar */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-x-6 sm:gap-y-2 py-4 px-4 sm:px-0 my-6 sm:my-8 border-t border-b border-debut-border bg-debut-off-white">
              <span className="font-body font-medium text-[11px] sm:text-xs tracking-[0.10em] uppercase text-debut-navy">
                FIFA Licensed Football Agent
              </span>
              <span className="text-debut-border hidden sm:inline">|</span>
              <span className="font-body font-medium text-[11px] sm:text-xs tracking-[0.10em] uppercase text-debut-navy">
                LLM, International Sports Law
              </span>
              <span className="text-debut-border hidden sm:inline">|</span>
              <span className="font-body font-medium text-[11px] sm:text-xs tracking-[0.10em] uppercase text-debut-navy">
                UCFB Lecturer
              </span>
            </div>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/michaeltaitllm/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-debut-accent hover:text-debut-accent-light font-medium text-sm transition-colors duration-150 hover:underline min-h-[44px]"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
