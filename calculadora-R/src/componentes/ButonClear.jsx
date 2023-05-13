import React from "react";
import '../stylesheets/ButonClear.css'

const ButonClear = (props) => (
  <div className="buton-clear" onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default ButonClear;
