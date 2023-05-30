import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../estilos/Perfil.css";
import "../estilos/Pages.css";
import { faUser, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import PerfilSideBar from "./PerfilSideBar";

function Perfil() {
  return (
    <>
      <div className="_bar">
        <span className="display-1">
          <b>Información del docente</b>
        </span>
      </div>
       
      <div className="row">
        <div className="col-1">
          <PerfilSideBar/>
        </div>
        <div className="col-5">
          <div className="cont">
            <h5>Nombre</h5>
          </div>
        </div>
        <div className="col-5">
        <div className="cont">
            <h5>Nombre</h5>
          </div>  
        </div>
      </div>
    </>
  );
}

export default Perfil;
