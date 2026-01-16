import { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

function Header({ user }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });


  const formattedDate = currentTime.toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const initials = user.email.slice(0, 2).toUpperCase();

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="header-logo" />
      </div>

      <div className="header-right">
        
        <div className="date-card">
          <div className="date-label">Current Date and Time:</div>
          <div className="date-value">
            {formattedDate}, {formattedTime}
          </div>
        </div>

      
        <div className="profile-avatar">
          {initials}
        </div>

      </div>
    </header>
  );
}

export default Header;
