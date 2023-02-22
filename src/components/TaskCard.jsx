import React from "react";

function TaskCard({ task }) {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskCard;
