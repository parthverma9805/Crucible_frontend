function StatCard({ label, value, change, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <span>{label}</span>

        <div className="stat-icon">
          {icon}
        </div>
      </div>

      <div className="stat-value">
        {value}
      </div>

      <div className="stat-change">
        <span>↑ {change}</span>
        <small>vs last month</small>
      </div>
    </div>
  );
}

export default StatCard;