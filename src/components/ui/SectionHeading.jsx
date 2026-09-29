import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, stagger, viewport, wordIn } from '../../utils/motion';

/**
 * Two-tone display heading in the reference style:
 *   accent words render in the warm gradient, `muted` words fade back,
 *   and an optional `italic` word renders in the serif italic face.
 *
 * Pass `title` as an array of tokens:
 *   ['Building ', { t: 'Flutter apps', accent: true }, ' that ', { t: 'convert', italic: true }]
 */
function Token({ token, dark }) {
  if (typeof token === 'string') return <>{token}</>;
  const { t, accent, italic, muted } = token;
  const cls = [
    accent && (dark ? 'text-gradient-neon' : 'text-gradient-sun'),
    italic && 'ital',
    muted && (dark ? 'text-white/35' : 'text-slate-300'),
  ]
    .filter(Boolean)
    .join(' ');
  return <span className={cls}>{t}</span>;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
  center = false,
  className = '',
}) {
  const reduce = useReducedMotion();
  const tokens = Array.isArray(title) ? title : [title];

  return (
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={`mb-14 max-w-3xl ${center ? 'mx-auto text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <motion.div variants={fadeUp()} className="mb-6">
          <span className={dark ? 'label-pill-dark' : 'label-pill-light'}>{eyebrow}</span>
        </motion.div>
      )}

      <motion.h2
        variants={reduce ? fadeUp() : wordIn}
        className={`display text-[2rem] leading-[1.08] sm:text-[2.75rem] lg:text-[3.25rem] ${
          dark ? 'text-white' : 'text-ink-950'
        }`}
      >
        {tokens.map((tk, i) => (
          <Token key={i} token={tk} dark={dark} />
        ))}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeUp(0.05)}
          className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${
            center ? 'mx-auto' : ''
          } ${dark ? 'text-white/55' : 'text-slate-500'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
