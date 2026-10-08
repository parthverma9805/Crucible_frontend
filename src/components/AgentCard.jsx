function AgentCard({ agent, openAgent }) {
  return (
    <div className="agent-card">
      <div className="agent-card-header">
        <div
          className={`agent-icon ${agent.color || ""}`}
        >
          {agent.icon}
        </div>

        <span className="agent-status">
          <span className="status-dot" />
          Active
        </span>
      </div>

      <div className="agent-card-body">
        <h3>{agent.name}</h3>

        <p>{agent.description}</p>

        <div className="agent-meta">
          <span>{agent.category}</span>
          <span>{agent.runs} runs</span>
        </div>
      </div>

      <button
        className="secondary-button full-width"
        onClick={() => openAgent(agent)}
      >
        Open Agent →
      </button>
    </div>
  );
}

export default AgentCard;