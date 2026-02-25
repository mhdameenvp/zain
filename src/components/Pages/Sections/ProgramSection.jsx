const ProgramSection = () => {
  const mainImg = "/images/program-1.jpg";

  return (
    <section className="relative bg-[#f1f3f7] py-14 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="max-w-2xl">
            <p className="text-[#1f3f95] font-semibold text-xs sm:text-sm tracking-[0.12em] uppercase">
              Our Program
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1f3f95] leading-tight tracking-tight">
              Program Designed for
              <span className="block">Your Success</span>
            </h2>

            <p className="mt-6 text-[#23324a] text-base sm:text-lg leading-relaxed">
              After completing +2, choosing the right course is a crucial step in shaping a successful
              future. We provide expert guidance across Medical and Paramedical, Arts, Science, Commerce,
              Engineering, Technology, and other professional programs.
            </p>

            <p className="mt-4 text-[#23324a] text-base sm:text-lg leading-relaxed">
              Through personalized counseling, we help students choose courses that match their interests,
              aptitude, and long-term goals with clarity and confidence.
            </p>

            <button className="mt-8 bg-[#2a57b8] text-white px-8 py-3 rounded-md font-semibold shadow-md hover:bg-[#1f3f95] transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={mainImg}
              alt="Nursing and healthcare program"
              className="w-full max-w-[560px] h-auto object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
