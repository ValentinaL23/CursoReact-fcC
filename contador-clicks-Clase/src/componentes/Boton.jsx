import React from "react";
import '../stylesheet/Boton.css';

class Boton extends React.Component {
  render() {
    return (
      <button
        className={this.props.esBotonClick ? 'boton-click' : 'boton-reiniciar'}
        onClick={this.props.manejarClick}>
        {this.props.text}
      </button>
    )
  }
}

export default Boton;