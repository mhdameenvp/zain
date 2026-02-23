const AboutSection = () => {
  // Public folder image paths (Deployment Safe)
  const personImg = "/images/person.jpg";
  const campusImg = "/images/university.jpg";

  const logo1 = "/images/hindustan.png";
  const logo2 = "/images/yenepoya.png";
  const logo3 = "/images/sjb.jpg";
  const logo4 = "/images/srinivas.png";

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-emerald-50 to-green-50 overflow-hidden">
      
      {/* FUTURISTIC GLOW BACKGROUND */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200/30 rounded-full blur-3xl"></div>

      {/* FULL WIDTH WRAPPER (Matches Website Alignment) */}
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16">

          {/* ================= ABOUT US (GLASS CARD) ================= */}
          <div className="w-full bg-white/70 backdrop-blur-2xl rounded-2xl shadow-xl border border-emerald-100 p-6 sm:p-8 transition-all duration-500 hover:shadow-emerald-200/40">
            
            <p className="text-center text-xs sm:text-sm text-emerald-600 mb-2 uppercase tracking-wider">
              About Us
            </p>

            <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-[#1f2a44] mb-8">
              Your Trusted Partner in{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                Education
              </span>
            </h2>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* TEXT */}
              <div className="text-gray-700 text-sm sm:text-base leading-relaxed text-center md:text-left">
                <p className="mb-3">
                  Thahir Zain is an experienced education professional with over
                  15 years of expertise, having guided more than ten thousand
                  students in Kerala and beyond toward the right career paths.
                </p>

                <p className="mb-3">
                  As the Managing Director of Zain Educational Services and
                  Managing Partner of Atom Science Institute, he provides expert
                  guidance on course selection, admissions to premier institutions
                  in India and abroad, entrance exams, scholarships, and overseas
                  education.
                </p>

                <p>
                  He also conducts training sessions for students and parents and
                  offers counseling on skill-oriented courses aligned with modern
                  career demands.
                </p>
              </div>

              {/* DIRECTOR IMAGE */}
              <div className="flex justify-center md:justify-end">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-300 to-green-300 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <img
                    src={personImg}
                    alt="Director"
                    loading="lazy"
                    className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 object-cover rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= FEATURED UNIVERSITIES ================= */}
          <div className="w-full bg-white/60 backdrop-blur-xl mt-8 rounded-2xl py-4 px-4 border border-emerald-100 shadow-lg">
            
            <h3 className="text-center text-sm sm:text-base font-semibold text-[#1f2a44] mb-4">
              Featured Universities and Premium Institutions
            </h3>

            {/* Logo Row */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-6 sm:gap-10">
              {[logo1, logo2, logo3, logo4].map((logo, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center 
                             h-11 sm:h-12 px-5
                             bg-white rounded-xl 
                             shadow-md border border-emerald-100
                             hover:-translate-y-1 hover:shadow-emerald-200/50 
                             transition-all duration-300"
                >
                  <img
                    src={logo}
                    alt={`University ${index + 1}`}
                    loading="lazy"
                    className="h-6 sm:h-7 md:h-8 object-contain opacity-90 group-hover:opacity-100 transition"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ================= CONFUSED SECTION ================= */}
          <div className="w-full bg-white/70 backdrop-blur-2xl rounded-2xl shadow-xl border border-emerald-100 mt-8 p-6 sm:p-8 transition-all duration-500 hover:shadow-emerald-200/40">
            
            <p className="text-sm text-emerald-600 mb-2 uppercase tracking-wider">
              Are You Confused?
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-[#1f2a44] mb-6 leading-snug">
              How to Choose a Course &{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                University?
              </span>
            </h2>

            {/* Responsive Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* TEXT */}
              <div className="text-gray-700 text-sm sm:text-base leading-relaxed text-center md:text-left">
                <p className="mb-3">
                  For over a decade, EduPath has been guiding students through one
                  of the most important decisions of their lives – choosing the
                  right career path. We believe that with the right guidance,
                  every student can achieve their dreams.
                </p>

                <p>
                  Our comprehensive counseling process includes aptitude
                  assessment, interest mapping, career exploration, college
                  selection, and admission assistance. We work closely with
                  students and parents to ensure informed decision-making.
                </p>
              </div>

              {/* CAMPUS IMAGE */}
              <div className="flex justify-center md:justify-end">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-200 to-green-200 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition"></div>
                  <img
                    src={campusImg}
                    alt="University Campus"
                    loading="lazy"
                    className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] 
                               h-48 sm:h-56 md:h-64 object-cover rounded-2xl shadow-lg
                               transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;