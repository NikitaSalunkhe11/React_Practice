import React from 'react';
import { useForm } from 'react-hook-form';
import './login.css';
import { NavLink } from 'react-router-dom';

function Login() {

  const {
    register,
    handleSubmit,
    reset,
    formState:{
      errors
    },
  }=useForm();

  function onSubmit(data){
    console.log(data);
    reset();
  }
  return (
    <div className='loginouter'>
      <div className='loginbox'>

        <h2 style={{color:'white', fontSize:'40px', fontFamily:'monospace'}}>Log<span style={{color:'pink'}}>IN</span></h2>
        <div className='formdiv1'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            
            <br></br>
            <input 
            type='text' 
            placeholder='Enter username'
            className='input1'
            {
              ...register(
                  "username",
                  {
                    required:("Username is required")
                  }
              )
            }
            ></input>
            {errors.username && <p style={{color:"white"}}>{errors.username.message}</p>}
            <br></br>
          </div>

          <div>
            
            <br></br>
            <input 
            type='text' 
            placeholder='Enter password'
            className='input1'
            {
              ...register(
                "password",
                {
                  required:("Strong password is required"),
                  pattern:{
                    value:/^(?=.*\d)(?=(.*\W){2})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/,
                    message:"it should contain at least 1 character, 1 digit, 2 special Character"
                  }
                }
              )
            }
            ></input>
            {
              errors.password && <p style={{color:'white'}}>{errors.password.message}</p>
            }
            <br></br>
          </div>

          <div>
            <button type='submit' className='button' >Submit</button>
          </div>
           <div className='signup'>
          <NavLink style={{fontSize:"18px", color:"white", textDecoration:"underline", marginTop:"20px"}}
          to="/signup"  >Signup or create account</NavLink>
          </div> 
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login;