import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const logo = "/images/zain.png";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-b from-white via-emerald-50 to-green-100 text-[#1f2a44] overflow-hidden">
      
      {/* FUTURISTIC GLOW BACKGROUND */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200/30 rounded-full blur-3xl"></div>

      {/* MAIN FOOTER CONTAINER (FULL ALIGNMENT) */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        
        {/* GLASS CARD WRAPPER */}
        <div className="bg-white/70 backdrop-blur-2xl border border-emerald-100 rounded-2xl shadow-xl p-8 sm:p-10 transition-all duration-500 hover:shadow-emerald-200/40">
          
          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            
            {/* ===== LOGO + ABOUT ===== */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img
                  src={logo}
                  alt="Zain Education Logo"
                  className="h-12 w-auto object-contain"
                />
                <div>
                  <h2 className="text-xl font-semibold tracking-wide">
                    Zain
                  </h2>
                  <p className="text-xs text-emerald-600 -mt-1">
                    educational services
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                Guiding students towards successful careers since 2013.
                Your trusted partner in educational counseling and
                career development services.
              </p>

              {/* Social Icons (Futuristic Glow) */}
              <div className="flex gap-4 mt-6">
                {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                  <div
                    key={i}
                    className="group w-10 h-10 rounded-full bg-white border border-emerald-100 shadow-md flex items-center justify-center hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-500 hover:text-white transition-all duration-300 cursor-pointer hover:scale-110"
                  >
                    <Icon size={18} className="text-emerald-600 group-hover:text-white transition" />
                  </div>
                ))}
              </div>
            </div>

            {/* ===== QUICK LINKS ===== */}
            <div>
              <h3 className="text-lg font-semibold mb-5 relative inline-block">
                Quick Links
                <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-gradient-to-r from-emerald-500 to-green-500"></span>
              </h3>

              <ul className="space-y-3 text-gray-600 text-sm">
                {["Home", "About Us", "Program", "Campus", "Admission", "Contact"].map(
                  (item, index) => (
                    <li
                      key={index}
                      className="hover:text-emerald-600 transition cursor-pointer hover:translate-x-1 duration-300"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* ===== OUR SERVICES ===== */}
            <div>
              <h3 className="text-lg font-semibold mb-5 relative inline-block">
                Our Services
                <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-gradient-to-r from-emerald-500 to-green-500"></span>
              </h3>

              <ul className="space-y-3 text-gray-600 text-sm">
                {[
                  "Career Counseling",
                  "Aptitude Testing",
                  "College Selection",
                  "Admission Assistance",
                  "Scholarship Guidance",
                ].map((service, index) => (
                  <li
                    key={index}
                    className="hover:text-emerald-600 transition cursor-pointer hover:translate-x-1 duration-300"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* ===== CONTACT US ===== */}
            <div>
              <h3 className="text-lg font-semibold mb-5 relative inline-block">
                Contact Us
                <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-gradient-to-r from-emerald-500 to-green-500"></span>
              </h3>

              <div className="space-y-5 text-gray-600 text-sm">
                
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 text-emerald-600" size={18} />
                  <p>
                    KPM Arcade, Calicut Road,  
                    Valancherry, Kerala
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-emerald-600" size={18} />
                  <p>+91 9745 600 700</p>
                </div>

                <div className="flex items-center gap-3 break-all">
                  <Mail className="text-emerald-600" size={18} />
                  <p>zaineducationvly@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FUTURISTIC BOTTOM BAR ===== */}
      <div className="relative border-t border-emerald-100 bg-white/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          
          <p className="text-center md:text-left">
            © 2026 ZAIN Education Consultancy. All rights reserved.
          </p>

          <div className="flex gap-6">
            <p className="hover:text-emerald-600 cursor-pointer transition">
              Privacy Policy
            </p>
            <p className="hover:text-emerald-600 cursor-pointer transition">
              Terms of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;