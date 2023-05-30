import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import '../estilos/Nav.css';
import TICS from '../imagenes/logo_TICeducativa_normal.png'
import Calidad from '../imagenes/CalidadyCompetividad.jpg'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function Navv()
{
    
return (
    <>
    <Navbar expand="lg" className=" navbar-fixed-to nav">
      <div className="container">
        <div className="col-sm-8 col-md-5">
        <img className="navbar-brand imagen" src={TICS} alt="TIC"/>
        <img className="navbar-brand imagen" src={Calidad} alt="logo"/>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>  
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" >                    
                    <Link id="links" to="/">Inicio</Link>
                    <Link id="links" to="/Descubre">Descubre</Link>
                    <Link id="links" to="/Seleccionar-cuestionario">Autoevaluación</Link>
                    <Link id="links" to="/CanalYoutube">Canal Youtube</Link>                    
                    <Link id="links" to="/Contacto">Contacto</Link>

                </Nav>
            </Navbar.Collapse>  
      </div>
    </Navbar>
    </>
  );
}
export default Navv