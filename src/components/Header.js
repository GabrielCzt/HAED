import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "../estilos/Header.css"
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import { faMoon } from "@fortawesome/free-solid-svg-icons";



function Year(){
  let year
  return  year = new Date().getFullYear();
}
function Month(){
  let month
  return month = new Date().getMonth()+1;
 
}
function Day(){
  let day
  return day = new Date().getDate();
}
function Header() {
  
  const root = document.documentElement;
    const cambio =()=>{
        if(root.style.getPropertyValue('--white')=='#ffffff'){
            root.style.setProperty('--white','#242424');
            root.style.setProperty('--black','#ffffff');
            root.style.setProperty('--non-black-haed','#f5f5f5');
            root.style.setProperty('--non-white-haed','#16161a');
            root.style.setProperty('--titulos','#018d8d');
        }
        else{
            root.style.setProperty('--black','#242424');
            root.style.setProperty('--white','#ffffff');
            root.style.setProperty('--non-black-haed','#16161a');
            root.style.setProperty('--non-white-haed','#f5f5f5');
            root.style.setProperty('--titulos','#104141');
        }
        
    }
  return (         
  <>
    <header>
      <div class="container">
        <div class="row">
          <div class="col-sm-3 col-md-2" id="date">
          <button onClick={cambio}><FontAwesomeIcon icon={faMoon} id="moon"/></button>
          <FontAwesomeIcon icon={faClock} id="reloj"/>{Day()}/{Month()}/{Year()}
          </div>
          <div class="col-sm-7 col-md-9" id="Title">
          <p>Herramienta de Autoevaluacion HAED</p>
          </div>
          <div class="col-sm-2 col-md-1">
            <Dropdown >
              <Dropdown.Toggle id="dropdown-basic" >
                <FontAwesomeIcon icon={faCircleUser} />
              </Dropdown.Toggle>
              <Dropdown.Menu>                
                <Dropdown.ItemText><Link id="links-header" to="/Iniciar-sesion">Iniciar Sesión</Link></Dropdown.ItemText>
                <Dropdown.ItemText><Link id="links-header" to="/Registrarse">Registrarse</Link>    </Dropdown.ItemText>
                
                                                                           
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      
      </div>
    </header>
  </>                               
  )
}
export default Header  