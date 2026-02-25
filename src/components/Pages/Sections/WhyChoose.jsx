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
    <section className="w-full py-14 sm:py-16 md:py-20 bg-[#f7f8fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-12 max-w-3xl">
          <p className="text-[#1f3f95] font-semibold text-sm tracking-[0.12em] uppercase">Why Choose Us</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#1f3f95]">
            Your Success Is Our Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div key={item.title} className="bg-white border border-[#dde5f1] p-6 shadow-sm hover:shadow-md transition">
              <p className="text-[#2a57b8] text-sm font-semibold">0{index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-[#1f3f95]">{item.title}</h3>
              <p className="mt-3 text-[#364a67] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
