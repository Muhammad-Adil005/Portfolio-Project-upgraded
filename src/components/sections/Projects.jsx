import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight, FiCheck, FiGithub, FiLock } from 'react-icons/fi';
import Marquee from '../ui/Marquee';
import { projects } from '../../data/portfolio';
import { fadeUp, stagger, viewport, wordIn } from '../../utils/motion';

/** Miniature app screen that picks up each project's own gradient. */
function ProjectVisual({ project }) {
  return (
    <div
      className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.4rem] bg-gradient-to-br ${project.gradient} sm:aspect-auto sm:h-full sm:min-h-[17rem]`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.14) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer"
      />

      {/* phone */}
      <div className="relative w-[7.5rem] -rotate-[7deg] rounded-[1.5rem] border border-white/35 bg-black/30 p-1.5 shadow-2xl backdrop-blur-sm transition-transform duration-700 group-hover:rotate-0 group-hover:scale-[1.07] sm:w-[8.5rem]">
        <div className="space-y-2 rounded-[1.1rem] bg-black/45 p-3">
          <div className="mx-auto h-1 w-8 rounded-full bg-white/45" />
          <div className="flex h-16 items-center justify-center rounded-lg bg-white/15 text-3xl">
            <span aria-hidden="true">{project.emoji}</span>
          </div>
          <div className="h-1.5 w-14 rounded-full bg-white/55" />
          <div className="h-1.5 w-10 rounded-full bg-white/30" />
          <div className="flex gap-1.5">
            <div className="h-4 flex-1 rounded-md bg-white/25" />
            <div className="h-4 flex-1 rounded-md bg-white/20" />
          </div>
        </div>
      </div>

      <span className="absolute bottom-3 left-4 rounded-full bg-black/35 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-white/85 backdrop-blur-sm">
        {project.metric}
      </span>
    </div>
  );
}

/** One card in the sticky stack — it shrinks slightly as the next card slides over it. */
function StickyProject({ project, index, total }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.2', 'end 0.15'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.55]);

  return (
    <div
      ref={ref}
      className="sticky mb-8 sm:mb-10"
      style={{ top: `calc(6.5rem + ${index * 1.15}rem)`, zIndex: index + 1 }}
    >
      <motion.article
        style={{ scale, opacity, backgroundImage: project.tint }}
        className="group relative grid overflow-hidden rounded-[1.9rem] border border-white/70 p-5 shadow-[0_30px_80px_-30px_rgba(20,10,40,0.6)] sm:p-7 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8"
      >
        <div className="flex flex-col justify-center p-1 sm:p-3">
          <div className="flex items-center gap-3">
            <span className="display text-xs text-ink-950/40">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <span className="h-px w-10 bg-ink-950/15" />
          </div>

          <h3 className="mt-4 text-ink-950">
            <span className="display block text-[2rem] leading-[1.05] sm:text-[2.6rem]">
              {project.title}
            </span>
            <span className="ital mt-0.5 block text-[1.35rem] leading-tight text-ink-950/70 sm:text-[1.65rem]">
              {project.kicker}
            </span>
          </h3>

          <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink-950/60">
            {project.description}
          </p>

          <ul className="mt-5 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-xs font-medium text-ink-950/55">
                <FiCheck className="h-3.5 w-3.5 shrink-0 text-brand-orange" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-ink-950/10 bg-white/70 px-3 py-1.5 text-[0.72rem] font-semibold text-ink-950/65 backdrop-blur-sm"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-gradient !px-5 !py-2.5 !text-xs"
              >
                View Live <FiArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-outline !px-5 !py-2.5 !text-xs"
              >
                <FiGithub className="h-3.5 w-3.5" aria-hidden="true" /> Source
              </a>
            )}
            {!project.demo && !project.github && (
              <>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-950/10 bg-white/60 px-3.5 py-1.5 text-[0.7rem] font-semibold text-ink-950/50 backdrop-blur-sm">
                  <FiLock className="h-3 w-3" aria-hidden="true" /> Private client release — NDA
                </span>
                <a href="#contact" className="btn-outline !px-5 !py-2.5 !text-xs">
                  Ask me about it <FiArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </>
            )}
          </div>
        </div>

        <div className="mt-6 lg:mt-0">
          <ProjectVisual project={project} />
        </div>
      </motion.article>
    </div>
  );
}

export default function Projects() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="relative overflow-hidden bg-white pb-24 pt-10 sm:pb-32">
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(150deg,#F97316_0%,#EA580C_38%,#C2410C_70%,#9A3412_100%)] px-4 pb-10 pt-14 sm:rounded-[2.75rem] sm:px-8 sm:pt-16">
          {/* texture + glow inside the orange panel */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.13]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 10%, rgba(255,255,255,.7), transparent 42%), radial-gradient(circle at 82% 78%, rgba(217,70,239,.8), transparent 46%)',
            }}
          />
          <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay" />

          {/* header */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="relative flex flex-col items-center text-center"
          >
            <motion.span variants={fadeUp()} className="label-pill-dark !border-white/40 !text-white">
              Featured Projects
            </motion.span>
            <motion.p
              variants={fadeUp()}
              className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-white/75 sm:text-base"
            >
              A selection of apps I&rsquo;ve designed and built — spanning AI, real-time systems,
              marketplaces, and on-demand platforms.
            </motion.p>
          </motion.div>

          {/* giant wordmark, partly covered by the first card */}
          <motion.div
            variants={reduce ? fadeUp() : wordIn}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="relative mt-6 select-none"
            aria-hidden="true"
          >
            <div className="display whitespace-nowrap text-center text-[17vw] leading-[0.78] tracking-tightest text-white/95 sm:text-[15vw]">
              PROJECTS
            </div>
          </motion.div>

          {/* sticky stack */}
          <div className="relative -mt-[6vw] pb-4 sm:-mt-[5vw]">
            {projects.map((p, i) => (
              <StickyProject key={p.title} project={p} index={i} total={projects.length} />
            ))}
          </div>

          {/* footer strip inside the panel */}
          <div className="relative mt-6 border-t border-white/20 pt-6">
            <Marquee speed={26} reverse>
              {['Flutter', 'Firebase', 'Node.js', 'Clean Architecture', 'Bloc', 'GetX', 'CI/CD'].map(
                (t, i) => (
                  <span
                    key={`${t}-${i}`}
                    className="display mx-5 whitespace-nowrap text-sm uppercase tracking-[0.18em] text-white/55 sm:mx-8 sm:text-base"
                  >
                    {t} <span className="mx-3 text-white/25">✦</span>
                  </span>
                )
              )}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
