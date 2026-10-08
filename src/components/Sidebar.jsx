const navigation = [
  {
    section: "WORKSPACE",
    items: [
      { id: "dashboard", label: "Overview", icon: "⌂" },
      { id: "agents", label: "Agents", icon: "✦" },
      { id: "workflows", label: "Workflows", icon: "⌘" },
      { id: "runs", label: "Runs", icon: "▶" }
    ]
  },
  {
    section: "CONTROL",
    items: [
      { id: "approvals", label: "Approvals", icon: "✓", badge: 3 },
      { id: "knowledge", label: "Knowledge", icon: "▣" },
      { id: "connections", label: "Connections", icon: "◉" },
      { id: "audit", label: "Audit Logs", icon: "≡" }
    ]
  }
];

function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-mark">C</div>

        <div>
          <strong>Crucible</strong>
          <span>Agentic Workspace</span>
        </div>
      </div>

      <div className="workspace-selector">
        <div className="workspace-icon">AC</div>

        <div className="workspace-info">
          <strong>Acme Corporation</strong>
          <span>Production</span>
        </div>

        <span className="workspace-arrow">⌄</span>
      </div>

      <nav className="sidebar-navigation">
        {navigation.map((group) => (
          <div className="nav-group" key={group.section}>
            <div className="nav-section-title">
              {group.section}
            </div>

            {group.items.map((item) => (
              <button
                key={item.id}
                className={`nav-item ${
                  activePage === item.id ? "active" : ""
                }`}
                onClick={() => setActivePage(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>

                <span>{item.label}</span>

                {item.badge && (
                  <span className="nav-badge">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="deployment-status">
          <span className="status-dot" />
          <div>
            <strong>Local Deployment</strong>
            <span>Secure & Connected</span>
          </div>
        </div>

        <div className="sidebar-user">
          <div className="user-avatar">PV</div>

          <div>
            <strong>Parth Verma</strong>
            <span>Administrator</span>
          </div>

          <span>⋮</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;