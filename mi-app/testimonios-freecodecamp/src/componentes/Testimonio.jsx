import React from 'react';
import './src/stylesheets/Testimonio.css'

function Testimonio() {
  return (
    <div className='contenendor-testimonio'>
      <img
        className='imagen-testimonio'
        src='./src/images/emma.png'
        alt='Foto de Emma'/>
      <div className='contenedor-text-testimonio'>
        <p className='nombre-testimonio'><span> Emma Bostian</span> en Suecia</p>
        <p className='cargo-testimonio'>Ingeniera de Software en Spotify</p>
        <p className='text-testimonio'>"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."</p>
      </div>
    </div>
  )
}

export default Testimonio;