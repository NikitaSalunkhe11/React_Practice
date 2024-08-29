import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCard } from './redux/cardslice';
import './style.css';

function Product({ productData }) {
  const dispatch = useDispatch();

  const handleOnClick = (item) => {
    dispatch(addToCard(item));
    alert(`${item.title} Product Added Successfully!!!`);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Products</h1>
      <div className="Main">
        {productData.map((item) => (
          <div key={item.id} className="Product1">
            <h3>{item.title}</h3>
            <img src={item.image} className="ProductImage" alt="" />
            <p>{item.category}</p>
            <p className="price">Rs. {item.price}</p>
            <p style={{ fontSize: "18px" }}>
              Rating:{" "}
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                {item.rating.rate}
              </span>
            </p>
            <p>count: {item.rating.count}</p>
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
              onClick={() => handleOnClick(item)}  // Pass the function reference here
            >
              Add To Card
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
