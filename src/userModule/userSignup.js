import * as React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import '../projectcss/signupform.css';
import { useNavigate } from 'react-router-dom';
import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
import ReactLoading from 'react-loading';
import config from '../config';
export default function UserSignUp() {
  
  const [User, setUser] = useState({
    name: '',
    email: '',
    password: '',
    sex: '',
    contact: '',
    userimageinbytes:''
});
const [Message,setMessage] = useState("");
const [Displayvalue,setDisplayvalue] = useState(1);
const [Otp,setOtp] = useState(0);
const navigate = useNavigate();
const [Return,setReturn] = useState(0)
const [touristimagepreview,settouristimagepreview] = useState(0)
 
  // useEffect(() => {
  //   if (Displayvalue2 === 11 || Displayvalue2===21) {
  //     const timer = setTimeout(() => {
  //       setDisplayValue2(0);
  //     }, 5000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [Displayvalue2]);

  const fetchData =  async () => {
    try{
      setDisplayvalue(4)
      const response = await axios.get(`${config.url}/checkusersignupsession`)
if(response.data !== ""){
  setDisplayvalue(2)
  alert("Your session exists enter otp sent to your mail")
}
setDisplayvalue(1)
    }catch(error){      
      setMessage(error.message)
      setDisplayvalue(5)
    }
}
useEffect(()=>{
    fetchData()
    }, []);

  const handleSubmit = async (e) => 
    {
        e.preventDefault();
        if(User.name.trim().length === 0){
          alert("Enter your name properly")
          return
        }
       if(!(User.password.length  >= 8)){
        alert("Password must be longer than 8 characters")        
        return
       }
       if( ! /^[9876]\d{9}$/.test(User.contact)){
        alert("Your contact number should start with 9, 8, 7, or 6 and must be exactly 10 digits long")        
        return
       }      
       if(Return === 1){
        alert("image should be less than 1mb")
        setReturn(0)
        return
       }
        try
        { 
          setDisplayvalue(4)
            const response = await axios.post(`${config.url}/UserSignup`,User);
            if (response.status === 200) // if succcessfully added
            {
              let responsedata = response.data
                 if(responsedata == 1){
                  setDisplayvalue(2)
                  alert("enter OTP within 10 minutes")
                  setUser({
                    name: '',
                    email: '',
                    password: '',
                    sex: '',
                    contact: '',
                   userimageinbytes:''
                })
                   return
                 }
                 if(responsedata == 2){ // mail exists
                  setDisplayvalue(1)
                  alert("Email already exists")
                  return
                 }                
            }
        
        } 
        catch (error) 
        {
            setMessage(error.message);
            setDisplayvalue(5)
        }
    };

  const handleOtp = async(e) =>{
    e.preventDefault();
    try
        {
          setDisplayvalue(4)
            const response = await axios.post(`${config.url}/checkotpuser`,{
              id:Otp
            });
            if (response.status === 200) // if succcessfully added
            {
              let responsedata = response.data
              if(responsedata === ""){
                setDisplayvalue(1)
                alert("you have to enter otp in below 10 minutes enter your details again for signup")
                  return
              }
                 if(responsedata == 1){ //detatils inserted into database 
                  setDisplayvalue(3)
                  setUser({
                    name: '',
                    email: '',
                    password: '',
                    sex: '',
                    contact: '',
                    userimageinbytes:''
                })
                    return
                 }
                 if(responsedata == 0){
                  setDisplayvalue(2)
                  alert("wrong Otp try again")
                    return
                 }
            }        
        } 
        catch (error) 
        {           
            setMessage(error.message);
           setDisplayvalue(5)
        }
  }
  
  const handleback = async(e) =>{
    e.preventDefault();
   await axios.get(`${config.url}/removeusersignupsession`)
    setDisplayvalue(1)
    window.location.reload()
  }
  const handlechange = (e) => {
   e.preventDefault()
      setUser({
        ...User,
        [e.target.name]: e.target.value,
      });
  }
  const usenavigate = (e) =>{
    e.preventDefault();
    navigate("/login")
  }

  return (
    <div style={{
      minHeight: '100vh', // Ensures full viewport height
        minWidth: '100vw',  // Ensures full viewport width
        backgroundImage: 'url("https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',     // Makes the image cover the container
        backgroundRepeat: 'no-repeat', // Prevents repetition
        backgroundPosition: 'center', // Centers the background image
        display: 'flex',              // Flexbox for centering content
       alignItems: 'center',         // Vertical centering
        justifyContent: 'center',     // Horizontal centering
       // textAlign: 'center',  
    }}>
    {Displayvalue===1 &&( 
    <div className="signup-container">
        {/* Signup/Login Section */}
        <div className="form-wrapper">
          <div className="form-container">
            {/* Right Section */}
            <div className="right-section">
            <h2>Tourist Signup</h2>          
              <form onSubmit={handleSubmit} method="post">
              <input type="text" placeholder="Name" name="name" value={User.name} onChange={handlechange} required />
                <input type="email" placeholder="Email" name="email" value={User.email} onChange={handlechange} required />
                <input type="password" placeholder="Password" name="password" value={User.password}  onChange={handlechange} required />
                <select name="sex" value={User.sex}  onChange={handlechange} required >
                        <option value="">---Select Gender---</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                <input type="number" placeholder="Contact" name="contact"  value={User.contact} onChange={handlechange} required />
<label>
        insert your profilepic
<input  type="file"  accept=".jpg,.jpeg,.png"  placeholder='insert your hotel image' name="userimageinbytes" onChange={(e)=>{const file = e.target.files[0];
   setReturn(0)
    if (file) {
      const reader = new FileReader();
     
      reader.onload = () => {
        if(file.size > 1000000){
          setReturn(1)         
        }
        setUser({
          ...User,
          [e.target.name]:reader.result,
        })
        settouristimagepreview(1)
      };
    reader.readAsDataURL(file)
    }}}  required/></label>
     { touristimagepreview === 1 && (
       <div >
       <label >profile pic preview</label>
       <img src={User.userimageinbytes} alt="Tourist Image Preview" style={{
    width: '80%', // Set a larger percentage width relative to the container
    maxWidth: '600px', // Limit the maximum width for larger screens
    height: 'auto', // Maintain aspect ratio
    borderRadius: '10px', // Add a slight border radius for better aesthetics
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
    margin: '10px auto', // Center the image with a margin
    display: 'block', // Center the image in its container
  }}/>
     </div>
    )}
                <button type="submit">Signup</button>
              </form>
              <a href="/hotelmanager/signup" className="text-decoration-none text-muted">
               Hotelmanager signup?
          </a>
          <a href="/" className="text-decoration-none text-muted">
              back to home
          </a>
            </div>
          </div>
        </div>
      </div>
    )}
{Displayvalue===2 &&(
  <div className="signup-container">
  {/* Signup/Login Section */}
  <div className="form-wrapper">
    <div className="form-container">
      {/* Right Section */}
      <div className="right-section">
        <h2>Enter Otp</h2>
        <p>otp expires in 10 minutes</p>
        <form onSubmit={handleOtp}>
        <input type="number" placeholder="Enterotp" name="name"  onChange={(e)=>{setOtp(e.target.value)}} required />
        <button type="submit">Send</button>
        <button onClick={handleback}>click here if you provied wrong email</button>

              </form>
              {/* <p className="signup-link">
                Don’t have an account? <a href="#signup">Sign up</a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
)} 

{Displayvalue===3 &&(
  <div className="signup-container">
  {/* Signup/Login Section */}
  <div className="form-wrapper">
    <div className="form-container">
      {/* Right Section */}
      <div className="right-section">
        <h2>Signup Success click below to loginpage</h2>
        <form onSubmit={usenavigate}>
        <button type="submit">click here to navigate  loginpage</button>
              </form>
              
                <a href="/hotelmanager/signup">signup as hotelmanager?</a>
             
            </div>
          </div>
        </div>
      </div>
)} 
 {Displayvalue===4 && (
  <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px', // Fixed height for square shape
    width: '300px',  // Fixed width for square shape
    backgroundColor: 'white', // Add background color if needed
    position: 'relative', // Relative position ensures it's within the document flow
    margin: 'auto', // Centers within parent
    top: '0', 
    left: '0', 
    zIndex: 0, // Push to the back
    boxShadow: 3, 
    borderRadius: 2, 
  }}
>
  <ReactLoading type="spin" color="blue" height={'50%'} width={'50%'} />
</Box>
  )}
  {Displayvalue===5 && (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '300px', // Fixed height for square shape
      width: '300px',  // Fixed width for square shape
      backgroundColor: 'white',
      position: 'relative', // Relative position ensures it's within the document flow
      margin: 'auto', // Centers within parent
      top: '0', // Ensures no overlap
      left: '0', // Ensures no overlap
      zIndex: 0, // Push to the back
      boxShadow: 3, // Optional shadow
      borderRadius: 2, // Optional for rounded corners
    }}
  >
    <Typography
      sx={{
        color: 'red',
        fontSize: '20px',
        fontWeight: 'bold',
      }}
    >
      {Message}
    </Typography>
  </Box>
  )}

      </div>
    
  );
}
