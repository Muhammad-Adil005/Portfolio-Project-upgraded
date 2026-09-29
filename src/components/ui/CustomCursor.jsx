import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

const HOVER_SELECTOR = 'a, button, input, textarea, [role="button"], .cursor-hover';

/**
 * A two-part cursor (snappy dot + trailing ring) that swaps the native
 * pointer on fine-pointer, non-touch displays. Skipped entirely for
 * touch devices and reduced-motion users, so it never fights a11y or
 * mobile scrolling.
 */
export default function CustomCursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.5 });

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    setEnabled(true);
    document.documentElement.classList.add('has-custom-cursor');

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e) => setHovering(!!e.target.closest(HOVER_SELECTOR));
    const leaveWindow = () => setVisible(false);

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over, { passive: true });
    document.addEventListener('mouseleave', leaveWindow);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      document.removeEventListener('mouseleave', leaveWindow);
    };
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ left: x, top: y, opacity: visible ? 1 : 0 }}
        className="pointer-events-none fixed z-[100] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-opacity duration-200"
      />
      <motion.div
        aria-hidden="true"
        style={{ left: ringX, top: ringY, opacity: visible ? 1 : 0 }}
        animate={{
          width: hovering ? 52 : 30,
          height: hovering ? 52 : 30,
          backgroundColor: hovering ? 'rgba(217,70,239,0.12)' : 'rgba(255,255,255,0)',
          borderColor: hovering ? 'rgba(217,70,239,0.7)' : 'rgba(255,255,255,0.55)',
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none fixed z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-opacity duration-200"
      />
    </>
  );
}
