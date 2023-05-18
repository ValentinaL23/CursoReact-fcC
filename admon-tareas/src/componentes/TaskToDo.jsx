import React, {useState} from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import '../stylesheets/TaskToDo.css'

function TaskToDo() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    console.log(task)
    if (task.texto.trim()) {
      task.texto = task.texto.trim();
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  }

  return (
    <>
      <TaskForm onSubmit={addTask}  />
      <div className="tasks-list-contenedor">
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed} />
          )
        }
      </div>
    </>
  )
}

export default TaskToDo;