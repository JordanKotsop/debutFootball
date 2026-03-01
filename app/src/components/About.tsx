"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative bg-debut-off-white">
      <div className="h-px bg-debut-border" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 sm:gap-12 lg:gap-16">
          {/* Left Column — Label + Headline + Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body font-medium text-[11px] tracking-[0.14em] uppercase text-debut-accent mb-3">
              The Approach
            </p>
            <h2 className="font-heading font-bold text-[26px] sm:text-3xl md:text-4xl text-debut-navy leading-[1.2] mb-8">
              Built Around the Player.
              <br />
              Not the Deal.
            </h2>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/aboutsection.png"
                alt="Football training session on the pitch"
                width={600}
                height={400}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* Right Column — Body Copy (condensed) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5 sm:space-y-6"
          >
            <p className="font-body text-base sm:text-lg text-debut-text-body leading-[1.7]">
              Most football agents focus on transactions. We focus on the person
              behind the player.
            </p>
            <p className="font-body text-base sm:text-lg text-debut-text-body leading-[1.7]">
              Debut Football was founded to give North American players an agent
              who shows up before the big contract, during the difficult
              decisions, and long after the ink dries.
            </p>
            <p className="font-body text-base sm:text-lg text-debut-text-body leading-[1.7]">
              We work with young players and their families from the earliest
              stages. Whether that means a first professional contract in MLS,
              CPL, or USL, or building a pathway to Europe, every career is a
              long-term project.
            </p>

            <div className="pt-2 sm:pt-4">
              <a
                href="mailto:contact@debutfootball.com"
                className="inline-block bg-debut-navy text-white font-semibold text-sm tracking-wide uppercase px-6 sm:px-8 py-3 sm:py-3.5 rounded-md hover:bg-debut-navy-mid active:scale-[0.98] transition-all duration-200"
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
