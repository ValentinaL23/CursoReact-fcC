import React from "react";
import '../stylesheets/Task.css'
import { AiFillDelete } from "react-icons/ai";

function Task({ id, text, completed, completeTarea, deleteTask }) {

  return (
    <div className={completed ? 'task-contenedor completed' : 'task-contenedor'}>
      <div className="task-text"
        onClick={() => completeTarea(id)}>
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