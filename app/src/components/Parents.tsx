"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const trustPoints = [
  {
    bold: "Licensed and qualified.",
    body: "FIFA Licensed Agent. LLM in International Sports Law. Hands-on experience in disputes at FIFA and CAS level.",
  },
  {
    bold: "Honest assessments.",
    body: "If your child isn't ready for Europe, we'll say so. If college is the better path, we'll recommend it.",
  },
  {
    bold: "Education protected.",
    body: "We factor academics into every plan — NCAA eligibility rules, overseas programs that maintain progress.",
  },
  {
    bold: "Transparent fees.",
    body: "Commission-based, paid when we deliver. No upfront fees. No charges for trials or showcases.",
  },
  {
    bold: "Direct access to Michael.",
    body: "Not a junior associate. The person negotiating your child's contract is the person you can call.",
  },
  {
    bold: "Present in person.",
    body: "We know the clubs, cities, and people because we're there — in North America and in Europe.",
  },
];

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0 mt-0.5"
    >
      <circle cx="10" cy="10" r="10" fill="#1B6B5A" fillOpacity="0.1" />
      <path
        d="M6 10.5L8.5 13L14 7.5"
        stroke="#1B6B5A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Parents() {
  return (
    <section id="parents" className="relative bg-debut-off-white">
      <div className="h-px bg-debut-border" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <p className="font-body font-medium text-[11px] tracking-[0.14em] uppercase text-debut-accent mb-3">
            For Families
          </p>
          <h2 className="font-heading font-bold text-[24px] sm:text-3xl md:text-4xl text-debut-navy leading-[1.2]">
            A Message for Parents
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            and Families
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-body text-base sm:text-lg text-debut-text-muted leading-[1.7] text-center max-w-[560px] mx-auto mb-6"
        >
          Your child&apos;s future is on the line. Here&apos;s what working with
          us looks like.
        </motion.p>

        {/* Section Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/forparents.png"
              alt="Young player with family on the football pitch"
              width={900}
              height={500}
              sizes="(max-width: 768px) 100vw, 750px"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-0 max-w-5xl mx-auto">
          {trustPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3 sm:gap-4 py-5 sm:py-6 border-b border-debut-border"
            >
              <CheckIcon />
              <div>
                <p className="font-body font-semibold text-[15px] sm:text-base text-debut-navy mb-1">
                  {point.bold}
                </p>
                <p className="font-body text-sm sm:text-[15px] text-debut-text-muted leading-[1.65]">
                  {point.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
