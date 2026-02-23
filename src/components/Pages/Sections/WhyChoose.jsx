const features = [
  {
    title: "Personalized Approach",
    desc: "Every student is unique. We create customized career plans based on your interests, strengths, and goals.",
  },
  {
    title: "Expert Counselors",
    desc: "Our team consists of experienced educators, industry professionals, and certified career counselors.",
  },
  {
    title: "Proven Track Record",
    desc: "We have successfully guided students in choosing the right courses and securing admissions in top institutions.",
  },
  {
    title: "Continuous Support",
    desc: "From initial counseling to admission completion, we provide end-to-end support throughout your journey.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-[#f5f8ff] py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="mb-10 md:mb-12">
          <p className="text-blue-600 font-semibold text-sm sm:text-base mb-2 tracking-wide">
            Why Choose Us
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2f4ea1] leading-tight">
            Your Success is Our
            <br className="hidden sm:block" />
            Mission
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-[15px] md:text-base leading-relaxed max-w-3xl">
            For over a decade, Zain has been guiding students through one of the
            most important decisions of their lives – choosing the right career
            path. We believe that with the right guidance, every student can
            achieve their dreams.
          </p>

          <p className="mt-3 text-gray-600 text-sm sm:text-[15px] md:text-base leading-relaxed max-w-3xl">
            Our comprehensive counseling process includes aptitude assessment,
            interest mapping, career exploration, college selection, and admission
            assistance. We work closely with students and parents to ensure
            informed decision-making.
          </p>
        </div>

        {/* LIGHT BLUE CLEAN FEATURE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* TITLE */}
              <h3 className="text-[#2f4ea1] text-base sm:text-lg md:text-xl font-semibold">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-gray-600 text-sm md:text-[15px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;