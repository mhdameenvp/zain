const bannerImg = "/images/cta.jpg";

const CtaBanner = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-emerald-50 to-green-50 overflow-hidden">
      
      {/* FUTURISTIC GLOW BACKGROUND */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>

      {/* ================= HERO CTA BANNER ================= */}
      <div className="relative w-full h-[300px] sm:h-[380px] md:h-[460px] lg:h-[540px] xl:h-[620px] overflow-hidden">
        
        {/* Background Image (UNCHANGED) */}
        <img
          src={bannerImg}
          alt="Success Students"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* FUTURISTIC GREEN OVERLAY (THEME MATCH) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#022c22]/85 via-[#065f46]/70 to-[#022c22]/50" />

        {/* Center Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6">
          <div className="max-w-5xl">
            
            {/* HEADING (AESTHETIC GRADIENT TEXT) */}
            <h2 className="text-white font-bold leading-tight
              text-2xl 
              sm:text-3xl 
              md:text-4xl 
              lg:text-5xl 
              xl:text-6xl">
              Shape Your{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent">
                Future Career
              </span>{" "}
              With Experts
            </h2>

            {/* Subtitle */}
            <p className="text-white/90 mt-4 mx-auto
              text-sm 
              sm:text-base 
              md:text-lg 
              max-w-xs 
              sm:max-w-md 
              md:max-w-2xl">
              Join thousands of successful students guided by experienced mentors
              and achieve your dream career with personalized education support.
            </p>

            {/* FUTURISTIC GLOW LINE */}
            <div className="mt-6 w-24 sm:w-28 md:w-32 h-[3px] mx-auto bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
        py-12 sm:py-16 md:py-20">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-emerald-600 font-semibold uppercase tracking-widest
            text-xs sm:text-sm">
            Get In Touch
          </p>

          <h2 className="font-bold text-[#1f2a44] mt-3
            text-2xl 
            sm:text-3xl 
            md:text-4xl">
            Start Your{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              Journey Today
            </span>
          </h2>

          <p className="text-gray-600 mt-4 mx-auto
            text-sm 
            sm:text-base 
            max-w-md 
            md:max-w-xl">
            Book a free consultation and take the first step towards your
            dream career with expert guidance.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* ===== FUTURISTIC GLASS FORM ===== */}
          <div className="w-full max-w-lg mx-auto">
            <div className="bg-white/70 backdrop-blur-2xl rounded-3xl 
              p-6 sm:p-8 
              shadow-xl border border-emerald-100 
              hover:shadow-emerald-200/40 transition-all duration-500">
              
              <h3 className="text-center font-semibold text-[#1f2a44] mb-7
                text-lg sm:text-xl">
                Book Free Consultation
              </h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-emerald-100 rounded-xl
                    px-4 py-3 text-sm sm:text-base
                    bg-white/80 backdrop-blur
                    focus:ring-2 focus:ring-emerald-400 outline-none transition"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-emerald-100 rounded-xl
                      px-4 py-3 text-sm sm:text-base
                      bg-white/80 backdrop-blur
                      focus:ring-2 focus:ring-emerald-400 outline-none transition"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full border border-emerald-100 rounded-xl
                      px-4 py-3 text-sm sm:text-base
                      bg-white/80 backdrop-blur
                      focus:ring-2 focus:ring-emerald-400 outline-none transition"
                  />
                </div>

                <textarea
                  rows="4"
                  placeholder="Tell us about your education goal..."
                  className="w-full border border-emerald-100 rounded-xl
                    px-4 py-3 text-sm sm:text-base
                    bg-white/80 backdrop-blur resize-none
                    focus:ring-2 focus:ring-emerald-400 outline-none transition"
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600
                    text-white font-semibold
                    py-3 text-sm sm:text-base
                    rounded-xl shadow-lg
                    hover:shadow-emerald-300/50 hover:scale-[1.02]
                    transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* ===== FUTURISTIC CONTACT CARDS ===== */}
          <div className="w-full max-w-lg mx-auto space-y-5">
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
                className="group bg-white/60 backdrop-blur-xl rounded-2xl 
                  p-5 shadow-lg border border-emerald-100
                  hover:-translate-y-2 hover:shadow-emerald-200/50 
                  transition-all duration-500">
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 
                    flex items-center justify-center 
                    rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100 
                    text-xl group-hover:scale-110 transition">
                    {item.icon}
                  </div>

                  <div>
                    <p className="font-semibold text-[#1f2a44] text-sm sm:text-base">
                      {item.title}
                    </p>
                    <p className="text-emerald-600 font-semibold break-all text-sm sm:text-base">
                      {item.main}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {item.sub}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-gray-600 text-center mx-auto mt-14
          text-xs sm:text-sm md:text-base
          max-w-md md:max-w-2xl">
          <span className="font-semibold text-emerald-600">
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