import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-black/10 fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex justify-between items-center py-4">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent no-underline transition-all duration-300 hover:scale-105"
            onClick={closeMenu}
          >
            Portfolio
          </Link>

          <nav
            className={`md:flex items-center ${
              isMenuOpen
                ? "fixed top-0 right-0 w-full h-screen bg-white/98 backdrop-blur-sm flex-col justify-center items-center transition-all duration-300 z-40"
                : "hidden"
            }`}
          >
            <ul className="flex list-none m-0 p-0 gap-8 md:flex-row flex-col gap-12 text-center">
              <li className="m-0">
                <Link
                  to="/"
                  className={`text-gray-800 no-underline font-medium py-2 relative transition-all duration-300 hover:text-primary-500 ${
                    isActive("/")
                      ? "text-primary-500 after:content-[''] after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-primary-500 after:to-secondary-500 after:rounded-sm"
                      : ""
                  }`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li className="m-0">
                <Link
                  to="/about"
                  className={`text-gray-800 no-underline font-medium py-2 relative transition-all duration-300 hover:text-primary-500 ${
                    isActive("/about")
                      ? "text-primary-500 after:content-[''] after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-primary-500 after:to-secondary-500 after:rounded-sm"
                      : ""
                  }`}
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li className="m-0">
                <Link
                  to="/projects"
                  className={`text-gray-800 no-underline font-medium py-2 relative transition-all duration-300 hover:text-primary-500 ${
                    isActive("/projects")
                      ? "text-primary-500 after:content-[''] after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-primary-500 after:to-secondary-500 after:rounded-sm"
                      : ""
                  }`}
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>
              <li className="m-0">
                <Link
                  to="/contact"
                  className={`text-gray-800 no-underline font-medium py-2 relative transition-all duration-300 hover:text-primary-500 ${
                    isActive("/contact")
                      ? "text-primary-500 after:content-[''] after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-primary-500 after:to-secondary-500 after:rounded-sm"
                      : ""
                  }`}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className={`md:hidden flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-10 ${
              isMenuOpen ? "fixed" : ""
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`w-8 h-1 bg-gray-800 rounded-full transition-all duration-300 ${
                isMenuOpen ? "rotate-45" : ""
              }`}
            ></span>
            <span
              className={`w-8 h-1 bg-gray-800 rounded-full transition-all duration-300 ${
                isMenuOpen ? "opacity-0 translate-x-5" : ""
              }`}
            ></span>
            <span
              className={`w-8 h-1 bg-gray-800 rounded-full transition-all duration-300 ${
                isMenuOpen ? "-rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
