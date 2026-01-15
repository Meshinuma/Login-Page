import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">MyApp</h2>

      <ul className="menu">
        <li>Dashboard</li>
        <li>Profile</li>
        <li>Users</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default Sidebar;
