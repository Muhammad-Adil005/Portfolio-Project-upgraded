/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05040B',
          900: '#0A0814',
          850: '#0F0C1D',
          800: '#15112A',
          700: '#1E1838',
        },
        violet: {
          350: '#B79BFF',
        },
        brand: {
          violet: '#8B5CF6',
          purple: '#A855F7',
          fuchsia: '#D946EF',
          pink: '#EC4899',
          rose: '#F43F5E',
          coral: '#FB7185',
          orange: '#F97316',
          amber: '#FB923C',
          peach: '#FFC79E',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Sora', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'Times New Roman', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(168, 85, 247, 0.55)',
        'glow-warm': '0 0 70px -14px rgba(249, 115, 22, 0.5)',
        lift: '0 24px 60px -24px rgba(15, 12, 29, 0.35)',
        'lift-lg': '0 40px 90px -32px rgba(15, 12, 29, 0.45)',
      },
      animation: {
        'beam-a': 'beamA 16s ease-in-out infinite',
        'beam-b': 'beamB 20s ease-in-out infinite',
        'beam-c': 'beamC 24s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'spin-slower': 'spin 34s linear infinite',
        float: 'float 7s ease-in-out infinite',
        'float-delayed': 'float 9s ease-in-out infinite 1.4s',
        shimmer: 'shimmer 3.4s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 5s ease-in-out infinite',
        'gradient-pan': 'gradientPan 8s ease infinite',
      },
      keyframes: {
        beamA: {
          '0%, 100%': { transform: 'translate3d(-6%, 0, 0) rotate(-18deg) scaleX(1)', opacity: '0.75' },
          '50%': { transform: 'translate3d(8%, -4%, 0) rotate(-14deg) scaleX(1.15)', opacity: '1' },
        },
        beamB: {
          '0%, 100%': { transform: 'translate3d(4%, 2%, 0) rotate(-26deg) scaleX(1.1)', opacity: '0.6' },
          '50%': { transform: 'translate3d(-8%, -2%, 0) rotate(-21deg) scaleX(0.9)', opacity: '0.95' },
        },
        beamC: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(-10deg)', opacity: '0.5' },
          '50%': { transform: 'translate3d(-10%, 4%, 0) rotate(-6deg)', opacity: '0.85' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%) skewX(-14deg)' },
          '60%, 100%': { transform: 'translateX(320%) skewX(-14deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.9' },
        },
        gradientPan: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,92,246,0.28), transparent 70%)',
      },
    },
  },
  plugins: [],
};
