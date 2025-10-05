import { Bot, AlertTriangle } from "lucide-react";
import { animate, stagger, splitText } from "animejs";
import { useEffect } from "react";
import "../css/home.css";

export default function Home() {
  useEffect(() => {
    const { chars } = splitText("h1", {
      words: false,
      chars: true,
    });

    animate(chars, {
      // Property keyframes
      y: [
        { to: "-2.75rem", ease: "outExpo", duration: 600 },
        { to: 0, ease: "outBounce", duration: 3000, delay: 2000 },
      ],
      // Property specific parameters
      rotate: {
        from: "-1turn",
        delay: 0,
      },
      delay: stagger(50),
      ease: "inOutCirc",
      loopDelay: 1000,
      loop: true,
    });
  }, []);
  return (
    <>
      <div className="min-h-screen transition-colors hero-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 dark:bg-blue-400 blur-3xl opacity-20 rounded-full"></div>
                <Bot className="w-24 h-24 text-black dark:text-black relative" />
              </div>
            </div>

            <h1 className=" gravitas-one-regular text-5xl text-yellow-400 md:text-7xl font-bold mb-6 bg-clip-text animate-gradient">
              EVERYTHING ABOUT AGENTS
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Your one-stop hub for AI Agents, Chatbots, and Automation
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#disclaimer"
                className="py-5 h-18 w-38 text-2xl text-white bg-black hover:bg-yellow-500 hover:text-black  font-bold transition-all hover:scale-105 shadow-lg hover:shadow-xl "
              >
                Get Started
              </a>
              <a
                href="/notes"
                className="py-5 h-18 w-38 text-2xl text-black bg-yellow-500 hover:bg-black hover:text-white font-bold transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Notes
              </a>
            </div>
          </div>

          <div id="disclaimer" className="max-w-4xl mx-auto">
            <div
              className=" rounded-2xl shadow-xl p-8 md:p-12  
              transition-colors 
               bg-black 
               backdrop-blur-xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Disclaimer
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    All content on this website is based on my own learning,
                    notes, and personal experiences. It may not always be 100%
                    accurate, but it reflects what I've studied and practiced
                    while working with AI Agents. This is a living resource that
                    grows with my journey in understanding and implementing AI
                    agent systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
