import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Dashboard({ user }) {
  return (
    <div>
      <Sidebar />
      <Header user={user} />

      <div
        style={{
          marginLeft: "220px", // same as sidebar width
          marginTop: "60px", // same as header height
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
