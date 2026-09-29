export const EASE = [0.22, 1, 0.36, 1];
export const EASE_SOFT = [0.16, 1, 0.3, 1];

export const fadeUp = (delay = 0, y = 34) => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: EASE } },
});

export const fadeDown = (delay = 0) => ({
  hidden: { opacity: 0, y: -26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: EASE } },
});

export const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, delay, ease: EASE } },
});

export const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.75, delay, ease: EASE } },
});

export const slideInLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, delay, ease: EASE } },
});

export const slideInRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, delay, ease: EASE } },
});

/** Blur-in words — used for the big display headlines. */
export const wordIn = {
  hidden: { opacity: 0, y: '0.55em', filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: '0em',
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: EASE_SOFT },
  },
};

export const stagger = (staggerChildren = 0.09, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

export const viewport = { once: true, margin: '-70px' };
export const viewportEarly = { once: true, margin: '-10px' };
