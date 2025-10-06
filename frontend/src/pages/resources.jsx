import Card from "../components/resourceCard";

export default function Resource() {
  return (
    <>
      <div className="relative overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        <Card
          title="learn about prompts"
          about="im this section you learn about prompts"
          url="https://help.openai.com/en/articles/4936848-how-do-i-create-a-good-prompt-for-an-ai-model"
        />
      </div>
    </>
  );
}
