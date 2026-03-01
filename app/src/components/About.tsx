"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-debut-off-white">
      {/* Gold rule at top */}
      <div className="h-1 bg-debut-gold" />

      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16">
          {/* Left Column — Label + Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body font-medium text-[11px] tracking-[0.14em] uppercase text-debut-gold mb-3">
              The Approach
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-debut-text-body leading-[1.2]">
              Built Around the Player.
              <br />
              Not the Deal.
            </h2>
          </motion.div>

          {/* Right Column — Body Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="font-body text-lg text-debut-text-body leading-[1.7]">
              Most football agents focus on transactions. We focus on the person
              behind the player.
            </p>
            <p className="font-body text-lg text-debut-text-body leading-[1.7]">
              Debut Football was founded to give North American players something
              that&apos;s hard to find in this industry: an agent who shows up before
              the big contract, during the difficult decisions, and long after
              the ink dries.
            </p>
            <p className="font-body text-lg text-debut-text-body leading-[1.7]">
              We work with young players and their families from the earliest
              stages of their professional journey. Whether that means a first
              professional contract in MLS, CPL, or USL, or building a pathway
              to a trial in Europe, we treat every career as a long-term project,
              not a short-term payday.
            </p>
            <p className="font-body text-lg text-debut-text-body leading-[1.7]">
              Our clients are players with genuine ambition and the talent to
              back it up. We don&apos;t promise the Premier League to every
              16-year-old. We give honest assessments, build realistic plans, and
              open the right doors at the right time.
            </p>

            <div className="pt-4">
              <a
                href="mailto:contact@debutfootball.com"
                className="inline-block bg-debut-gold text-debut-navy font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-md hover:bg-debut-gold-light active:scale-[0.98] transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
