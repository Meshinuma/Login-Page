import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null); // ✅ goes back to Login screen
  };

  return user ? (
    <Dashboard user={user} onLogout={handleLogout} />
  ) : (
    <Login onLoginSuccess={(userData) => setUser(userData)} />
  );
}

export default App;
