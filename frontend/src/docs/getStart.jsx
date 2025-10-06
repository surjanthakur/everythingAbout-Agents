import simpleChatbot from "../image/simple-chatbot.png";

export default function Start() {
  return (
    <>
      <div>
        <h1>simple chatbot using langchain</h1>
        <p>
          This script is a tiny chat loop that sends whatever you type to a
          LangChain ChatOpenAI wrapper for OpenAI chat models (like
          gpt-3.5-turbo) and prints the model's reply. It repeatedly asks for
          input until you type exit/quit/bye.
        </p>
        <h1>What you need (requirements / quick install)</h1>
        <p>
          Install the Python packages (LangChain + OpenAI bindings). A safe
          install command:
        </p>
        <h1>
          python -m venv venv source venv/bin/activate # mac/linux # OR on
          Windows: venv\Scripts\activate pip install langchain langchain-openai
          openai python-dotenv
        </h1>
        <p>
          Depending on LangChain versions you may only need langchain-openai +
          openai, but installing langchain as well is safe
        </p>
        <h1>
          Set your OpenAI API key as an environment variable (do NOT hardcode
          it). Example (mac/linux): export OPENAI_API_KEY="sk-..."
        </h1>
        <h1>What the code does — line by line (simple terms)</h1>
        <img src={simpleChatbot} alt="chatbot" />
      </div>
    </>
  );
}
