import logo from "../assets/logo.png";
import Eye from "./Eye.jsx";
import "./Login.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please fill in all fields");
      return;
    }

    setMessage("Login submitted!");
  };

  //hjavsdgfusa

  return (
    <div className="login-page">
      {/* Login card */}
      <div className="login-card">
        <img src={logo} alt="Logo" className="login-logo" />

        <h2 className="login-title">Login to your account</h2>
        <p className="login-subtitle">
          Enter your credentials below to login to your account
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email field */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password field */}
          <div className="form-group">
            <label>Password</label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />

              <span
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Eye isOpen={showPassword} />
              </span>
            </div>
          </div>

          {/* Login button */}
          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>

        {/* Message */}
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Login;
