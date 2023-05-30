import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";
import "../estilos/Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function Menu(){
    return(
    <>
     <div className="bar">               
                <span className="display-1"><b>Autoevaluación</b></span>                
            </div>
        <h5 className="display-5">Seleccione un cuestionario para continuar</h5><hr/>
        <Link className="ov-btn-slide-left" to="/Autoevaluacion" >Cuestionario de <FontAwesomeIcon id="pen" icon={faPenToSquare}/></Link>
        <Link className="ov-btn-slide-left" to="/Autoevaluacion" >Cuestionario de <FontAwesomeIcon id="pen" icon={faPenToSquare}/> </Link>
        <Link className="ov-btn-slide-left" to="/Autoevaluacion" >Cuestionario de <FontAwesomeIcon id="pen" icon={faPenToSquare}/> </Link>
        <Link className="ov-btn-slide-left" to="/Autoevaluacion" >Cuestionario de <FontAwesomeIcon id="pen" icon={faPenToSquare}/> </Link>
        <Link className="ov-btn-slide-left" to="/Autoevaluacion" >Cuestionario de <FontAwesomeIcon id="pen" icon={faPenToSquare}/> </Link>
        <br/><br/>
    </>
    );
}

export default Menu