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
    <footer className="w-full bg-gradient-to-b from-[#1a3d7c] to-[#0f2e72] text-white [&_p]:!text-white [&_li]:!text-white [&_a]:!text-white [&_svg]:!text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-10 sm:pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="max-w-xs">
            <img src={logo} alt="Zain Logo" className="h-16 sm:h-20 w-auto object-contain brightness-0 invert drop-shadow-lg" />
            <p className="mt-4 text-white text-sm sm:text-base leading-relaxed">
              Guiding students towards successful careers since 2013. Your trusted partner in educational counseling.
            </p>

            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-[#8d9fc6]/35 border border-[#afbdd9]/45 flex items-center justify-center hover:bg-[#a8b7d6]/45 transition cursor-pointer"
                >
                  <Icon size={14} className="text-white" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xl font-bold mb-6 text-white" style={{color: '#fff'}}>Quick Links</p>
            <ul className="space-y-3 text-white text-base sm:text-lg">
              <li className="font-semibold"><a href="#home" className="text-white" style={{color: '#fff'}}>Home</a></li>
              <li className="font-semibold"><a href="#about" className="text-white" style={{color: '#fff'}}>About Us</a></li>
              <li className="font-semibold"><a href="#admission" className="text-white" style={{color: '#fff'}}>Courses</a></li>
              <li className="font-semibold"><a href="#blog" className="text-white" style={{color: '#fff'}}>Blog</a></li>
              <li className="font-semibold"><a href="#contact" className="text-white" style={{color: '#fff'}}>Contact Us</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xl font-bold mb-6 text-white" style={{color: '#fff'}}>Our Services</p>
            <ul className="space-y-3 text-white text-base sm:text-lg">
              <li className="font-semibold" style={{color: '#fff'}}>Career Counseling</li>
              <li className="font-semibold" style={{color: '#fff'}}>Aptitude Testing</li>
              <li className="font-semibold" style={{color: '#fff'}}>College Selection</li>
              <li className="font-semibold" style={{color: '#fff'}}>Admission Assistance</li>
              <li className="font-semibold" style={{color: '#fff'}}>Scholarship Guidance</li>
            </ul>
          </div>

          <div>
            <p className="text-xl font-bold mb-6 text-white" style={{color: '#fff'}}>Contact Us</p>
            <div className="space-y-5 text-white text-base sm:text-lg">
              <div className="flex items-start gap-3">
                <MapPin size={17} className="mt-1 shrink-0 text-white" />
                <p className="leading-snug text-white">KPM Arcade, Calicut Road, Valanchery, Kerala</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={17} className="text-white" />
                <p className="text-white">+91 9745 600 700</p>
              </div>
              <div className="flex items-center gap-3 break-all">
                <Mail size={17} className="text-white" />
                <p className="text-white">zaineducationvly@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#9baed4]/45 bg-[#0b2560]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-5 text-sm text-white flex flex-col md:flex-row items-center justify-between gap-3">
          <p>&copy; 2026 ZAIN Education Consultancy. All rights reserved.</p>
          <div className="flex items-center gap-10">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
