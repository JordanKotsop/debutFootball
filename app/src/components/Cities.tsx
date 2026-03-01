"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cities = [
  {
    name: "Toronto",
    description: "Home base. MLS, CPL, and the Canadian youth pipeline.",
  },
  {
    name: "Miami",
    description: "Where North American and Latin American football intersect.",
  },
  {
    name: "Barcelona",
    description: "La Liga access and a gateway across Southern Europe.",
  },
  {
    name: "London",
    description: "Premier League, EFL, and the broader UK network.",
  },
];

export default function Cities() {
  return (
    <section className="relative bg-white">
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
            Global Reach
          </p>
          <h2 className="font-heading font-bold text-[26px] sm:text-3xl md:text-4xl text-debut-navy leading-[1.2]">
            Where We Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0">
          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`lg:px-8 first:lg:pl-0 last:lg:pr-0 ${
                i < cities.length - 1
                  ? "lg:border-r lg:border-debut-border"
                  : ""
              }`}
            >
              <h3 className="font-heading font-semibold text-xl sm:text-2xl text-debut-navy mb-1 sm:mb-1.5">
                {city.name}
              </h3>
              <p className="font-body text-sm text-debut-text-muted leading-[1.6]">
                {city.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-sm sm:text-base text-debut-text-muted/50 mt-8 sm:mt-12"
        >
          Being where the opportunities are.
        </motion.p>

        {/* Section Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 sm:mt-14"
        >
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/globalreach.png"
              alt="International football connections across four cities"
              width={1200}
              height={500}
              sizes="(max-width: 768px) 100vw, 1100px"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
