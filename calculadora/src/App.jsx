import './App.css'
import Buton from './componentes/Button'
import fcCLogo from './img/fcc-logo.png'

function App() {

  return (
    <div className="App">
      <div className='fcC-logo-contenedor'>
        <img 
          className='fcC-logo'
          src={fcCLogo}
          alt='Logo de freecodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'></div>
          <Buton>1</Buton>
          <Buton>+</Buton>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  )
}

export default App
