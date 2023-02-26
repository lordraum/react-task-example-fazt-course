import React from "react";
import { useContext } from "react";
import { TaskContent } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContent);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h2 className="text-xl font-bold capitalize">{task.title}</h2>
      <p className="to-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Borrar
      </button>
    </div>
  );
}

export default TaskCard;
