import main from "../image/main.png";
import langgraph from "../image/langgraph-nodes-and-edges.png";
import tools from "../image/tools.png";
import prompt from "../image/my-luna-ai-system-prompt.png";
import chatSession from "../image/streamlit-session-state-chat-message.png";

export default function Aboutllm() {
  return (
    <>
      <div className=" md:px-20 lg:px-40 py-10 bg-gray-950 text-gray-100">
        {/* Project Title */}
        <h1 className="text-3xl font-bold text-cyan-400 mb-4">
          Luna AI Agent Chatbot with Tools
        </h1>

        <p>
          The <strong>Luna AI Agent</strong> is a smart chatbot built with{" "}
          <span className="text-pink-400 font-semibold">LangChain</span> and{" "}
          <span className="text-pink-400 font-semibold">LangGraph</span>. It
          can:
        </p>
        <ul className="list-disc list-inside ml-5">
          <li>Chat with users 💬</li>
          <li>
            Use tools like weather check, web search, Wikipedia lookup, and song
            player 🎵
          </li>
          <li>Keep chat history 💾</li>
          <li>Run on Streamlit — a web app framework for Python 🖥️</li>
          <li>Act like a mini ChatGPT but runs locally with your logic 🧠</li>
        </ul>

        {/* Key Libraries */}
        <h2 className="text-2xl text-cyan-400 font-semibold mt-8">
          Key Libraries & Frameworks
        </h2>
        <div className="border-l-4 border-cyan-400 pl-4">
          <p>These are the main tools that make Luna work smoothly:</p>
          <ul className="list-disc list-inside ml-5">
            <li>
              <b>Streamlit</b> — builds the web app interface
            </li>
            <li>
              <b>LangGraph</b> — connects nodes like chatbot → tools → memory
            </li>
            <li>
              <b>LangChain</b> — manages prompts, memory, and model responses
            </li>
            <li>
              <b>PIL (Pillow)</b> — for working with images
            </li>
            <li>
              <b>dotenv</b> — to handle secret API keys safely
            </li>
            <li>
              <b>Groq API</b> — powers the main LLM brain
            </li>
            <li>
              <b>DuckDuckGo / Wikipedia</b> — provides external data through
              tools
            </li>
          </ul>
        </div>

        {/* Step 1 */}
        <h2 className="text-2xl text-cyan-400 font-semibold mt-10">
          Step 1: Setup Streamlit App (User Interface)
        </h2>
        <img
          src={main}
          alt="Main Streamlit UI"
          className=" shadow-lg w-full sm:w-3/4 mx-auto my-4"
        />
        <p>
          This part builds the <strong>frontend</strong> using Streamlit. It
          handles chat display, sidebar, buttons, and the chat input box.
        </p>
        <ul className="list-disc list-inside ml-5">
          <li>Sidebar shows all past chats</li>
          <li>“New Chat” button starts a fresh conversation</li>
          <li>Main area displays messages</li>
          <li>Input box lets you ask Luna anything</li>
        </ul>

        <div className="bg-gray-900 p-4 rounded-lg mt-3">
          <code>
            if prompt := st.chat_input("luna tell me.."):
            <br />
            &nbsp;&nbsp;st.session_state.messages.append(&#123;"role": "user",
            "content": prompt&#125;)
          </code>
        </div>
        <p className="mt-2">
          When you type a message, it’s stored in session memory and processed
          by the AI.
        </p>

        {/* Step 2 */}
        <h2 className="text-2xl text-cyan-400 font-semibold mt-10">
          Step 2: Create Chat Memory Functions
        </h2>
        <img
          src={chatSession}
          alt="Chat session state"
          className="rounded-2xl shadow-lg w-full sm:w-3/4 mx-auto my-4"
        />
        <p>
          These functions handle <strong>chat memory</strong>. Luna remembers
          past chats using <code>session_state</code> so every chat feels
          continuous.
        </p>
        <ul className="list-disc list-inside ml-5">
          <li>
            <b>init_session_state()</b> — sets up memory
          </li>
          <li>
            <b>create_new_chat()</b> — starts a new session
          </li>
          <li>
            <b>load_chat()</b> — loads a specific chat from history
          </li>
          <li>
            <b>save_current_chat()</b> — saves messages permanently
          </li>
        </ul>
        <p>
          Each chat gets a unique ID using <code>uuid</code> and a timestamp.
        </p>

        {/* Step 3 */}
        <h2 className="text-2xl text-cyan-400 font-semibold mt-10">
          Step 3: Build LangGraph Logic (Brain of Luna)
        </h2>
        <img
          src={langgraph}
          alt="LangGraph flow diagram"
          className="rounded-2xl shadow-lg w-full sm:w-3/4 mx-auto my-4"
        />
        <p>
          This is where the <strong>AI’s brain</strong> comes alive using
          LangGraph. It connects the chatbot with memory and tools through nodes
          and edges.
        </p>
        <ol className="list-decimal list-inside ml-5 space-y-2">
          <li>
            <b>Define State:</b> Holds all chat messages like memory.
          </li>
          <li>
            <b>Initialize LLM:</b> Uses Groq API for the main chat model
            <code>openai/gpt-oss-120b</code>.
          </li>
          <li>
            <b>Bind Tools:</b> Gives the model access to weather, web, and wiki
            tools.
          </li>
          <li>
            <b>Chat Node:</b> Combines system prompt + user messages to generate
            responses.
          </li>
          <li>
            <b>Graph Setup:</b> Connects nodes in sequence → START → Chatbot →
            Tools → Chatbot → END.
          </li>
        </ol>

        {/* System Prompt */}
        <h2 className="text-2xl text-cyan-400 font-semibold mt-8">
          Step 3.5: System Prompt – Luna’s Personality
        </h2>
        <img
          src={prompt}
          alt="Luna AI System Prompt"
          className="rounded-2xl shadow-lg w-full sm:w-3/4 mx-auto my-4"
        />
        <p>
          The <strong>system prompt</strong> defines Luna’s behavior — how she
          talks, what she knows, and how she uses tools. It’s like her
          **instruction manual**.
        </p>
        <p>
          Example: You can define tone (friendly or formal), response style, or
          priorities. It ensures consistency across all chats.
        </p>

        {/* Step 4 */}
        <h2 className="text-2xl text-cyan-400 font-semibold mt-10">
          Step 4: Add Tools for Real-World Actions
        </h2>
        <img
          src={tools}
          alt="AI Tools integration"
          className="rounded-2xl shadow-lg w-full sm:w-3/4 mx-auto my-4"
        />
        <p>
          These are Luna’s <strong>superpowers</strong> — real functions that
          let her interact with the world.
        </p>
        <ul className="list-disc list-inside ml-5">
          <li>
            <b>get_weather(city)</b> — fetches weather data 🌦️
          </li>
          <li>
            <b>web_search(query)</b> — searches the internet 🔎
          </li>
          <li>
            <b>play_song(song_name)</b> — plays songs on YouTube 🎶
          </li>
          <li>
            <b>wikipidia_search(query)</b> — gets detailed info from Wikipedia
            📚
          </li>
        </ul>

        <div className="bg-gray-900 p-4 rounded-lg mt-3">
          <code>
            @tool
            <br />
            def get_weather(city: str):
            <br />
            &nbsp;&nbsp;url = f"https://wttr.in/{`{city}`}?format=%C+%t"
            <br />
            &nbsp;&nbsp;response = requests.get(url)
            <br />
            &nbsp;&nbsp;return f"Weather of {`{city}`} is {`{response.text}`}"
          </code>
        </div>

        <p className="mt-3">
          The <code>@tool</code> decorator registers each function as a callable
          tool for the AI. Now Luna can “decide” when to use them.
        </p>

        {/* Step 5 */}
        <h2 className="text-2xl text-cyan-400 font-semibold mt-10">
          Step 5: Combine Everything in Streamlit
        </h2>
        <p>
          Finally, all components connect in the Streamlit app. When a user
          sends a message:
        </p>
        <ol className="list-decimal list-inside ml-5 space-y-2">
          <li>The message goes to LangGraph.</li>
          <li>AI checks if it needs a tool.</li>
          <li>The tool executes and returns results.</li>
          <li>Luna replies back — streamed in real-time!</li>
        </ol>

        <div className="bg-gray-900 p-4 rounded-lg mt-3">
          <code>ai_message = st.write_stream(ai_only_stream())</code>
        </div>
        <p>This makes Luna’s responses appear live — like ChatGPT typing.</p>

        {/* Requirements */}
        <h2 className="text-2xl text-cyan-400 font-semibold mt-10">
          Requirements
        </h2>
        <div className="bg-gray-900 p-4 rounded-lg">
          <code>
            pip install streamlit langchain langgraph langchain-core pillow
            python-dotenv requests duckduckgo-search wikipedia-api
          </code>
        </div>
        <p className="mt-2">
          Also, create a <code>.env</code> file with:
        </p>
        <div className="bg-gray-900 p-4 rounded-lg">
          <code>
            GROQ_API_KEY=your_groq_key_here <br />
            GOOGLE_API_KEY=your_youtube_key_here
          </code>
        </div>

        {/* Project Flow */}
        <h2 className="text-2xl text-cyan-400 font-semibold mt-10">
          Project Flow Summary
        </h2>
        <p>
          <b>User</b> → Streamlit UI → <b>LangGraph</b> → Chatbot Node (LLM +
          Prompt) → Tool Node (Weather, Search, etc.) → <b>Response Back</b>
        </p>
        <p>
          Each node passes messages in a loop, making Luna act like a true{" "}
          <strong>AI agent</strong> that thinks and acts.
        </p>

        {/* Key Takeaways */}
        <h2 className="text-2xl text-cyan-400 font-semibold mt-10">
          Key Takeaways for Beginners
        </h2>
        <ul className="list-disc list-inside ml-5">
          <li>LangChain handles prompts, memory, and model interaction.</li>
          <li>LangGraph manages message flow between AI and tools.</li>
          <li>Streamlit gives a beautiful web interface.</li>
          <li>Session state keeps history alive.</li>
          <li>Tools let the AI perform real actions beyond chat.</li>
        </ul>

        {/* Summary */}
        <h2 className="text-2xl text-cyan-400 font-semibold mt-10">In Short</h2>
        <p className="italic">
          “You didn’t just make a chatbot, bro — you built a <b>baby AGI</b>{" "}
          with memory, logic, and real-world tools. A mini digital assistant
          that learns, thinks, and remembers.”
        </p>
      </div>
    </>
  );
}
