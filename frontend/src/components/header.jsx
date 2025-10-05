import { Bot } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Bot className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Everything About-Agents
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-medium transition-colors  text-white ext-blue-600 dark:hover:text-blue-400"`}
            >
              Home
            </Link>
            <Link
              to="/notes"
              className={`font-medium transition-colors text-white`}
            >
              Notes
            </Link>
            <Link
              to="/resources"
              className={`font-medium  text-white transition-colors`}
            >
              Resources
            </Link>
            <Link
              to="/youtube"
              className={`font-medium  text-white transition-colors`}
            >
              YouTube Links
            </Link>
            <Link
              to="/tutorials"
              className={`font-medium  text-white transition-colors`}
            >
              Tutorials
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
