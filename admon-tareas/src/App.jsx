import './App.css'
import fccLogo from './imgs/fcc-logo.png'
import TaskToDo from './componentes/TaskToDo'

function App() {

  return (
    <div className='app-task'>
      <div className='fcc-logo-contenedor'>
        <img 
          src={fccLogo}
          className='fcc-logo' />
      </div>
      <div className='task-list-main'>
        <h1>Mis Tareas</h1>
        <TaskToDo />
      </div>
    </div>
  )
}

export default App
