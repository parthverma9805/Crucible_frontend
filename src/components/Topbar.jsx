const pageInfo = {
  dashboard: {
    title: "Overview",
    subtitle: "Monitor your AI workforce"
  },
  agents: {
    title: "Agents",
    subtitle: "Manage your intelligent workforce"
  },
  "agent-details": {
    title: "Agent Details",
    subtitle: "Configure and monitor your agent"
  },
  workflows: {
    title: "Workflows",
    subtitle: "Build graph-based agentic automation"
  },
  runs: {
    title: "Runs",
    subtitle: "Track workflow executions"
  },
  approvals: {
    title: "Approvals",
    subtitle: "Review actions requiring human approval"
  },
  connections: {
    title: "Connections",
    subtitle: "Manage your connected systems"
  },
  knowledge: {
    title: "Knowledge",
    subtitle: "Manage shared organizational knowledge"
  },
  audit: {
    title: "Audit Logs",
    subtitle: "Monitor workspace activity"
  }
};

function Topbar({ activePage }) {
  const info = pageInfo[activePage] || pageInfo.dashboard;

  return (
    <header className="topbar">
      <div>
        <h1>{info.title}</h1>
        <p>{info.subtitle}</p>
      </div>

      <div className="topbar-actions">
        <button className="icon-button" title="Search">
          ⌕
        </button>

        <button className="icon-button" title="Notifications">
          ♢
        </button>

        <button className="icon-button" title="Help">
          ?
        </button>
      </div>
    </header>
  );
}

export default Topbar;