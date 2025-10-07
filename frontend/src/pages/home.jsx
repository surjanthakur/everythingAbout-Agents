import { Bot, AlertTriangle } from "lucide-react";
import { animate, stagger, splitText } from "animejs";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const gaspRef = useRef();
  const disclaimerRef = useRef();
  const learnRef = useRef();
  const whatyoulearn = useRef();

  useGSAP(() => {
    // Hero section fade-in
    gsap.from(gaspRef.current, {
      opacity: 0,
      duration: 1,
      y: 50,
      stagger: 1,
    });

    // Scroll animations for Disclaimer
    gsap.from(disclaimerRef.current, {
      scrollTrigger: {
        trigger: disclaimerRef.current,
        start: "top 80%", // when the section comes into view
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 80,
      x: -50,
      duration: 1.5,
      ease: "power3.out",
    });

    // Scroll animations for Disclaimer
    gsap.from(whatyoulearn.current, {
      scrollTrigger: {
        trigger: whatyoulearn.current,
        start: "top 80%", // when the section comes into view
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      x: -100,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(learnRef.current, {
      scrollTrigger: {
        trigger: learnRef.current,
        start: "top 85%", // triggers a bit later for natural timing
        end: "bottom 60%", // extends the scroll range for smoother play
        scrub: 1.2, // <-- makes animation follow scroll (smooth glide)
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      x: 200,
      duration: 1.5,
      ease: "power4.out", // more gentle and elastic feel
    });
  });

  useEffect(() => {
    const { words } = splitText("h1", {
      words: { wrap: "clip" },
    });

    animate(words, {
      y: [{ to: ["100%"] }],
      duration: 750,
      delay: stagger(100),
    });
  }, []);

  return (
    <>
      <div className="min-h-screen transition-colors">
        {/* HERO SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 dark:bg-blue-400 blur-3xl opacity-20 rounded-full"></div>
                <Bot className="w-24 h-24 text-black dark:text-black relative" />
              </div>
            </div>

            <h1
              ref={whatyoulearn}
              className=" gravitas-one-regular text-5xl text-yellow-400 md:text-7xl font-bold mb-6 bg-clip-text animate-gradient "
            >
              EVERYTHING ABOUT AGENTS
            </h1>

            <p
              ref={gaspRef}
              className=" text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              Your one-stop hub for AI Agents, Chatbots, and Automation
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#disclaimer"
                className="py-5 h-18 w-38 text-2xl text-white bg-black hover:bg-yellow-500 hover:text-black  font-bold transition-all hover:scale-105 shadow-lg hover:shadow-xl "
              >
                Get Started
              </a>
              <Link
                to="/docs"
                className="py-5 h-18 w-38 text-2xl text-black bg-yellow-500 hover:bg-black hover:text-white font-bold transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Notes
              </Link>
            </div>
          </div>

          {/* DISCLAIMER SECTION */}
          <div
            ref={disclaimerRef}
            id="disclaimer"
            className="max-w-4xl mx-auto"
          >
            <div
              className=" shadow-xl p-8 md:p-12  
              transition-colors 
               bg-black 
               backdrop-blur-xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-red-500 mb-4">
                    Disclaimer
                  </h2>
                  <p className="text-gray-700 dark:text-yellow-400 leading-relaxed">
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

      <div className="bg-black py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1
            ref={whatyoulearn}
            className="gravitas-one-regular text-5xl md:text-7xl font-bold text-yellow-400 mb-8 bg-clip-text animate-gradient"
          >
            WHAT YOU LEARN HERE
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            You’ll discover{" "}
            <span className="text-yellow-400 font-semibold">
              how AI Agents actually work
            </span>{" "}
            — how they think, plan, and take action just like a{" "}
            <span className="text-yellow-300 font-bold">digital assistant</span>{" "}
            that never sleeps.
          </p>
        </div>

        <div
          ref={learnRef}
          className="md:w-1/2 bg-zinc-900 overflow-hidden shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
        >
          <img
            src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/11/marquee-af-ai-agents.jpg"
            alt="AI Agent"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-gray-300">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">
              🧠 What is an AI Agent (in simple words)?
            </h2>
            <p className="leading-relaxed">
              An <span className="text-yellow-400 font-semibold">AI Agent</span>{" "}
              is basically a{" "}
              <span className="text-yellow-300 font-bold">digital worker</span>{" "}
              that can{" "}
              <span className="text-yellow-400">think, decide, and act</span> to
              finish a goal — like a human assistant, but powered by AI.
            </p>
            <p className="mt-3">
              You give it a{" "}
              <span className="text-yellow-400 font-semibold">goal</span> or{" "}
              <span className="text-yellow-400 font-semibold">task</span>, and
              it figures out how to complete it using tools, data, and logic.
            </p>

            <div className="mt-4 border-l-4 border-yellow-400 pl-4 italic text-gray-400">
              Think of it like a smart intern who can:
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li>📖 Read instructions</li>
                <li>🌐 Search the internet</li>
                <li>⚙️ Use apps</li>
                <li>💡 Return with results — without micromanaging</li>
              </ul>
            </div>

            <h3 className="mt-6 text-xl font-semibold text-yellow-400">
              ⚙️ How does it actually “work”?
            </h3>

            <ul className="mt-3 space-y-2">
              <li>
                <span className="font-semibold text-yellow-400">
                  Goal / Prompt:
                </span>{" "}
                What you want it to do — “Find me suppliers of potatoes.”
              </li>
              <li>
                <span className="font-semibold text-yellow-400">
                  Reasoning Engine:
                </span>{" "}
                Thinks and decides the next step.
              </li>
              <li>
                <span className="font-semibold text-yellow-400">
                  Tools / Actions:
                </span>{" "}
                APIs or functions it can use (web search, email, weather).
              </li>
              <li>
                <span className="font-semibold text-yellow-400">Memory:</span>{" "}
                Remembers context (your last query or chat).
              </li>
              <li>
                <span className="font-semibold text-yellow-400">
                  Learning Loop:
                </span>{" "}
                Improves from experience.
              </li>
            </ul>

            <p className="mt-6 text-yellow-400 font-bold text-lg">
              🧭 In short: “An AI Agent is a mini digital mind that doesn’t just
              chat — it acts.”
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
