const knowledgeSources = [
  {
    name: "Company Policies",
    type: "Documents",
    items: "128 documents",
    icon: "▤"
  },
  {
    name: "Product Documentation",
    type: "Documents",
    items: "246 documents",
    icon: "▣"
  },
  {
    name: "Sales Playbook",
    type: "Knowledge Base",
    items: "84 articles",
    icon: "◈"
  },
  {
    name: "Customer Database",
    type: "Database",
    items: "42,821 records",
    icon: "◎"
  }
];

function Knowledge() {
  return (
    <div className="simple-page">
      <div className="page-intro">
        <div>
          <h2>Knowledge</h2>
          <p>
            Shared organizational context available to
            your agents.
          </p>
        </div>

        <button className="primary-button">
          + Add Knowledge
        </button>
      </div>

      <div className="knowledge-banner">
        <div className="knowledge-banner-icon">✦</div>

        <div>
          <h3>Shared Agent Context</h3>

          <p>
            Agents can securely access approved knowledge
            sources based on their permissions.
          </p>
        </div>
      </div>

      <div className="knowledge-grid">
        {knowledgeSources.map((source) => (
          <div
            className="knowledge-card"
            key={source.name}
          >
            <div className="knowledge-icon">
              {source.icon}
            </div>

            <h3>{source.name}</h3>

            <p>{source.type}</p>

            <span>{source.items}</span>

            <button className="text-button">
              Open →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Knowledge;