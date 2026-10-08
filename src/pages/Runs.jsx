function Runs() {
  const runs = [
    {
      workflow: "Lead Qualification",
      status: "Completed",
      duration: "42s",
      time: "2 minutes ago"
    },
    {
      workflow: "Customer Onboarding",
      status: "Running",
      duration: "1m 12s",
      time: "5 minutes ago"
    },
    {
      workflow: "Code Review Pipeline",
      status: "Completed",
      duration: "3m 28s",
      time: "18 minutes ago"
    },
    {
      workflow: "Lead Qualification",
      status: "Failed",
      duration: "17s",
      time: "32 minutes ago"
    }
  ];

  return (
    <div className="simple-page">
      <div className="page-intro">
        <div>
          <h2>Workflow Runs</h2>
          <p>
            Monitor executions and inspect agent traces.
          </p>
        </div>

        <button className="secondary-button">
          Export Runs
        </button>
      </div>

      <div className="runs-list">
        {runs.map((run, index) => (
          <div className="run-card" key={index}>
            <div className="run-icon">▶</div>

            <div className="run-info">
              <h3>{run.workflow}</h3>
              <span>{run.time}</span>
            </div>

            <span
              className={`run-status ${run.status.toLowerCase()}`}
            >
              {run.status}
            </span>

            <span className="run-duration">
              {run.duration}
            </span>

            <button className="text-button">
              View Trace →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Runs;