import React from "react";
import '../stylesheets/Task.css'
import { AiFillDelete } from "react-icons/ai";

function Task({ text, completed }) {
  return (
    <div className={completed ? 'task-contenedor completed' : 'task-contenedor'}>
      <div className="task-text">
        {text}
      </div>
      <div className="task-contenedor-iconos">
        <AiFillDelete className="task-icono" /> 
      </div>
    </div>
  )
}

export default Task;