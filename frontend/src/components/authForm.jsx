import "./authform.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

export default function AuthForm() {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/signup", inputData);
      if (res.status === 200 || res.status === 201) {
        toast.success("account created successfuly🎉");
        setTimeout(() => navigate("/"), 3000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="wrapper">
        <Toaster position="bottom-center" reverseOrder={false} />
        <div className="card-switch">
          <label className="switch">
            <input type="checkbox" className="toggle" />
            <span className="slider"></span>
            <span className="card-side"></span>

            <div className="flip-card__inner">
              {/* Login Side */}
              <div className="flip-card__front">
                <div className="title">Log in</div>
                <form className="flip-card__form">
                  <input
                    className="flip-card__input"
                    name="email"
                    placeholder="enter email"
                    type="email"
                    value={""}
                    onChange={handleChange}
                  />
                  <input
                    className="flip-card__input"
                    name="password"
                    placeholder=" enter Password"
                    type="password"
                    value={""}
                    onChange={handleChange}
                  />
                  <button type="submit" className="flip-card__btn">
                    Let&apos;s go!
                  </button>
                </form>
              </div>

              {/* signup form */}
              <div className="flip-card__back">
                <div className="title">Sign up</div>
                <form onSubmit={handleSignupSubmit} className="flip-card__form">
                  <input
                    className="flip-card__input"
                    placeholder="enter username"
                    name="username"
                    type="text"
                    value={signupData.username}
                    onChange={handleChange}
                  />
                  <input
                    className="flip-card__input"
                    name="email"
                    placeholder=" enter Email"
                    type="email"
                    value={signupData.email}
                    onChange={handleChange}
                  />
                  <input
                    className="flip-card__input"
                    name="password"
                    placeholder="enter Password"
                    type="password"
                    value={signupData.password}
                    onChange={handleChange}
                  />
                  <button type="submit" className="flip-card__btn">
                    Confirm!
                  </button>
                </form>
              </div>
            </div>
          </label>
        </div>
      </div>
    </>
  );
}
