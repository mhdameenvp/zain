const heroImg = "/images/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[92vh] md:min-h-[95vh] pt-32 md:pt-36 pb-32 md:pb-40 overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <img
        src={heroImg}
        alt="Students celebrating success"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* SOFT GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 md:via-white/70 to-transparent"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-full flex items-center">
        
        {/* CONTENT WRAPPER */}
        <div className="w-full max-w-2xl flex flex-col justify-center mt-6 md:mt-10">
          
          {/* MAIN HEADING */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-snug tracking-tight text-[#1f2a44]">
            Shape Your Future with
            <br className="hidden sm:block" />
            <span className="text-[#2f4ea1] font-semibold">
              Expert Educational Guidance
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl font-normal">
            We provide personalized career counseling and admission guidance 
            for students after 10th, 12th, and graduation. Our expert mentors 
            help you choose the right course, university, and career path 
            aligned with your future goals and opportunities.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            
            {/* PRIMARY BUTTON */}
            <button className="w-full sm:w-auto bg-[#2f4ea1] hover:bg-[#253d80] text-white px-6 py-2.5 rounded-lg text-sm md:text-base font-medium shadow-md hover:shadow-lg transition-all duration-300">
              Explore Courses
            </button>

            {/* SECONDARY BUTTON */}
            <button className="w-full sm:w-auto bg-white text-gray-700 px-6 py-2.5 rounded-lg text-sm md:text-base font-medium border border-gray-200 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-300">
              Book Free Consultation
            </button>
          </div>

          {/* SUB TEXT */}
          <p className="mt-4 text-xs sm:text-sm text-gray-500">
            Trusted by 5000+ students for career and admission guidance
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;