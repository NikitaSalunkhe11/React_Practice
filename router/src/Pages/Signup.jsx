import React from 'react';
import { useForm } from "react-hook-form";
import './signupcss.css';
import { useState } from 'react';

function Signup() {
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
    setFile(null);
    setPreviewUrl(null);
}

const [file, setFile] = useState(null);
const [previewUrl, setPreviewUrl] = useState(null);
const [errorMessage, setErrorMessage] = useState('');

const handleFileChange = (e) => {
  const selectedFile = e.target.files[0];
  const maxSize = 5 * 1024 * 1024; // 5MB in bytes
  const allowedExtensions = /(\.jpg|\.jpeg|\.pdf|\.doc)$/i;

  // Reset error message
  setErrorMessage('');

  if (selectedFile) {
    const fileName = selectedFile.name;
    const fileSize = selectedFile.size;

    // Check file size
    if (fileSize > maxSize) {
      setErrorMessage('File size exceeds 5MB. Please upload a smaller file.');
      setFile(null); // Reset file state
      setPreviewUrl(null); // Reset preview URL
      return;
    }

    // Check file type
    if (!allowedExtensions.exec(fileName)) {
      setErrorMessage('Invalid file type. Please upload a .jpg, .jpeg, .pdf, or .doc file.');
      setFile(null); // Reset file state
      setPreviewUrl(null); // Reset preview URL
      return;
    }

    // If file is valid, set it to state
    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile)); // Create a preview URL
  }
};

return (
<>
    <div className='outerdiv'> 
        <div className='box'> 
            
            <div className='leftbox'>
               <img
               className='img' 
               src="https://i.pinimg.com/originals/6a/33/1f/6a331ff33318a0df992800dc6f68e73f.jpg" ></img>
            </div>
            <div className='Formbox'>
            <h2 className='heading'>SignUp</h2>
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
                                message:"(it should contain at least 1 character, 1 digit, 2 special Character)",
                            }
                        }
                    )}
                    ></input>
                    {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
                </div>
                <div className='field'>   
                <label className='label' htmlFor="fileUpload">Upload passport size photo:</label>
                <input  type="file" id="fileUpload" onChange={handleFileChange} />
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {previewUrl && (
                  <div>
                    {file.type === 'application/pdf' || file.type === 'application/msword' ? (
                      <a href={previewUrl} target="_blank" rel="noopener noreferrer">
                        View Document
                      </a>
                    ) : (
                      <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%', height: 'auto' }} />
                    )}
                  </div>
                )}
                </div>
                <div className='btn2'>
                    <button type='submit' className='btn1'>Submit</button>
                </div>
                
            </form>
            </div>
        </div>
    </div>
</>
)
}

export default Signup;
