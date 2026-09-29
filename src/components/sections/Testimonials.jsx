import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import TiltCard from '../ui/TiltCard';
import { testimonials } from '../../data/portfolio';
import { fadeUp, stagger, viewport } from '../../utils/motion';

function initials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_50%_100%_at_50%_0%,rgba(249,115,22,0.10),transparent_70%)]"
      />

      <div className="container-tight relative">
        <SectionHeading
          center
          eyebrow="Trusted Feedback"
          title={[
            { t: 'What founders and ' },
            { t: 'CTOs say', accent: true },
            { t: ' after we ' },
            { t: 'ship', italic: true },
            '.',
          ]}
          subtitle="Trusted by founders, product managers and engineering leaders across three continents."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid gap-5 md:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.div key={t.name} variants={fadeUp(0, 28)}>
              <TiltCard max={5} glareColor="rgba(249,115,22,0.12)">
                <figure
                  className="ring-conic relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/70 p-7 shadow-lift transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift-lg"
                  style={{
                    backgroundImage:
                      i % 2 === 0
                        ? 'linear-gradient(150deg,#FFF4EC 0%,#FDEDF6 60%,#F2ECFF 100%)'
                        : 'linear-gradient(150deg,#F3EEFF 0%,#FFEFF6 55%,#FFF3E8 100%)',
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="ital pointer-events-none absolute -right-2 -top-6 text-[6rem] leading-none text-ink-950/[0.06]"
                  >
                    &rdquo;
                  </span>

                  <div className="flex gap-1 text-brand-orange" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, s) => (
                      <FiStar key={s} className="h-4 w-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>

                  <blockquote className="relative mt-5 flex-1 text-[0.94rem] leading-relaxed text-ink-950/70">
                    {t.text}
                  </blockquote>

                  <figcaption className="mt-7 flex items-center gap-3 border-t border-ink-950/[0.08] pt-5">
                    <div className="display flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple to-brand-orange text-xs text-white">
                      {initials(t.name)}
                    </div>
                    <div>
                      <div className="display text-[0.9rem] text-ink-950">{t.name}</div>
                      <div className="text-xs text-ink-950/50">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
