import Card from "../components/tutorialsCard";

export default function Tutorial() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        <Card
          title="GenAI Roadmap for Beginners | End-to-End GenAI Course 2025 |"
          about="Dive into the ultimate GenAI learning journey — from zero to hero. This roadmap covers everything from the basics of Large Language Models to building your own AI agents, tools, and apps. Perfect for beginners stepping into the future of AI in 2025."
          image="https://i.ytimg.com/vi/pSVk-5WemQ0/hqdefault.jpg"
          url="https://youtu.be/pSVk-5WemQ0?si=iKSAWeneeAmqQ4-6"
        />
      </div>
    </>
  );
}
