const connections = [
  {
    name: "Salesforce",
    initials: "SF",
    description: "CRM and customer data",
    connected: true
  },
  {
    name: "Slack",
    initials: "SL",
    description: "Team communication",
    connected: true
  },
  {
    name: "Google Workspace",
    initials: "GS",
    description: "Documents and productivity",
    connected: true
  },
  {
    name: "GitHub",
    initials: "GH",
    description: "Code repositories",
    connected: true
  },
  {
    name: "Jira",
    initials: "JR",
    description: "Project management",
    connected: false
  },
  {
    name: "PostgreSQL",
    initials: "PG",
    description: "Business database",
    connected: false
  }
];

function Connections() {
  return (
    <div className="simple-page">
      <div className="page-intro">
        <div>
          <h2>Connections</h2>
          <p>
            Connect Crucible with your existing business
            systems.
          </p>
        </div>

        <button className="primary-button">
          + Add Connection
        </button>
      </div>

      <div className="connection-grid">
        {connections.map((connection) => (
          <div
            className="connection-card"
            key={connection.name}
          >
            <div className="connection-icon">
              {connection.initials}
            </div>

            <div className="connection-info">
              <h3>{connection.name}</h3>
              <p>{connection.description}</p>

              <span
                className={
                  connection.connected
                    ? "connection-status connected"
                    : "connection-status"
                }
              >
                <span className="status-dot" />

                {connection.connected
                  ? "Connected"
                  : "Not connected"}
              </span>
            </div>

            <button className="secondary-button">
              {connection.connected
                ? "Manage"
                : "Connect"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Connections;