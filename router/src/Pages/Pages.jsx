import React from 'react';

function Pages({ totalPages, setcurrentpage, currentpage }) {
  // Array to hold page numbers
  let pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePageClick = (page) => {
    setcurrentpage(page);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
     
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          style={{
            height:"40px",
            width:"40px",
            margin:"0px 5px 30px 5px",
            backgroundColor: currentpage === page ? "purple" : "skyblue", 
            color: currentpage === page ? "white" : "black",
            border: "1px solid #ccc",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight:"600",
            fontSize:"18px"
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pages;
