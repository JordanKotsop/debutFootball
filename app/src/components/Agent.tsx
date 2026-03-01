"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Agent() {
  return (
    <section id="agent" className="relative bg-debut-navy">
      <div className="h-1 bg-debut-gold" />

      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16 items-start">
          {/* Left Column — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden ring-2 ring-debut-gold/30 ring-offset-4 ring-offset-debut-navy">
              <Image
                src="/michael-tait.jpg"
                alt="Michael Tait, Principal Agent at Debut Football"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-debut-navy/30 to-transparent" />
            </div>
            <p className="font-body font-medium text-xs tracking-[0.08em] uppercase text-white/45 mt-3">
              Michael Tait — Principal Agent
            </p>
          </motion.div>

          {/* Right Column — Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body font-medium text-[11px] tracking-[0.14em] uppercase text-debut-gold mb-3">
              Principal Agent
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-[1.2] mb-8">
              Meet Michael Tait
            </h2>

            <div className="space-y-5">
              <p className="font-body text-base text-white/75 leading-[1.75]">
                Michael Tait is the founder and principal agent of Debut
                Football. He is a FIFA Licensed Football Agent with an LLM
                (Master&apos;s) in International Sports Law, giving him
                specialized expertise in the regulations, contracts, and
                disputes that shape professional football careers.
              </p>
              <p className="font-body text-base text-white/75 leading-[1.75]">
                Before founding Debut, Michael trained at Bichara e Motta
                Advogados, one of South America&apos;s leading sports law firms.
                There, he worked alongside legal teams handling cases for elite
                footballers and Olympic athletes in disputes before FIFA and the
                Court of Arbitration for Sport (CAS). That experience gave him a
                firsthand understanding of how contracts are structured,
                challenged, and enforced at the highest levels of the game.
              </p>
              <p className="font-body text-base text-white/75 leading-[1.75]">
                Michael lectures in International Football Business at UCFB, one
                of the world&apos;s premier institutions for football business
                education. He doesn&apos;t just understand how the industry
                works. He teaches it.
              </p>
              <p className="font-body text-base text-white/75 leading-[1.75]">
                His focus is clear: identify talented players in North America,
                represent them with integrity, and connect them to professional
                opportunities in MLS, CPL, USL, and across Europe. He has
                personally introduced multiple North American players to
                European clubs and negotiated first professional contracts for
                young athletes at a critical point in their careers.
              </p>
              <p className="font-body text-base text-white/75 leading-[1.75]">
                Michael holds active relationships with clubs, scouts, and
                sporting directors across North America, Europe, and South
                America.
              </p>
            </div>

            {/* Credentials Bar */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-4 my-8 border-t border-b border-debut-gold/20 bg-debut-gold/[0.08]">
              <span className="font-body font-medium text-xs tracking-[0.10em] uppercase text-debut-gold">
                FIFA Licensed Football Agent
              </span>
              <span className="text-debut-gold/30">|</span>
              <span className="font-body font-medium text-xs tracking-[0.10em] uppercase text-debut-gold">
                LLM, International Sports Law
              </span>
              <span className="text-debut-gold/30 hidden sm:inline">|</span>
              <span className="font-body font-medium text-xs tracking-[0.10em] uppercase text-debut-gold">
                UCFB Lecturer
              </span>
            </div>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/michaeltaitllm/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white font-medium text-sm transition-colors duration-150 hover:underline"
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
