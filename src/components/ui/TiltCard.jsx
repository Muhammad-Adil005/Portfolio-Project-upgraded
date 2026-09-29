import { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

/**
 * 3D tilt + a light that tracks the cursor across the card surface.
 * The glare is a radial gradient positioned from the same pointer values,
 * so the tilt and the highlight always agree with each other.
 */
export default function TiltCard({
  children,
  className = '',
  max = 8,
  glare = true,
  glareColor = 'rgba(255,255,255,0.22)',
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const rx = useSpring(useMotionValue(0), { stiffness: 180, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 180, damping: 20 });
  const px = useMotionValue(50);
  const py = useMotionValue(50);

  const glareBg = useMotionTemplate`radial-gradient(420px circle at ${px}% ${py}%, ${glareColor}, transparent 65%)`;

  const onMove = (e) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width;
    const ny = (e.clientY - r.top) / r.height;
    px.set(nx * 100);
    py.set(ny * 100);
    ry.set((nx - 0.5) * max * 2);
    rx.set(-(ny - 0.5) * max * 2);
  };

  const onLeave = () => {
    setHovered(false);
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }}
      className={`relative preserve-3d ${className}`}
    >
      {children}
      {glare && !reduce && (
        <motion.span
          aria-hidden="true"
          style={{ backgroundImage: glareBg, opacity: hovered ? 1 : 0 }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        />
      )}
    </motion.div>
  );
}
