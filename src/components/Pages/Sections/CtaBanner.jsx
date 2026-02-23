const bannerImg = "/images/cta.jpg";

const CtaBanner = () => {
  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      
      {/* ================= HERO SECTION (FULLY RESPONSIVE) ================= */}
      <div className="relative w-full h-[280px] sm:h-[360px] md:h-[450px] lg:h-[520px] xl:h-[600px]">
        
        {/* Background Image */}
        <img
          src={bannerImg}
          alt="Success Students"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Full Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/85 via-[#1e3a8a]/65 to-[#0f172a]/40" />

        {/* Center Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6">
          <div className="max-w-5xl">
            
            {/* Responsive Heading */}
            <h2 className="text-white font-bold leading-tight
              text-2xl 
              sm:text-3xl 
              md:text-4xl 
              lg:text-5xl 
              xl:text-6xl">
              Shape Your{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Future Career
              </span>{" "}
              With Experts
            </h2>

            {/* Responsive Subtitle */}
            <p className="text-white/90 mt-4 mx-auto
              text-xs 
              sm:text-sm 
              md:text-base 
              lg:text-lg 
              max-w-xs 
              sm:max-w-md 
              md:max-w-2xl">
              Join thousands of successful students guided by experienced mentors
              and achieve your dream career with personalized education support.
            </p>

            <div className="mt-5 w-20 sm:w-24 md:w-28 h-[3px] mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* ================= CONTACT SECTION (ULTRA RESPONSIVE) ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
        py-10 sm:py-14 md:py-16 lg:py-20">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-blue-600 font-semibold uppercase tracking-widest
            text-xs sm:text-sm">
            Get In Touch
          </p>

          <h2 className="font-bold text-slate-800 mt-2
            text-2xl 
            sm:text-3xl 
            md:text-4xl">
            Start Your Journey Today
          </h2>

          <p className="text-slate-600 mt-3 mx-auto
            text-sm 
            sm:text-base 
            max-w-md 
            md:max-w-xl">
            Book a free consultation and take the first step towards your
            dream career with expert guidance.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid 
          grid-cols-1 
          md:grid-cols-1 
          lg:grid-cols-2 
          gap-8 
          lg:gap-12 
          items-center">
          
          {/* ===== FORM ===== */}
          <div className="w-full max-w-md sm:max-w-lg mx-auto">
            <div className="bg-white rounded-2xl 
              p-5 sm:p-6 md:p-8 
              shadow-xl border border-slate-100">
              
              <h3 className="text-center font-semibold text-slate-800 mb-6
                text-lg sm:text-xl">
                Book Free Consultation
              </h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-slate-200 rounded-lg
                    px-4 py-2.5 sm:py-3 
                    text-sm sm:text-base
                    focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-slate-200 rounded-lg
                      px-4 py-2.5 sm:py-3 
                      text-sm sm:text-base
                      focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full border border-slate-200 rounded-lg
                      px-4 py-2.5 sm:py-3 
                      text-sm sm:text-base
                      focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <textarea
                  rows="4"
                  placeholder="Tell us about your education goal..."
                  className="w-full border border-slate-200 rounded-lg
                    px-4 py-2.5 sm:py-3 
                    text-sm sm:text-base
                    resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500
                    text-white font-semibold
                    py-2.5 sm:py-3
                    text-sm sm:text-base
                    rounded-lg shadow-md
                    hover:shadow-xl hover:scale-[1.02]
                    transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* ===== CONTACT DETAILS ===== */}
          <div className="w-full max-w-md sm:max-w-lg mx-auto space-y-4 sm:space-y-5">
            {[
              {
                icon: "📞",
                title: "Call Us",
                main: "+91 9745 600 700",
                sub: "Mon-Sat, 9am - 6pm",
              },
              {
                icon: "✉️",
                title: "Email Us",
                main: "zaineducationvly@gmail.com",
                sub: "Reply within 24 hours",
              },
              {
                icon: "📍",
                title: "Visit Us",
                main: "KPM Arcade, Valancherry",
                sub: "Kerala, India",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl 
                  p-4 sm:p-5 
                  shadow-md border border-slate-100 
                  hover:shadow-xl transition">
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 
                    flex items-center justify-center 
                    rounded-full bg-blue-100 text-lg sm:text-xl">
                    {item.icon}
                  </div>

                  <div>
                    <p className="font-semibold text-slate-800 text-sm sm:text-base">
                      {item.title}
                    </p>
                    <p className="text-blue-600 font-semibold break-all text-sm sm:text-base">
                      {item.main}
                    </p>
                    <p className="text-slate-500 text-xs sm:text-sm">
                      {item.sub}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-slate-600 text-center mx-auto mt-10 sm:mt-14
          text-xs sm:text-sm md:text-base
          max-w-md md:max-w-2xl">
          <span className="font-semibold text-blue-600">
            Free Counseling Session:
          </span>{" "}
          Book a 30-minute one-on-one session with our expert counselors to
          discuss your career options and get personalized guidance.
        </p>
      </div>
    </section>
  );
};

export default CtaBanner;