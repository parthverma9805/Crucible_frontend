import AgentCard from "../components/AgentCard";

const agents = [
  {
    name: "Coding Agent",
    description:
      "Build, review and maintain software using your connected repositories.",
    category: "Engineering",
    runs: "842",
    icon: "</>",
    color: "purple"
  },
  {
    name: "CRM Agent",
    description:
      "Manage customer data, qualify leads and automate CRM operations.",
    category: "Sales",
    runs: "1,284",
    icon: "◎",
    color: "blue"
  },
  {
    name: "Workspace Agent",
    description:
      "Work across documents, communication and business applications.",
    category: "Productivity",
    runs: "673",
    icon: "▦",
    color: "green"
  },
  {
    name: "Research Agent",
    description:
      "Research information, analyze sources and create structured reports.",
    category: "Research",
    runs: "428",
    icon: "⌕",
    color: "orange"
  }
];

function Agents({ openAgent }) {
  return (
    <div className="agents-page">
      <div className="page-intro">
        <div>
          <h2>Your AI Workforce</h2>
          <p>
            Deploy specialized agents or combine them
            into powerful workflows.
          </p>
        </div>

        <button className="primary-button">
          + Create Agent
        </button>
      </div>

      <div className="agent-grid">
        {agents.map((agent) => (
          <AgentCard
            key={agent.name}
            agent={agent}
            openAgent={openAgent}
          />
        ))}
      </div>

      <div className="custom-agent-banner">
        <div className="custom-agent-icon">✦</div>

        <div>
          <h3>Need a specialized agent?</h3>

          <p>
            Build a custom agent with your own tools,
            knowledge and permissions.
          </p>
        </div>

        <button className="secondary-button">
          Create Custom Agent →
        </button>
      </div>
    </div>
  );
}

export default Agents;