import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../estilos/Login.css";
import "../estilos/Pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css"


function Login(){
    const [ojos,setOjos]=useState(faEye)
    const SeePassword=()=>{
        let pass = document.getElementById("myPassword");
        if(pass.type==="password"){
            pass.type="text";
            setOjos(faEyeSlash);        
        }
        else if(pass.type==="text"){
            pass.type="password";
            setOjos(faEye);
        }
        
    }
    return(        
        <>
        <div class="bar">
            <div class="container">
                <h1>Iniciar Sesión</h1>
            </div>
        </div>
        <div class="container" id="log_sign">
            <div class="row">
                <div class="col-sm-12 col-md-6 sign">
                    <h2>¿No tienes una cuenta?</h2>
                    <p>Para poder contestar la Autoevaluación es necesario tener una cuenta de usuario, si aún no la tiene, de clic en el botón de Crear cuenta.</p>
                    <button>CREAR CUENTA</button>
                </div>
                <div class="col-sm-12 col-md-6 login">

                    <h2>Bienvenido</h2>
                    <h3>Inicie sesión ahora</h3>
                    <form>
                        <input  type={"text"} required placeholder="Ingrese su Correo Electrónico"></input><br/>
                        <input  id="myPassword" required type={"password"} placeholder="Ingrese su contraseña"></input>
                        <button id="eye" onClick={SeePassword}><FontAwesomeIcon icon={ojos}/></button>
                        <button id="ingresar">INGRESAR</button>
                    </form>    
                </div>
            </div>
        </div>
        </>
    )
}
export default Login