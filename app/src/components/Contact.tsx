"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-debut-off-white">
      <div className="h-1 bg-debut-gold" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <div className="max-w-[720px] mx-auto text-center">
          {/* Gold Rule */}
          <div className="w-16 h-px bg-debut-gold mx-auto mb-6 sm:mb-8" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body font-medium text-[11px] tracking-[0.14em] uppercase text-debut-gold mb-3">
              Get Started
            </p>
            <h2 className="font-heading font-bold text-[28px] sm:text-[32px] md:text-5xl text-debut-navy leading-[1.1] mb-4 sm:mb-5">
              Take the First Step
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-body text-base sm:text-lg text-debut-text-muted leading-[1.7] max-w-[580px] mx-auto mb-8 sm:mb-10"
          >
            Whether you&apos;re a player exploring your options, a parent
            figuring out the right path for your child, or a coach who knows
            someone with real talent, we&apos;re here to help you think it
            through.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <a
              href="mailto:contact@debutfootball.com"
              className="inline-block bg-debut-gold text-debut-navy font-semibold text-sm sm:text-base tracking-wide uppercase px-8 sm:px-12 py-3.5 sm:py-4 rounded-md hover:bg-debut-gold-light hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 min-h-[44px]"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Secondary Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 sm:mt-8 space-y-2"
          >
            <p className="font-body text-sm text-debut-text-muted">
              Or reach out directly:
            </p>
            <p className="font-body font-medium text-sm text-debut-navy break-all sm:break-normal">
              contact@debutfootball.com
            </p>
            <p className="font-body text-sm text-debut-text-muted">
              Michael Tait &nbsp;|&nbsp;{" "}
              <a
                href="https://www.linkedin.com/in/michaeltaitllm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-debut-gold hover:text-debut-gold-light transition-colors duration-150 min-h-[44px] inline-flex items-center"
              >
                LinkedIn &rarr;
              </a>
            </p>
          </motion.div>

          {/* Legal Line */}
          <p className="font-body text-[11px] sm:text-xs text-black/35 mt-6 sm:mt-8">
            Debut Football is a FIFA-compliant football agency. All
            representation agreements follow FIFA Football Agent Regulations.
          </p>
        </div>
      </div>
    </section>
  );
}
