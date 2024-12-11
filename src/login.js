import React, { useState,useEffect }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './projectcss/app.css'; // Custom CSS for background and card styles
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
import ReactLoading from 'react-loading';
import config from './config';

export default function LoginForm() {
    
const [Displayvalue,setDisplayvalue] = useState(1)
const [Message,setMessage] = useState("")
const [Email,setEmail] = useState("")
const [Password,setPassword] = useState("")
const navigate = useNavigate();


useEffect(()=>{
    fetchData()
    }, []);
    // useEffect(() => {
    //     if (Displayvalue === 1) {
    //       const timer = setTimeout(() => {
    //         setDisplayvalue(0);
    //       }, 10000);
    //       return () => clearTimeout(timer);
    //     }
    //   }, [Displayvalue]);   

    const fetchData =  async () => {
        try{
           setDisplayvalue(2)
          const response = await axios.get(`${config.url}/checkadminsession`)
          if(response.data !== ""){
           navigate("/admin/touristspots")           
           return
          }
          const response1 = await axios.get(`${config.url}/checkhoteladminsession`)
          if(response1.data !== ""){
            navigate("/hotelmanager/profile")
            return
           }
          const response2 = await axios.get(`${config.url}/checkusersession`)
          if(response2.data !== ""){
            navigate("/tourist/profile")
            return
           }
           setDisplayvalue(1)
        }catch(error){
            setMessage(error.message)
            setDisplayvalue(3)
        }
    }

    const handleSubmit = async(e) => { 
        e.preventDefault();  
        try{
           setDisplayvalue(2)
       const response =  await axios.post(`${config.url}/login`,{         
         email:Email,
         password:Password
         })
         if(response.data === 12){
          alert("Your hotel is  not a proved by admin we will send email if admin approved")
          window.location.reload()
          return
         }
         if(response.data===3){
            alert("invalid credentials")
            setDisplayvalue(1)
            return
         }
         fetchData()
         setDisplayvalue(1) 
    }catch(error){
        setMessage(error.message)
      setDisplayvalue(3)
    }
       }
   
  return (
    <>
     <div className="login-container d-flex justify-content-center align-items-center">
   {Displayvalue === 1  && (
       
    <div className="card p-5 text-center shadow-lg">
      <h2 className="mb-4 text-primary">Please Login</h2>
      <form onSubmit={handleSubmit} method="post">
        <div className="mb-4">
          <input
            type="email"
            id="username"
            className="form-control custom-input"
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            className="form-control custom-input"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="btn btn-gradient w-100">
          Log In
        </button>
        <div className="mt-4">
          <a href="/" className="text-decoration-none text-muted">
            back to home
          </a>
        </div>
      </form>
    </div>
   
)}
 {Displayvalue===2 && (
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
  {Displayvalue===3 && (
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
</>
  );
}