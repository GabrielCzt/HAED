import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "../estilos/Perfil.css";
import "../estilos/Pages.css";
import { faUser, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";

function Perfil(){
    return(
        <>
        <div class="bar">
            <div class="container">
                <h1>Información del Docente</h1>
            </div>
        </div>
        <div className="profile">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-3 card">
                    <FontAwesomeIcon id="iconProfile" icon={faUser}/>
                        <h3>Nombre del profesor</h3>
                        <button id="modificar"><FontAwesomeIcon icon={faAddressCard}/>&nbsp; Modificar información</button>
                    </div>
                    <Col className="info" sm={12} md={{offset:1, span:8}}>
                        <h1>Datos</h1>
                        <h5>Nombre:</h5>
                        <h5>Área:</h5>
                        <h5>Correo Electrónico:</h5>
                        <h5>Número de telefono:</h5>
                    </Col>
                
                </div>                
            </div>
        </div>
           
        </>
    );
}

export default Perfil