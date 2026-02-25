import { useState } from "react";
import { Mail, MapPin, Search, LogIn, Menu, X } from "lucide-react";

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
      
      {/* ===== TOP GLASS INFO BAR ===== */}
      <div className="future-navbar hidden sm:block w-full border-b border-cyan-300/25">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-2 flex items-center justify-between text-slate-200 text-sm">
          
          {/* Left Info */}
          <div className="flex items-center gap-6 lg:gap-10">
            <a
              href="mailto:zaineducationvly@gmail.com"
              className="flex items-center gap-2 hover:text-cyan-300 transition font-medium"
            >
              <Mail size={16} className="text-cyan-300" />
              zaineducationvly@gmail.com
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=K.P.M.+Arcade,+Valanchery,+Kerala+676552"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-300 transition font-medium"
            >
              <MapPin size={16} className="text-cyan-300" />
              K.P.M. Arcade, Valanchery, Kerala
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="bg-gradient-to-r from-cyan-400 to-sky-500 text-white px-5 py-1.5 rounded-full text-xs font-semibold 
            shadow-[0_8px_25px_rgba(34,211,238,0.35)] 
            hover:shadow-[0_12px_35px_rgba(34,211,238,0.45)] 
            hover:scale-105 transition-all duration-300"
          >
            Connect Us
          </a>
        </div>
      </div>

      {/* ===== MAIN GLASS NAVBAR ===== */}
      <div className="future-navbar w-full border-b border-cyan-400/20 shadow-[0_8px_30px_rgba(8,47,73,0.35)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 flex items-center justify-between">
          
          {/* ===== FUTURISTIC ROUND LOGO ===== */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              
              {/* Glow Effect */}
              <div className="absolute -inset-3 bg-gradient-to-r from-sky-400/30 to-cyan-400/30 
                blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>

              {/* Logo Image */}
              <div
                className="relative w-16 h-16 sm:w-[4.4rem] sm:h-[4.4rem] rounded-full border-2 border-cyan-50
                bg-gradient-to-br from-slate-700 via-slate-600 to-cyan-700
                shadow-[0_14px_42px_rgba(8,47,73,0.45)] ring-2 ring-cyan-300/65 flex items-center justify-center"
              >
                <img
                  src="/images/logo.png"
                  alt="Zain Logo"
                  className="relative h-10 sm:h-11 lg:h-12 w-auto object-contain rounded-full bg-white p-1.5
                  brightness-125 contrast-130 saturate-125
                  transition-all duration-500 
                  group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* ===== DESKTOP MENU ===== */}
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-slate-100">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative hover:text-cyan-300 transition duration-300 
                after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] 
                after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* ===== SEARCH + LOGIN ===== */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Futuristic Search */}
            <div className="flex items-center border border-cyan-300/30 rounded-full overflow-hidden 
              shadow-sm bg-slate-900/50 backdrop-blur-md 
              focus-within:ring-2 focus-within:ring-cyan-300 transition">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 text-sm text-slate-100 placeholder:text-slate-400 outline-none w-36 lg:w-44 bg-transparent"
              />
              <button className="bg-cyan-300/20 px-3 py-2 hover:bg-cyan-300/30 transition">
                <Search size={18} className="text-cyan-300" />
              </button>
            </div>

            {/* Login Button */}
            <a
              href="#contact"
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-sky-500 text-white px-6 py-2 rounded-full font-semibold 
              shadow-[0_10px_30px_rgba(34,211,238,0.35)] 
              hover:shadow-[0_15px_40px_rgba(34,211,238,0.45)] 
              hover:scale-105 transition-all duration-300"
            >
              <LogIn size={18} />
              Login
            </a>
          </div>

          {/* ===== MOBILE MENU BUTTON ===== */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-cyan-300/20 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={26} className="text-cyan-300" />
            ) : (
              <Menu size={26} className="text-cyan-300" />
            )}
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {isOpen && (
        <div className="lg:hidden future-navbar border-t border-cyan-300/20 shadow-2xl">
          <div className="flex flex-col px-6 py-6 gap-5 text-slate-100 font-semibold">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg hover:text-cyan-300 transition duration-300"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 bg-gradient-to-r from-cyan-400 to-sky-500 text-white py-3 rounded-xl text-center 
              shadow-[0_10px_30px_rgba(34,211,238,0.35)]"
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
