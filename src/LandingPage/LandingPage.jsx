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
    <div className="landing-future relative min-h-screen flex flex-col">
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
      <section id="blog" className="scroll-mt-40">
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
