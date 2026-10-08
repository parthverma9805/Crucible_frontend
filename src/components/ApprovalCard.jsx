function ApprovalCard({
  title,
  description,
  requester,
  time,
  onApprove,
  onReject
}) {
  return (
    <div className="approval-card">
      <div className="approval-icon">
        !
      </div>

      <div className="approval-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="approval-meta">
          <span>Requested by {requester}</span>
          <span>{time}</span>
        </div>
      </div>

      <div className="approval-actions">
        <button
          className="reject-button"
          onClick={onReject}
        >
          Reject
        </button>

        <button
          className="approve-button"
          onClick={onApprove}
        >
          Approve
        </button>
      </div>
    </div>
  );
}

export default ApprovalCard;    