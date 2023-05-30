import React, {useEffect, useState} from "react";
import "../estilos/Autoevaluacion.css";



function Cuestionario(){
    const url = "http://172.16.9.31/api-haed/public/api/evaluaciones/1";
    const [cuest, setCuest] = useState();

    const fetchApi = async ()=>{
        const response = await fetch(url);
        const apiResponse = await response.json();
        setCuest(apiResponse);
    }
    useEffect(()=>{
        fetchApi();
    },[])
   
    const [retro, setRetro] = useState([]);
    const Add = () =>{
        const seleccion = document.querySelectorAll('input[type="radio"]:checked');
        const retroalimentacion = Array.from(seleccion).map((elemento)=>elemento.value);
        setRetro(retroalimentacion);
        console.log(retro);
       /*const questions = document.getElementById("questions");        
       questions.style.visibility="hidden";
       questions.style.display="none";
       const retroalimentaciones = document.getElementsByClassName("retroalimentacion")
       if(retroalimentaciones.style.visibility)
       retroalimentaciones.style.visibility="visible";*/
       
        
    }
    return(
        <>
        <div id="questions">
            <div className="bar">               
                <span className="display-1"><b>Autoevaluación</b></span>                
            </div>
            <div className="container">
                <div className="row">
                    <ul>
                        {!cuest ? 'Sin respuesta...': cuest.preguntas.map((num, index)=>{
                            const _id = num.id;
                            /*const select1 =()=>{
                                document.getElementById(num.node_id).className="selected";
                                document.getElementById(num.html_url).className=num.html_url;
                            }
                            const select2=()=>{
                                document.getElementById(num.node_id).className=num.node_id;
                                document.getElementById(num.html_url).className="selected";
                            } */                           
                            return( 
                            <>
                                <li>
                                    <div className="row">
                                        <div className="col-1">
                                            <h5>{num.id}</h5>
                                        </div>
                                        <div className="col">
                                            <div className="question">                                    
                                                <p id="pregunta">{num.pregunta}</p>
                                                {num.opciones.map((opt,index)=>{
                                                    let valor;
                                                    //if(opt.feedback.feedback){ valor = opt.feedback.feedback} else{ valor="Sin retroalimentacion"}
                                                    try{
                                                        valor = opt.feedback.feedback
                                                    }
                                                    catch{
                                                        valor="Sin retroalimentacion"
                                                    }
                                                    return(
                                                        <>
                                                            <input  type="radio" name={_id} value={valor} id="hola"/>&nbsp;<label className={num.node_id} id={num.node_id} for="hola">{opt.descripcion}</label><br/>                                                
                                                        </>
                                                    );
                                                })}                                        
                                            </div>    
                                        </div>
                                    </div>                                                            
                                </li>                            
                            </>
                            
                            );
                        })}
                    </ul>
                    <button id="contestar" onClick={Add}>Registrar</button>
                </div>            
            </div>
            

            </div>
        
            {/*<Retroalimentacion retro={retro}/>*/}
        
        
        </>
    );

}

export default Cuestionario;