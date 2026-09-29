import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import { certifications } from '../../data/portfolio';
import { fadeUp, stagger, viewport } from '../../utils/motion';

export default function Certifications() {
  return (
    <section id="certifications" className="section relative overflow-hidden bg-ink-950">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(ellipse_55%_100%_at_30%_0%,rgba(168,85,247,0.2),transparent_70%)]"
      />
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" />

      <div className="container-tight relative">
        <SectionHeading
          dark
          eyebrow="Certifications"
          title={[
            { t: 'Continuous learning, ' },
            { t: 'certified', accent: true },
            { t: ' — and put to work.', muted: true },
          ]}
          subtitle="I invest in staying sharp. These courses and certifications back the day-to-day expertise."
        />

        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid gap-3.5 sm:grid-cols-2"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={fadeUp(0, 22)}
              className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 backdrop-blur-xl transition-all duration-400 hover:-translate-y-1 hover:border-brand-fuchsia/35 hover:bg-white/[0.075]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange/25 to-brand-fuchsia/25 text-brand-amber transition-transform duration-500 group-hover:scale-110">
                <FiAward className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h3 className="display truncate text-[0.9rem] text-white sm:text-[0.95rem]">
                  {cert.title}
                </h3>
                <p className="mt-0.5 text-xs text-white/40">
                  {cert.issuer}
                  {cert.year && ` · ${cert.year}`}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
