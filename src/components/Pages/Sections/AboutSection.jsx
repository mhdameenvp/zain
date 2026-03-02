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
    <section className="w-full bg-[#f7f8fb] py-14 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-white border border-[#dde5f1] p-6 sm:p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.12em] text-[#2a57b8] font-semibold">About Us</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[#1f3f95]">Your Trusted Partner in Education</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6">
            <div className="text-[#34445f] leading-relaxed">
              <p>
                Thahir Zain is an experienced education professional with over 15 years of expertise,
                guiding thousands of students toward the right career paths.
              </p>
              <p className="mt-3">
                As the Managing Director of Zain Educational Services, he supports students with
                course selection, admissions, scholarships, and overseas education options.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img src={personImg} alt="Director" className="w-56 h-56 object-cover shadow-md" />
            </div>
          </div>
        </div>

        <div className="bg-[#dbe7f4] border border-[#ccdaee] p-6 sm:p-8 shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#1f3f95] text-center">Featured Universities</h3>
          <p className="text-center text-[#2e4468] mt-2">Our partner institutions for reliable admissions support.</p>

          <div className="mt-6 flex justify-center">
            <img src="/images/featured-university.png" alt="Featured Universities" className="w-full max-w-4xl h-auto object-contain" />
          </div>
        </div>

        <div className="bg-white border border-[#dde5f1] p-6 sm:p-8 shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#1f3f95]">How to Choose the Right Course and University</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6">
            <div className="text-[#34445f] leading-relaxed">
              <p>
                Our step-by-step counseling process includes aptitude assessment, interest mapping,
                college shortlisting, and admission support.
              </p>
              <p className="mt-3">
                We work with students and parents to make each decision clear, practical, and aligned
                with long-term career outcomes.
              </p>
            </div>
            <img src={campusImg} alt="University campus" className="w-full h-64 sm:h-72 md:h-80 object-cover shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
