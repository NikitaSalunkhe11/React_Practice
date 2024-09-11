import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Destinationstyle.css';
import { addToCard } from '../redux/cardslice';
import Pages from './Pages';
import { Link } from 'react-router-dom';

function International({ filteredProductData, totalPages, setcurrentpage }) {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = filteredProductData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOnClick = (item) => {
    dispatch(addToCard(item));
    alert(`${item.name} City is Added Successfully!!!`);
  };

  return (
    <div>
      {/* Search Input */}
      <div className="search-container" style={{ textAlign: "center", margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search your destination"
          value={searchQuery}
          onChange={handleSearchInputChange}
          style={{fontSize:"18px" ,padding: "10px", height:"40px", width: "350px", borderRadius: "10px", boxShadow:"2px 2px 7px purple", border: "2px solid #ccc",  }}
        />
      </div>

      {/* Product List */}
      <div className="Main">
        {filteredProducts.map((item) => (
          <Link
            key={item.id} // Moved key here to avoid console warning
            to='/ProductInternational'
            style={{ textDecoration: "none" }}
            state={{ place: item }}
          >
            <div className="Product1">
              <h3>{item.name}</h3>
              <img src={item.image} className="ProductImage" alt="" />
              <p style={{ fontSize: "20px", fontWeight: "600" }}>{item.country}</p>
              <p className="Local Dishes">Currency : {item.currency}</p>
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
                Add To Wishlist
              </button>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Component */}
      <Pages totalPages={totalPages} setcurrentpage={setcurrentpage} />
    </div>
  );
}

export default International;
