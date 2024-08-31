import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emptyData, removeProduct } from '../redux/cardslice';

function AddCard() {

  const removedispatch=useDispatch();
  const removeProductdispatch = useDispatch(); 

  const storeData = useSelector(state => {
    console.log(state); 
    return state.card.productData;
});
    console.log(storeData); 

  return (
    <div>
        <div>
            <h3 style={{fontSize:"30px", textAlign:"center"}}>Count of Product is : {storeData.length}</h3>
            <button style={{
              marginLeft:"700px",
              backgroundColor:"skyblue", textAlign:"center", alignItems:"center", fontSize:"15px", fontWeight:"600", border:"none", padding:"10px 20px 10px 20px", marginTop:"10px",
              alignContent:"center",
              alignSelf:"center",
              justifyItems:"center",
              borderRadius:"20px",
            }} onClick={()=>removedispatch(emptyData())}>Empty Card</button>

            <div style={{display:"grid", gridTemplateColumns:"2fr 2fr 2fr",flexDirection:"row",}}>
            {storeData.map((product)=>(
              <div style={{backgroundColor:"lightblue", margin:"20px", width:"400px", boxShadow:"2px 2px 10px grey"}}>
                <h3 style={{margin:"20px"}}>{product.name}</h3>
                <p style={{color:"red", fontSize:"20px", margin:"20px"}}>{product.country}</p>
                <button 
                style={{marginLeft:"50px", height:"30px", width:"150px", backgroundColor:"lightgreen", margin:"20px"}} 
                onClick={()=>removeProductdispatch(removeProduct(product.id))}>Remove Country</button>
              </div>
            ))}
            </div>
        </div>
    </div>
  )
}
export default AddCard;