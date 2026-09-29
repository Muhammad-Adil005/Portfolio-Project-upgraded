// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to personalize the entire portfolio.
//  Every section reads its content from here.
// ─────────────────────────────────────────────────────────────

export const personal = {
  name: 'Muhammad Adil',
  firstName: 'Adil',
  role: 'Senior Flutter Developer',
  roleLine1: 'Senior Flutter',
  roleLine2: 'Developer',
  tagline: 'I build premium, high-performance mobile apps that users love and businesses rely on.',
  yearsOfExperience: '5+',
  location: 'Pakistan · Open to Gulf & Remote',
  email: 'muhammadadil102030@gmail.com',
  phone: '+92 303 9888185',
  whatsapp: 'https://wa.me/923039888185',
  linkedin: 'https://www.linkedin.com/in/muhammad-adil-1137a41b4/',
  github: 'https://github.com/Muhammad-Adil005',
  resumeUrl: '/resume.pdf', // drop your resume file into /public as resume.pdf
  portrait: '/adil-portrait.webp', // background-removed hero cutout
  avatar: '/adil-avatar.webp', // square photo for the About / Footer
  availability: 'Available for work',
  responseTime: 'Replies within 24 hours',
  // Free access key from https://web3forms.com (enter your email, no signup/password
  // needed — they email you a key instantly). Powers the Contact form below; without
  // a real key here, submissions will fail.
  web3formsAccessKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
};

export const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '25+', label: 'Apps Delivered' },
  { value: '15+', label: 'Happy Clients' },
  { value: '20+', label: 'Technologies Mastered' },
];

/** Scrolling tech strip under the hero. Names must match SkillIcon keys. */
export const marqueeTech = [
  'Flutter',
  'Dart',
  'Firebase',
  'Node.js',
  'MongoDB',
  'React JS',
  'TypeScript',
  'Google Maps',
  'REST APIs',
  'CI/CD',
  'App Store Publishing',
  'Play Store Publishing',
];

export const about = {
  summary: [
    `I'm a Senior Flutter Developer with 5+ years of hands-on experience designing, building, and shipping cross-platform mobile applications for startups, agencies, and enterprise clients across the Gulf region, Europe, and North America.`,
    `My focus is simple: apps that feel fast, look beautiful, and scale without breaking. From architecting clean, testable codebases to publishing on the Play Store and App Store, I own the full mobile delivery cycle — including the backend APIs that power it.`,
  ],
  highlights: [
    'Shipped 25+ production apps across e-commerce, fintech, health, and on-demand services',
    'Led Flutter teams and mentored junior developers on architecture and code quality',
    'Reduced app startup time and crash rates through profiling and performance tuning',
    'Built full-stack products end-to-end with Node.js, Express, MongoDB & Firebase',
  ],
  differentiators: [
    {
      title: 'Product mindset',
      text: 'I think beyond code — every screen I build is measured against user experience and business goals.',
    },
    {
      title: 'Clean Architecture, always',
      text: 'Scalable, testable, maintainable codebases that new developers can onboard into within days.',
    },
    {
      title: 'Full delivery ownership',
      text: 'From Figma to store release: CI/CD pipelines, store publishing, crash monitoring, and iteration.',
    },
  ],
  /** Bento tiles in the About section. */
  metrics: [
    { value: '99.7%', label: 'Crash-free sessions', note: 'Across shipped production apps' },
    { value: '3', label: 'Continents served', note: 'Gulf, Europe & North America' },
    { value: '20+', label: 'API integrations', note: 'Payments, maps, auth & realtime' },
  ],
};

export const skillGroups = [
  {
    title: 'Mobile Development',
    skills: [
      'Flutter',
      'Dart',
      'React Native',
      'GetX',
      'Provider',
      'State Management',
      'OOP',
      'Animation',
      'Push Notifications',
      'Payment Gateways Integration',
      'Clean Architecture',
      'MVC',
      'MVVM',
    ],
  },
  {
    title: 'Web Development',
    skills: [
      'React JS',
      'JavaScript',
      'TypeScript',
      'WordPress',
      'Website Development',
      'Admin Panels & Dashboards',
      'Responsive UI/UX Design',
    ],
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'REST APIs', 'Firebase', 'Google Maps', 'Security'],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      'Git',
      'GitHub',
      'CI/CD',
      'Jira',
      'Testing',
      'Project Management',
      'Performance Optimization & Bug Fixing',
      'Play Store Publishing',
      'App Store Publishing',
      'AI Tools',
    ],
  },
];

export const experience = [
  {
    role: 'Flutter Developer',
    company: 'Fexen Smart Solutions',
    period: 'Jun 2025 — Present',
    location: 'Islamabad',
    points: [
      'Designed, developed, and maintained cross-platform Android and iOS applications in Flutter within an agile product team.',
      'Implemented scalable state management using Bloc and GetX across production applications.',
      'Integrated REST APIs, authentication flows, payment systems, and real-time push notifications in collaboration with backend engineers.',
      'Contributed to blockchain-based product features, including crypto wallet connection (WalletConnect) integration.',
      'Translated UI/UX designs into responsive, pixel-accurate interfaces alongside the design team.',
      'Managed version control and automated workflows using Git and GitHub-based CI/CD.',
    ],
    tech: ['Flutter', 'Bloc', 'GetX', 'REST APIs', 'WalletConnect', 'CI/CD'],
  },
  {
    role: 'Mid-Level Flutter Developer',
    company: 'Soft Thrive',
    period: 'Sep 2024 — Jun 2025',
    location: 'Rawalpindi',
    points: [
      'Delivered multiple client mobile applications end to end, including Sareen (separate Driver and User apps) for a Saudi Arabian client.',
      'Integrated Salla APIs for e-commerce functionality and Tap Payment Gateway for secure in-app transactions.',
      'Managed complex third-party API integrations and backend communication, ensuring reliable data flow and smooth user experience.',
      'Collaborated in cross-functional teams to scope, build, and ship features on client deadlines.',
    ],
    tech: ['Flutter', 'Salla APIs', 'Tap Payments', 'REST APIs'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Micro Merger (Pvt) Ltd',
    period: 'Apr 2024 — Sep 2024',
    location: 'Islamabad',
    points: [
      'Developed and supported large-scale government software projects, including healthcare tracking, data entry systems, and polio eradication program tools.',
      'Worked with QA teams on test cycles and defect resolution to maintain product quality across releases.',
      'Partnered with the requirements team to refine specifications and deliver solutions aligned with stakeholder needs.',
    ],
    tech: ['Flutter', 'Dart', 'REST APIs'],
  },
  {
    role: 'Junior Flutter Developer',
    company: 'Apimio',
    period: '',
    location: 'Islamabad',
    points: [
      'Built core features for Our Cart, a shopping and note-taking mobile application.',
      'Integrated Firebase services for real-time data management and cross-platform synchronization.',
      'Debugged and optimized application performance in collaboration with senior developers.',
    ],
    tech: ['Flutter', 'Firebase', 'Dart'],
  },
  {
    role: 'Senior Mobile Application Developer',
    company: 'Fiverr & Upwork',
    period: '',
    location: 'Remote · Freelance',
    points: [
      'Delivered end-to-end Flutter mobile apps for international clients sourced through Fiverr and Upwork.',
      'Managed the full freelance lifecycle: requirement gathering, scoping, development, and post-launch support.',
      'Maintained a strong client rating through clear communication and on-time delivery across multiple engagements.',
    ],
    tech: ['Flutter', 'Firebase', 'REST APIs'],
  },
  {
    role: 'Flutter Developer Intern',
    company: 'Daxno Technologies (Pvt) Ltd',
    period: '',
    location: 'Rawalpindi',
    points: [
      'Contributed to 20+ client projects, implementing UI/UX components and responsive layouts in Flutter.',
      'Translated client requirements into functional application screens under senior developer review.',
    ],
    tech: ['Flutter', 'UI/UX', 'Responsive Design'],
  },
];

export const projects = [
  {
    title: 'LearnFlow AI',
    kicker: 'AI-Powered Study Assistant',
    description:
      'A Flutter app that helps students organize study material and get instant, context-aware answers — built on Firebase Auth and Firestore with document upload and export.',
    features: ['Firebase Auth & Firestore sync', 'AI-assisted Q&A on uploaded docs', 'PDF generation & export', 'Cross-platform Android & iOS'],
    tech: ['Flutter', 'Firebase Auth', 'Cloud Firestore', 'REST APIs', 'Syncfusion PDF'],
    gradient: 'from-indigo-600 via-blue-600 to-cyan-600',
    tint: 'linear-gradient(150deg,#E3ECFF 0%,#E4F6FF 55%,#EDF2FF 100%)',
    emoji: '🧠',
    metric: 'AI-powered study assistant',
    demo: '',
    github: 'https://github.com/Muhammad-Adil005/LearnFlowAI_Project',
  },
  {
    title: 'Snil',
    kicker: 'Ride-Hailing App Concept',
    description:
      'A polished ride-hailing app with OTP-based phone onboarding and a neumorphic design system, built to model rider flows end-to-end.',
    features: ['OTP phone verification flow', 'Neumorphic design system', 'Rating & review components', 'Smooth onboarding carousel'],
    tech: ['Flutter', 'Provider', 'Neumorphic UI', 'OTP Auth'],
    gradient: 'from-amber-500 via-orange-500 to-rose-600',
    tint: 'linear-gradient(150deg,#FFF1DC 0%,#FFE6E6 55%,#FBE8FF 100%)',
    emoji: '🚕',
    metric: 'Ride-hailing UI/UX',
    demo: '',
    github: 'https://github.com/Muhammad-Adil005/snil_app',
  },
  {
    title: 'LegalStartUp',
    kicker: 'Startup & Freelance Marketplace',
    description:
      'A three-sided Flutter marketplace connecting entrepreneurs, freelancers, and investors, with dedicated flows for building a startup, offering freelance services, or finding investment opportunities.',
    features: ['Three distinct user roles', 'Rating & review system', 'Custom avatar & image stacks', 'Rich animated UI components'],
    tech: ['Flutter', 'Custom UI Components', 'Ratings & Reviews'],
    gradient: 'from-teal-600 via-emerald-600 to-green-700',
    tint: 'linear-gradient(150deg,#E3FBF2 0%,#E7F7E9 55%,#F1F5F1 100%)',
    emoji: '💼',
    metric: 'Multi-role marketplace',
    demo: '',
    github: 'https://github.com/Muhammad-Adil005/LegalStartUp',
  },
  {
    title: 'FlashChat',
    kicker: 'Real-Time Messaging App',
    description:
      'A real-time chat app with Firebase-backed authentication and live message sync, featuring named-route navigation, Hero animations, and a polished sign-up/login flow.',
    features: ['Firebase Auth sign up & login', 'Real-time Firestore messaging', 'Hero animations & named routes', 'Loading states with progress HUD'],
    tech: ['Flutter', 'GetX', 'Firebase Auth', 'Cloud Firestore'],
    gradient: 'from-sky-500 via-blue-500 to-indigo-600',
    tint: 'linear-gradient(150deg,#E5F1FF 0%,#E8ECFF 55%,#F1ECFF 100%)',
    emoji: '💬',
    metric: 'Real-time Firebase chat',
    demo: '',
    github: 'https://github.com/Muhammad-Adil005/flash-chat-app',
  },
  {
    title: 'Cat Breed Identifier',
    kicker: 'On-Device AI Image Recognition',
    description:
      "A computer-vision app that identifies a cat's breed from a photo using an on-device TensorFlow Lite model — no server round-trip required.",
    features: ['On-device ML inference (TFLite)', 'Camera & gallery image picker', 'Instant offline predictions', 'Lightweight splash experience'],
    tech: ['Flutter', 'TensorFlow Lite', 'On-Device ML', 'Image Picker'],
    gradient: 'from-orange-400 via-amber-500 to-yellow-500',
    tint: 'linear-gradient(150deg,#FFF4E0 0%,#FFEBD1 55%,#FFF6E5 100%)',
    emoji: '🐱',
    metric: 'On-device ML inference',
    demo: '',
    github: 'https://github.com/Muhammad-Adil005/cats-breed-identifier',
  },
  {
    title: 'Fitness Tracker',
    kicker: 'Personal Health & Activity Log',
    description:
      'A local-first fitness tracker where users log workouts and view progress trends on interactive charts, with all data persisted on-device via SQLite.',
    features: ['SQLite local persistence', 'Interactive progress charts', 'Responsive layout (ScreenUtil)', 'Custom native splash screen'],
    tech: ['Flutter', 'Provider', 'SQLite', 'fl_chart'],
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-600',
    tint: 'linear-gradient(150deg,#FFE9F0 0%,#FDE7FF 55%,#F6E7FF 100%)',
    emoji: '🏃',
    metric: 'Local-first health tracking',
    demo: '',
    github: 'https://github.com/Muhammad-Adil005/Fitness-tracker-app',
  },
];

export const services = [
  {
    title: 'Flutter App Development',
    text: 'End-to-end cross-platform apps for iOS & Android from a single, maintainable codebase.',
    icon: 'mobile',
  },
  {
    title: 'Backend & API Development',
    text: 'Robust REST APIs with Node.js, Express, and MongoDB — built to scale with your app.',
    icon: 'server',
  },
  {
    title: 'Firebase Integration',
    text: 'Auth, Firestore, Cloud Functions, FCM push notifications, analytics, and crash reporting.',
    icon: 'fire',
  },
  {
    title: 'App Store Publishing',
    text: 'Complete Play Store & App Store release management: listings, review handling, updates.',
    icon: 'rocket',
  },
  {
    title: 'App Performance Optimization',
    text: 'Profiling, startup-time reduction, jank elimination, and crash-rate improvement.',
    icon: 'bolt',
  },
  {
    title: 'Code Review & Consulting',
    text: 'Architecture audits, refactoring strategies, and team mentoring for Flutter projects.',
    icon: 'shield',
  },
  {
    title: 'AI Integration',
    text: 'Chatbots, smart recommendations, and AI-powered features using OpenAI and modern LLM APIs.',
    icon: 'ai',
  },
  {
    title: 'WordPress Development',
    text: 'Business websites, landing pages, and e-commerce stores built with WordPress & WooCommerce.',
    icon: 'wordpress',
  },
  {
    title: 'React Native Development',
    text: 'Cross-platform iOS & Android apps built with React Native for teams standardized on the React ecosystem.',
    icon: 'reactnative',
  },
];

export const certifications = [
  { title: 'Introduction to Artificial Intelligence (AI)', issuer: 'IBM', year: '' },
  { title: 'Getting Started with Git and GitHub', issuer: 'IBM', year: '' },
  { title: 'Taxi Booking Application using Flutter', issuer: 'Udemy', year: '' },
  { title: 'Foundations of Project Management', issuer: 'Coursera', year: '' },
  { title: 'AWS Cloud Technical Essentials', issuer: 'AWS', year: '' },
  { title: 'Scrum Foundation Professional Certification (SFPC)', issuer: 'Certiprof', year: '' },
  { title: 'Flutter & Dart — The Complete Guide', issuer: 'Udemy', year: '' },
  { title: 'AI For Everyone', issuer: 'DeepLearning.AI', year: '' },
];

export const testimonials = [
  {
    name: 'Ahmed Al-Rashid',
    role: 'CEO, Retail Startup — Riyadh',
    text: 'Muhammad Adil delivered our e-commerce app ahead of schedule with exceptional quality. Communication was clear throughout, and the app has been rock-solid since launch.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Product Manager — London',
    text: 'One of the best mobile developers we have worked with. He does not just write code — he challenges requirements and suggests better UX. A true senior engineer.',
  },
  {
    name: 'Omar Hassan',
    role: 'CTO, Health-Tech Company — Dubai',
    text: 'From architecture decisions to store publishing, Muhammad Adil owned the entire mobile pipeline. Our crash-free rate is above 99.7% thanks to his engineering discipline.',
  },
];

export const faqs = [
  {
    q: 'What does it cost to build an app with you?',
    a: 'It depends on scope. A focused MVP with auth, a handful of core screens and one payment flow typically lands in the small-project range; a multi-role marketplace with a custom backend sits well above that. Send me your feature list and I will come back with a fixed-scope quote and a delivery timeline, free of charge.',
  },
  {
    q: 'How long until my app is live on the stores?',
    a: 'A well-scoped MVP is usually 6–10 weeks from kickoff to store submission, including review handling. Larger products ship in phases so you have something testable in users’ hands within the first month rather than at the end.',
  },
  {
    q: 'Do you work with clients in other time zones?',
    a: 'Yes — most of my work has been with teams in the Gulf, Europe and North America. I keep overlapping hours with your working day, give a written update at the end of each one, and stay reachable on WhatsApp, Slack or email.',
  },
  {
    q: 'Can you take over an existing Flutter codebase?',
    a: 'Regularly. I start with an architecture and performance audit, give you an honest report on what is worth keeping, then refactor incrementally so your release cadence never stops.',
  },
  {
    q: 'Do you handle the backend too, or only the app?',
    a: 'Both. I build REST APIs with Node.js, Express and MongoDB, and I set up Firebase for auth, Firestore, Cloud Functions and push notifications — so you do not need to coordinate two separate vendors.',
  },
  {
    q: 'What happens after launch?',
    a: 'Every project includes a support window for bug fixes and store-policy updates. After that I offer a monthly retainer for new features, OS upgrades and performance monitoring, or a clean handover with documentation if you have an in-house team.',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];
