function WorkflowNode({
  type,
  title,
  description,
  icon
}) {
  return (
    <div className={`workflow-node ${type.toLowerCase()}`}>
      <div className="workflow-node-icon">
        {icon}
      </div>

      <div className="workflow-node-content">
        <span>{type}</span>

        <strong>{title}</strong>

        {description && (
          <small>{description}</small>
        )}
      </div>

      <div className="node-connector" />
    </div>
  );
}

export default WorkflowNode;