import "./tutorial-and-resource.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function CreateResource() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    title: "",
    url: "",
    about: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔍 validation check
    if (
      !inputData.title.trim() ||
      !inputData.url.trim() ||
      !inputData.about.trim()
    ) {
      toast.error("Please fill in all fields ⚠️");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/resources/create",
        inputData
      );

      if (res.status === 200 || res.status === 201) {
        toast.success("Resource added successfully 🎉");

        // reset fields
        setInputData({ title: "", url: "", about: "" });

        // small delay so toast shows
        setTimeout(() => navigate("/resource"), 1200);
      }
    } catch (err) {
      console.error("Error creating resource:", err);
      toast.error("Something went wrong 😞 Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-wrapper">
      <Toaster position="top-right" reverseOrder={false} />
      <form className="form" onSubmit={handleSubmit}>
        <div className="title">
          Contribute Research Papers & Docs
          <br />
          <span>Share your PDFs, Docs, or Research Paper links 🔗</span>
        </div>

        <label>Title</label>
        <input
          type="text"
          placeholder="Enter title"
          name="title"
          onChange={handleChange}
          value={inputData.title}
          className="input"
          required
        />

        <label>URL</label>
        <input
          type="url"
          placeholder="Enter file link"
          name="url"
          onChange={handleChange}
          value={inputData.url}
          className="input"
          required
        />

        <label>Description</label>
        <textarea
          placeholder="Briefly describe the resource"
          name="about"
          rows="4"
          onChange={handleChange}
          value={inputData.about}
          className="input textarea-input"
          required
        />

        <button type="submit" className="button-confirm" disabled={loading}>
          {loading ? "Submitting..." : "Let's contribute →"}
        </button>
      </form>
    </div>
  );
}
