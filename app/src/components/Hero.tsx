"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-debut-navy pt-[72px] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[calc(100vh-72px)] items-center gap-8 lg:gap-8">
          {/* Left Column — Content */}
          <div className="flex flex-col justify-center py-10 sm:py-16 lg:py-0">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="font-body font-medium text-[10px] sm:text-xs tracking-[0.12em] uppercase text-debut-gold mb-3 sm:mb-4"
            >
              FIFA Licensed Football Agency
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-bold text-[28px] sm:text-4xl md:text-5xl lg:text-[56px] text-white leading-[1.1] mb-4 sm:mb-6"
            >
              From First Contract
              <br />
              to First Team.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-base sm:text-xl text-white/75 leading-relaxed mb-4 sm:mb-5"
            >
              Where North American Talent Meets Global Opportunity.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-body text-sm sm:text-base text-white/65 leading-[1.7] max-w-[520px] mb-6 sm:mb-8"
            >
              Debut Football represents emerging players from North America on
              the path to professional careers at home and overseas. FIFA
              Licensed. Internationally connected. Built for families who want
              more than promises.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-body font-medium text-[10px] sm:text-xs tracking-[0.08em] text-white/45 mb-8 sm:mb-10"
            >
              Toronto &nbsp;·&nbsp; Miami &nbsp;·&nbsp; Barcelona &nbsp;·&nbsp;
              London
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <a
                href="mailto:contact@debutfootball.com"
                className="inline-block bg-debut-gold text-debut-navy font-semibold text-sm tracking-wide uppercase px-6 sm:px-8 py-3 sm:py-3.5 rounded-md hover:bg-debut-gold-light active:scale-[0.98] transition-all duration-200"
              >
                Contact Us
              </a>
              <p className="text-white/40 text-xs sm:text-sm italic font-light mt-3 sm:mt-4">
                No fees to inquire. No pressure to sign. Just an honest
                conversation about your future.
              </p>
            </motion.div>
          </div>

          {/* Right Column — Stadium Photo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-lg overflow-hidden border-2 border-debut-gold/30">
              <Image
                src="/stadium-hero.jpg"
                alt="Football stadium at pitch level"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-debut-navy/20" />
            </div>
          </motion.div>

          {/* Mobile/Tablet Stadium Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:hidden -mx-4 sm:-mx-6"
          >
            <div className="relative aspect-[16/10] sm:aspect-video overflow-hidden">
              <Image
                src="/stadium-hero.jpg"
                alt="Football stadium at pitch level"
                width={800}
                height={450}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-debut-navy/20" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator — hidden on very small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.svg
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C4993F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
