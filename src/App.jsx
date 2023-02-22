import React from "react";
import { useState, useEffect } from "react";
import { tasks as data } from "./data/tasks.js";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = ({ title, description }) =>
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title,
        description,
      },
    ]);
  useEffect(() => setTasks(data), []);

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
