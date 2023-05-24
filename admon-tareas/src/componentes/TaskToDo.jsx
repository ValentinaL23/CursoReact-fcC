import React, {useEffect, useState} from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import '../stylesheets/TaskToDo.css'

function TaskToDo() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (task.texto.trim()) {
      task.texto = task.texto.trim();
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const completeTask = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completada = !task.completada;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  /* Para guardar lista de tareas al upd */
  
  useEffect(() => {
    let data = localStorage.getItem('task')
    if (data) {
      setTasks(JSON.parse(data))
    }
  }, [ ])

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks))
  }, [ tasks ])

  return (
    <>
      <TaskForm onSubmit={addTask}  />
      <div className="tasks-list-contenedor">
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              text={task.texto}
              completed={task.completada}
              completeTarea={completeTask}
              deleteTask={deleteTask} />
          )
        }
      </div>
    </>
  )
}

export default TaskToDo;