"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    tag: "For players ready to go professional.",
    title: "Player Representation",
    body: "We represent players in contract negotiations with clubs in North America and overseas. Every deal we negotiate is grounded in deep knowledge of international sports law and structured to protect the player's interests across salary, bonuses, image rights, and release clauses. We earn our fee through commission when a deal gets done. No upfront costs. No hidden charges. If we don't deliver, you don't pay.",
  },
  {
    number: "02",
    tag: "For players building toward the next level.",
    title: "Career Planning & Development",
    body: "Not every player is ready for a professional contract today. For younger athletes and their families, we help map out the right development pathway. That might mean staying in a North American academy, exploring European trial opportunities, or evaluating the college route while keeping professional options open. We assess each player honestly and build a plan that fits their level, timeline, and goals.",
  },
  {
    number: "03",
    tag: "For players ready to test themselves overseas.",
    title: "International Placement & Trials",
    body: "With offices in Barcelona and London and contacts across multiple European leagues, we facilitate trial opportunities and introductions to clubs in England, Spain, Germany, Portugal, Scandinavia, and beyond. We don't just arrange the trial. We handle the logistics: visas, housing, travel, and on-the-ground support so the player can focus entirely on performing.",
  },
  {
    number: "04",
    tag: "For players and families who want to understand what they're signing.",
    title: "Contract Review & Sports Law Expertise",
    body: "Michael's specialized training in international sports law means every contract is reviewed with the rigor and detail that protects players. We explain the terms in plain language, flag anything that doesn't serve the player, and negotiate from a position of knowledge. For complex situations, we work alongside qualified sports lawyers to make sure every angle is covered.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-debut-off-white">
      <div className="h-1 bg-debut-gold" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-8 sm:mb-12"
        >
          <p className="font-body font-medium text-[11px] tracking-[0.14em] uppercase text-debut-gold mb-3">
            What We Do
          </p>
          <h2 className="font-heading font-bold text-[26px] sm:text-3xl md:text-4xl text-debut-navy leading-[1.2]">
            Four Ways We Work For You.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white border-l-4 border-debut-gold p-5 sm:p-8 rounded-r-lg shadow-[0_1px_3px_rgba(14,17,84,0.08)] hover:shadow-[0_4px_16px_rgba(14,17,84,0.14)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="absolute top-3 right-4 sm:top-4 sm:right-6 font-body font-bold text-4xl sm:text-5xl text-debut-gold/[0.12] leading-none select-none">
                {service.number}
              </span>

              <p className="font-body font-semibold text-[12px] sm:text-[13px] tracking-[0.04em] text-debut-gold mb-2 pr-10 sm:pr-12">
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
