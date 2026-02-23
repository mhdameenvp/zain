const heroImg = "/images/hero-bg.webp"; // keep same image

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[92vh] md:min-h-[95vh] pt-32 md:pt-36 overflow-hidden">
      
      {/* BACKGROUND IMAGE (UNCHANGED - FULL CLEAN) */}
      <img
        src={heroImg}
        alt="Students celebrating success"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* SUBTLE DARK GRADIENT FOR TEXT READABILITY (NO WHITE MASK) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>

      {/* FUTURISTIC GREEN GLOW (AESTHETIC, NOT HEAVY) */}
      <div className="absolute top-16 left-8 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center min-h-[80vh]">
        
        {/* TEXT CONTENT */}
        <div className="max-w-xl">
          
          {/* HEADING (FUTURISTIC + CLEAN LIKE BROTOTYPE) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-white">
            Shape Your Future with
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent font-bold">
              Expert Guidance
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-5 text-base md:text-lg text-white/90 leading-relaxed">
            Personalized educational counseling for students after 10th, 12th grade 
            and under graduation. We help you discover the right path to your dream career.
          </p>

          {/* FUTURISTIC BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            
            {/* PRIMARY BUTTON (GLOW EFFECT) */}
            <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-emerald-400/50 hover:scale-105 transition-all duration-300">
              Find Courses
            </button>

            {/* SECONDARY BUTTON (GLASS LIGHT) */}
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* FLOATING STATS (NO BOX BEHIND - CLEAN) */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 -mt-16 md:-mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-6">
          
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-400">
              5000+
            </h2>
            <p className="text-white/80 mt-1 text-sm md:text-base">
              Students Guided
            </p>
          </div>

          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-400">
              98%
            </h2>
            <p className="text-white/80 mt-1 text-sm md:text-base">
              Success Rate
            </p>
          </div>

          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-400">
              50+
            </h2>
            <p className="text-white/80 mt-1 text-sm md:text-base">
              Expert Counselors
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;