import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiArrowUpRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { marqueeTech, personal, stats } from '../../data/portfolio';
import { EASE_SOFT, fadeUp, stagger, wordIn } from '../../utils/motion';
import Beams from '../ui/Beams';
import CursorGlow from '../ui/CursorGlow';
import Magnetic from '../ui/Magnetic';
import Marquee from '../ui/Marquee';
import CountUp from '../ui/CountUp';
import SkillIcon from '../ui/SkillIcon';

function FloatingBadge({ className, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: EASE_SOFT }}
      className={`glass-dark absolute z-20 rounded-2xl px-4 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '14%']);
  const copyY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-8%']);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, reduce ? 1 : 0.25]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate overflow-hidden rounded-b-[2rem] bg-ink-950 pb-10 pt-28 sm:rounded-b-[3rem] sm:pt-32 lg:pb-14 lg:pt-36"
    >
      <Beams />
      <CursorGlow targetId="home" />

      <motion.div
        style={{ opacity: fade }}
        className="container-tight relative z-10 grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6"
      >
        {/* ── Copy ─────────────────────────────────────────── */}
        <motion.div style={{ y: copyY }} variants={stagger(0.11, 0.15)} initial="hidden" animate="show">
          <motion.div variants={fadeUp()}>
            <span className="label-pill-dark">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {personal.availability}
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp()}
            className="mt-7 text-2xl text-white/70 sm:text-[1.75rem]"
          >
            <span className="ital">I am</span>{' '}
            <span className="ital text-white">{personal.name}</span>
            <span className="ml-2 inline-block text-brand-coral">✦</span>
          </motion.p>

          <h1 className="display mt-2 text-[2.7rem] leading-[0.94] text-white sm:text-[4rem] lg:text-[4.6rem] xl:text-[5.1rem]">
            <span className="block overflow-hidden">
              <motion.span variants={reduce ? fadeUp() : wordIn} className="block uppercase text-gradient-neon">
                {personal.roleLine1}
              </motion.span>
            </span>
            <span className="mt-1 flex flex-wrap items-center gap-3 sm:gap-4">
              <motion.a
                href="#projects"
                variants={reduce ? fadeUp() : wordIn}
                aria-label="Jump to projects"
                className="group inline-flex h-9 w-[3.4rem] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-brand-purple via-brand-fuchsia to-brand-orange shadow-[0_14px_40px_-12px_rgba(217,70,239,0.8)] transition-transform duration-300 hover:scale-105 sm:h-14 sm:w-[6.2rem]"
              >
                <FiArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1 sm:h-6 sm:w-6" />
              </motion.a>
              <motion.span
                variants={reduce ? fadeUp() : wordIn}
                className="block uppercase text-gradient-warm"
              >
                {personal.roleLine2}
              </motion.span>
            </span>
          </h1>

          <motion.p
            variants={fadeUp()}
            className="mt-7 max-w-xl text-[0.98rem] leading-relaxed text-white/55 sm:text-lg"
          >
            {personal.tagline} With{' '}
            <strong className="font-bold text-white">
              {personal.yearsOfExperience} years shipping Flutter apps
            </strong>{' '}
            for clients across the Gulf, Europe and North America.
          </motion.p>

          <motion.div variants={fadeUp()} className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a href="#contact" className="btn-gradient">
                Hire Me <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a href={personal.resumeUrl} download className="btn-glass">
                <FiDownload className="h-4 w-4" aria-hidden="true" /> Download Resume
              </a>
            </Magnetic>
          </motion.div>

          <motion.div variants={fadeUp()} className="mt-9 flex items-center gap-4">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/30">
              Find me on
            </span>
            <span className="h-px w-8 bg-white/15" />
            <div className="flex gap-2">
              {[
                { href: personal.github, Icon: FiGithub, label: 'GitHub' },
                { href: personal.linkedin, Icon: FiLinkedin, label: 'LinkedIn' },
                { href: personal.whatsapp, Icon: FaWhatsapp, label: 'WhatsApp' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="glass-dark flex h-10 w-10 items-center justify-center rounded-full text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-brand-fuchsia/50 hover:text-white"
                >
                  <Icon className="h-[1.05rem] w-[1.05rem]" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Portrait ─────────────────────────────────────── */}
        <motion.div style={{ y: portraitY }} className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
          <div className="relative">
            {/* halo behind the cutout */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[42%] -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.34),rgba(249,115,22,0.16)_44%,transparent_70%)] blur-2xl"
            />
            <motion.div
              aria-hidden="true"
              className="absolute left-1/2 top-[46%] -z-10 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]"
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
            >
              <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-brand-fuchsia shadow-[0_0_18px_4px_rgba(217,70,239,0.7)]" />
              <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand-orange shadow-[0_0_16px_4px_rgba(249,115,22,0.7)]" />
            </motion.div>

            <motion.img
              src={personal.portrait}
              alt={`${personal.name}, ${personal.role}`}
              width="1000"
              height="1200"
              fetchpriority="high"
              initial={{ opacity: 0, scale: 0.94, y: 34 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.3, ease: EASE_SOFT }}
              className="relative z-10 mx-auto w-full max-w-[24rem] select-none mask-fade-b drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] lg:max-w-[27rem]"
            />

            {/* left column */}
            <FloatingBadge className="-left-3 top-[3%] hidden animate-float sm:block lg:-left-10" delay={0.9}>
              <div className="flex items-center gap-2.5">
                <SkillIcon name="Flutter" className="h-6 w-6" />
                <div>
                  <div className="text-[0.82rem] font-bold text-white">Flutter Expert</div>
                  <div className="text-[0.62rem] text-white/45">Bloc · GetX · Clean Arch</div>
                </div>
              </div>
            </FloatingBadge>

            <FloatingBadge className="-left-4 top-[27%] hidden animate-float-delayed sm:block lg:-left-14" delay={1.15}>
              <div className="flex items-center gap-2.5">
                <SkillIcon name="React Native" className="h-6 w-6" />
                <div>
                  <div className="text-[0.82rem] font-bold text-white">React Native</div>
                  <div className="text-[0.62rem] text-white/45">Cross-platform apps</div>
                </div>
              </div>
            </FloatingBadge>

            <FloatingBadge className="-left-3 top-[51%] hidden animate-float sm:block lg:-left-8" delay={1.4}>
              <div className="flex items-center gap-2.5">
                <SkillIcon name="Android" className="h-6 w-6" />
                <div>
                  <div className="text-[0.82rem] font-bold text-white">Android</div>
                  <div className="text-[0.62rem] text-white/45">Play Store releases</div>
                </div>
              </div>
            </FloatingBadge>

            <FloatingBadge className="-left-4 top-[75%] hidden animate-float-delayed sm:block lg:-left-12" delay={1.65}>
              <div className="flex items-center gap-2.5">
                <span className="text-lg" aria-hidden="true">⚡</span>
                <div>
                  <div className="text-[0.82rem] font-bold text-white">24h</div>
                  <div className="text-[0.62rem] text-white/45">Response time</div>
                </div>
              </div>
            </FloatingBadge>

            {/* right column */}
            <FloatingBadge className="-right-2 top-[1%] hidden animate-float-delayed sm:block lg:-right-14" delay={1.0}>
              <div className="flex items-center gap-2.5">
                <SkillIcon name="AI" className="h-6 w-6" />
                <div>
                  <div className="text-[0.82rem] font-bold text-white">AI Integration</div>
                  <div className="text-[0.62rem] text-white/45">OpenAI · Automation</div>
                </div>
              </div>
            </FloatingBadge>

            <FloatingBadge className="-right-3 top-[25%] hidden animate-float sm:block lg:-right-6" delay={1.25}>
              <div className="flex items-center gap-2.5">
                <span className="text-lg" aria-hidden="true">⭐</span>
                <div>
                  <div className="text-[0.82rem] font-bold text-white">4.9 Rating</div>
                  <div className="text-[0.62rem] text-white/45">Average across stores</div>
                </div>
              </div>
            </FloatingBadge>

            <FloatingBadge className="-right-4 top-[49%] hidden animate-float-delayed sm:block lg:-right-12" delay={1.5}>
              <div className="flex items-center gap-2.5">
                <SkillIcon name="Node.js" className="h-6 w-6" />
                <div>
                  <div className="text-[0.82rem] font-bold text-white">Node.js Backend</div>
                  <div className="text-[0.62rem] text-white/45">Express · REST APIs</div>
                </div>
              </div>
            </FloatingBadge>

            <FloatingBadge className="-right-3 top-[73%] hidden animate-float sm:block lg:-right-8" delay={1.75}>
              <div className="flex items-center gap-2.5">
                <SkillIcon name="iOS" className="h-6 w-6" />
                <div>
                  <div className="text-[0.82rem] font-bold text-white">iOS</div>
                  <div className="text-[0.62rem] text-white/45">App Store releases</div>
                </div>
              </div>
            </FloatingBadge>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Stats strip ──────────────────────────────────── */}
      <div className="container-tight relative z-10 mt-8 lg:mt-2">
        <motion.dl
          variants={stagger(0.08, 0.8)}
          initial="hidden"
          animate="show"
          className="glass-dark grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/[0.07] sm:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp(0, 18)}
              className="group bg-ink-950/70 px-4 py-6 text-center transition-colors duration-300 hover:bg-ink-900/80"
            >
              <dd className="display text-2xl text-white sm:text-[1.85rem]">
                <CountUp value={s.value} className="text-gradient-warm" />
              </dd>
              <dt className="mt-1.5 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-white/35">
                {s.label}
              </dt>
            </motion.div>
          ))}
        </motion.dl>
      </div>

      {/* ── Tech marquee ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="relative z-10 mt-10 border-t border-white/[0.07] pt-8"
      >
        <Marquee speed={38}>
          {marqueeTech.map((t) => (
            <div
              key={t}
              className="mx-4 flex shrink-0 items-center gap-2.5 opacity-55 transition-opacity duration-300 hover:opacity-100 sm:mx-7"
            >
              <SkillIcon name={t} className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="whitespace-nowrap text-sm font-semibold text-white/80 sm:text-base">
                {t}
              </span>
            </div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
