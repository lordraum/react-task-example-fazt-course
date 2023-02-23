import React from "react";
import { useState, useEffect } from "react";
import { tasks as data } from "./data/tasks.js";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => setTasks(data), []);

  const createTask = ({ title, description }) =>
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title,
        description,
      },
    ]);

  const deleteTask = (taskId) =>
    setTasks(tasks.filter((task) => task.id !== taskId));

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
