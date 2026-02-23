const mainImg = "/images/program-1.jpg";
const leftImg = "/images/program-2.jpg";
const rightImg = "/images/program-3.jpg";

const ProgramSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-emerald-50 via-white to-green-50 py-16 sm:py-20 md:py-24 overflow-hidden">
      
      {/* FUTURISTIC GLOW BLOBS (AESTHETIC EFFECT) */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-14 lg:gap-16 items-center">
          
          {/* ===== LEFT TEXT CONTENT (GLASS AESTHETIC) ===== */}
          <div className="max-w-2xl lg:pl-10 xl:pl-16">
            
            {/* SMALL TITLE */}
            <p className="text-emerald-600 font-semibold mb-4 text-sm sm:text-base tracking-wider uppercase">
              Our Program
            </p>

            {/* HEADING (ADDED FOR FUTURISTIC LOOK) */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1f2a44] leading-tight">
              Career-Focused Programs
              <span className="block bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                Designed for Your Future
              </span>
            </h2>

            {/* PARAGRAPH 1 (UNCHANGED CONTENT) */}
            <p className="mt-6 text-gray-600 text-sm sm:text-[15px] md:text-base leading-relaxed">
              After completing +2, choosing the right course is a crucial step in shaping a successful future, as it directly influences a student’s career direction, skill development, and long-term opportunities. We provide expert guidance across a wide range of courses including Medical & Paramedical, Arts, Science, Commerce, Engineering, Technology, and other professional programs, ensuring that students clearly understand the scope, eligibility, and career prospects of each option before making a decision.
            </p>

            {/* PARAGRAPH 2 (UNCHANGED CONTENT) */}
            <p className="mt-4 text-gray-600 text-sm sm:text-[15px] md:text-base leading-relaxed">
              With personalized counselling, we help students identify courses that truly match their interests, academic strengths, aptitude, and career goals. Our counselling process includes one-on-one discussions, career assessments, and detailed course insights so that students can confidently choose a path that suits their abilities and future ambitions, rather than making decisions based on confusion, peer pressure, or limited information.
            </p>

            {/* FUTURISTIC CTA BUTTON */}
            <button className="mt-7 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:shadow-emerald-300/50 hover:scale-105 transition-all duration-300">
              Explore Programs
            </button>
          </div>

          {/* ===== RIGHT IMAGE GRID (FUTURISTIC GLASS STYLE) ===== */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            
            {/* BIG TOP IMAGE */}
            <div className="col-span-2 group overflow-hidden rounded-2xl shadow-lg bg-white/60 backdrop-blur-xl border border-emerald-100">
              <img
                src={mainImg}
                alt="Program Main"
                className="w-full h-52 sm:h-60 md:h-64 lg:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* BOTTOM LEFT IMAGE */}
            <div className="group overflow-hidden rounded-2xl shadow-md bg-white/60 backdrop-blur-xl border border-emerald-100">
              <img
                src={leftImg}
                alt="Program Left"
                className="w-full h-36 sm:h-44 md:h-48 lg:h-[190px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* BOTTOM RIGHT IMAGE */}
            <div className="group overflow-hidden rounded-2xl shadow-md bg-white/60 backdrop-blur-xl border border-emerald-100">
              <img
                src={rightImg}
                alt="Program Right"
                className="w-full h-36 sm:h-44 md:h-48 lg:h-[190px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProgramSection;