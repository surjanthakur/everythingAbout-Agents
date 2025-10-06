export default function AboutAgents() {
  return (
    <div className="p-6 md:p-10 text-white bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-cyan-400">
        🤖 Understanding AI Agents
      </h1>

      {/* Intro */}
      <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-300">
        AI Agents are like{" "}
        <span className="text-cyan-300 font-semibold">digital assistants</span>{" "}
        that can think, decide, and act on their own to complete a task. They
        don’t just reply to your prompts — they{" "}
        <span className="font-semibold text-yellow-300">
          plan, reason, and take actions
        </span>{" "}
        using tools, APIs, or even other AIs.
      </p>

      {/* Why we use AI Agents */}
      <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
        🌟 Why We Use AI Agents
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2">
        <li>
          To automate boring or repetitive tasks — like summarizing text or
          sending emails.
        </li>
        <li>
          To connect different tools and data sources, making AI more useful in
          real workflows.
        </li>
        <li>
          To make decisions step-by-step instead of answering one question at a
          time.
        </li>
      </ul>

      {/* What agents do */}
      <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
        🧠 What AI Agents Actually Do
      </h2>
      <p className="text-gray-300 mb-4">
        Think of an AI agent as a{" "}
        <span className="text-yellow-300 font-medium">
          worker with a brain and a to-do list
        </span>
        . You tell it what you want, and it figures out <i>how</i> to do it by:
      </p>
      <ol className="list-decimal list-inside mb-6 text-gray-300 space-y-2">
        <li>Understanding your prompt.</li>
        <li>Breaking the goal into smaller steps.</li>
        <li>Calling APIs, searching the web, or writing code.</li>
        <li>Returning the final, smart result to you.</li>
      </ol>

      {/* Key Libraries & Frameworks */}
      <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
        ⚙️ Key Libraries & Frameworks to Build AI Agents
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2">
        <li>
          <span className="font-semibold text-yellow-300">LangChain:</span>{" "}
          Helps connect LLMs (like GPT) to tools, APIs, and memory.
        </li>
        <li>
          <span className="font-semibold text-yellow-300">LangGraph:</span> Lets
          you build structured, multi-step workflows using AI nodes.
        </li>
        <li>
          <span className="font-semibold text-yellow-300">
            OpenAI / Groq API:
          </span>{" "}
          The actual brain of your agent — processes language and decisions.
        </li>
        <li>
          <span className="font-semibold text-yellow-300">FastAPI:</span> For
          backend endpoints your agent can call.
        </li>
        <li>
          <span className="font-semibold text-yellow-300">
            React / Streamlit:
          </span>{" "}
          For the user interface — how humans interact with the agent.
        </li>
      </ul>

      {/* Simple Example */}
      <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
        💡 Simple Code Example
      </h2>
      <pre className="bg-gray-800 rounded-xl p-4 text-sm overflow-x-auto mb-6">
        <code className="text-green-400">
          {`from langchain.agents import initialize_agent, load_tools
from langchain.chat_models import ChatOpenAI

llm = ChatOpenAI(model="gpt-4o-mini")
tools = load_tools(["serpapi", "python_repl"])

agent = initialize_agent(tools, llm, agent_type="zero-shot-react-description")
agent.run("Find today's weather in Delhi and calculate 5 + 7")`}
        </code>
      </pre>

      {/* About Prompts */}
      <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
        🗣️ About Prompts
      </h2>
      <p className="text-gray-300 mb-6">
        Prompts are{" "}
        <span className="text-yellow-300 font-semibold">
          instructions or goals
        </span>{" "}
        you give to the agent. A good prompt is clear, specific, and gives
        context. Example:{" "}
        <span className="italic text-cyan-300">
          “Search for today’s news about AI startups and summarize the top 3
          headlines.”
        </span>
      </p>

      {/* Summary */}
      <div className="border-t border-gray-700 mt-10 pt-6">
        <p className="text-center text-gray-400 text-lg">
          In short,{" "}
          <span className="text-cyan-300 font-semibold">AI Agents</span> are
          like smart digital interns — they don’t just chat, they{" "}
          <span className="text-yellow-300 font-semibold">get stuff done</span>.
        </p>
      </div>
    </div>
  );
}
