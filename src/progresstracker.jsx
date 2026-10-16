function ProgressTracker({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const remaining = total - completed;

  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <section className="progress-card">
      <h2>Your Progress</h2>

      <div className="progress-stats">
        <div>
          <strong>{total}</strong>
          <span>Total Tasks</span>
        </div>

        <div>
          <strong>{completed}</strong>
          <span>Completed</span>
        </div>

        <div>
          <strong>{remaining}</strong>
          <span>Remaining</span>
        </div>
      </div>

      <div className="progress-label">
        <span>Completion</span>
        <strong>{percentage}%</strong>
      </div>

      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </section>
  );
}

export default ProgressTracker;