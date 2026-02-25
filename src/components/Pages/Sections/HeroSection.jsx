const heroImg = "/images/hero-bg.webp";

const HeroSection = () => {
  return (
    <section className="relative w-full 
      bg-gradient-to-b from-white via-sky-50 to-sky-100
      pt-36 sm:pt-40 md:pt-44
      pb-16 sm:pb-20 md:pb-24
      overflow-hidden">

      {/* SOFT SKY FUTURISTIC GLOW (MATCHES ALL SECTIONS) */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.14),transparent_45%)]"></div>
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_80%_65%,rgba(125,211,252,0.12),transparent_50%)]"></div>
      
      {/* MAIN CONTAINER */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* HERO LAYOUT */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-14 lg:gap-20 min-h-[82vh]">
          
          {/* LEFT SIDE - TEXT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            
            {/* BADGE */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full 
              bg-sky-50 
              border border-sky-200/70 
              text-sm font-medium text-sky-700 
              backdrop-blur-sm mb-6">
              Trusted Career Guidance Platform
            </div>

            {/* HEADING */}
            <h1 className="font-bold leading-[1.02] tracking-[-0.02em] text-[#0f172a]
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Shape Your Future with
              <br />
              <span className="block mt-4 font-extrabold
                bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 
                bg-clip-text text-transparent
                drop-shadow-[0_2px_12px_rgba(56,189,248,0.25)]">
                Expert Guidance
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="mt-7 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed 
              max-w-xl mx-auto lg:mx-0">
              Personalized educational counseling for students after 10th, 12th grade 
              and graduation. Discover the right course, university, and career path 
              with trusted expert mentors and professional support.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              
              {/* PRIMARY CTA */}
              <button className="w-full sm:w-auto 
                bg-gradient-to-r from-sky-500 to-sky-600
                text-white px-9 py-3.5 rounded-full font-semibold 
                shadow-[0_12px_35px_rgba(56,189,248,0.35)]
                hover:shadow-[0_20px_50px_rgba(56,189,248,0.45)]
                hover:scale-[1.05] active:scale-95
                transition-all duration-300">
                Find Courses
              </button>

              {/* SECONDARY CTA */}
              <button className="w-full sm:w-auto 
                border border-sky-200 
                text-[#0f172a] px-9 py-3.5 rounded-full font-semibold 
                bg-white/80 backdrop-blur-md
                hover:bg-sky-50 hover:border-sky-300
                transition-all duration-300">
                Book Free Consultation
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl">
              
              {/* SKY AMBIENT GLOW (NOT TEAL) */}
              <div className="absolute -inset-8 
                bg-gradient-to-r from-sky-200/40 via-sky-100/30 to-sky-200/30 
                rounded-3xl blur-3xl"></div>

              {/* SOFT FUTURISTIC FRAME */}
              <div className="absolute -inset-1 rounded-3xl 
                bg-gradient-to-r from-sky-200/40 to-sky-100/30 
                blur-xl opacity-80"></div>

              <img
                src={heroImg}
                alt="Students success"
                className="relative w-full h-auto object-cover rounded-3xl 
                  shadow-[0_30px_80px_rgba(56,189,248,0.25)]
                  transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;