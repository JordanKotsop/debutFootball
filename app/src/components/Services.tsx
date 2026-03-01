"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    tag: "For players ready to go professional.",
    title: "Player Representation",
    body: "We negotiate contracts with clubs in North America and overseas, protecting your interests across salary, bonuses, image rights, and release clauses. Commission-based — no upfront costs.",
  },
  {
    number: "02",
    tag: "For players building toward the next level.",
    title: "Career Planning & Development",
    body: "We map out development pathways — whether that means a North American academy, European trials, or the college route. Honest assessments, realistic plans.",
  },
  {
    number: "03",
    tag: "For players ready to test themselves overseas.",
    title: "International Placement & Trials",
    body: "Trial opportunities and club introductions across England, Spain, Germany, Portugal, and Scandinavia. We handle visas, housing, travel, and on-the-ground support.",
  },
  {
    number: "04",
    tag: "For families who want to understand what they're signing.",
    title: "Contract Review & Sports Law",
    body: "Every contract reviewed with specialized sports law expertise. Plain-language explanations, player-first negotiation. For complex cases, we work alongside qualified sports lawyers.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-debut-off-white">
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
            What We Do
          </p>
          <h2 className="font-heading font-bold text-[26px] sm:text-3xl md:text-4xl text-debut-navy leading-[1.2]">
            Four Ways We Work For You.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white border border-debut-border p-5 sm:p-8 rounded-lg hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="absolute top-3 right-4 sm:top-4 sm:right-6 font-body font-bold text-4xl sm:text-5xl text-debut-navy/[0.06] leading-none select-none">
                {service.number}
              </span>

              <p className="font-body font-semibold text-[12px] sm:text-[13px] tracking-[0.04em] text-debut-accent mb-2 pr-10 sm:pr-12">
                {service.tag}
              </p>
              <h3 className="font-heading font-bold text-lg sm:text-[22px] text-debut-navy mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm sm:text-[15px] text-debut-text-muted leading-[1.7]">
                {service.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
