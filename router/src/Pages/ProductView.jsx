import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function ProductView() {
    const navigate = useNavigate();
    const location = useLocation();
    const { place } = location.state || {};

    if(!place){
        return <p>No product selected</p>;
    }

    function backToPage(){
        navigate('/Indian')
    }
    
  return (
    <div>
        <div className='maindiv' style={{display:"flex", padding:"50px", justifyContent:"center"}}> 
            <div className='left'>
                <div style={{
                    height:"600px",
                    width:"600px",
                    boxShadow:"2px 2px 10px pink",
                    
                    }}> 
                    <img style={{height:"600px",
                    width:"600px",}} src={place.image} alt={place.name}></img>
                </div>
            </div>
            <div className='right' style={{margin:"50px"}}>
                <h2 style={{fontSize:"45px", paddingBottom:'20px', alignContent:'center', alignItems:"center", color:"purple", textShadow:"2px 2px 10px pink"}}>{place.name}</h2>
                <p style={{fontSize:"25px", paddingBottom:'20px', fontFamily:"-moz-initial"}}>{place.description}</p>
                <h2 style={{color:"black", fontWeight:'900', paddingBottom:'20px',}}>Location : {place.location}</h2>
                <h2 style={{color:"green", fontWeight:'900', paddingBottom:'20px',}}> Rating : {place.rating}</h2>
                <button 
                style={{
                    height:"30px", 
                    width:"150px", 
                    backgroundColor:'skyblue', 
                    marginTop:"10px",
                    border:"none",
                    boxShadow:"2px 2px 5px skyblue",
                    borderRadius:"10px",
                    fontSize:"15px",
                    fontWeight:"600"
                }} 
                onClick={backToPage}>Bact To Page</button>
            </div>
        </div>
    </div>
  )
}

export default ProductView;