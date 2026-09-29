import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

/**
 * A soft violet light that trails the cursor over the dark hero only.
 * Skipped entirely on touch devices and for reduced-motion users.
 */
export default function CursorGlow({ targetId = 'home' }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(false);
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 120, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 120, damping: 22, mass: 0.6 });

  useEffect(() => {
    if (reduce) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const el = document.getElementById(targetId);
    if (!el) return;

    const move = (e) => {
      const r = el.getBoundingClientRect();
      x.set(e.clientX - r.left);
      y.set(e.clientY - r.top);
    };
    const enter = () => setActive(true);
    const leave = () => setActive(false);

    el.addEventListener('mousemove', move);
    el.addEventListener('mouseenter', enter);
    el.addEventListener('mouseleave', leave);
    return () => {
      el.removeEventListener('mousemove', move);
      el.removeEventListener('mouseenter', enter);
      el.removeEventListener('mouseleave', leave);
    };
  }, [reduce, targetId, x, y]);

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy, opacity: active ? 1 : 0 }}
      className="pointer-events-none absolute left-0 top-0 z-[1] hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-500 md:block"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.22),rgba(217,70,239,0.09)_42%,transparent_70%)] blur-2xl" />
    </motion.div>
  );
}
