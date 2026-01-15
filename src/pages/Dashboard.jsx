import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Dashboard({ user, onLogout }) {
  return (
    <div>
      <Sidebar onLogout={onLogout} />
      <Header user={user} />

      <div
        style={{
          marginLeft: "220px",
          marginTop: "60px",
          padding: "20px",
        }}
      >
        <h1>Dashboard</h1>
        <p>Welcome, {user.email} 👋</p>
      </div>
    </div>
  );
}

export default Dashboard;
