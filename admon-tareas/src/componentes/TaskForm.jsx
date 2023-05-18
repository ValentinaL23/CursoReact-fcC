import React, { useState } from "react";
import '../stylesheets/TaskForm.css'
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarEnvío = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      texto: input,
      completada: false 
    }
    
    props.onSubmit(newTask);
  }

  return (
    <form 
      className="task-form"
      onSubmit={manejarEnvío}>
      <input 
        className="task-input"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="task-button">
        Add Task
      </button>
    </form>
  )
}

export default TaskForm;