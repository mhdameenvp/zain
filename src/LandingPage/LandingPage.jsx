import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/Pages/Sections/HeroSection";
import StatusSection from "../components/Pages/Sections/StatusSection";
import ProgramSection from "../components/Pages/Sections/ProgramSection";
import WhyChoose from "../components/Pages/Sections/WhyChoose";
import AboutSection from "../components/Pages/Sections/AboutSection";
import BlogSection from "../components/Pages/Sections/BlogSection";

import CtaBanner from "../components/Pages/Sections/CtaBanner";
import CareerCoursesSection from "../components/Pages/Sections/CareerCoursesSection";

const LandingPage = () => {
  return (
    <div className="landing-future relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-sky-300/25 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl animate-pulse" />
      </div>
      <Navbar />
      <section id="home" className="scroll-mt-40">
        <HeroSection />
      </section>
      <section id="campus" className="scroll-mt-40">
        <StatusSection />
      </section>
      <section id="program" className="scroll-mt-40">
        <ProgramSection />
      </section>
      <section className="scroll-mt-40">
        <WhyChoose />
      </section>
      <section id="admission" className="scroll-mt-40">
        <CareerCoursesSection />
      </section>
      <section id="about" className="scroll-mt-40">
        <AboutSection />
      </section>
      <section className="scroll-mt-40">
        <BlogSection />
      </section>
      <section id="contact" className="scroll-mt-40">
        <CtaBanner />
      </section>
      
      <Footer />
    </div>
  );
};

export default LandingPage;
