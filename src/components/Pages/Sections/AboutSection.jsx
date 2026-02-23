const AboutSection = () => {
  // Public folder image paths (Deployment Safe)
  const personImg = "/images/person.jpg";
  const campusImg = "/images/university.jpg";

  const logo1 = "/images/hindustan.png";
  const logo2 = "/images/yenepoya.png";
  const logo3 = "/images/sjb.jpg";
  const logo4 = "/images/srinivas.png";

  return (
    <section className="w-full bg-[#e9f1f8]">
      {/* Smaller main container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14">

        {/* ================= ABOUT US ================= */}
        <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-6 sm:p-8">
          <p className="text-center text-xs sm:text-sm text-gray-500 mb-2">
            About us
          </p>

          <h2 className="text-center text-lg sm:text-2xl md:text-3xl font-semibold text-[#2f4ea1] mb-6 sm:mb-8">
            Your Trusted Partner in Education
          </h2>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            
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
              <img
                src={personImg}
                alt="Director"
                loading="lazy"
                className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* ================= FEATURED UNIVERSITIES (SLIM HEIGHT STRIP) ================= */}
        <div className="bg-[#dbe7f3] mt-6 rounded-lg py-3 px-4 border border-blue-100">
          
          <h3 className="text-center text-sm sm:text-base font-medium text-[#2f4ea1] mb-3">
            Featured Universities and Premium Institutions
          </h3>

          {/* Slim Logo Row (NO TALL BOXES) */}
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-6 sm:gap-10">
            
            {[logo1, logo2, logo3, logo4].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center 
                           h-10 sm:h-12 
                           px-4 sm:px-5
                           bg-white rounded-md 
                           shadow-sm border border-gray-100
                           hover:shadow-md transition"
              >
                <img
                  src={logo}
                  alt={`University ${index + 1}`}
                  loading="lazy"
                  className="h-6 sm:h-7 md:h-8 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ================= CONFUSED SECTION ================= */}
        <div className="bg-white rounded-xl shadow-sm border border-blue-100 mt-6 p-6 sm:p-8">
          <p className="text-sm text-gray-500 mb-2">
            Are You Confused !
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#2f4ea1] mb-5 leading-snug">
            How to Choose a Course & University !?
          </h2>

          {/* Responsive Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            
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
              <img
                src={campusImg}
                alt="University Campus"
                loading="lazy"
                className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] 
                           h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;