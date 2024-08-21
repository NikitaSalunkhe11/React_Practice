// This code is suggested that Passing the value to the next Component or a Function That is Passing the values
//from Parent to child

// If I want to send the Data From the Parent file to the child of child then you have to use the Hooks like useContext
// createContext 
//to Avoid the props Drilling we can use the CreateContext and UseContext   

import React from "react";
import CompA from "./CompA";

function App(){
  const name="Nikita";
  return(
    <div>
      <h2>App</h2>
      <p>{name}</p>
      <hr></hr> 
      <CompA name={name}/>
      
    </div>
  )
}
export default App;