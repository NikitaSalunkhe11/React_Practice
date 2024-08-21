import { createContext, useEffect, useState } from "react"; 
import Product from "./product";

export const myProductContext = createContext(null);

function App(){
  const url="https://fakestoreapi.com/products";

  const [data, setData]=useState([]);

  useEffect(()=>{
    async function fetchapi(){
      const response= await fetch(url);
      const data= await response.json();
      setData(data);
      console.log(data);
    }
    fetchapi();
  },[]);

  return( 
    <myProductContext.Provider value={data}>
    <div>
      <Product></Product>
    </div>
    </myProductContext.Provider>
  );
}
export default App;