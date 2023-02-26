import React from "react";
import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContent } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContent);
  if (tasks.length === 0)
    return (
      <h2 className="text-white text-4xl text-center">
        Error: No hay tareas aún
      </h2>
    );

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
