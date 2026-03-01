"use client";

import { motion } from "framer-motion";

const trustPoints = [
  {
    bold: "We're licensed and qualified.",
    body: "Michael is a FIFA Licensed Football Agent with an LLM in International Sports Law and hands-on experience in football disputes at FIFA and CAS level. Debut operates within FIFA's regulatory framework. Your child is represented by someone who understands the rules of this industry inside and out.",
  },
  {
    bold: "We won't make promises we can't keep.",
    body: "If your child isn't ready for Europe, we'll say so. If college is the better path right now, we'll recommend it. Our job is to give you the truth, even when it's not what you want to hear.",
  },
  {
    bold: "We protect education.",
    body: "For players under 18 and those considering the college route, we factor education into every plan. We understand NCAA eligibility rules and work with overseas programs that maintain academic progress.",
  },
  {
    bold: "We're transparent about money.",
    body: "We earn commissions when we successfully negotiate a deal for your child. We don't charge upfront fees. We don't ask families to pay for trials or showcases. Our incentives are aligned with yours: we succeed when your child succeeds.",
  },
  {
    bold: "We're accessible.",
    body: "You will have Michael's direct contact. Not a junior associate. Not an assistant. The person negotiating your child's contract is the person you can call when you have a question at 10pm.",
  },
  {
    bold: "We show up in person.",
    body: "We don't make introductions from a distance. We know the clubs, the cities, and the people because we're there, in North America and in Europe.",
  },
];

function GoldCheck() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0 mt-0.5"
    >
      <circle cx="10" cy="10" r="10" fill="#C4993F" fillOpacity="0.15" />
      <path
        d="M6 10.5L8.5 13L14 7.5"
        stroke="#C4993F"
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
      <div className="h-1 bg-debut-gold" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <p className="font-body font-medium text-[11px] tracking-[0.14em] uppercase text-debut-gold mb-3">
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
          className="font-body text-base sm:text-lg text-debut-text-body leading-[1.7] text-center max-w-[620px] mx-auto mb-6"
        >
          We know this decision carries weight. Your child&apos;s future is on
          the line, and the football agent industry doesn&apos;t make it easy to
          know who to trust.
        </motion.p>

        {/* Gold Rule */}
        <div className="w-10 h-0.5 bg-debut-gold mx-auto mb-8 sm:mb-12" />

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
              <GoldCheck />
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
