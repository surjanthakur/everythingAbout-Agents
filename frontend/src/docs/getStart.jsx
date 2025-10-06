import simpleChatbot from "../image/simple-chatbot.png";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <>
      <div className=" md:px-20 lg:px-40 py-10 bg-gray-950 text-gray-100">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-10 text-pink-500">
          🤖 Simple Chatbot using LangChain
        </h1>

        {/* Intro Section */}
        <section className="space-y-4 text-lg leading-relaxed">
          <p>
            This script is a tiny chat loop that sends whatever you type to a
            LangChain{" "}
            <span className="font-semibold text-pink-400">ChatOpenAI</span>{" "}
            wrapper for OpenAI chat models (like gpt-3.5-turbo) and prints the
            model's reply. It repeatedly asks for input until you type{" "}
            <span className="italic text-gray-300">exit / quit / bye</span>.
          </p>
        </section>

        {/* Requirements */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-pink-400 mb-3">
            ⚙️ What You Need (Requirements)
          </h2>
          <p>
            Install the Python packages (LangChain + OpenAI bindings). A safe
            install command:
          </p>
          <pre className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
            python -m venv venv <br />
            source venv/bin/activate # mac/linux <br />
            # OR on Windows:
            <br />
            venv\Scripts\activate
            <br />
            pip install langchain langchain-openai openai python-dotenv
          </pre>

          <p className="mt-4">
            Depending on LangChain versions, you may only need{" "}
            <code className="text-pink-400">langchain-openai</code> +
            <code className="text-pink-400"> openai</code>, but installing
            <code className="text-pink-400"> langchain</code> as well is safe.
          </p>
          <p className="mt-4">
            Set your OpenAI API key as an environment variable (do NOT hardcode
            it). Example (mac/linux):
          </p>
          <pre className="bg-gray-800 p-4 rounded-lg mt-3 text-sm overflow-x-auto">
            export OPENAI_API_KEY="sk-..."
          </pre>
        </section>

        {/* Code Explanation */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-pink-400 mb-3">
            🧠 What the Code Does — Line by Line
          </h2>
          <img
            src={simpleChatbot}
            alt="Chatbot Illustration"
            className="w-full  shadow-lg mt-4 mb-8 max-h-[700px] object-contain"
          />
          <p className="leading-relaxed">
            <span className="text-pink-400">
              from langchain.chat_models import ChatOpenAI
            </span>{" "}
            → Imports the LangChain wrapper that knows how to talk to OpenAI
            chat models. <br /> <br />
            <span className="text-pink-400">
              from langchain.schema import HumanMessage
            </span>{" "}
            → Imports a message type representing something a human says to the
            model. <br /> <br />
            <span className="text-pink-400">def simple_chatbot():</span> →
            Defines the function containing the chat loop. <br /> <br />
            <span className="text-pink-400">
              llm = ChatOpenAI(model="gpt-3.5-turbo")
            </span>{" "}
            → Creates the model object. <br /> <br />
            <span className="text-pink-400">while True:</span> → Infinite loop
            reading user input. <br /> <br />
            <span className="text-pink-400">
              if user_input.lower() in ["exit", "quit", "bye"]:
            </span>{" "}
            → Stops when you say goodbye. <br /> <br />
            <span className="text-pink-400">
              response = llm([HumanMessage(content=user_input)])
            </span>{" "}
            → Sends your message to the model. <br /> <br />
            <span className="text-pink-400">
              print(f"Bot:response.content")
            </span>{" "}
            → Prints the reply.
          </p>
        </section>

        {/* Message Design */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-pink-400 mb-3">
            🧩 Why LangChain Wraps Messages
          </h2>
          <p>
            Lang models expect a sequence of structured messages with roles like{" "}
            <code className="text-gray-300">system</code>,{" "}
            <code className="text-gray-300">human</code>, and{" "}
            <code className="text-gray-300">assistant</code>. LangChain provides
            <code className="text-pink-400"> HumanMessage</code>,
            <code className="text-pink-400"> SystemMessage</code>, and
            <code className="text-pink-400"> AIMessage</code> for cleaner flow
            and predictable behavior.
          </p>
        </section>

        {/* Skeptical Advice */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-pink-400 mb-3">
            ⚠️ Be a Little Skeptical
          </h2>
          <p>
            Libraries like LangChain evolve fast. If something breaks, check the
            docs or package versions — imports and parameters change often.
          </p>
          <Link
            to="https://python.langchain.com/docs/how_to/installation/?utm_source=chatgpt.com"
            className="text-pink-400 hover:underline block mt-2"
          >
            🔗 Official LangChain Installation Guide
          </Link>
        </section>

        {/* Next Steps */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-pink-400 mb-3">
            🚀 Next Steps — Level Up
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Add a SystemMessage to give your bot a persona.</li>
            <li>
              Maintain conversation history using a messages list with both
              human and AI replies.
            </li>
            <li>Use rate limiting or token trimming to save costs.</li>
            <li>Build a web UI using Streamlit or Flask instead of CLI.</li>
            <li>Once comfortable, try async LangChain or OpenAI API calls.</li>
          </ul>
        </section>
      </div>
    </>
  );
}
