import React from "react";
import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContent } from "../context/TaskContext";

function TaskList({ tasks, deleteTask }) {
  const valor = useContext(TaskContent);
  console.log(valor);
  if (tasks.length === 0) return <h2>Error: No hay tareas aún</h2>;

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
