import { motion, useReducedMotion } from 'framer-motion';

/**
 * Seamless infinite marquee. The track holds two identical copies of the
 * children and slides exactly -50%, so the loop has no visible seam.
 */
export default function Marquee({
  children,
  speed = 34,
  reverse = false,
  pauseOnHover = true,
  className = '',
  itemClassName = '',
}) {
  const reduce = useReducedMotion();
  const items = [0, 1];

  return (
    <div className={`group relative w-full overflow-hidden mask-fade-x ${className}`}>
      <motion.div
        className="flex w-max"
        style={{ willChange: 'transform' }}
        animate={reduce ? undefined : { x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {items.map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className={`flex shrink-0 items-center ${itemClassName} ${
              pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
            }`}
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
