import React from 'react';
import './style.css';
import { useForm } from "react-hook-form";


export default function App() {
    const {
        register,
        handleSubmit,
        reset,
        formState:{
            errors
        },
    } = useForm();

    function onSubmit(data){
        console.log(data);
        reset();
    }
  return (
    <>
        <div className='outerdiv'> 
            <div className='box'> 
                
                <div className='leftbox'>
                    <p className='para1'>Register</p>
                    <p className='para2'>Now !!!</p>
                </div>
                <div className='Formbox'>
                <h2 className='heading'>Registration Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='field'>
                        <label className='label'>Enter your Name : </label>
                        <input 
                        type="text" 
                        className='input' 
                        placeholder='Nikita'
                        {...register(
                            "name",
                            {
                                required: "(name is required)",
                                maxLength:{
                                    value:20,
                                    message:"(name length must be less that 20)",
                                }
                            },
                            
                        )}
                        ></input>
                        {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}
                    </div>

                    <div className='field'>
                        <label className='label'>Enter your Email-ID  : </label>
                        <input 
                        type="email" 
                        className='input' 
                        placeholder='abc11@gmail.com'
                        {...register(
                            "email",
                            {required:"(email is required)",
                                pattern:{
                                    value:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message:"(please enter the valid email)"
                                }
                            },
                        )}
                        ></input>
                        {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
                    </div>
                    <div className='field'>
                        <label className='label'>Enter your phone Number : </label>
                        <input 
                        type="number" 
                        className='input' 
                        {...register("number",
                            {
                                required:"(please enter valid mobile number)",
                                pattern:{
                                    value:/^\d{10}$/,
                                    message:"(please enter valid number )"
                                }
                            }
                        )}
                        ></input>
                        {errors.number && <p style={{color:"red"}}>{errors.number.message}</p>}
                    </div>
                    <div className='field'>
                        <label className='label'>Enter your BirthDate : </label>
                        <input 
                        type="date" 
                        className='input' 
                        ></input>
                    </div>

                    <div className='field'>
                        <label className='label'>Select the Gender : </label>
                        <select className='Gender'>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className='field'>
                        <label className='label'>Enter your Username : </label>
                        <input 
                        type="text" 
                        className='input'
                        {...register("username",
                            {required:"(please enter your username)",}
                        )} 
                        ></input>
                        {errors.username && <p style={{color:"red"}}>{errors.username.message}</p>}
                    </div>
                    <div className='field'>
                        <label className='label'>Enter your Password : </label>
                        <input 
                        type="password" 
                        className='input' 
                        {...register("password",
                            {required:"(please enter strong password)",    
                                pattern:{
                                    value:/^(?=.*\d)(?=(.*\W){2})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/,
                                    message:"(its should contain at least 1 character, 1 digit, 2 special Character)",
                                }
                            }
                        )}
                        ></input>
                        {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
                    </div>
                    <div className='btn'>
                        <button type='submit' className='btn1'>Submit</button>
                    </div>
                    
                </form>
                </div>
            </div>
        </div>
    </>
  )
}
