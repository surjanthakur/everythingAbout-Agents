import { Github, Instagram, Twitter, Linkedin } from "lucide-react";
import "./footer.css";

export default function RetroFooter() {
  return (
    <footer className="relative bg-black text-[#00ff41] py-12 border-t-4 border-[#ff00a7] overflow-hidden">
      {/* Animated scanline effect */}
      <div className="absolute inset-0 scanline pointer-events-none"></div>

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>

      {/* Neon top border glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff00a7] to-transparent animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 space-y-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand / Logo */}
          <div className="text-center md:text-left">
            <h1
              className="font-mono text-4xl md:text-5xl tracking-wider uppercase  glitch"
              data-text="Surjan"
            >
              Surjan
            </h1>
            <p className="font-mono text-xs md:text-sm text-[#00ff41] mt-2 tracking-widest opacity-80">
              MAKE COMPLEX SIMPLE AGAIN
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-8">
            <a
              href="https://github.com/surjanthakur"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon group"
            >
              <Github
                className="group-hover:drop-shadow-[0_0_10px_#00ff41]"
                size={32}
              />
            </a>
            <a
              href="https://x.com/tsurjan16"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon group"
            >
              <Twitter
                className="group-hover:drop-shadow-[0_0_10px_#00ff41]"
                size={32}
              />
            </a>
            <a
              href="https://www.instagram.com/epicsurjanthakur/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon group"
            >
              <Instagram
                className="group-hover:drop-shadow-[0_0_10px_#00ff41]"
                size={32}
              />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon group"
            >
              <Linkedin
                className="group-hover:drop-shadow-[0_0_10px_#00ff41]"
                size={32}
              />
            </a>
          </div>
        </div>

        {/* Divider with dots */}
        <div className="flex items-center justify-center gap-2">
          <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-[#ff00a7] to-[#00ff41]"></div>
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-[#ff00a7] animate-pulse"></span>
            <span className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse delay-100"></span>
            <span className="w-2 h-2 rounded-full bg-[#ff00a7] animate-pulse delay-200"></span>
          </div>
          <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent via-[#ff00a7] to-[#00ff41]"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          {/* Copyright */}
          <p className="text-xs md:text-sm font-mono text-[#00ff41] opacity-80 tracking-wide">
            <span className="text-[#ff00a7]">©</span> {new Date().getFullYear()}{" "}
            <span className="font-bold text-white">surjan thakur</span>{" "}
            <span className="text-[#ff00a7]">⚡</span> BUILT WITH{" "}
            <span className="text-[#ff00a7]">❤️</span> & OLD-SCHOOL ENERGY
          </p>
        </div>
      </div>
    </footer>
  );
}
