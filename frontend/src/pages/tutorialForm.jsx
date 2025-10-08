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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔒 simple validation
    if (
      !inputData.title.trim() ||
      !inputData.url.trim() ||
      !inputData.about.trim()
    ) {
      toast.error("Please fill out all fields before submitting ⚠️");
      return;
    }

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/tutorials/create",
        inputData
      );

      if (res.status === 200 || res.status === 201) {
        toast.success("Tutorial added successfully 🎉");

        // Reset form after success
        setInputData({ title: "", url: "", about: "" });

        // Delay navigation so toast shows
        setTimeout(() => navigate("/tutorial"), 1200);
      }
    } catch (err) {
      console.error("Error creating resource:", err);
      toast.error("Something went wrong 😞 Try again later.");
    }
  };

  return (
    <div className="form-wrapper">
      <Toaster position="top-center" reverseOrder={false} />
      <form className="form" onSubmit={handleSubmit}>
        <div className="title">
          Contribute Video Tutorials
          <br />
          <span>Share any video from any platform via link 🔗</span>
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
          placeholder="Enter video URL"
          name="url"
          onChange={handleChange}
          value={inputData.url}
          className="input"
          required
        />

        <label>Description</label>
        <textarea
          placeholder="Write something about the content"
          name="about"
          rows="4"
          onChange={handleChange}
          value={inputData.about}
          className="input textarea-input"
          required
        />

        <button type="submit" className="button-confirm">
          Let’s Contribute →
        </button>
      </form>
    </div>
  );
}
