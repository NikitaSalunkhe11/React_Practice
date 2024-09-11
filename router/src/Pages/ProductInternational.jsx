import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function ProductInternational() {
    const navigate = useNavigate();
    const location = useLocation();
    const { place } = location.state || {};

    if(!place){
        return <p>No product selected</p>;
    }

    function backToPage(){
        navigate('/International')
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
                <h2 style={{fontSize:"25px", paddingBottom:'10px', fontFamily:"-moz-initial"}}>Country: {place.country}</h2>
                <h2 style={{color:"black", fontWeight:'900', paddingBottom:'10px',}}>Continent : {place.continent}</h2>
                <p style={{fontWeight:'400', fontSize:"20px", paddingBottom:'20px',}}> {place.description}</p>
                <h2 style={{color:"black", fontWeight:'700', paddingBottom:'20px',}}>population : {place.population}</h2>
                <h2 style={{color:"black", fontWeight:'700', paddingBottom:'20px',}}>Currency : {place.currency}</h2>
                <h2 style={{color:"darkblue", fontWeight:'700', paddingBottom:'20px',}}>Language : {place.language}</h2>
                <h3 style={{color:"black", fontWeight:'700', paddingBottom:'5px',}}>Best Time To Visit : {place.best_time_to_visit}</h3>
                <h3 >
                    Top Attractions : {
                        place.top_attractions.map((val)=>(
                            <span >{val}, </span>
                        ))
                    } 
                </h3>
                <h3 style={{color:"darkgreen",}}>
                    Local Dishes : {
                        place.local_dishes.map((val)=>(
                            <span >{val}, </span>
                        ))
                    } 
                </h3>
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

export default ProductInternational;