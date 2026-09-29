import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FiAlertCircle,
  FiArrowUpRight,
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
  FiLoader,
  FiMail,
  FiMapPin,
  FiSend,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import SectionHeading from '../ui/SectionHeading';
import Magnetic from '../ui/Magnetic';
import CursorGlow from '../ui/CursorGlow';
import { personal } from '../../data/portfolio';
import { fadeUp, stagger, viewport } from '../../utils/motion';

// Opens Gmail's web compose window with the recipient pre-filled — unlike
// mailto:, this doesn't depend on the visitor having a default desktop mail
// client configured.
const gmailComposeUrl = (email) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

const channels = [
  {
    label: 'Email',
    value: personal.email,
    href: gmailComposeUrl(personal.email),
    Icon: FiMail,
    color: 'from-brand-violet to-brand-fuchsia',
  },
  {
    label: 'WhatsApp',
    value: 'Chat directly',
    href: personal.whatsapp,
    Icon: FaWhatsapp,
    color: 'from-emerald-500 to-green-600',
  },
  {
    label: 'LinkedIn',
    value: 'Connect with me',
    href: personal.linkedin,
    Icon: FiLinkedin,
    color: 'from-sky-500 to-blue-600',
  },
  {
    label: 'GitHub',
    value: 'See my code',
    href: personal.github,
    Icon: FiGithub,
    color: 'from-slate-600 to-slate-900',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  // Submits via Web3Forms (https://web3forms.com) — a static-site-friendly
  // form backend that emails the submission straight to personal.email.
  // Works on any host (Vercel, Netlify, GitHub Pages, ...) since it's just
  // a fetch to their API, no server of our own required.
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target['bot-field'].value) return; // honeypot tripped — silently drop

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: personal.web3formsAccessKey,
          subject: `New portfolio message from ${form.name}`,
          from_name: form.name,
          ...form,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || `Submission failed (${res.status})`);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3.5 text-sm text-white placeholder:text-white/25 transition-all duration-300 focus:border-brand-fuchsia/60 focus:bg-white/[0.08]';
  const labelClass =
    'mb-2 block text-[0.66rem] font-bold uppercase tracking-[0.16em] text-white/40';

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 pb-14 pt-20 sm:pb-20 sm:pt-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(217,70,239,0.22),transparent_70%)]"
      />
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
      <CursorGlow targetId="contact" />

      <div className="container-tight relative">
        <SectionHeading
          dark
          center
          eyebrow="Contact"
          title={[
            { t: "Let's build something " },
            { t: 'great together', accent: true },
            '.',
          ]}
          subtitle={`Have a project in mind or a role to fill? ${personal.responseTime}.`}
        />

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          {/* channels */}
          <motion.div
            variants={stagger(0.09)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-col gap-3.5"
          >
            {channels.map(({ label, value, href, Icon, color }) => (
              <motion.a
                key={label}
                variants={fadeUp(0, 22)}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group glass-dark flex items-center gap-4 rounded-2xl p-5 transition-all duration-400 hover:-translate-y-1 hover:border-brand-fuchsia/40 hover:bg-white/[0.09]"
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-lg transition-transform duration-400 group-hover:scale-110`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="display text-[0.9rem] text-white">{label}</div>
                  <div className="truncate text-xs text-white/40">{value}</div>
                </div>
                <FiArrowUpRight
                  className="h-4 w-4 shrink-0 text-white/20 transition-all duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-coral"
                  aria-hidden="true"
                />
              </motion.a>
            ))}

            <motion.div variants={fadeUp(0, 22)} className="glass-dark flex items-center gap-4 rounded-2xl p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-rose to-brand-orange text-white shadow-lg">
                <FiMapPin className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <div className="display text-[0.9rem] text-white">Location</div>
                <div className="text-xs text-white/40">{personal.location}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* form */}
          <motion.form
            variants={fadeUp(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            onSubmit={handleSubmit}
            name="contact"
            className="glass-dark relative flex flex-col gap-5 overflow-hidden rounded-[1.75rem] p-7 sm:p-9"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.28),transparent_65%)] blur-2xl"
            />

            <p className="hidden">
              <label>
                Leave this field empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="relative grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="John Doe"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  placeholder="john@company.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={form.message}
                onChange={update('message')}
                placeholder="Tell me about your project or the role you're hiring for…"
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="relative flex flex-wrap items-center gap-4">
              <Magnetic>
                <button type="submit" disabled={status === 'sending'} className="btn-gradient disabled:opacity-60">
                  {status === 'sending' ? (
                    <>
                      <FiLoader className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…
                    </>
                  ) : (
                    <>
                      <FiSend className="h-4 w-4" aria-hidden="true" /> Send Message
                    </>
                  )}
                </button>
              </Magnetic>
              <p className="text-xs text-white/45">
                Or email me directly at{' '}
                <a
                  href={gmailComposeUrl(personal.email)}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-white/70 underline"
                >
                  {personal.email}
                </a>
                .
              </p>
            </div>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  role="status"
                  className="relative flex items-start gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3.5"
                >
                  <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                  <p className="text-sm text-emerald-200">
                    <strong>Message sent!</strong> Thanks for reaching out — I&rsquo;ll reply within{' '}
                    {personal.responseTime.toLowerCase()}.
                  </p>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  role="alert"
                  className="relative flex items-start gap-3 rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3.5"
                >
                  <FiAlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" aria-hidden="true" />
                  <p className="text-sm text-rose-200">
                    <strong>Something went wrong.</strong> Please email me directly at{' '}
                    <a
                      href={gmailComposeUrl(personal.email)}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold underline"
                    >
                      {personal.email}
                    </a>{' '}
                    instead.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
