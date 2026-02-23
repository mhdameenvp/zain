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
    <section className="relative bg-gradient-to-b from-emerald-50 via-white to-green-50 py-14 sm:py-16 md:py-20 overflow-hidden">
      
      {/* FUTURISTIC GLOW BACKGROUND */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="mb-12 md:mb-14 max-w-3xl">
          <p className="text-emerald-600 font-semibold text-sm sm:text-base mb-3 tracking-wider uppercase">
            Why Choose Us
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#1f2a44]">
            Your Success is Our
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              Mission
            </span>
          </h2>

          <p className="mt-5 text-gray-600 text-sm sm:text-[15px] md:text-base leading-relaxed">
            For over a decade, Zain has been guiding students through one of the
            most important decisions of their lives – choosing the right career
            path. We believe that with the right guidance, every student can
            achieve their dreams.
          </p>

          <p className="mt-3 text-gray-600 text-sm sm:text-[15px] md:text-base leading-relaxed">
            Our comprehensive counseling process includes aptitude assessment,
            interest mapping, career exploration, college selection, and admission
            assistance. We work closely with students and parents to ensure
            informed decision-making.
          </p>
        </div>

        {/* FUTURISTIC GLASS FEATURE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white/60 
                backdrop-blur-xl 
                border border-emerald-100 
                rounded-3xl 
                p-6 
                shadow-lg 
                transition-all 
                duration-500 
                hover:shadow-emerald-200/50 
                hover:-translate-y-2
                hover:bg-white/80
              "
            >
              {/* ICON CIRCLE (FUTURISTIC TOUCH) */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>

              {/* TITLE */}
              <h3 className="text-lg md:text-xl font-semibold text-[#1f2a44] group-hover:text-emerald-600 transition duration-300">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-gray-600 text-sm md:text-[15px] leading-relaxed">
                {item.desc}
              </p>

              {/* FUTURISTIC BOTTOM GLOW LINE */}
              <div className="mt-5 h-[2px] w-0 bg-gradient-to-r from-emerald-500 to-green-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;