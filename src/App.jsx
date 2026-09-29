import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import Preloader from './components/ui/Preloader';
import CustomCursor from './components/ui/CustomCursor';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Testimonials from './components/sections/Testimonials';
import Certifications from './components/sections/Certifications';
import Faq from './components/sections/Faq';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950 focus:shadow-lg"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Certifications />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
