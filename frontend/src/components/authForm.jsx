import "./authform.css";
import { useState, useEffect } from "react";

export default function AuthForm() {
  const [inputData, setinputData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setinputData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-wrappe wrapper">
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
                />
                <input
                  className="flip-card__input"
                  name="password"
                  placeholder=" enter Password"
                  type="password"
                />
                <button type="submit" className="flip-card__btn">
                  Let&apos;s go!
                </button>
              </form>
            </div>

            {/* Signup Side */}
            <div className="flip-card__back">
              <div className="title">Sign up</div>
              <form className="flip-card__form">
                <input
                  className="flip-card__input"
                  placeholder="enter username"
                  name="username"
                  type="text"
                  value={inputData.username}
                  onChange={handleChange}
                />
                <input
                  className="flip-card__input"
                  name="email"
                  placeholder=" enter Email"
                  type="email"
                  value={inputData.email}
                  onChange={handleChange}
                />
                <input
                  className="flip-card__input"
                  name="password"
                  placeholder="enter Password"
                  type="password"
                  value={inputData.password}
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
  );
}
