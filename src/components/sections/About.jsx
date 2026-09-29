import { motion } from 'framer-motion';
import { FiAward, FiCheck, FiLayers, FiPackage } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import CountUp from '../ui/CountUp';
import TiltCard from '../ui/TiltCard';
import { about, personal } from '../../data/portfolio';
import { fadeUp, stagger, viewport } from '../../utils/motion';

const diffIcons = [FiAward, FiLayers, FiPackage];

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.10),transparent_68%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-10 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.10),transparent_68%)] blur-2xl"
      />

      <div className="container-tight relative">
        <SectionHeading
          eyebrow="About Me"
          title={[
            { t: 'Engineering apps that ', muted: false },
            { t: 'ship, scale', accent: true },
            ' & ',
            { t: 'delight', italic: true },
            { t: ' — not just screens that compile.', muted: true },
          ]}
          subtitle="A senior engineer's mindset applied to every line of code, every release, every user."
        />

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Narrative */}
          <motion.div variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={viewport}>
            {about.summary.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp()}
                className="mb-5 text-[1.02rem] leading-relaxed text-slate-600"
              >
                {para}
              </motion.p>
            ))}

            <motion.ul variants={stagger(0.08)} className="mt-8 space-y-3.5">
              {about.highlights.map((h) => (
                <motion.li key={h} variants={fadeUp(0, 20)} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple to-brand-orange">
                    <FiCheck className="h-3 w-3 text-white" aria-hidden="true" />
                  </span>
                  <span className="text-[0.95rem] leading-relaxed text-slate-600">{h}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Signature card */}
            <Reveal delay={0.15} className="mt-10">
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lift">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  width="56"
                  height="56"
                  loading="lazy"
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-brand-fuchsia/30"
                />
                <div>
                  <div className="display text-[0.98rem] text-ink-950">{personal.name}</div>
                  <div className="text-xs text-slate-500">
                    {personal.role} · {personal.location}
                  </div>
                </div>
              </div>
            </Reveal>
          </motion.div>

          {/* Bento */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-col gap-5"
          >
            {/* metric tiles */}
            <div className="grid grid-cols-3 gap-3.5">
              {about.metrics.map((m) => (
                <motion.div
                  key={m.label}
                  variants={fadeUp(0, 22)}
                  className="card-soft group p-4 text-center hover:-translate-y-1 hover:shadow-lift-lg sm:p-5"
                >
                  <div className="display text-xl text-ink-950 sm:text-2xl">
                    <CountUp value={m.value} />
                  </div>
                  <div className="mt-1 text-[0.66rem] font-bold uppercase tracking-wider text-ink-950/55">
                    {m.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* differentiators */}
            {about.differentiators.map((d, i) => {
              const Icon = diffIcons[i % diffIcons.length];
              return (
                <motion.div key={d.title} variants={fadeUp(0, 24)}>
                  <TiltCard max={5} glareColor="rgba(168,85,247,0.14)">
                    <div className="ring-conic card-light relative overflow-hidden p-6 hover:-translate-y-1 hover:shadow-lift-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-orange text-white shadow-[0_10px_26px_-10px_rgba(168,85,247,0.9)]">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="display text-[1.02rem] text-ink-950">{d.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{d.text}</p>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
