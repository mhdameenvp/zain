import { useState } from "react";
import { Mail, MapPin, Search, LogIn, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      
      {/* ===== TOP GLASS INFO BAR ===== */}
      <div className="hidden sm:block w-full bg-white/70 backdrop-blur-xl border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-2 flex items-center justify-between text-gray-700 text-sm">
          
          {/* Left Info */}
          <div className="flex items-center gap-6 lg:gap-10">
            <a
              href="mailto:zaineducationvly@gmail.com"
              className="flex items-center gap-2 hover:text-teal-700 transition font-medium"
            >
              <Mail size={16} className="text-teal-600" />
              zaineducationvly@gmail.com
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=K.P.M.+Arcade,+Valanchery,+Kerala+676552"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-teal-700 transition font-medium"
            >
              <MapPin size={16} className="text-teal-600" />
              K.P.M. Arcade, Valanchery, Kerala
            </a>
          </div>

          {/* CTA Button (Futuristic Soft Glow) */}
          <button className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-5 py-1.5 rounded-full text-xs font-semibold shadow-lg hover:shadow-teal-300/40 hover:scale-105 transition-all duration-300">
            Connect Us
          </button>
        </div>
      </div>

      {/* ===== MAIN FUTURISTIC NAVBAR ===== */}
      <div className="w-full bg-white/60 backdrop-blur-2xl border-b border-teal-100 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <img
              src="/images/zain-logo.png"
              alt="Logo"
              className="h-10 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-gray-700">
            <a className="relative text-teal-700 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-teal-600">
              Home
            </a>

            {["About Us", "Program", "Campus", "Admission", "Contact"].map((item, index) => (
              <a
                key={index}
                className="relative hover:text-teal-700 transition duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* SEARCH + LOGIN */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Futuristic Search */}
            <div className="flex items-center border border-teal-100 rounded-full overflow-hidden shadow-sm bg-white/80 backdrop-blur-md focus-within:ring-2 focus-within:ring-teal-400 transition">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 text-sm outline-none w-36 lg:w-44 bg-transparent"
              />
              <button className="bg-teal-50 px-3 py-2 hover:bg-teal-100 transition">
                <Search size={18} className="text-teal-600" />
              </button>
            </div>

            {/* Login Button (Soft Futuristic) */}
            <button className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-teal-300/40 hover:scale-105 transition-all duration-300">
              <LogIn size={18} />
              Login
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-teal-50 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={26} className="text-teal-700" />
            ) : (
              <Menu size={26} className="text-teal-700" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE FUTURISTIC MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white/80 backdrop-blur-2xl border-t border-teal-100 shadow-2xl">
          <div className="flex flex-col px-6 py-6 gap-5 text-gray-800 font-semibold">
            {["Home", "About Us", "Program", "Campus", "Admission", "Contact"].map((item, index) => (
              <a
                key={index}
                className="text-lg hover:text-teal-700 transition duration-300"
              >
                {item}
              </a>
            ))}

            <button className="mt-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-3 rounded-xl shadow-lg">
              Connect Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;