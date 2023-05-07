import React from "react";
import '../stylesheet/Boton.css';

function Boton({ text, esBotonClick, manejarClick }) {
  return (
    <button
      className={esBotonClick ? 'boton-click' : 'boton-reiniciar'}
      onClick={manejarClick}>
      {text}
    </button>
  )
}

export default Boton;