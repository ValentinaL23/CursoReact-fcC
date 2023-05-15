import React from "react";
import '../stylesheets/Buton.css'

function Buton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor!= '.') && (valor != '=');
  }; 

  /* Opcional
  if (esOperador(props.children)) {
    return (
      <div
        className="boton-contenedor operador"
        onClick={() => props.manejarClick(props.children)}>
          {props.children}
      </div>
    )
  } else {
    return (
      <div
        className="boton-contenedor"
        onClick={() => props.manejarClick(props.children)}>
          {props.children}
      </div>
    )
  }
   */

  return (
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}
      onClick={() => props.manejarClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Buton;