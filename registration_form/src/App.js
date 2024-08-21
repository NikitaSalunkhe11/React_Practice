// //Normal Registration Form
// import React, { useState } from "react";
// import "./style.css";

// function App(){

//   const [name, setName]=useState("");
//   const [email, setEmail]=useState("");
//   const [phone, setPhone]=useState("");

//   function submitHandler(event){

//     event.preventDefault();
//     console.log(name);
//     console.log(email);
//     console.log(phone);
//   }
//   return(
//     <div>
//       <div className="Formdiv">
//         <form onSubmit={submitHandler}> 
//           <label>Enter your Name: </label>
//           <input 
//           type="text"
//           placeholder="Ex. Nikita"
//           onChange={(event)=>setName(event.target.value)}
//           ></input>
//           <br></br>
//           <br></br>

//           <label>Enter your Email : </label>
//           <input 
//           type="email" 
//           placeholder="abc@gmail.com"
//           onChange={(event)=>setEmail(event.target.value)}
//           ></input>
//           <br></br>
//           <br></br>

//           <label>Enter your phone No.</label>
//           <input 
//           type="number"
//           onChange={(event)=>setPhone(event.target.value)}
//           ></input>
//           <br></br>
//           <br></br>
//           <br></br>
//           <button className='btn' type="submit"> Submit </button>
//         </form>
//       </div>
//     </div>
//   )
// }
// export default App;







import React from "react";
import './style.css';
import { useState } from "react";

function App(){

    const [formdata, setFormData]=useState({
      name:"",
      email:"",
      username:"",
      password:"",
    });

    const [nameError,setNameError]=useState(false);

    const [errorFormData, setErrorFormData]=useState({
      nameError:false,

    })

  function changeHandler(event){
    let value= event.target.name;
    validateName(value);
    setFormData({name:value});
  }
  function validateName(name){
    if(name.trim() === ""){
      setErrorFormData({});
    }else{
      setNameError(false);
    }
  }
  function submitHandler(event){
    event.preventDefault();
    validateName(formdata.name);

    if(nameError === true){
      console.log("Form Value Submitted");
      setFormData({name:formdata.name});
    }
  }
  return(
    <div className="OuterDiv">
      <div className="Formdiv">
        <form onSubmit={submitHandler}>
        <h2 className="heading">Registration Form</h2>
        <div>
          <label className='label'>Enter the Name : </label>
          
          <input
          className="input" 
          name="name"
          type="text" 
          placeholder="Nikita"
          onChange={changeHandler}
          ></input>
          {nameError ? <p style={{color:"red"}}> Name is required</p> : null } 
          <br></br>
          <br></br>
          </div>

          <label className="label">Enter the Email : </label>
          
          <input
          className="input"
          name="email"
          type="email"
          placeholder="abc@gmail.com"
          onChange={changeHandler}
          ></input>
          {}
          <br></br>
          <br></br>


          <label className="label">Select your Gender : </label>
          <input 
          className="input"
          name="gender"
          id="male"
          value="Male"
          type="radio"></input>
          <label for="male">Male</label>

          <input 
          className="input"
          name="gender"
          id="female"
          value="male"
          type="radio"></input>
          <label className="label" >Female</label>

          <input 
          className="input"
          name="gender"
          id="other"
          value="Other"
          type="radio"></input>
          <label for="other">Other</label>
          <br></br>
          <br></br>

          <label className="label">Enter the Username : </label>
          
          <input
          className="input"
          name="username"
          type="text"
          onChange={changeHandler}
          ></input>
          <br></br>
          <br></br>
          <label className="label">Enter the Password : </label>
          
          <input
          className="input"
          name="password"
          type="password"
          onChange={changeHandler}
          ></input>
          <br></br>
          <br></br>

          <div className="btnclass">
            <button className="btn"> Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default App;