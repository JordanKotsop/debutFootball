"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Initial Conversation",
    description:
      "A call to understand the player, their goals, and their level. No commitment required. Just an honest assessment.",
  },
  {
    number: "02",
    title: "Evaluation & Planning",
    description:
      "We evaluate the player's current level, identify realistic opportunities, and build a personalized plan with full family involvement.",
  },
  {
    number: "03",
    title: "Representation & Action",
    description:
      "Contract negotiations, European trials, club introductions — whatever the right next step is. We keep you updated throughout.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "Our job doesn't end when the contract is signed. We plan the next chapter. Relationships that last careers, not single deals.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-white">
      <div className="h-px bg-debut-border" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-8 sm:mb-12"
        >
          <p className="font-body font-medium text-[11px] tracking-[0.14em] uppercase text-debut-accent mb-3">
            The Process
          </p>
          <h2 className="font-heading font-bold text-[26px] sm:text-3xl md:text-4xl text-debut-navy leading-[1.2]">
            How It Works
          </h2>
        </motion.div>

        <div>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col sm:flex-row items-start gap-3 sm:gap-8 md:gap-12 py-7 sm:py-10 border-b border-debut-border last:border-b-0"
            >
              <span className="font-heading font-bold text-5xl sm:text-7xl md:text-[80px] text-debut-navy/[0.08] leading-none shrink-0 sm:w-16 md:w-20">
                {step.number}
              </span>
              <div className="flex-1">
                <h3 className="font-body font-semibold text-lg sm:text-xl text-debut-navy mb-1.5 sm:mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-sm sm:text-base text-debut-text-muted leading-[1.7] max-w-[640px]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
