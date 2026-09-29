import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

/**
 * Counts a numeric stat up when it scrolls into view, preserving whatever
 * prefix/suffix the value carries ("4+", "20+", "99.7%").
 */
function split(value) {
  const m = String(value).match(/^([^\d.]*)([\d.]+)(.*)$/);
  if (!m) return { prefix: '', num: null, suffix: String(value) };
  return { prefix: m[1], num: parseFloat(m[2]), suffix: m[3] };
}

export default function CountUp({ value, className = '', duration = 1.6 }) {
  const { prefix, num, suffix } = split(value);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(num === null || reduce ? num : 0);

  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (num === null || reduce) return;
    if (inView) mv.set(num);
  }, [inView, num, mv, reduce]);

  useEffect(() => {
    if (num === null || reduce) return;
    const decimals = String(num).includes('.') ? 1 : 0;
    return spring.on('change', (v) => setShown(Number(v.toFixed(decimals))));
  }, [spring, num, reduce]);

  if (num === null) {
    return (
      <span ref={ref} className={className}>
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}
