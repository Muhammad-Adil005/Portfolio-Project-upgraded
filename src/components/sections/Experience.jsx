import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FiBriefcase, FiMapPin } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import { experience, personal } from '../../data/portfolio';
import { fadeUp, stagger, viewport } from '../../utils/motion';

export default function Experience() {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 0.75', 'end 0.55'],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });

  return (
    <section id="experience" className="section relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="absolute -right-40 top-1/4 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.10),transparent_68%)] blur-2xl"
      />

      <div className="container-tight relative">
        <SectionHeading
          eyebrow="Experience"
          title={[
            { t: `${personal.yearsOfExperience} years of ` },
            { t: 'consistent growth', accent: true },
            { t: ' — from first production app to ' },
            { t: 'leading Flutter teams', italic: true },
            '.',
          ]}
        />

        <div ref={trackRef} className="relative mx-auto max-w-3xl">
          {/* progress rail */}
          <div className="absolute left-[0.72rem] top-2 h-full w-px bg-slate-200 sm:left-4" aria-hidden="true">
            <motion.div
              style={{ scaleY: lineScale }}
              className="h-full w-full origin-top bg-gradient-to-b from-brand-purple via-brand-fuchsia to-brand-orange"
            />
          </div>

          <motion.ol
            variants={stagger(0.16)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="space-y-8 pl-10 sm:pl-14"
          >
            {experience.map((job, i) => (
              <motion.li key={job.role + job.company} variants={fadeUp(0, 30)} className="relative">
                <span
                  className={`absolute -left-[2.5rem] top-3 flex h-7 w-7 items-center justify-center rounded-full ring-4 ring-white sm:-left-[3.05rem] sm:h-8 sm:w-8 ${
                    i === 0
                      ? 'bg-gradient-to-br from-brand-purple to-brand-orange text-white shadow-[0_8px_22px_-8px_rgba(168,85,247,0.9)]'
                      : 'border border-slate-200 bg-white text-slate-400'
                  }`}
                  aria-hidden="true"
                >
                  <FiBriefcase className="h-3.5 w-3.5" />
                </span>

                <div className="ring-conic card-light relative overflow-hidden p-6 hover:-translate-y-1 hover:shadow-lift-lg sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="display text-[1.1rem] text-ink-950">{job.role}</h3>
                    {job.period && (
                      <span className="rounded-full border border-brand-orange/25 bg-brand-orange/[0.07] px-3 py-1 text-[0.7rem] font-bold text-brand-orange">
                        {job.period}
                      </span>
                    )}
                  </div>

                  <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
                    <span className="font-bold text-ink-950/75">{job.company}</span>
                    <span className="inline-flex items-center gap-1">
                      <FiMapPin className="h-3 w-3" aria-hidden="true" /> {job.location}
                    </span>
                  </p>

                  <ul className="mt-4 space-y-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-[0.9rem] leading-relaxed text-slate-600"
                      >
                        <span
                          className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-brand-fuchsia"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <li key={t} className="chip-light !py-1 !text-[0.7rem]">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
