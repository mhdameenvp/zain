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
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-2 flex items-center justify-between text-slate-600 text-xs md:text-sm">
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
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center group cursor-pointer">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-blue-100 bg-white shadow-lg flex items-center justify-center">
              <img src={logo} alt="Zain" className="h-10 sm:h-11 lg:h-12 w-auto object-contain p-1 rounded-full" />
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 font-semibold text-slate-700">
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

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center border border-blue-100 rounded-full overflow-hidden shadow-sm bg-[#f8fbff] focus-within:ring-2 focus-within:ring-[#2a57b8]/30 transition">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 outline-none w-36 lg:w-44 bg-transparent"
              />
              <button className="bg-white px-3 py-2 hover:bg-blue-50 transition">
                <Search size={18} className="text-[#2a57b8]" />
              </button>
            </div>

            <a
              href="#contact"
              className="flex items-center gap-2 bg-[#2a57b8] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#1f3f95] transition duration-300"
            >
              <LogIn size={18} />
              Login
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={26} className="text-[#2a57b8]" />
            ) : (
              <Menu size={26} className="text-[#2a57b8]" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-blue-100 bg-white shadow-lg">
          <div className="flex flex-col px-6 py-6 gap-5 text-slate-700 font-semibold">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg hover:text-[#2a57b8] transition duration-300"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 bg-[#2a57b8] text-white py-3 rounded-lg text-center font-semibold hover:bg-[#1f3f95] transition duration-300"
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
