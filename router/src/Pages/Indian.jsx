import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Destinationstyle.css';
import { addToCard } from '../redux/cardslice';
import Pages from './Pages';
import {Link,} from 'react-router-dom';



function Indian({placeData, totalPages, setcurrentpage}) {

  console.log({placeData})
  const dispatch = useDispatch();

  console.log(`product Data : ${placeData}`);

  const handleOnClick = (item) => {
    dispatch(addToCard(item));
    alert(`${item.name} place is Added Successfully!!!`);
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (e) =>{
    setSearchQuery(e.target.value);
  };

  const placeData1 = placeData.filter((item) => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );  
  return (
    <div>
      {/* <h1 style={{ textAlign: "center" }}>Products</h1> */} 
      <div className="search-container" style={{ textAlign: "center", margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search your destination"
          value={searchQuery}
          onChange={handleSearchInputChange}
          style={{fontSize:"18px" ,padding: "10px", height:"40px", width: "350px", borderRadius: "10px", boxShadow:"2px 2px 7px purple", border: "2px solid #ccc",  }}
        />
      </div>
      <div className="Main">

        {placeData1.map((item) => (
          <Link to='/ProductView'
          style={{textDecoration:"none"}}
          state={{place:item}}
          >
          <div key={item.id} className="Product1">
            <h3>{item.name}</h3>
            <img src={item.image} className="ProductImage" alt="" />
            <p style={{fontSize:"20px", fontWeight:"600"}}>{item.country}</p>
            <p className="Local Dishes">Location : {item.location}</p>
            <p style={{ fontSize: "18px" }}>
            Rating:{" "}
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                {item.rating} 
              </span>
            </p>
            
            <button
              style={{
                backgroundColor: "skyblue",
                fontSize: "15px",
                fontWeight: "600",
                border: "none",
                padding: "10px 20px",
                marginTop: "10px",
                borderRadius: "20px",
              }}
              onClick={() => handleOnClick(item)} 
            >
              Add To Wishlist
            </button>
          </div>
          </Link>
        ))}
      </div>
      <Pages totalPages={totalPages} setcurrentpage={setcurrentpage}></Pages>
    </div>
  );
}
export default Indian;
