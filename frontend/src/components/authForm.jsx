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

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  // handle signup onchange
  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  // handle login onchange
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  // handle signup submit
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/signup", signupData);
      if (res.status === 200 || res.status === 201) {
        toast.success("account created successfuly🎉");
        setTimeout(() => navigate("/"), 3000);
      } else {
        toast.error("⚠️ something went wrong ? cant create account!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // handle login submit
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("username", loginData.username);
      formData.append("password", loginData.password);
      const res = await axios.post("http://127.0.0.1:8000/login", formData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      if (res.status === 200 || res.status === 201) {
        toast.success("user login successfuly🎉");
        setTimeout(() => navigate("/"), 3000);
      } else {
        toast.error("⚠️ something went wrong ? cant login!");
      }
    } catch (err) {
      console.log(err);
      toast.error("Login failed ⚠️");
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
                <form onSubmit={handleLoginSubmit} className="flip-card__form">
                  <input
                    className="flip-card__input"
                    name="username"
                    placeholder="enter username"
                    type="text"
                    value={loginData.username}
                    autoComplete="off"
                    onChange={handleLoginChange}
                  />
                  <input
                    className="flip-card__input"
                    name="password"
                    placeholder=" enter Password"
                    type="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    autoComplete="off"
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
                    autoComplete="off"
                    value={signupData.username}
                    onChange={handleSignupChange}
                  />
                  <input
                    className="flip-card__input"
                    name="email"
                    placeholder=" enter Email"
                    type="email"
                    autoComplete="off"
                    value={signupData.email}
                    onChange={handleSignupChange}
                  />
                  <input
                    className="flip-card__input"
                    name="password"
                    placeholder="enter Password"
                    type="password"
                    autoComplete="off"
                    value={signupData.password}
                    onChange={handleSignupChange}
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
