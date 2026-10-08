import { useState } from "react";
import ApprovalCard from "../components/ApprovalCard";

const initialApprovals = [
  {
    id: 1,
    title: "Approve customer discount",
    description:
      "CRM Agent wants to apply a 20% discount to Acme Corp.",
    requester: "CRM Agent",
    time: "4 minutes ago"
  },
  {
    id: 2,
    title: "Send external email",
    description:
      "Sales Agent wants to send a proposal to a new customer.",
    requester: "Sales Agent",
    time: "12 minutes ago"
  },
  {
    id: 3,
    title: "Merge pull request",
    description:
      "Coding Agent wants to merge PR #482 into production.",
    requester: "Coding Agent",
    time: "26 minutes ago"
  }
];

function Approvals() {
  const [approvals, setApprovals] =
    useState(initialApprovals);

  const removeApproval = (id) => {
    setApprovals((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="approvals-page">
      <div className="page-intro">
        <div>
          <h2>Pending Approvals</h2>
          <p>
            Human-in-the-loop actions waiting for review.
          </p>
        </div>

        <span className="approval-count">
          {approvals.length} pending
        </span>
      </div>

      <div className="approvals-list">
        {approvals.length === 0 ? (
          <div className="empty-state">
            <div>✓</div>
            <h3>All caught up</h3>
            <p>No actions are waiting for approval.</p>
          </div>
        ) : (
          approvals.map((approval) => (
            <ApprovalCard
              key={approval.id}
              {...approval}
              onApprove={() =>
                removeApproval(approval.id)
              }
              onReject={() =>
                removeApproval(approval.id)
              }
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Approvals;