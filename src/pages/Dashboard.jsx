import StatCard from "../components/StatCard";

function Dashboard({ setActivePage }) {
  const activities = [
    {
      title: "CRM Agent updated lead information",
      time: "2 minutes ago",
      type: "Agent"
    },
    {
      title: "Sales workflow completed successfully",
      time: "8 minutes ago",
      type: "Workflow"
    },
    {
      title: "Coding Agent created pull request",
      time: "21 minutes ago",
      type: "Agent"
    },
    {
      title: "New approval request received",
      time: "34 minutes ago",
      type: "Approval"
    }
  ];

  return (
    <div className="dashboard">
      <div className="welcome-row">
        <div>
          <h2>Good morning, Parth</h2>
          <p>
            Here&apos;s what&apos;s happening across
            your AI workforce.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => setActivePage("workflows")}
        >
          + Create Workflow
        </button>
      </div>

      <div className="stats-grid">
        <StatCard
          label="Active Agents"
          value="12"
          change="18%"
          icon="✦"
        />

        <StatCard
          label="Workflow Runs"
          value="2,847"
          change="24%"
          icon="▶"
        />

        <StatCard
          label="Success Rate"
          value="98.4%"
          change="2.1%"
          icon="✓"
        />

        <StatCard
          label="Pending Approvals"
          value="3"
          change="12%"
          icon="!"
        />
      </div>

      <div className="dashboard-grid">
        <section className="dashboard-card activity-card">
          <div className="section-header">
            <div>
              <h3>Recent Activity</h3>
              <p>Latest activity from your workspace</p>
            </div>

            <button
              className="text-button"
              onClick={() => setActivePage("audit")}
            >
              View all →
            </button>
          </div>

          <div className="activity-list">
            {activities.map((activity, index) => (
              <div
                className="activity-item"
                key={index}
              >
                <div className="activity-dot">
                  {activity.type === "Approval"
                    ? "!"
                    : "✓"}
                </div>

                <div>
                  <strong>{activity.title}</strong>
                  <span>{activity.time}</span>
                </div>

                <span className="activity-type">
                  {activity.type}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard-card quick-card">
          <div className="section-header">
            <div>
              <h3>Quick Actions</h3>
              <p>Common workspace actions</p>
            </div>
          </div>

          <div className="quick-actions">
            <button
              onClick={() => setActivePage("agents")}
            >
              <span>✦</span>
              <div>
                <strong>Browse Agents</strong>
                <small>Explore your AI workforce</small>
              </div>
            </button>

            <button
              onClick={() => setActivePage("workflows")}
            >
              <span>⌘</span>
              <div>
                <strong>Build Workflow</strong>
                <small>Connect agents and tools</small>
              </div>
            </button>

            <button
              onClick={() => setActivePage("connections")}
            >
              <span>◉</span>
              <div>
                <strong>Add Connection</strong>
                <small>Connect a business system</small>
              </div>
            </button>
          </div>
        </section>
      </div>

      <section className="dashboard-card workflow-table-card">
        <div className="section-header">
          <div>
            <h3>Active Workflows</h3>
            <p>Currently running automation</p>
          </div>

          <button
            className="text-button"
            onClick={() => setActivePage("workflows")}
          >
            View workflows →
          </button>
        </div>

        <div className="workflow-table">
          <div className="table-row table-heading">
            <span>Workflow</span>
            <span>Status</span>
            <span>Runs</span>
            <span>Last Run</span>
          </div>

          {[
            [
              "Lead Qualification",
              "Running",
              "1,284",
              "2 min ago"
            ],
            [
              "Customer Onboarding",
              "Running",
              "847",
              "5 min ago"
            ],
            [
              "Code Review Pipeline",
              "Paused",
              "436",
              "18 min ago"
            ]
          ].map((row) => (
            <div className="table-row" key={row[0]}>
              <strong>{row[0]}</strong>

              <span
                className={`table-status ${
                  row[1].toLowerCase()
                }`}
              >
                <span className="status-dot" />
                {row[1]}
              </span>

              <span>{row[2]}</span>

              <span>{row[3]}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
