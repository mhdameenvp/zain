const heroImg = "/images/hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen pt-28 sm:pt-32 pb-20 sm:pb-24 bg-[#f4f5f7] overflow-hidden">
      {/* full viewport background image with gradient overlay */}
      <img
        src={heroImg}
        alt="Students celebrating success"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#10285f]/86 via-[#153372]/62 to-transparent" />

      <div className="relative z-10 flex items-start justify-center md:justify-start min-h-full pt-16 sm:pt-20 px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center md:text-left animate-fade-in">
          <h1 className="font-bold font-sans leading-[1.2] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block text-[#1a3d7c]">Shape Your Future with</span>
            <span className="block text-white">Expert Guidance</span>
          </h1>
          <p className="mt-5 text-[#1a3d7c] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-medium">
            Personalized educational counseling for students after 10th 12th grade and under graduation. We help you discover the right path to your dream career.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-3 sm:gap-4">
            <button className="bg-[#1f3f95] text-white px-6 py-3 text-sm sm:text-base font-semibold shadow-lg hover:bg-[#17306f] transition w-full sm:w-auto rounded-md">
              Find Courses
            </button>
            <button className="bg-white text-[#1f3f95] border border-[#d0daed] px-6 py-3 text-sm sm:text-base font-semibold shadow-lg hover:bg-[#e8eef8] transition w-full sm:w-auto rounded-md">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
