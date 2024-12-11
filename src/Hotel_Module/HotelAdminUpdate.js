import * as React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import '../projectcss/signupform.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import {Typography} from '@mui/material';
import ReactLoading from 'react-loading';
import config from '../config';


// TODO remove, this demo shouldn't need to reset the theme.


export default function HotelAdminUpdate() {
  const { id } = useParams();
  const [HotelAdmin, setHotelAdmin] = useState({});
const [Message,setMessage] = useState("");
const [Displayvalue,setDisplayvalue] = useState(0);
const navigate = useNavigate();
const [imagelimit,setimagelimit] = useState(0)
 
  

  const fetchData =  async () => {
    setDisplayvalue(2)
    try{
      if(!(/^-?\d+$/.test(id.trim()) && !isNaN(Number(id)))){
        alert("invalid hotelmanager")
        navigate('/login')
        return
      }
      const response = await axios.post(`${config.url}/posthoteladminbyid`,{id:id})

if(response.data === ""){
 alert("session expired please login")
 navigate('/login')
}
else if(response.data.name === ""){
  alert("not allowed to update other details")
        navigate('/login')
        return
}
else if(response.data.name === " "){
  alert("something went wrong please login again")
  await axios.get(`${config.url}/logout`)
        navigate('/login')
        return
}
else{
setHotelAdmin(response.data)
setDisplayvalue(1)
    }
    }catch(error){
      setMessage(error.message)
      setDisplayvalue(3)
    }
}
useEffect(()=>{
    fetchData()
    }, []);

  const handleSubmit = async (e) => 
    {
      
        e.preventDefault();
        if(HotelAdmin.name.trim().length === 0){
          alert("Enter hotelmanager name properly")
          return
        }
        if(HotelAdmin.hotelname.trim().length === 0){
          alert("Enter Hotelname properly")
          return
        }
        if(HotelAdmin.name === ""){
          alert("Enter hotelmanager name properly")
          return
        }
        if(HotelAdmin.hotelname === ""){
          alert("Enter Hotelname properly")
          return
        }
        
         if(HotelAdmin.sex === ""){
          alert("please select your gender")
          return
         } 
       if( ! /^[9876]\d{9}$/.test(HotelAdmin.contact)){
        alert("you contact should start with 9/8/7/6 and not greater than 10 digits")
        return
       }     
       if(imagelimit === 1){
        alert("image size should be less than 1mb")
        setimagelimit(0)
        return
       } 
       setDisplayvalue(2)
        try
        {
            const response = await axios.post(`${config.url}/hoteladminprofileupdate`,HotelAdmin);
            if (response.status === 200) 
            {
              let responsedata = response.data
              if(responsedata === ""){
                alert("your details not updated due to session expiry")
                navigate("/login");  
              }
                 if(responsedata === 1){
                  alert("your profile updated successfully  please login again")
                  await axios.get(`${config.url}/hoteladminlogout`)
                 navigate("/login");                 
                   return
                 }   
                 if(responsedata === 0){
                  alert("something went wrong please login again")
  await axios.get(`${config.url}/hoteladminlogout`)
        navigate('/login')
        return
                 }          
            }
        } 
        catch (error) 
        {
            setMessage(error.message);
           setDisplayvalue(3)
        }
    };



  const handleChange = (e) => {
    setHotelAdmin({
      ...HotelAdmin,
      [e.target.name]: e.target.value,
    });
  };
  
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
            <h2>Update your details below</h2>
                  
              <form onSubmit={handleSubmit} method="post">
              <input type="text" placeholder="Hotel name" value={HotelAdmin.hotelname} name="hotelname" onChange={handleChange} required />
              <input type="text" placeholder="Hotelmanager name" value={HotelAdmin.name} name="name" onChange={handleChange} required />
                <input type="email" placeholder="Email" value={HotelAdmin.email} readOnly name="email"   required />
                <select name="sex" value={HotelAdmin.sex} onChange={handleChange} required >
                        <option value="">---Select Gender---</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                <input type="number" placeholder="Contact" value={HotelAdmin.contact} name="contact" step='1' onChange={handleChange} required />
<label>
        Hotel image
<input  type="file"  accept=".jpg,.jpeg,.png" name="hotelimageinbytes" placeholder='insert your hotel image' onChange={(e)=>{const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if(file.size > 1000000){
          setimagelimit(1)         
        }
        setHotelAdmin({
          ...HotelAdmin,
          [e.target.name]: reader.result,
        });
      };
    reader.readAsDataURL(file)
    }}} /></label>
<label>
        Hotel image preview</label>
<img src={HotelAdmin.hotelimageinbytes} alt="my Image"  />
                <button type="submit">Update</button>
              </form>
              {/* <p className="signup-link">
                Don’t have an account? <a href="#signup">Sign up</a>
              </p> */}
            </div>
          </div>
        </div>
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
    
  );
}