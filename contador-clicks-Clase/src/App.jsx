import React from 'react';
import './App.css'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'; 
import fccLogo from './imagenes/fcc-logo.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClicks: 0
    };
    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClick() {
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1 }));
  }

  reiniciarContador() {
    this.setState({ numClicks: 0 });
  }

  render() {
    return (
      <div className='App'>
        <div className='fcc-logo-contenedor'>
          <img 
            className='fcc-logo'
            src={fccLogo}
            alt="Logo de freecodeCamp" />
        </div>
        <div className='contenedor-principal'>
          <Contador numClicks={this.state.numClicks} />
          <Boton
            text='Click'
            esBotonClick={true}
            manejarClick={this.manejarClick} />
          <Boton
            text='Reiniciar'
            esBotonClick={false}
            manejarClick={this.reiniciarContador} />
        </div>
      </div>
    )
  }
}

export default App
