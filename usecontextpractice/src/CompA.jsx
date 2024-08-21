import React from "react";
import CompB from "./CompB";

function CompA({name}){
    return(
        <div>
            <h2>CompA</h2>
            <p>{name}</p>
            <hr></hr>
            <CompB name={name}></CompB>
            
        </div>
    )
}
export default CompA;