const heroImg = "/images/hero-bg.webp"; // your image

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white via-sky-50 to-cyan-50 pt-28 sm:pt-32 md:pt-36">
      
      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* HERO LAYOUT */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 min-h-[70vh]">
          
          {/* LEFT SIDE - TEXT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            
            {/* HEADING */}
            <h1 className="font-semibold leading-[1.1] tracking-tight text-[#0f172a]
                           text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Shape Your Future with
              <br />
              <span className="block mt-2 bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent font-bold">
                Expert Guidance
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Personalized educational counseling for students after 10th, 12th grade 
              and graduation. Discover the right course, university, and career path 
              with trusted expert guidance and professional support.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              
              {/* FIND COURSES */}
              <button className="w-full sm:w-auto bg-gradient-to-r from-sky-500 to-cyan-500 
                                 text-white px-8 py-3.5 rounded-full font-semibold 
                                 shadow-lg hover:shadow-cyan-300/50 hover:scale-105 
                                 transition-all duration-300">
                Find Courses
              </button>

              {/* BOOK CONSULTATION */}
              <button className="w-full sm:w-auto border border-sky-200 
                                 text-[#0f172a] px-8 py-3.5 rounded-full font-semibold 
                                 bg-white hover:bg-sky-50 transition-all duration-300">
                Book Free Consultation
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl">
              
              {/* SOFT OCEAN GLOW */}
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-200/50 to-cyan-200/50 rounded-3xl blur-2xl"></div>

              <img
                src={heroImg}
                alt="Students success"
                className="relative w-full h-auto object-cover rounded-3xl shadow-2xl"
              />
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;