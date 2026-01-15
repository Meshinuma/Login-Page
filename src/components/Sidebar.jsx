import "./Sidebar.css";

function Sidebar({ onLogout }) {
  return (
    <div className="sidebar">
      <h2 className="logo">MyApp</h2>

      <ul className="menu">
        <li>Dashboard</li>
        <li>Profile</li>
        <li>Users</li>
        <li>Settings</li>
        <li onClick={onLogout} style={{ cursor: "pointer" }}>
          Logout
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
