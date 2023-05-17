import React from "react";
import TaskForm from "./TaskForm";
import '../stylesheets/TaskToDo.css'

function TaskToDo() {
  return (
    <>
      <TaskForm />
      <div className="task-list-contenedor">
        LISTA DE TAREAS
      </div>
    </>
  )
}

export default TaskToDo;