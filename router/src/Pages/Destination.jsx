import React from 'react';
import { useDispatch } from 'react-redux';
import './Destinationstyle.css';
import { addToCard } from '../redux/cardslice';
import Pages from './Pages';


function Destination({filteredProductData}) {

  console.log({filteredProductData})
  const dispatch = useDispatch();

  console.log(`product Data : ${filteredProductData}`);
  const handleOnClick = (item) => {
    dispatch(addToCard(item));
    alert(`${item.title} Product Added Successfully!!!`);
  };

  return (
    <div>
      {/* <h1 style={{ textAlign: "center" }}>Products</h1> */} 
      <div className="Main">
        {filteredProductData.map((item) => (
          <div key={item.id} className="Product1">
            <h3>{item.name}</h3>
            <img src={item.image} className="ProductImage" alt="" />
            <p style={{fontSize:"20px", fontWeight:"600"}}>{item.country}</p>
            <p className="Local Dishes">Rs. {item.local_dishes}</p>
            <p style={{ fontSize: "18px" }}>
            continent:{" "}
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                {item.continent} 
              </span>
            </p>
            <p>language: {item.language}</p>
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
              Add To Card
            </button>
          </div>
        ))}
      </div>
      <Pages></Pages>
    </div>
  );
}
export default Destination;
