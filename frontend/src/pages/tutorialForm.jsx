import "./tutorialForm.css";

export default function CreateResource() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="form-wrapper">
      <div className="form">
        <div className="title">
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

        <textarea
          placeholder="about content"
          name="about"
          rows="4"
          className="input textarea-input"
        />

        <button type="button" onClick={handleSubmit} className="button-confirm">
          Let's contribute →
        </button>
      </div>
    </div>
  );
}
