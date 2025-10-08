import {
  Bot,
  Menu,
  X,
  ChevronDown,
  Home,
  FileText,
  BookOpen,
  Video,
  GitPullRequest,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-black border-b border-white transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Left Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Bot className="w-10 h-10 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm lg:text-base font-medium text-white hover:text-yellow-500 transition-all"
            >
              <Home className="w-5 h-5" />
              Home
            </Link>

            <Link
              to="/docs"
              className="flex items-center gap-2 text-sm lg:text-base font-medium text-white hover:text-yellow-500 transition-all"
            >
              <FileText className="w-5 h-5" />
              Docs
            </Link>

            <Link
              to="/resource"
              className="flex items-center gap-2 text-sm lg:text-base font-medium text-white hover:text-yellow-500 transition-all"
            >
              <BookOpen className="w-5 h-5" />
              Reading
            </Link>

            <Link
              to="/tutorial"
              className="flex items-center gap-2 text-sm lg:text-base font-medium text-white hover:text-yellow-500 transition-all"
            >
              <Video className="w-5 h-5" />
              Tutorials
            </Link>

            {/* Contribution Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 text-sm lg:text-base font-medium text-white hover:text-yellow-500 transition-all"
              >
                <GitPullRequest className="w-5 h-5" />
                Contribution
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-black border border-white rounded-md shadow-lg z-50">
                  <Link
                    to="/createTutorial"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-yellow-500 hover:text-black transition-colors"
                  >
                    <Video className="w-4 h-4" />
                    Create Tutorial
                  </Link>
                  <Link
                    to="/createResource"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-yellow-500 hover:text-black transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    Create Reading Doc
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
              <X className="w-8 h-8 transition-all duration-300 rotate-180" />
            ) : (
              <Menu className="w-8 h-8 transition-all duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden  overflow-hidden transition-all duration-500 ease-in-out transform ${
            isMenuOpen
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"
          }`}
        >
          <div className="flex flex-col items-center gap-4 mt-1">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 text-sm text-white hover:text-yellow-500 transition-all"
            >
              <Home className="w-5 h-5" /> Home
            </Link>

            <Link
              to="/tutorial"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 text-sm text-white hover:text-yellow-500 transition-all"
            >
              <Video className="w-5 h-5" /> Tutorials
            </Link>

            <Link
              to="/resource"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 text-sm text-white hover:text-yellow-500 transition-all"
            >
              <BookOpen className="w-5 h-5" /> Reading
            </Link>

            {/* Mobile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 text-sm mb-3 text-white hover:text-yellow-500 transition-all"
              >
                <GitPullRequest className="w-5 h-5" />
                Contribution
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="mt-2 flex flex-col gap-2 pl-6">
                  <Link
                    to="/createTutorial"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsDropdownOpen(false);
                    }}
                    className="flex items-center gap-2 text-sm text-white hover:text-yellow-500 transition-all"
                  >
                    <Video className="w-4 h-4" /> Create Tutorial
                  </Link>

                  <Link
                    to="/createResource"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsDropdownOpen(false);
                    }}
                    className="flex items-center gap-2 text-sm text-white hover:text-yellow-500 transition-all"
                  >
                    <BookOpen className="w-4 h-4" /> Create Reading Doc
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
