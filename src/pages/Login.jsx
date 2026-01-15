import { useState } from "react";
import logo from "../assets/logo.png";
import Eye from "./Eye.jsx";
import "./Login.css";

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1️⃣ Basic validation
    if (!email || !password) {
      setMessage("Please fill in all fields");
      return;
    }

    // 2️⃣ Simple user-based validation (BEGINNER LEVEL)
    if (password.length < 4) {
      setMessage("Password must be at least 4 characters");
      return;
    }

    // 3️⃣ Create a user object (this simulates logged-in user)
    const user = {
      email: email,
    };

    // 4️⃣ Login success → go to dashboard
    onLoginSuccess(user);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <img src={logo} alt="Logo" className="login-logo" />

        <h2 className="login-title">Login to your account</h2>
        <p className="login-subtitle">
          Enter your credentials below to login to your account
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Eye isOpen={showPassword} />
              </span>
            </div>
          </div>

          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Login;
