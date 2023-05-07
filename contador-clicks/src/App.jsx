import './App.css'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'; 
import fccLogo from './imagenes/fcc-logo.png';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0)
  }

  return (
    <div className='App'>
      <div className='fcc-logo-contenedor'>
        <img 
          className='fcc-logo'
          src={fccLogo}
          alt="" />
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks} />
        <Boton
          text='Click'
          esBotonClick={true}
          manejarClick={manejarClick} />
        <Boton
          text='Reiniciar'
          esBotonClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  )
}

export default App
