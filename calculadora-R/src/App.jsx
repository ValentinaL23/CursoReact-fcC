import './App.css'
import fcCLogo from './img/fcc-logo.png'
import Buton from '../../calculadora-R/src/componentes/Buton'
import Inputt from './componentes/Inputt'
import ButonClear from './componentes/ButonClear'
import { useState } from 'react'
import {evaluate} from 'mathjs'

function App() {

  const [input, setInput] = useState('Hello');

  const addInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

  return (
    <div className="App">
      <div className='fcC-logo-contenedor'>
        <img 
          className='fcC-logo'
          src={fcCLogo}
          alt='Logo de freecodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Inputt input={input} />
        <div className='fila'>
          <Buton manejarClick={addInput}>1</Buton>
          <Buton manejarClick={addInput}>2</Buton>
          <Buton manejarClick={addInput}>3</Buton>
          <Buton manejarClick={addInput}>+</Buton>
        </div>
        <div className='fila'>
          <Buton manejarClick={addInput}>4</Buton>
          <Buton manejarClick={addInput}>5</Buton>
          <Buton manejarClick={addInput}>6</Buton>
          <Buton manejarClick={addInput}>-</Buton>
        </div>
        <div className='fila'>
          <Buton manejarClick={addInput}>7</Buton>
          <Buton manejarClick={addInput}>8</Buton>
          <Buton manejarClick={addInput}>9</Buton>
          <Buton manejarClick={addInput}>*</Buton>
        </div>
        <div className='fila'>
          <Buton manejarClick={addInput}>0</Buton>
          <Buton manejarClick={addInput}>.</Buton>
          <Buton manejarClick={calcularResultado}>=</Buton>
          <Buton manejarClick={addInput}>/</Buton>
        </div>
        <div className='fila'>
          <ButonClear manejarClear={() => setInput('')}>
            Clear
          </ButonClear>
        </div>
      </div>
    </div>
  )
}

export default App
