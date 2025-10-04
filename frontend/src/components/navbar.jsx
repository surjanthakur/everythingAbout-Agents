import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bot, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Notes", path: "/notes" },
    { name: "Resources", path: "/resources" },
    { name: "YouTube Links", path: "/youtube" },
    { name: "Tutorials", path: "/tutorials" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-agent-black dark:bg-agent-black bg-opacity-95 dark:bg-opacity-95 backdrop-blur-sm border-b border-agent-dark-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Bot className="w-8 h-8 text-agent-red group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold text-white">
              Everything About Agents
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-agent-red"
                    : "text-gray-300 hover:text-agent-red"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-agent-dark-red hover:bg-agent-red transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-white" />
              ) : (
                <Moon className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-agent-dark-red hover:bg-agent-red transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-white" />
              ) : (
                <Moon className="w-5 h-5 text-white" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-agent-black border-t border-agent-dark-red">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-agent-red bg-agent-dark-red"
                    : "text-gray-300 hover:text-agent-red hover:bg-agent-dark-red"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
