import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import '../estilos/Nav.css';
import TICS from '../imagenes/logo_TICeducativa_normal.png'
import Calidad from '../imagenes/CalidadyCompetividad.jpg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navv()
{
    const Tics = () =>(<img class="navbar-brand imagen" src={TICS} alt="TIC"/>)
    const Quality = () =>(<img class="navbar-brand imagen" src={Calidad} alt="logo"/>)
return (
    <>
    <Navbar bg="light" expand="lg" className=" navbar-fixed-top">
      <div class="container">
        <div class="col-sm-8 col-md-6">
        <img class="navbar-brand imagen" src={TICS} alt="TIC"/>
        <img class="navbar-brand imagen" src={Calidad} alt="logo"/>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>  
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" >
                    <Nav.Link href="#home" id="links">Inicio</Nav.Link>
                    <Nav.Link href="#link" id="links">Autoevaluacion</Nav.Link>
                    <Nav.Link href="#link" id="links">Canal Youtube</Nav.Link>
                    <Nav.Link href="#link" id="links">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>  
      </div>
    </Navbar>
    </>
  );
}
export default Navv