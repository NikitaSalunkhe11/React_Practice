import React from "react";
import CompC from "./CompC";

function CompB({name}){
    return(
        <div>
            <h2>CompB</h2>
            <p>{name}</p>
            <hr></hr>
            <CompC name={name}></CompC>
      
        </div>
    )
}
export default CompB;