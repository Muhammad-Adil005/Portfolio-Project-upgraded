import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import SkillIcon from '../ui/SkillIcon';
import { skillGroups } from '../../data/portfolio';
import { fadeUp, stagger, viewport } from '../../utils/motion';

export default function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden bg-white">
      <div className="bg-dots-light absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />

      <div className="container-tight relative">
        <SectionHeading
          eyebrow="Technical Skills"
          title={[
            { t: 'The toolbox behind ' },
            { t: 'every release', accent: true },
            { t: ' I put my name on.', muted: true },
          ]}
          subtitle="Battle-tested technologies I reach for daily to ship reliable, scalable mobile experiences."
        />

        <motion.div
          variants={stagger(0.13)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid gap-5 md:grid-cols-2"
        >
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              variants={fadeUp(0, 28)}
              className="ring-conic card-light relative overflow-hidden p-7 hover:-translate-y-1 hover:shadow-lift-lg"
            >
              <div className="flex items-center gap-3">
                <span className="display text-xs text-brand-orange">
                  {String(gi + 1).padStart(2, '0')}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-brand-orange/40 to-transparent" />
                <h3 className="display text-[0.72rem] uppercase tracking-[0.18em] text-slate-400">
                  {group.title}
                </h3>
              </div>

              <motion.ul
                variants={stagger(0.028)}
                className="mt-6 flex flex-wrap gap-2"
              >
                {group.skills.map((skill) => (
                  <motion.li key={skill} variants={fadeUp(0, 10)}>
                    <span className="chip-light hover:-translate-y-0.5 hover:border-brand-purple/45 hover:text-ink-950 hover:shadow-[0_8px_22px_-10px_rgba(168,85,247,0.6)]">
                      <SkillIcon name={skill} className="h-4 w-4" />
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
