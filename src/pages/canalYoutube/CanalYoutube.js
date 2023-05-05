import React from "react";
import "../../estilos/Pages.css"
import "../../estilos/CanalYoutube.css";
import CanalYT  from "./canalYT";
import CanalYT2 from "./canalYT_2";
import CanalYT3 from "./canalYT_3";

function CanalYT_Start(){
    return(
        <>
            <div class="bar">
                <div class="container">
                    <h1>Canal de YouTube</h1>
                </div>
            </div>
            <CanalYT/>
            
        </>
    );
}
export default CanalYT_Start