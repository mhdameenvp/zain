import { useState } from "react";
import { Mail, MapPin, Search, LogIn, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      
      {/* ================= TOP INFO BAR ================= */}
      <div className="hidden sm:block w-full bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-2 flex items-center justify-between text-sm text-gray-600">
          
          {/* Left Side: Email + Location */}
          <div className="flex items-center gap-4 lg:gap-6">
            <p className="flex items-center gap-2 truncate">
              <Mail size={16} className="text-blue-600" />
              <span className="hidden md:inline">
                zaineducationvly@gmail.com
              </span>
            </p>

            <p className="hidden md:flex items-center gap-2">
              <MapPin size={16} className="text-blue-600" />
              Calicut rd, Valancherry
            </p>
          </div>

          {/* Login Button */}
          <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 lg:px-5 py-1.5 rounded-full text-xs lg:text-sm font-semibold shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
            <LogIn size={16} />
            Login
          </button>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 lg:py-4 flex items-center justify-between">
          
          {/* ===== LOGO (DEPLOYMENT SAFE) ===== */}
          <div className="flex items-center gap-3">
            <img
              src="/images/zain-logo.png"   // MUST be inside public/images
              alt="Zain Logo"
              className="h-10 sm:h-12 w-auto object-contain"
              loading="eager"
            />
          </div>

          {/* ===== DESKTOP MENU ===== */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
            <a
              href="#"
              className="text-blue-700 border-b-2 border-blue-700 pb-1 transition"
            >
              Home
            </a>

            <a href="#" className="hover:text-blue-700 transition">
              About
            </a>

            <a href="#" className="hover:text-blue-700 transition">
              Courses
            </a>

            <a href="#" className="hover:text-blue-700 transition">
              Blog
            </a>

            <a href="#" className="hover:text-blue-700 transition">
              Contact
            </a>
          </nav>

          {/* ===== SEARCH BAR ===== */}
          <div className="hidden md:flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type="text"
              placeholder="Search"
              className="px-3 lg:px-4 py-2 outline-none text-sm w-32 lg:w-40"
            />
            <button className="bg-gray-100 px-3 lg:px-4 py-2 hover:bg-gray-200 transition">
              <Search size={18} className="text-gray-600" />
            </button>
          </div>

          {/* ===== MOBILE MENU BUTTON ===== */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <div className="flex flex-col px-6 py-4 gap-4 text-gray-700 font-medium">
            <a href="#" className="text-blue-700 font-semibold">
              Home
            </a>
            <a href="#" className="hover:text-blue-700">
              About
            </a>
            <a href="#" className="hover:text-blue-700">
              Courses
            </a>
            <a href="#" className="hover:text-blue-700">
              Blog
            </a>
            <a href="#" className="hover:text-blue-700">
              Contact
            </a>

            {/* Mobile Search */}
            <div className="flex items-center border rounded-full overflow-hidden mt-2">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 outline-none text-sm w-full"
              />
              <button className="bg-gray-100 px-4 py-2">
                <Search size={18} />
              </button>
            </div>

            {/* Mobile Login */}
            <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-blue-700 transition">
              <LogIn size={18} />
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;