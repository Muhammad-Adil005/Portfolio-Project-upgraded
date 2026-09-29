import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import { navLinks, personal } from '../../data/portfolio';
import Magnetic from '../ui/Magnetic';

const SECTION_IDS = navLinks.map((l) => l.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav item for whichever section owns the middle of the screen.
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-3 z-[60] px-4 sm:top-5 sm:px-6"
    >
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-[72rem] items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled
            ? 'border-white/12 bg-ink-950/70 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)] backdrop-blur-2xl'
            : 'border-white/10 bg-white/[0.04] backdrop-blur-xl'
        }`}
      >
        <a
          href="#home"
          className="display shrink-0 pl-1.5 text-base tracking-tight text-white sm:text-lg"
        >
          {personal.firstName}
          <span className="text-gradient-neon">.dev</span>
        </a>

        {/* Desktop links — the active pill slides between items */}
        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`relative z-10 block rounded-full px-4 py-2 text-[0.83rem] font-semibold transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-white/55 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full border border-white/15 bg-white/10"
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Magnetic strength={0.2} className="hidden md:inline-flex">
            <a href="#contact" className="btn-gradient !px-5 !py-2.5 !text-[0.82rem]">
              Let&rsquo;s Collaborate
              <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Magnetic>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white backdrop-blur-md transition-colors hover:bg-white/[0.14] md:hidden"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-[72rem] overflow-hidden rounded-3xl border border-white/12 bg-ink-950/92 p-3 backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold text-white/75 transition-colors hover:bg-white/[0.07] hover:text-white"
                  >
                    {link.label}
                    <FiArrowUpRight className="h-4 w-4 opacity-40" aria-hidden="true" />
                  </a>
                </motion.li>
              ))}
              <li className="mt-1.5">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-gradient w-full"
                >
                  Let&rsquo;s Collaborate
                  <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
