import React from "react";
import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask }) {
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
