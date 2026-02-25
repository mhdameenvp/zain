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
    <section className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-sky-50 to-sky-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(56,189,248,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_70%,rgba(125,211,252,0.10),transparent_45%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 md:mb-16 max-w-3xl">
          <p className="text-sky-600 font-semibold text-sm sm:text-base mb-3 tracking-[0.15em] uppercase">
            Why Choose Us
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#0f172a] tracking-tight">
            Your Success is Our
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
              Mission
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-sm sm:text-[15px] md:text-base leading-relaxed">
            For over a decade, Zain has been guiding students through one of the
            most important decisions of their lives - choosing the right career
            path. We believe that with the right guidance, every student can
            achieve their dreams.
          </p>

          <p className="mt-4 text-gray-600 text-sm sm:text-[15px] md:text-base leading-relaxed">
            Our comprehensive counseling process includes aptitude assessment,
            interest mapping, career exploration, college selection, and admission
            assistance. We work closely with students and parents to ensure
            informed decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-cyan-200/40 bg-white/80 p-6 shadow-[0_10px_30px_rgba(56,189,248,0.12)] backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:border-cyan-300/70 hover:shadow-[0_26px_60px_rgba(56,189,248,0.28)]"
            >
              <div className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="mb-4 inline-flex items-center rounded-full border border-cyan-300/40 bg-sky-50/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-cyan-300">
                0{index + 1}
              </div>

              <h3 className="text-lg md:text-xl font-semibold tracking-tight text-[#0f172a] transition-colors duration-300 group-hover:text-sky-600">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm md:text-[15px] leading-relaxed">
                {item.desc}
              </p>

              <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-sky-50/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300 transition-all duration-300 group-hover:gap-3 group-hover:border-cyan-300/70 group-hover:bg-sky-100/10">
                Learn More
                <span className="transition-transform duration-300 group-hover:translate-x-1">-&gt;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
