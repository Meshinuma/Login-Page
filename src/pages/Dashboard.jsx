import Sidebar from "../components/Sidebar";

function Dashboard({ user }) {
  return (
    <div>
      <Sidebar />

      <div style={{ marginLeft: "220px", padding: "20px" }}>
        <h1>Dashboard</h1>
        <p>Welcome, {user.email} 👋</p>
      </div>
    </div>
  );
}

export default Dashboard;
