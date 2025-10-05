import { Bot, AlertTriangle } from "lucide-react";
import { animate, stagger, splitText } from "animejs";
import { useEffect } from "react";

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
        { to: 0, ease: "outBounce", duration: 5000, delay: 2000 },
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 dark:bg-blue-400 blur-3xl opacity-20 rounded-full"></div>
                <Bot className="w-24 h-24 text-blue-600 dark:text-blue-400 relative" />
              </div>
            </div>

            <h1 className="text-5xl text-white md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text animate-gradient">
              Everything About Agents
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Your one-stop hub for AI Agents, Chatbots, and Automation
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#disclaimer"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <a
                href="/notes"
                className="px-8 py-3 bg-transparent text-white  rounded-lg font-medium transition-all hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200 dark:border-slate-700"
              >
                View Notes
              </a>
            </div>
          </div>

          <div id="disclaimer" className="max-w-4xl mx-auto">
            <div
              className=" rounded-2xl shadow-xl p-8 md:p-12 border border-yellow-700 
               dark:border-yellow-700 transition-colors 
               bg-yellow-100/20 dark:bg-yellow-900/20 
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
