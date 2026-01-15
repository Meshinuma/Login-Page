import { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

function Header({ user }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  // Format date & time nicely
  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString();

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="header-logo" />
      </div>

      <div className="header-right">
        <div className="date-time">
          {formattedDate} {formattedTime}
        </div>
        <div className="profile">
          {user.email} {/* or username if you have one */}
        </div>
      </div>
    </header>
  );
}

export default Header;
