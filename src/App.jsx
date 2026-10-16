import { useState } from "react";
import TaskForm from "./taskform";
import TaskList from "./tasklist";
import ProgressTracker from "./progresstracker";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((previousTasks) => [...previousTasks, task]);
  };

  const toggleTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <main className="app-container">
      <header className="app-header">
        <div className="logo">✓ TaskMaster</div>
        <p>Organize your work. Achieve your goals.</p>
      </header>

      <section className="welcome-section">
        <h1>My Tasks</h1>
        <p>Plan your day and track your productivity.</p>
      </section>

      <ProgressTracker tasks={tasks} />

      <section className="tasks-section">
        <h2>Add a New Task</h2>
        <TaskForm onAddTask={addTask} />
      </section>

      <section className="tasks-section">
        <h2>My Task List</h2>
        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </section>

      <footer className="app-footer">
        <p>TaskMaster © 2026 | Stay focused, stay productive.</p>
      </footer>
    </main>
  );
}

export default App;