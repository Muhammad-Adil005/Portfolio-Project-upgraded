import { motion } from 'framer-motion';
import { fadeUp, viewport } from '../../utils/motion';

/** Scroll-triggered reveal wrapper. Keeps section markup readable. */
export default function Reveal({
  children,
  delay = 0,
  y = 34,
  as = 'div',
  className = '',
  ...rest
}) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      variants={fadeUp(delay, y)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
