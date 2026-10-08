const logs = [
  {
    time: "12:42:18",
    actor: "CRM Agent",
    action: "Updated customer record",
    resource: "Salesforce / Lead #4821",
    result: "Success"
  },
  {
    time: "12:39:02",
    actor: "Parth Verma",
    action: "Approved workflow action",
    resource: "Customer discount",
    result: "Success"
  },
  {
    time: "12:31:47",
    actor: "Coding Agent",
    action: "Created pull request",
    resource: "GitHub / PR #482",
    result: "Success"
  },
  {
    time: "12:24:12",
    actor: "Sales Agent",
    action: "Requested approval",
    resource: "External email",
    result: "Pending"
  },
  {
    time: "12:18:33",
    actor: "Workspace Agent",
    action: "Read company document",
    resource: "Company Policies",
    result: "Success"
  }
];

function AuditLogs() {
  return (
    <div className="simple-page">
      <div className="page-intro">
        <div>
          <h2>Audit Logs</h2>
          <p>
            Complete activity history across your
            Crucible workspace.
          </p>
        </div>

        <button className="secondary-button">
          Export Logs
        </button>
      </div>

      <div className="audit-toolbar">
        <input
          type="text"
          placeholder="Search audit logs..."
        />

        <select defaultValue="all">
          <option value="all">All Activity</option>
          <option value="agents">Agents</option>
          <option value="users">Users</option>
          <option value="workflows">Workflows</option>
        </select>
      </div>

      <div className="audit-table">
        <div className="audit-row audit-heading">
          <span>Time</span>
          <span>Actor</span>
          <span>Action</span>
          <span>Resource</span>
          <span>Result</span>
        </div>

        {logs.map((log, index) => (
          <div className="audit-row" key={index}>
            <span>{log.time}</span>

            <strong>{log.actor}</strong>

            <span>{log.action}</span>

            <span>{log.resource}</span>

            <span
              className={`audit-result ${log.result.toLowerCase()}`}
            >
              {log.result}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AuditLogs;