import React from "react";
import { useContext } from "react";
import { TaskContent } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContent);
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Borrar</button>
    </div>
  );
}

export default TaskCard;
