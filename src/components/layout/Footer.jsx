import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#1a3d7c] to-[#0f2e72] text-white [&_p]:!text-white [&_li]:!text-white [&_a]:!text-white [&_svg]:!text-white [&_h3]:!text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 pt-10 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1 mb-2 lg:mb-0">
            <img
              src={logo}
              alt="Zain Logo"
              className="h-16 w-auto object-contain brightness-0 invert drop-shadow-lg -mt-3 -ml-6"
            />
            <p className="mt-3 text-white text-xs leading-relaxed max-w-xs hover:opacity-80 transition-opacity duration-300 cursor-default">
              Guiding students towards successful careers since 2013. Your
              trusted partner in educational counseling.
            </p>

            <div className="flex gap-3 mt-4">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/25 hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <Icon size={14} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Courses", href: "#admission" },
                { label: "Blog", href: "#blog" },
                { label: "Contact Us", href: "#contact" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="text-white text-xs font-medium hover:translate-x-1.5 hover:opacity-80 inline-block transition-all duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {[
                "Career Counseling",
                "Aptitude Testing",
                "College Selection",
                "Admission Assistance",
                "Scholarship Guidance",
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-white text-xs font-medium hover:translate-x-1.5 hover:opacity-80 block transition-all duration-300 cursor-default"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 hover:opacity-80 transition-opacity duration-300 cursor-default">
                <MapPin size={14} className="text-white shrink-0 mt-0.5" />
                <span className="text-white !text-white text-xs font-medium leading-normal">KPM Arcade, Calicut Road, Valanchery, Kerala</span>
              </li>
              <li className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 cursor-default">
                <Phone size={14} className="text-white shrink-0" />
                <span className="text-white !text-white text-xs font-medium">+91 9745 600 700</span>
              </li>
              <li className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 cursor-default">
                <Mail size={14} className="text-white shrink-0" />
                <span className="text-white !text-white text-xs font-medium break-all">zaineducationvly@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/15 bg-[#0b2560]">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 py-4 text-[11px] text-white flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="hover:opacity-80 transition-opacity duration-300">&copy; 2026 ZAIN Education Consultancy. All rights reserved.</p>
          <div className="flex items-center gap-6 sm:gap-8">
            <a href="#" className="text-white hover:opacity-80 transition-opacity duration-300">Privacy Policy</a>
            <a href="#" className="text-white hover:opacity-80 transition-opacity duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
