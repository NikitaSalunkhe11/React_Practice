import React from 'react';

function Pages({totalPages, setcurrentpage}) {

    let pages=[];

    for(let i=1;i<=totalPages; i++){
        pages.push(i);
    }
  return (
    <div>
        {
            pages.map((page, index)=>(
                <button
                style={{ height:"50px", width:"50px", fontSize:"20px", fontWeight:"600", backgroundColor:"pink", margin:"20px", padding:"5px 10px 5px 10px"}} 
                key={index} onClick={()=>setcurrentpage(page)}>{page}</button>
            ))
        }
    </div>
  )
}

export default Pages;