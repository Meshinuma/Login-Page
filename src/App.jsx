import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  return user ? (
    <Dashboard user={user} />
  ) : (
    <Login onLoginSuccess={(userData) => setUser(userData)} />
  );
}

export default App;
