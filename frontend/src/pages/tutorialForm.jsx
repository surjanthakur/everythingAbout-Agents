import "./tutorialForm.css";

export default function CreateTutorial() {
  return (
    <>
      <form class="form">
        <div class="title">
          Welcome,
          <br />
          <span>contribute your content</span>
        </div>
        <input
          type="text"
          placeholder="enter title"
          name="title"
          className="input"
        />
        <input
          type="url"
          placeholder="enter url"
          name="url"
          className="input"
        />
        <textarea placeholder="about content" name="about" className="input" />

        <button className="button-confirm">Let`s contribute →</button>
      </form>
    </>
  );
}
