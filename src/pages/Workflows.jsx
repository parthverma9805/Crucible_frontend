import WorkflowNode from "../components/WorkflowNode";

function Workflows() {
  return (
    <div className="workflow-page">
      <div className="workflow-toolbar">
        <div>
          <h2>Lead Qualification Workflow</h2>
          <p>
            Agents, tools and decisions connected as
            an executable graph.
          </p>
        </div>

        <div className="workflow-actions">
          <button className="secondary-button">
            Save
          </button>

          <button className="primary-button">
            ▶ Run Workflow
          </button>
        </div>
      </div>

      <div className="workflow-builder">
        <aside className="node-library">
          <h3>Node Library</h3>

          <p>Drag nodes into your workflow</p>

          <button>
            <span>⚡</span>
            <div>
              <strong>Trigger</strong>
              <small>Start a workflow</small>
            </div>
          </button>

          <button>
            <span>✦</span>
            <div>
              <strong>Agent</strong>
              <small>Run an AI agent</small>
            </div>
          </button>

          <button>
            <span>⚙</span>
            <div>
              <strong>Tool</strong>
              <small>Call a system or API</small>
            </div>
          </button>

          <button>
            <span>◇</span>
            <div>
              <strong>Condition</strong>
              <small>Create a decision</small>
            </div>
          </button>

          <button>
            <span>✓</span>
            <div>
              <strong>Human Approval</strong>
              <small>Request approval</small>
            </div>
          </button>

          <button>
            <span>▣</span>
            <div>
              <strong>Knowledge</strong>
              <small>Retrieve context</small>
            </div>
          </button>
        </aside>

        <main className="workflow-canvas">
          <div className="canvas-label">
            WORKFLOW CANVAS
          </div>

          <div className="workflow-graph">
            <WorkflowNode
              type="Trigger"
              title="New Lead Created"
              description="Salesforce"
              icon="⚡"
            />

            <div className="graph-line" />

            <WorkflowNode
              type="Agent"
              title="CRM Agent"
              description="Qualify the lead"
              icon="✦"
            />

            <div className="graph-line" />

            <WorkflowNode
              type="Condition"
              title="Lead Score > 80"
              description="Decision"
              icon="◇"
            />

            <div className="branch-label yes">
              YES
            </div>

            <div className="branch-label no">
              NO
            </div>

            <div className="branch-container">
              <div className="branch">
                <WorkflowNode
                  type="Agent"
                  title="Sales Agent"
                  description="Create opportunity"
                  icon="✦"
                />
              </div>

              <div className="branch">
                <WorkflowNode
                  type="Tool"
                  title="Send Email"
                  description="Notify sales team"
                  icon="⚙"
                />
              </div>
            </div>
          </div>
        </main>

        <aside className="properties-panel">
          <div className="properties-header">
            <div>
              <span>AGENT NODE</span>
              <h3>CRM Agent</h3>
            </div>

            <button>×</button>
          </div>

          <div className="property-group">
            <label>Agent</label>

            <div className="property-select">
              <span>◎</span>
              CRM Agent
              <span>⌄</span>
            </div>
          </div>

          <div className="property-group">
            <label>Instruction</label>

            <textarea
              defaultValue="Qualify the new lead using the company sales criteria and update the CRM record."
            />
          </div>

          <div className="property-group">
            <label>Knowledge</label>

            <div className="property-select">
              Sales Playbook
              <span>⌄</span>
            </div>
          </div>

          <div className="property-group">
            <label>Permissions</label>

            <div className="permission-toggle">
              <span>Update CRM</span>
              <input
                type="checkbox"
                defaultChecked
                readOnly
              />
            </div>

            <div className="permission-toggle">
              <span>Send communication</span>
              <input
                type="checkbox"
                readOnly
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Workflows;