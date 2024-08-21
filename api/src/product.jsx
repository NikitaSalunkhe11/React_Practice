import React from 'react'
import { useContext } from 'react';
import { myProductContext } from './App';

function Product() {
    const data=useContext(myProductContext);
    console.log({data}); 

  return (
    <div>
    <h1 style={{textAlign:"center"}}>Products</h1>
      <div className="Main">
        {data.map((item)=>(
          <div key={item.id} className="Product1">
            <h3>{item.title}</h3>
            <img src={item.image} className="ProductImage" alt=''></img>
            <p>{item.category}</p>
            <p className="price">Rs. {item.price}</p>
            <p style={{fontSize:"18px"}}> Rating: <span style={{fontSize:"18px", fontWeight:"bold"}}>{item.rating.rate}</span></p>
            <p>count:{item.rating.count}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product;