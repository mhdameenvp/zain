import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const logo = "/images/logo.png";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-slate-100 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_45%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(45,212,191,0.16),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="bg-slate-900/55 backdrop-blur-2xl border border-cyan-300/25 rounded-2xl shadow-[0_25px_70px_rgba(56,189,248,0.24)] p-8 sm:p-10 transition-all duration-500 hover:shadow-[0_35px_90px_rgba(56,189,248,0.32)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            <div>
              <div className="flex items-center mb-5">
                <img
                  src={logo}
                  alt="Zain Logo"
                  className="h-16 w-auto object-contain rounded-full border-2 border-cyan-50 bg-white p-2 shadow-[0_14px_40px_rgba(8,47,73,0.45)] ring-2 ring-cyan-300/65 brightness-125 contrast-130 saturate-125"
                />
              </div>

              <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
                Guiding students towards successful careers since 2013.
                Your trusted partner in educational counseling and
                career development services.
              </p>

              <div className="flex gap-4 mt-6">
                {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                  <div
                    key={i}
                    className="group w-10 h-10 rounded-full bg-slate-900 border border-cyan-300/30 shadow-md flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-400 hover:to-sky-500 hover:text-white transition-all duration-300 cursor-pointer hover:scale-110"
                  >
                    <Icon size={18} className="text-cyan-300 group-hover:text-white transition" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-5 relative inline-block">
                Quick Links
                <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-gradient-to-r from-cyan-300 to-sky-400"></span>
              </h3>

              <ul className="space-y-3 text-slate-300 text-sm">
                {[
                  { label: "Home", href: "#home" },
                  { label: "About Us", href: "#about" },
                  { label: "Program", href: "#program" },
                  { label: "Campus", href: "#campus" },
                  { label: "Admission", href: "#admission" },
                  { label: "Contact", href: "#contact" },
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="hover:text-cyan-300 transition inline-block hover:translate-x-1 duration-300 font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-5 relative inline-block">
                Our Services
                <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-gradient-to-r from-cyan-300 to-sky-400"></span>
              </h3>

              <ul className="space-y-3 text-slate-300 text-sm">
                {[
                  "Career Counseling",
                  "Aptitude Testing",
                  "College Selection",
                  "Admission Assistance",
                  "Scholarship Guidance",
                ].map((service, index) => (
                  <li
                    key={index}
                    className="hover:text-cyan-300 transition cursor-pointer hover:translate-x-1 duration-300 font-medium"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-5 relative inline-block">
                Contact Us
                <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-gradient-to-r from-cyan-300 to-sky-400"></span>
              </h3>

              <div className="space-y-5 text-slate-300 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 text-cyan-300" size={18} />
                  <p>
                    KPM Arcade, Calicut Road,
                    Valancherry, Kerala
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-cyan-300" size={18} />
                  <p className="font-medium">+91 9745 600 700</p>
                </div>

                <div className="flex items-center gap-3 break-all">
                  <Mail className="text-cyan-300" size={18} />
                  <p className="font-medium">zaineducationvly@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-cyan-300/20 bg-slate-900/55 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p className="text-center md:text-left">
            Copyright 2026 ZAIN Education Consultancy. All rights reserved.
          </p>

          <div className="flex gap-6 flex-wrap justify-center">
            <p className="hover:text-cyan-300 cursor-pointer transition font-medium whitespace-nowrap">
              Privacy Policy
            </p>
            <p className="hover:text-cyan-300 cursor-pointer transition font-medium whitespace-nowrap">
              Terms of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
