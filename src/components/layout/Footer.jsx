import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { navLinks, personal } from '../../data/portfolio';
import Magnetic from '../ui/Magnetic';

const socials = [
  { label: 'GitHub', href: personal.github, Icon: FiGithub },
  { label: 'LinkedIn', href: personal.linkedin, Icon: FiLinkedin },
  { label: 'WhatsApp', href: personal.whatsapp, Icon: FaWhatsapp },
  { label: 'Email', href: `mailto:${personal.email}`, Icon: FiMail },
];

export default function Footer() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const wordY = useTransform(scrollYProgress, [0, 1], ['32%', reduce ? '32%' : '0%']);
  const wordOpacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);

  return (
    <footer ref={ref} className="relative overflow-hidden bg-ink-950">
      <div className="container-tight relative">
        <div className="flex flex-col items-center gap-8 border-t border-white/[0.08] pt-12">
          <a href="#home" className="display text-xl text-white">
            {personal.firstName}
            <span className="text-gradient-neon">.dev</span>
          </a>

          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-white/40 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-2.5">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="glass-dark flex h-10 w-10 items-center justify-center rounded-full text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-brand-fuchsia/50 hover:text-white"
                >
                  <Icon className="h-[1.05rem] w-[1.05rem]" />
                </a>
              </li>
            ))}
          </ul>

          <Magnetic strength={0.22}>
            <a href="#home" className="btn-glass !px-5 !py-2.5 !text-xs">
              <FiArrowUp className="h-3.5 w-3.5" aria-hidden="true" /> Back to top
            </a>
          </Magnetic>

          <p className="text-center text-xs text-white/35">
            © {new Date().getFullYear()} {personal.name} · {personal.role} · Built with React,
            Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </div>

      {/* Giant wordmark that rises into place as the footer arrives.
          Drawn as SVG with textLength so it fits the viewport exactly at any
          width, whatever font ends up loading. */}
      <div className="relative mt-10 overflow-hidden" aria-hidden="true">
        <motion.svg
          style={{ y: wordY, opacity: wordOpacity }}
          viewBox="0 0 1000 150"
          preserveAspectRatio="xMidYMax meet"
          className="block w-full select-none"
        >
          <defs>
            <linearGradient id="footer-word" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="42%" stopColor="#D946EF" />
              <stop offset="78%" stopColor="#F43F5E" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>
          <text
            x="500"
            y="132"
            textAnchor="middle"
            textLength="980"
            lengthAdjust="spacingAndGlyphs"
            fill="url(#footer-word)"
            style={{
              fontFamily: 'Sora, Plus Jakarta Sans, system-ui, sans-serif',
              fontWeight: 800,
              fontSize: '140px',
              letterSpacing: '-0.04em',
            }}
          >
            MUHAMMAD ADIL
          </text>
        </motion.svg>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent" />
      </div>
    </footer>
  );
}
