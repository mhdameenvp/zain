const mainImg = "/images/program-1.jpg";
const leftImg = "/images/program-2.jpg";
const rightImg = "/images/program-3.jpg";

const ProgramSection = () => {
  return (
    <section className="bg-[#f5f7fb] py-14 sm:py-18 md:py-22 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          
          {/* ===== LEFT TEXT CONTENT ===== */}
          <div className="max-w-2xl lg:pl-16 xl:pl-20">
            {/* SMALL TITLE */}
            <p className="text-blue-600 font-semibold mb-4 text-sm sm:text-base tracking-wide">
              Our Program
            </p>

            {/* PARAGRAPH 1 */}
            <p className="text-gray-600 text-sm sm:text-[15px] md:text-base leading-relaxed">
              After completing +2, choosing the right course is a crucial step in shaping a successful future, as it directly influences a student’s career direction, skill development, and long-term opportunities. We provide expert guidance across a wide range of courses including Medical & Paramedical, Arts, Science, Commerce, Engineering, Technology, and other professional programs, ensuring that students clearly understand the scope, eligibility, and career prospects of each option before making a decision.
            </p>

            {/* PARAGRAPH 2 */}
            <p className="mt-4 text-gray-600 text-sm sm:text-[15px] md:text-base leading-relaxed">
              With personalized counselling, we help students identify courses that truly match their interests, academic strengths, aptitude, and career goals. Our counselling process includes one-on-one discussions, career assessments, and detailed course insights so that students can confidently choose a path that suits their abilities and future ambitions, rather than making decisions based on confusion, peer pressure, or limited information.
            </p>
          </div>

          {/* ===== RIGHT IMAGE GRID ===== */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            
            {/* BIG TOP IMAGE */}
            <div className="col-span-2 overflow-hidden rounded-xl shadow-sm">
              <img
                src={mainImg}
                alt="Program Main"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-[280px] object-cover"
              />
            </div>

            {/* BOTTOM LEFT IMAGE */}
            <div className="overflow-hidden rounded-xl shadow-sm">
              <img
                src={leftImg}
                alt="Program Left"
                className="w-full h-32 sm:h-40 md:h-44 lg:h-[180px] object-cover"
              />
            </div>

            {/* BOTTOM RIGHT IMAGE */}
            <div className="overflow-hidden rounded-xl shadow-sm">
              <img
                src={rightImg}
                alt="Program Right"
                className="w-full h-32 sm:h-40 md:h-44 lg:h-[180px] object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProgramSection;