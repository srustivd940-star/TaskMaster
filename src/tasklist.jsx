function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No tasks yet!</h3>
        <p>Add your first task to get started.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div
          className={`task-item ${task.completed ? "completed" : ""}`}
          key={task.id}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            aria-label={`Complete ${task.title}`}
          />

          <div className="task-details">
            <span className="task-title">{task.title}</span>
            <span
              className={`priority ${task.priority.toLowerCase()}`}
            >
              {task.priority} Priority
            </span>
          </div>

          <button
            className="delete-btn"
            onClick={() => onDelete(task.id)}
            aria-label={`Delete ${task.title}`}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;