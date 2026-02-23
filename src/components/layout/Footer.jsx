import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#162d5b] text-white">
      
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* ===== LOGO + ABOUT ===== */}
          <div>
            {/* Dummy Logo (Replace Later) */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-xl">
                Z
              </div>
              <div>
                <h2 className="text-xl font-semibold tracking-wide">
                  Zain
                </h2>
                <p className="text-xs text-gray-300 -mt-1">
                  educational services
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Guiding students towards successful careers since 2013. 
              Your trusted partner in educational counseling and 
              career development services.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition duration-300 cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* ===== QUICK LINKS ===== */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative inline-block">
              Quick Links
              <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-cyan-400"></span>
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm">
              {["Home", "About Us", "Courses", "Blog", "Contact Us"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="hover:text-cyan-300 transition cursor-pointer"
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
              <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-cyan-400"></span>
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm">
              {[
                "Career Counseling",
                "Aptitude Testing",
                "College Selection",
                "Admission Assistance",
                "Scholarship Guidance",
              ].map((service, index) => (
                <li
                  key={index}
                  className="hover:text-cyan-300 transition cursor-pointer"
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
              <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-cyan-400"></span>
            </h3>

            <div className="space-y-5 text-gray-300 text-sm">
              
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-cyan-400" size={18} />
                <p>
                  KPM Arcade, Calicut Road,  
                  Valancherry, Kerala
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-cyan-400" size={18} />
                <p>+91 9745 600 700</p>
              </div>

              <div className="flex items-center gap-3 break-all">
                <Mail className="text-cyan-400" size={18} />
                <p>zaineducationvly@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
          
          <p className="text-center md:text-left">
            © 2026 ZAIN Education Consultancy. All rights reserved.
          </p>

          <div className="flex gap-6">
            <p className="hover:text-cyan-300 cursor-pointer transition">
              Privacy Policy
            </p>
            <p className="hover:text-cyan-300 cursor-pointer transition">
              Terms of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;