import React from "react";

function TaskCard({ task, deleteTask }) {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Borrar</button>
    </div>
  );
}

export default TaskCard;
