import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUpRight, FiPlus } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import Magnetic from '../ui/Magnetic';
import { faqs, personal } from '../../data/portfolio';
import { fadeUp, stagger, viewport } from '../../utils/motion';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative bg-white py-16 sm:py-24">
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(155deg,#1B0F33_0%,#12092A_45%,#0A0617_100%)] px-5 py-14 sm:rounded-[2.75rem] sm:px-10 sm:py-16 lg:px-14">
          <div
            aria-hidden="true"
            className="absolute -left-20 -top-24 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.35),transparent_65%)] blur-2xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-28 -right-16 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.28),transparent_65%)] blur-2xl"
          />
          <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay" />

          <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            {/* left rail */}
            <div>
              <SectionHeading
                dark
                className="mb-8"
                eyebrow="Frequently Asked"
                title={[
                  { t: 'Answers before you ' },
                  { t: 'even ask', accent: true },
                  '.',
                ]}
                subtitle="The things clients usually want to know before the first call."
              />

              <motion.div
                variants={fadeUp(0.1)}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="glass-dark rounded-2xl p-5"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    width="48"
                    height="48"
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-fuchsia/40"
                  />
                  <div>
                    <div className="display text-sm text-white">Still have a question?</div>
                    <div className="text-xs text-white/45">{personal.responseTime}</div>
                  </div>
                </div>
                <Magnetic strength={0.18} className="mt-4 w-full">
                  <a href="#contact" className="btn-gradient w-full !py-3 !text-xs">
                    Ask me directly <FiArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </Magnetic>
              </motion.div>
            </div>

            {/* accordion */}
            <motion.ul
              variants={stagger(0.07)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="flex flex-col gap-3"
            >
              {faqs.map((item, i) => {
                const isOpen = open === i;
                return (
                  <motion.li
                    key={item.q}
                    variants={fadeUp(0, 20)}
                    className={`overflow-hidden rounded-2xl border transition-colors duration-400 ${
                      isOpen
                        ? 'border-brand-fuchsia/35 bg-white/[0.075]'
                        : 'border-white/[0.09] bg-white/[0.035] hover:border-white/20'
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    >
                      <span className="display text-[0.92rem] text-white sm:text-[1rem]">
                        {item.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                          isOpen
                            ? 'bg-gradient-to-br from-brand-purple to-brand-orange text-white'
                            : 'border border-white/15 text-white/60'
                        }`}
                      >
                        <FiPlus className="h-4 w-4" aria-hidden="true" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p className="px-5 pb-5 text-[0.9rem] leading-relaxed text-white/55 sm:px-6 sm:pb-6">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
