import { Bot, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-black border-b border-white transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-1 sm:gap-2 group">
            <Bot className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 text-yellow-500 group-hover:scale-110 transition-transform" />
            <span className="gravitas-one-regular hidden sm:block text-2xl md:text-3xl bg-white bg-clip-text text-transparent">
              Everything About-Agents
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              to="/"
              className="text-sm lg:text-base font-medium transition-all text-white hover:text-yellow-500"
            >
              Home
            </Link>
            <Link
              to="/docs"
              className="text-sm lg:text-base font-medium transition-all text-white hover:text-yellow-500"
            >
              Docs
            </Link>
            <Link
              to="/resource"
              className="text-sm lg:text-base font-medium text-white transition-all hover:text-yellow-500"
            >
              Reading materials
            </Link>
            <Link
              to="/tutorial"
              className="text-sm lg:text-base font-medium text-white transition-all hover:text-yellow-500"
            >
              Tutorials
            </Link>

            {/* Contribution Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-sm lg:text-base font-medium text-white hover:text-yellow-500 transition-all gap-1"
              >
                Contribution <ChevronDown className="w-4 h-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black border border-white rounded-md shadow-lg z-50">
                  <Link
                    to="/createTutorial"
                    className="block px-4 py-2 text-sm text-white hover:bg-yellow-500 hover:text-black transition-colors"
                  >
                    CreateTutorial
                  </Link>
                  <Link
                    to="/createResource"
                    className="block px-4 py-2 text-sm text-white hover:bg-yellow-500 hover:text-black transition-colors"
                  >
                    CreateReadingDocs
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 transition-all duration-300 transform hover:scale-110 active:scale-95"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-20 h-7 transition-all duration-300 rotate-180" />
            ) : (
              <Menu className="w-20 h-7 transition-all duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out transform ${
            isMenuOpen
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"
          }`}
        >
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="text-sm font-medium transition-all text-white hover:text-yellow-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/tutorial"
              className="text-sm font-medium transition-all text-white hover:text-yellow-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Tutorials
            </Link>
            <Link
              to="/resource"
              className="text-sm font-medium text-white transition-all hover:text-yellow-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Reading materials
            </Link>

            {/* Mobile Contribution */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-sm font-medium text-white hover:text-yellow-500 transition-all gap-1"
              >
                Contribution <ChevronDown className="w-4 h-4" />
              </button>
              {isDropdownOpen && (
                <div className="mt-2 flex flex-col gap-2">
                  <Link
                    to="/createTutorial"
                    className="text-sm text-white hover:text-yellow-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    CreateTutorial
                  </Link>
                  <Link
                    to="/createReadingDocs"
                    className="text-sm text-white hover:text-yellow-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    CreateReadingDocs
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
