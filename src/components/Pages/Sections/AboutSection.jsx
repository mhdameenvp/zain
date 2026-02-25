const AboutSection = () => {
  const personImg = "/images/person.jpg";
  const campusImg = "/images/university.jpg";
  const featuredUniversities = [
    { name: "Yenepoya University", logo: "/images/yenepoya.png" },
    { name: "Srinivas University", logo: "/images/srinivas.png" },
    { name: "Hindustan Institute", logo: "/images/hindustan.png" },
    { name: "SJB Group", logo: "/images/sjb.jpg" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-sky-50 to-sky-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(56,189,248,0.14),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(125,211,252,0.12),transparent_50%)]" />

      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20">
          <div className="w-full bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(56,189,248,0.12)] border border-sky-100 p-6 sm:p-8 transition-all duration-500 hover:shadow-[0_30px_70px_rgba(56,189,248,0.18)] hover:-translate-y-1">
            <p className="text-center text-xs sm:text-sm text-sky-600 mb-2 uppercase tracking-[0.2em] font-semibold">
              About Us
            </p>

            <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-[#0f172a] mb-8 tracking-tight">
              Your Trusted Partner in {" "}
              <span className="bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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

              <div className="flex justify-center md:justify-end">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-r from-sky-300 to-sky-200 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <img
                    src={personImg}
                    alt="Director"
                    loading="lazy"
                    className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 object-cover rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgba(56,189,248,0.25)]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full relative overflow-hidden bg-white/80 backdrop-blur-xl mt-10 rounded-[28px] py-8 px-4 sm:px-6 border border-cyan-200/45 shadow-[0_22px_55px_rgba(56,189,248,0.2)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(56,189,248,0.16),transparent_42%),radial-gradient(circle_at_88%_75%,rgba(45,212,191,0.14),transparent_45%)]" />
            <div className="pointer-events-none absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-cyan-300/25 blur-3xl" />

            <p className="relative text-center text-xs sm:text-sm text-cyan-200 font-bold uppercase tracking-[0.24em] mb-2">
              Our Trusted Network
            </p>
            <h3 className="relative text-center text-xl sm:text-2xl md:text-3xl font-extrabold text-cyan-100 mb-2 tracking-tight">
              Featured Universities and Premium Institutions
            </h3>
            <p className="relative text-center text-sm sm:text-base text-sky-100 mb-6 max-w-3xl mx-auto">
              Strong partnerships with leading universities to give you better opportunities,
              smoother admissions, and confident career decisions.
            </p>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {featuredUniversities.map((university) => (
                <div
                  key={university.name}
                  className="rounded-[22px] border border-cyan-100/70 bg-white px-3 py-3 sm:py-4 shadow-[0_12px_30px_rgba(14,165,233,0.2)]"
                >
                  <div className="rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-slate-50 p-3 min-h-[76px] flex items-center justify-center">
                    <img
                      src={university.logo}
                      alt={university.name}
                      loading="lazy"
                      className="max-h-20 sm:max-h-24 w-auto object-contain"
                    />
                  </div>
                  <h4 className="mt-2 text-center text-sm sm:text-base font-extrabold !text-slate-900 tracking-tight">
                    {university.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(56,189,248,0.12)] border border-sky-100 mt-10 p-6 sm:p-8 transition-all duration-500 hover:shadow-[0_30px_70px_rgba(56,189,248,0.18)] hover:-translate-y-1">
            <p className="text-sm text-sky-600 mb-2 uppercase tracking-[0.2em] font-semibold">
              Are You Confused?
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-6 leading-snug tracking-tight">
              How to Choose a Course & {" "}
              <span className="bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
                University?
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-gray-700 text-sm sm:text-base leading-relaxed text-center md:text-left">
                <p className="mb-3">
                  For more than a decade, EduPath has been helping students make
                  one of the most important choices in their lives - finding the
                  right career path. We are here to support you at every step, so
                  you do not have to figure it all out alone.
                </p>

                <p className="mb-3">
                  With the right guidance, every student has the potential to
                  achieve their dreams. That is why we focus on understanding your
                  strengths, interests, and goals before guiding you toward the
                  best career options.
                </p>

                <p>
                  Our step-by-step counseling process is designed to help you with
                  aptitude assessment, interest mapping, career exploration,
                  college selection, and admission support. We work closely with
                  both students and parents to make sure every decision is clear,
                  confident, and future-focused.
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-r from-sky-200 to-sky-100 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <img
                    src={campusImg}
                    alt="University Campus"
                    loading="lazy"
                    className="relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-[560px] lg:max-w-[650px] h-60 sm:h-72 md:h-80 lg:h-[26rem] object-cover rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgba(56,189,248,0.25)]"
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
