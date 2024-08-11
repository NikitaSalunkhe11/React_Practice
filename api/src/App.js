import { useEffect, useState } from "react"; 


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
    <div>
      <h1 style={{textAlign:"center"}}>Products</h1>
      <div className="Main">
        {data.map((item)=>(
          <div key={item.id} className="Product1">
            <h3>{item.title}</h3>
            <img src={item.image} className="ProductImage"></img>
            <p>{item.category}</p>
            <p className="price">Rs. {item.price}</p>
            <p style={{fontSize:"18px"}}> Rating: <span style={{fontSize:"18px", fontWeight:"bold"}}>{item.rating.rate}</span></p>
            <p>count:{item.rating.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;