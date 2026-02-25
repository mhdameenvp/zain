import { Mail, MapPin, Phone } from "lucide-react";
import heroImg from "../../../assets/cta2.jpg";

const contactCards = [
  { icon: Phone, title: "Call Us", main: "+91 9745 600 700", sub: "Mon-Sat, 9am - 6pm" },
  { icon: Mail, title: "Email Us", main: "zaineducationvly@gmail.com", sub: "Reply within 24 hours" },
  { icon: MapPin, title: "Visit Us", main: "KPM Arcade, Valancherry", sub: "Kerala, India" },
];

const CtaBanner = () => {
  return (
    <section className="w-full bg-white">
      <div className="relative isolate overflow-hidden bg-[#f5f7fb]">
        <img src={heroImg} alt="Students celebrating graduation" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/70 to-[#f5f7fb]/95" />
        <div className="relative mx-auto flex min-h-[320px] sm:min-h-[360px] md:min-h-[420px] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f3f95]">
            Join Thousands of Success Students
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-[#355074]">
            Our alumni are now at top universities and working at leading companies worldwide.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.15em] text-[#2a57b8] font-semibold">Get In Touch</p>
          <h3 className="mt-2 text-3xl sm:text-4xl font-semibold text-[#1f3f95]">Start Your Journey Today</h3>
          <p className="mt-3 text-base sm:text-lg text-[#344563]">
            Book a free consultation and take the first step towards your dream career.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="bg-[#e9f1ff] border border-[#cfdcf6] rounded-[26px] shadow-[0_25px_65px_rgba(23,49,121,0.08)] p-6 sm:p-8">
            <h4 className="text-2xl font-semibold text-[#1f3f95] text-center mb-6">Book Free Consultation</h4>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full border border-[#c0cce9] rounded-lg px-4 py-3 bg-white outline-none focus:border-[#2a57b8] focus:ring-1 focus:ring-[#2a57b8]" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email" placeholder="Email" className="w-full border border-[#c0cce9] rounded-lg px-4 py-3 bg-white outline-none focus:border-[#2a57b8] focus:ring-1 focus:ring-[#2a57b8]" />
                <input type="tel" placeholder="Phone" className="w-full border border-[#c0cce9] rounded-lg px-4 py-3 bg-white outline-none focus:border-[#2a57b8] focus:ring-1 focus:ring-[#2a57b8]" />
              </div>
              <textarea rows="4" placeholder="Tell us about your education goal..." className="w-full border border-[#c0cce9] rounded-lg px-4 py-3 bg-white outline-none resize-none focus:border-[#2a57b8] focus:ring-1 focus:ring-[#2a57b8]" />
              <button type="submit" className="w-full bg-[#1f3f95] text-white font-semibold py-3 rounded-xl shadow-[0_12px_25px_rgba(31,63,149,0.35)] hover:bg-[#193175] transition">
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-8 text-[#1f2a56]">
            {contactCards.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#e5edff] text-[#1f3f95] flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-lg font-semibold uppercase tracking-wide text-[#1f3f95]">{item.title}</p>
                    <p className="text-xl font-semibold text-[#2246a0] break-all">{item.main}</p>
                    <p className="text-sm text-[#5d6b84]">{item.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-12 text-center text-[#1f3f95] text-lg sm:text-xl md:text-2xl font-bold leading-relaxed max-w-3xl mx-auto">
          <span className="font-extrabold">Free Counseling Session:</span> book a 30‑minute one‑on‑one meeting with our expert counselors to explore your career options and receive personalized guidance.
        </p>
      </div>
    </section>
  );
};

export default CtaBanner;
