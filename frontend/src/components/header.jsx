import { Bot } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black transition-colors  transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-26">
          <Link to="/" className="flex items-center gap-2 group">
            <Bot className="w-14 h-14  text-yellow-500  group-hover:scale-110 transition-transform" />
            <span className=" gravitas-one-regular text-3xl  bg-white bg-clip-text text-transparent">
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
              to="/docs"
              className={`font-medium transition-colors text-white`}
            >
              Docs
            </Link>
            <Link
              to="/resource"
              className={`font-medium  text-white transition-colors`}
            >
              Reading materials
            </Link>
            <Link
              to="/tutorial"
              className={`font-medium  text-white transition-colors`}
            >
              Tutorials
            </Link>
            <Link
              to="/about"
              className={`font-medium  text-white transition-colors`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
