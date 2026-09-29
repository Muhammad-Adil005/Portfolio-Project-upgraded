/**
 * The hero's light-streak backdrop: long, heavily blurred diagonal bars that
 * drift on their own timers. Pure CSS — no canvas, no images, no JS per frame.
 */
const BEAMS = [
  {
    cls: 'animate-beam-a',
    style: {
      top: '4%',
      left: '-25%',
      width: '150%',
      height: '13rem',
      filter: 'blur(62px)',
      background:
        'linear-gradient(90deg, transparent, rgba(139,92,246,0.55) 22%, rgba(217,70,239,0.6) 48%, rgba(249,115,22,0.45) 74%, transparent)',
    },
  },
  {
    cls: 'animate-beam-b',
    style: {
      top: '28%',
      left: '-30%',
      width: '160%',
      height: '9rem',
      filter: 'blur(56px)',
      background:
        'linear-gradient(90deg, transparent, rgba(56,189,248,0.28) 18%, rgba(168,85,247,0.5) 46%, rgba(244,63,94,0.42) 78%, transparent)',
    },
  },
  {
    cls: 'animate-beam-c',
    style: {
      top: '54%',
      left: '-20%',
      width: '140%',
      height: '16rem',
      filter: 'blur(80px)',
      background:
        'linear-gradient(90deg, transparent, rgba(236,72,153,0.36) 30%, rgba(251,146,60,0.42) 62%, transparent)',
    },
  },
  {
    cls: 'animate-beam-a',
    style: {
      top: '72%',
      left: '-10%',
      width: '130%',
      height: '7rem',
      filter: 'blur(46px)',
      background:
        'linear-gradient(90deg, transparent, rgba(168,85,247,0.4) 40%, rgba(255,199,158,0.3) 70%, transparent)',
      animationDelay: '3s',
    },
  },
];

export default function Beams() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* soft colour wash behind everything */}
      <div className="absolute -top-1/3 left-1/2 h-[60rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.30),rgba(217,70,239,0.12)_45%,transparent_68%)] blur-3xl animate-pulse-soft" />

      {BEAMS.map((b, i) => (
        <div key={i} className={`absolute origin-center ${b.cls}`} style={b.style} />
      ))}

      {/* faint grid + film grain to keep the gradients from banding */}
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_35%,black,transparent)]" />
      <div className="bg-noise absolute inset-0 opacity-[0.05] mix-blend-overlay" />
    </div>
  );
}
