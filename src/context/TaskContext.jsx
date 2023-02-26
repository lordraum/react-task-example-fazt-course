import { createContext } from "react";
import { useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContent = createContext();

export function ProviderTaskContext(props) {
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
    <TaskContent.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContent.Provider>
  );
}
