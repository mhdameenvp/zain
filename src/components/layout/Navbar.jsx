import { useState } from "react";
import { Mail, MapPin, Search, LogIn, Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Program", href: "#program" },
    { label: "Campus", href: "#campus" },
    { label: "Admission", href: "#admission" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50">
        <div className="hidden sm:block w-full border-b border-blue-100 bg-[#f8fbff]">
          <div className="max-w-7xl mx-auto px-2 lg:px-4 py-1 flex items-center justify-between text-slate-600 text-xs">
          <div className="flex items-center gap-6 lg:gap-10">
            <a href="mailto:zaineducationvly@gmail.com" className="flex items-center gap-2 hover:text-[#2a57b8] transition font-medium">
              <Mail size={14} className="text-[#2a57b8]" />
              zaineducationvly@gmail.com
            </a>

            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#2a57b8] transition font-medium">
              <MapPin size={14} className="text-[#2a57b8]" />
              K.P.M. Arcade, Valanchery, Kerala
            </a>
          </div>

          <a href="#contact" className="bg-[#2a57b8] text-white px-5 py-1.5 rounded-full text-xs font-semibold shadow-md hover:bg-[#1f3f95] transition-all duration-300">
            Connect Us
          </a>
        </div>
      </div>

      <div className="w-full border-b border-blue-100 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-3 lg:px-4 py-2 sm:py-1 flex items-center justify-between">
          <div className="flex items-center group cursor-pointer">
            <div className="relative flex items-center justify-center">
              <img src={logo} alt="Zain" className="w-14 h-auto object-contain sm:w-16 lg:w-24" />
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6 font-semibold text-slate-700 text-sm">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative hover:text-[#2a57b8] transition duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#2a57b8] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center border border-blue-100 rounded-full overflow-hidden shadow-sm bg-[#f8fbff] focus-within:ring-2 focus-within:ring-[#2a57b8]/30 transition">
              <input
                type="text"
                placeholder="Search..."
                className="px-2 py-1 text-xs sm:text-sm text-slate-700 placeholder:text-slate-400 outline-none w-20 sm:w-32 bg-transparent"
              />
              <button className="bg-white px-2 py-1 hover:bg-blue-50 transition">
                <Search size={16} className="text-[#2a57b8]" />
              </button>
            </div>

            <a
              href="#contact"
              className="flex items-center gap-1 bg-[#2a57b8] text-white px-2 py-1 rounded-full text-xs sm:text-sm font-semibold hover:bg-[#1f3f95] transition duration-300"
            >
              <LogIn size={16} />
              Login
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={24} className="text-[#2a57b8]" />
            ) : (
              <Menu size={24} className="text-[#2a57b8]" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-blue-100 bg-white shadow-lg">
          <div className="flex flex-col px-4 py-4 gap-3 text-slate-700 font-semibold">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm sm:text-base hover:text-[#2a57b8] transition duration-300 py-1"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-[#2a57b8] text-white py-2 rounded-lg text-center font-semibold hover:bg-[#1f3f95] transition duration-300 text-sm sm:text-base"
            >
              Connect Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
