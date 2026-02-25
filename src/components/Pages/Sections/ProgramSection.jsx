const mainImg = "/images/program-1.jpg";
const leftImg = "/images/program-2.jpg";
const rightImg = "/images/program-3.jpg";

const ProgramSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-sky-50 to-sky-100 py-16 sm:py-20 md:py-24 overflow-hidden">
      
      {/* SOFT SKY FUTURISTIC GLOW (MATCHES ALL SECTIONS) */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_15%_30%,rgba(56,189,248,0.14),transparent_45%)]"></div>
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_85%_75%,rgba(125,211,252,0.12),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-14 lg:gap-16 items-center">
          
          {/* ===== LEFT TEXT CONTENT ===== */}
          <div className="max-w-2xl lg:pl-10 xl:pl-16">
            
            {/* SMALL TITLE */}
            <p className="text-sky-600 font-semibold mb-4 text-sm sm:text-base tracking-wider uppercase">
              Our Program
            </p>

            {/* HEADING */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] leading-tight tracking-tight">
              Career-Focused Programs
              <span className="block bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
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

            {/* CTA BUTTON (MATCHES HERO BUTTON STYLE) */}
            <button className="mt-7 bg-gradient-to-r from-sky-500 to-sky-600 text-white px-7 py-3 rounded-full font-semibold 
              shadow-[0_12px_35px_rgba(56,189,248,0.35)]
              hover:shadow-[0_20px_50px_rgba(56,189,248,0.45)]
              hover:scale-105 transition-all duration-300">
              Explore Programs
            </button>
          </div>

          {/* ===== RIGHT IMAGE GRID ===== */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            
            {/* BIG TOP IMAGE */}
            <div className="col-span-2 group overflow-hidden rounded-2xl 
              shadow-[0_20px_50px_rgba(56,189,248,0.18)] 
              bg-white/80 backdrop-blur-md border border-sky-100
              transition-all duration-500 hover:-translate-y-1">
              <img
                src={mainImg}
                alt="Program Main"
                className="w-full h-52 sm:h-60 md:h-64 lg:h-[300px] object-cover 
                transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* BOTTOM LEFT IMAGE */}
            <div className="group overflow-hidden rounded-2xl 
              shadow-md bg-white/80 backdrop-blur-md border border-sky-100
              transition-all duration-500 hover:-translate-y-1 
              hover:shadow-[0_15px_40px_rgba(56,189,248,0.22)]">
              <img
                src={leftImg}
                alt="Program Left"
                className="w-full h-36 sm:h-44 md:h-48 lg:h-[190px] object-cover 
                transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* BOTTOM RIGHT IMAGE */}
            <div className="group overflow-hidden rounded-2xl 
              shadow-md bg-white/80 backdrop-blur-md border border-sky-100
              transition-all duration-500 hover:-translate-y-1 
              hover:shadow-[0_15px_40px_rgba(56,189,248,0.22)]">
              <img
                src={rightImg}
                alt="Program Right"
                className="w-full h-36 sm:h-44 md:h-48 lg:h-[190px] object-cover 
                transition-transform duration-500 group-hover:scale-105"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProgramSection;