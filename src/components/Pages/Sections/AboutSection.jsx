import personImg from "../../../assets/images/person.jpg";
import campusImg from "../../../assets/images/university.jpg";

import logo1 from "../../../assets/images/hindustan.png";
import logo2 from "../../../assets/images/yenepoya.png";
import logo3 from "../../../assets/images/sjb.jpg";
import logo4 from "../../../assets/images/srinivas.png";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#e9f1f8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16">

        {/* ================= ABOUT US ================= */}
        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 md:p-10">
          <p className="text-center text-xs sm:text-sm text-gray-500 mb-2">
            About us
          </p>

          <h2 className="text-center text-lg sm:text-2xl md:text-3xl font-semibold text-[#2f4ea1] mb-6 sm:mb-10">
            Your Trusted Partner in Education
          </h2>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
            
            {/* TEXT */}
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed text-center md:text-left">
              <p className="mb-4">
                Thahir Zain is an experienced education professional with over
                15 years of expertise, having guided more than ten thousand
                students in Kerala and beyond toward the right career paths.
              </p>

              <p className="mb-4">
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

            {/* IMAGE */}
            <div className="flex justify-center md:justify-end">
              <img
                src={personImg}
                alt="Director"
                className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* ================= UNIVERSITY LOGOS (BIGGER + SAME SIZE) ================= */}
        <div className="bg-[#d8e6f4] mt-8 sm:mt-10 rounded-xl py-8 px-4 sm:px-6">
          <h3 className="text-center text-sm sm:text-base md:text-lg font-medium text-[#2f4ea1] mb-8">
            Featured Universities and Premium Institutions
          </h3>

          {/* Fully Responsive Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-12 items-center justify-items-center">
            
            {/* LOGO CARD 1 */}
            <div className="w-32 sm:w-36 md:w-40 lg:w-44 h-16 sm:h-18 md:h-20 lg:h-24 flex items-center justify-center bg-white rounded-lg shadow-sm p-3">
              <img
                src={logo1}
                alt="Hindustan University"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* LOGO CARD 2 */}
            <div className="w-32 sm:w-36 md:w-40 lg:w-44 h-16 sm:h-18 md:h-20 lg:h-24 flex items-center justify-center bg-white rounded-lg shadow-sm p-3">
              <img
                src={logo2}
                alt="Yenepoya University"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* LOGO CARD 3 */}
            <div className="w-32 sm:w-36 md:w-40 lg:w-44 h-16 sm:h-18 md:h-20 lg:h-24 flex items-center justify-center bg-white rounded-lg shadow-sm p-3">
              <img
                src={logo3}
                alt="SJB Institute"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* LOGO CARD 4 */}
            <div className="w-32 sm:w-36 md:w-40 lg:w-44 h-16 sm:h-18 md:h-20 lg:h-24 flex items-center justify-center bg-white rounded-lg shadow-sm p-3">
              <img
                src={logo4}
                alt="Srinivas University"
                className="max-h-full max-w-full object-contain"
              />
            </div>

          </div>
        </div>

        {/* ================= ARE YOU CONFUSED SECTION ================= */}
        <div className="bg-white rounded-xl shadow-sm mt-8 sm:mt-10 p-6 sm:p-8 md:p-10">
          <p className="text-sm sm:text-base text-gray-500 mb-2">
            Are You Confused !
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#2f4ea1] mb-6 leading-snug">
            How to Choose a Course & University !?
          </h2>

          {/* Responsive Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            
            {/* FULL TEXT */}
            <div className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-center md:text-left">
              <p className="mb-4">
                For over a decade, EduPath has been guiding students through one
                of the most important decisions of their lives – choosing the
                right career path. We believe that with the right guidance,
                every student can achieve their dreams.
              </p>

              <p>
                Our comprehensive counseling process includes aptitude
                assessment, interest mapping, career exploration, college
                selection, and admission assistance. We work closely with
                students and parents to ensure informed decision-making.
              </p>
            </div>

            {/* IMAGE RIGHT */}
            <div className="flex justify-center md:justify-end">
              <img
                src={campusImg}
                alt="University Campus"
                className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[450px] h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg shadow-md"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;