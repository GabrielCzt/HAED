import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "../estilos/Login.css";
import "../estilos/Pages.css";
import "bootstrap/dist/css/bootstrap.min.css"


function Sign(){
    
    return(        
        <>
        <div className="bar">
        <span className="display-1"><b>Registrarse</b></span>     
        </div>
        <div className="log">
        <div className="container" id="log_sign">
            <div className="row">
                <div className="col-sm-12 col-md-6 sign">
                    <h2>¿Ya tienes una cuenta?</h2>
                    <p>Para contestar la autoevaluación debes iniciar sesión, si ya tienes una cuenta da click en el botón Iniciar Sesión</p>
                    <button>INICIAR SESIÓN</button>
                </div>
                <div className="col-sm-12 col-md-6 login">
                    <h2>Bienvenido</h2>
                    <h3>Vamos a crear una nueva cuenta</h3>
                    <form>
                        <input type={"text"} placeholder="Ingrese su matricula" required></input>
                        <input type={"text"} placeholder="Coloque aquí su nombre" required></input>
                        <input type={"text"} placeholder="Coloque aquí sus apellidos" required></input>
                        <input  type={"mail"} placeholder="Ingrese su Correo Electrónico" required></input>
                        <input type={"text"} placeholder="Número de teléfono" required></input>
                        <button id="ingresar">CLICK AQUÍ PARA CREAR SU CUENTA</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Sign;