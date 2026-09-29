import { motion } from 'framer-motion';
import {
  FiArrowUpRight,
  FiCloudLightning,
  FiCpu,
  FiSend,
  FiServer,
  FiShield,
  FiSmartphone,
  FiZap,
} from 'react-icons/fi';
import { SiReact, SiWordpress } from 'react-icons/si';
import SectionHeading from '../ui/SectionHeading';
import TiltCard from '../ui/TiltCard';
import { services } from '../../data/portfolio';
import { fadeUp, stagger, viewport } from '../../utils/motion';

const iconMap = {
  mobile: FiSmartphone,
  server: FiServer,
  fire: FiCloudLightning,
  rocket: FiSend,
  bolt: FiZap,
  shield: FiShield,
  ai: FiCpu,
  wordpress: SiWordpress,
  reactnative: SiReact,
};

export default function Services() {
  return (
    <section id="services" className="section relative overflow-hidden bg-ink-950">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-32 h-[34rem] bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(139,92,246,0.22),transparent_70%)]"
      />
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_40%,black,transparent)]" />

      <div className="container-tight relative">
        <SectionHeading
          dark
          eyebrow="Services"
          title={[
            { t: 'How I help your business ', muted: false },
            { t: 'move faster', accent: true },
            { t: ' and ' },
            { t: 'ship sooner', italic: true },
          ]}
          subtitle="Whether you're a startup validating an idea or an enterprise scaling a product — you get one engineer who owns the whole mobile pipeline."
        />

        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || FiZap;
            return (
              <motion.div key={service.title} variants={fadeUp(0, 26)}>
                <TiltCard max={6} glareColor="rgba(255,255,255,0.10)">
                  <div className="ring-conic glass-dark group relative h-full overflow-hidden rounded-[1.6rem] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/[0.09]">
                    {/* number watermark */}
                    <span
                      aria-hidden="true"
                      className="display pointer-events-none absolute -right-1 -top-3 text-[4.5rem] leading-none text-white/[0.045] transition-colors duration-500 group-hover:text-white/[0.09]"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-violet via-brand-fuchsia to-brand-orange text-white shadow-[0_14px_34px_-12px_rgba(217,70,239,0.9)] transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-[1.35rem] w-[1.35rem]" aria-hidden="true" />
                    </div>

                    <h3 className="display relative mt-6 text-[1.05rem] text-white">
                      {service.title}
                    </h3>
                    <p className="relative mt-2.5 text-sm leading-relaxed text-white/50">
                      {service.text}
                    </p>

                    <span className="relative mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/0 transition-all duration-500 group-hover:text-brand-coral">
                      Let&rsquo;s talk <FiArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
