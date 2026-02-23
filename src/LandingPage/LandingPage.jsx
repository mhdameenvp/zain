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
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <StatusSection />
      <ProgramSection />
      <WhyChoose />
      <CareerCoursesSection />
      <AboutSection />
      <BlogSection />
      <CtaBanner />
      
      <Footer />
    </div>
  );
};

export default LandingPage;