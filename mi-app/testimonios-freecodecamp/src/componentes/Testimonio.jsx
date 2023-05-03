import React from 'react';
import "../stylesheets/Testimonio.css";

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={`./src/images/${props.imagen}.png`}
        alt={`Foto de ${props.alt}`} />
      <div className='contenedor-text-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='text-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  )
}

export default Testimonio;