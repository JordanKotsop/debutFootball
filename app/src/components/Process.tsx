"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Initial Conversation",
    description:
      "We start with a call. No commitment required. Tell us about the player, their goals, and where they are in their development. We'll give an honest assessment of how we might help.",
  },
  {
    number: "02",
    title: "Evaluation & Planning",
    description:
      "If there's a fit, we evaluate the player's current level, identify realistic opportunities, and build a personalized plan. For younger players, this includes family involvement at every step.",
  },
  {
    number: "03",
    title: "Representation & Action",
    description:
      "Once we agree to work together, we go to work. That could mean negotiating a contract, arranging European trials, connecting with clubs, or advising on the right next move. We keep you updated throughout.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "Our job doesn't end when the contract is signed. We support players through transitions, check in regularly, and plan the next chapter of their career. We build relationships that last entire careers, not single deals.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-debut-navy">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="font-body font-medium text-[11px] tracking-[0.14em] uppercase text-debut-gold mb-3">
            The Process
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-[1.2]">
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
              className="flex flex-col md:flex-row items-start gap-6 md:gap-12 py-10 border-b border-white/[0.06] last:border-b-0"
            >
              <span className="font-heading font-bold text-7xl md:text-[80px] text-debut-gold/[0.15] leading-none shrink-0 md:w-20">
                {step.number}
              </span>
              <div className="flex-1">
                <h3 className="font-body font-semibold text-xl text-white mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-base text-white/65 leading-[1.7] max-w-[640px]">
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
