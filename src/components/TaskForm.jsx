import React from "react";
import { useState, useContext } from "react";
import { TaskContent } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContent);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        className="bg-slate-800 p-10 mb-4"
        action=""
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-3 text-white">Crea tú tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mt-2"
          placeholder="Describe la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
