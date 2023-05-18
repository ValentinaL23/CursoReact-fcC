import React from "react";
import '../stylesheets/Task.css'
import { AiFillDelete } from "react-icons/ai";

function Task({ id, text, tocompleted, tocompletTask, deleteTask }) {
  return (
    <div className={tocompleted ? 'task-contenedor completed' : 'task-contenedor'}>
      <div className="task-text"
        onClick={() => tocompletTask(id)}>
        {text}
      </div>
      <div
        className="task-contenedor-iconos"
        onClick={() => deleteTask(id)}>
        <AiFillDelete className="task-icono" /> 
      </div>
    </div>
  )
}

export default Task;