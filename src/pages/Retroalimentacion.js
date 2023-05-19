import React from "react";
import "../estilos/Pages.css";

function Retroalimentacion(props) {
  const _retro = props.retro;
  //console.log(_retro);
  return (
    <>
      <div class="bar">
        <span className="display-1"><b>Retroalimentacion</b></span>     
        </div>
      <div className="container">
        <ul>
            {_retro.map((elemento, index) => (
            <li key={index}>{elemento}</li>
            ))}
        </ul>
      </div>
      
    </>
  );
}

export default Retroalimentacion;
