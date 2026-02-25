const bannerImg = "/images/cta.jpg";

const CtaBanner = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-sky-50 to-sky-100 overflow-hidden">
      
      {/* SOFT SKY FUTURISTIC GLOW (MATCHES WHOLE WEBSITE) */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.16),transparent_45%)]"></div>
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_85%_80%,rgba(125,211,252,0.14),transparent_50%)]"></div>

      {/* ================= HERO CTA BANNER ================= */}
      <div className="relative w-full h-[300px] sm:h-[380px] md:h-[460px] lg:h-[540px] xl:h-[620px] overflow-hidden">
        
        {/* Background Image */}
        <img
          src={bannerImg}
          alt="Success Students"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* SKY FUTURISTIC OVERLAY (REPLACED GREEN) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/80 via-sky-900/60 to-[#020617]/60" />

        {/* Center Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6">
          <div className="max-w-5xl">
            
            <h2 className="text-white font-extrabold leading-tight
              text-2xl 
              sm:text-3xl 
              md:text-4xl 
              lg:text-5xl 
              xl:text-6xl tracking-tight">
              Shape Your{" "}
              <span className="bg-gradient-to-r from-sky-300 to-sky-400 bg-clip-text text-transparent">
                Future Career
              </span>{" "}
              With Experts
            </h2>

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

            {/* SKY GLOW LINE */}
            <div className="mt-6 w-24 sm:w-28 md:w-32 h-[3px] mx-auto bg-gradient-to-r from-sky-400 to-sky-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
        py-12 sm:py-16 md:py-20">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sky-600 font-semibold uppercase tracking-widest
            text-xs sm:text-sm">
            Get In Touch
          </p>

          <h2 className="font-bold text-[#0f172a] mt-3
            text-2xl 
            sm:text-3xl 
            md:text-4xl tracking-tight">
            Start Your{" "}
            <span className="bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
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
          
          {/* FORM CARD */}
          <div className="w-full max-w-lg mx-auto">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl 
              p-6 sm:p-8 
              shadow-[0_20px_60px_rgba(56,189,248,0.18)] 
              border border-sky-100 
              hover:shadow-[0_30px_80px_rgba(56,189,248,0.28)] 
              transition-all duration-500">
              
              <h3 className="text-center font-bold text-[#0f172a] mb-7
                text-lg sm:text-xl">
                Book Free Consultation
              </h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-sky-100 rounded-xl
                    px-4 py-3 text-sm sm:text-base
                    bg-white/90 backdrop-blur
                    focus:ring-2 focus:ring-sky-400 outline-none transition"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-sky-100 rounded-xl
                      px-4 py-3 text-sm sm:text-base
                      bg-white/90 backdrop-blur
                      focus:ring-2 focus:ring-sky-400 outline-none transition"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full border border-sky-100 rounded-xl
                      px-4 py-3 text-sm sm:text-base
                      bg-white/90 backdrop-blur
                      focus:ring-2 focus:ring-sky-400 outline-none transition"
                  />
                </div>

                <textarea
                  rows="4"
                  placeholder="Tell us about your education goal..."
                  className="w-full border border-sky-100 rounded-xl
                    px-4 py-3 text-sm sm:text-base
                    bg-white/90 backdrop-blur resize-none
                    focus:ring-2 focus:ring-sky-400 outline-none transition"
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-sky-600
                    text-white font-semibold
                    py-3 text-sm sm:text-base
                    rounded-xl shadow-[0_12px_35px_rgba(56,189,248,0.35)]
                    hover:shadow-[0_20px_50px_rgba(56,189,248,0.45)] 
                    hover:scale-[1.02]
                    transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* CONTACT CARDS */}
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
                className="group bg-white/80 backdrop-blur-xl rounded-2xl 
                  p-5 shadow-md border border-sky-100
                  hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(56,189,248,0.22)] 
                  transition-all duration-500">
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 
                    flex items-center justify-center 
                    rounded-2xl bg-gradient-to-br from-sky-100 to-sky-200 
                    text-xl group-hover:scale-110 transition">
                    {item.icon}
                  </div>

                  <div>
                    <p className="font-bold text-[#0f172a] text-sm sm:text-base">
                      {item.title}
                    </p>
                    <p className="text-sky-600 font-semibold break-all text-sm sm:text-base">
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
          <span className="font-semibold text-sky-600">
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