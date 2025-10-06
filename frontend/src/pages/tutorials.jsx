import Card from "../components/tutorialsCard";

export default function Tutorial() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        <Card
          title="GenAI Roadmap for Beginners"
          about="Dive into the ultimate GenAI learning journey — from zero to hero. This roadmap covers everything from the basics of Large Language Models to building your own AI agents, tools, and apps. Perfect for beginners stepping into the future of AI in 2025."
          image="https://i.ytimg.com/vi/pSVk-5WemQ0/hqdefault.jpg"
          url="https://youtu.be/pSVk-5WemQ0?si=iKSAWeneeAmqQ4-6"
        />
        <Card
          title="intro to LangChain | CampusX"
          about="Start your AI journey with LangChain! Learn step by step how to work with AI agents, tools, and apps, even if you are new to programming. Perfect for beginners in 2025."
          image="https://i.ytimg.com/vi/nlz9j-r0U9U/sddefault.jpg?v=6797d43a"
          url="https://youtu.be/_3ezSpJw2E8?si=eZPEy2RRJ68lp69i"
        />
        <Card
          title="How LLMs Works? - Overview"
          about="Start your AI journey with LangChain! This video explains how Large Language Models (LLMs) a overview of how llm works."
          image="https://i.ytimg.com/vi/K45s2PgywvI/maxresdefault.jpg"
          url="https://youtu.be/K45s2PgywvI?si=2vrb7aJABIb5418xs"
        />
        <Card
          title="How LLM'ss Work | english"
          about=" This video explains how Large Language Models (LLMs) a overview of how llm works."
          image="https://cdnapisec.kaltura.com/p/1773841/sp/177384100/thumbnail/entry_id/1_x9r94bgp/width/400"
          url="https://youtu.be/5sLYAQS9sWQ?si=EOfHin0tG-Y7kx8S"
        />
      </div>
    </>
  );
}
