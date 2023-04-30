import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testimonio from './componentes/Testimonio'

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'></div>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Testimonio />
    </div>
  )
}

export default App
