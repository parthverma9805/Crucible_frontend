function AgentDetails({ agent, setActivePage }) {
  if (!agent) {
    return (
      <div className="empty-state">
        <h2>No agent selected</h2>

        <button
          className="primary-button"
          onClick={() => setActivePage("agents")}
        >
          Back to Agents
        </button>
      </div>
    );
  }

  return (
    <div className="agent-details-page">
      <button
        className="back-button"
        onClick={() => setActivePage("agents")}
      >
        ← Back to Agents
      </button>

      <div className="agent-details-header">
        <div
          className={`large-agent-icon ${
            agent.color || ""
          }`}
        >
          {agent.icon}
        </div>

        <div>
          <div className="detail-title-row">
            <h2>{agent.name}</h2>

            <span className="active-pill">
              <span className="status-dot" />
              Active
            </span>
          </div>

          <p>{agent.description}</p>
        </div>

        <div className="detail-actions">
          <button className="secondary-button">
            Configure
          </button>

          <button className="primary-button">
            ▶ Run Agent
          </button>
        </div>
      </div>

      <div className="detail-grid">
        <section className="detail-card">
          <h3>Capabilities</h3>

          <ul className="capability-list">
            <li>Understand natural language instructions</li>
            <li>Use connected business tools</li>
            <li>Access approved company knowledge</li>
            <li>Execute multi-step tasks</li>
            <li>Request human approval when required</li>
          </ul>
        </section>

        <section className="detail-card">
          <h3>Permissions</h3>

          <div className="permission-item">
            <span>Read CRM data</span>
            <span className="permission-enabled">
              Allowed
            </span>
          </div>

          <div className="permission-item">
            <span>Update records</span>
            <span className="permission-enabled">
              Allowed
            </span>
          </div>

          <div className="permission-item">
            <span>Delete records</span>
            <span className="permission-disabled">
              Restricted
            </span>
          </div>

          <div className="permission-item">
            <span>External communication</span>
            <span className="permission-enabled">
              Approval Required
            </span>
          </div>
        </section>

        <section className="detail-card">
          <h3>Connected Systems</h3>

          <div className="connected-system">
            <span>SF</span>
            <div>
              <strong>Salesforce</strong>
              <small>Connected</small>
            </div>
          </div>

          <div className="connected-system">
            <span>SL</span>
            <div>
              <strong>Slack</strong>
              <small>Connected</small>
            </div>
          </div>

          <div className="connected-system">
            <span>GS</span>
            <div>
              <strong>Google Workspace</strong>
              <small>Connected</small>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AgentDetails;