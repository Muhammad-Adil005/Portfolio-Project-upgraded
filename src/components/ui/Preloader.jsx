import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { EASE_SOFT } from '../../utils/motion';

/**
 * A brief, skippable curtain reveal on first load. Kept short (~1.1s)
 * on purpose — this is a portfolio meant to convert busy hiring
 * managers, not a design-award splash screen. Reduced-motion users
 * never see it.
 */
export default function Preloader() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(reduce);

  useEffect(() => {
    if (reduce) return;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, [reduce]);

  useEffect(() => {
    if (done) document.body.style.overflow = '';
  }, [done]);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: EASE_SOFT }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink-950"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.span
              initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, ease: EASE_SOFT }}
              className="display text-2xl text-white sm:text-3xl"
            >
              Adil<span className="text-gradient-neon">.dev</span>
            </motion.span>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.75, ease: EASE_SOFT }}
              className="h-px w-24 origin-left bg-gradient-to-r from-brand-violet via-brand-fuchsia to-brand-orange sm:w-32"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
