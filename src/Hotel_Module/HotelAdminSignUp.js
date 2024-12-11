import * as React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import '../projectcss/signupform.css';
import { useNavigate } from 'react-router-dom';
import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
import ReactLoading from 'react-loading';
import config from '../config';



// TODO remove, this demo shouldn't need to reset the theme.


export default function HotelAdminSignUp() {
  const[Country,setCountry] = useState('0');
  const[State,setState] = useState('0');
  const [isStateVisible, setIsStateVisible] = useState(false); 
  const [StateList, setStateList] = useState([]);
  const[City,setCity] = useState('0');
  const [isCityVisible, setIsCityVisible] = useState(false);
  const [CityList, setCityList] = useState([]);
  const [CityResult, setCityResult] = useState(0);
  const [hotel, setHotel] = useState({
    name: '',
    email: '',
    password: '',
    sex: '',
    contact: '',
    hotelname: '',
    country:"",
    state:"",
    city:'',
    hotelimageinbytes:'',
    status:0
});
const [Message,setMessage] = useState("");
const [Displayvalue,setDisplayvalue] = useState(1);
const [Otp,setOtp] = useState(0);
const [Displayvalue2,setDisplayValue2] = useState(0)
const navigate = useNavigate();
const [Return,setReturn] = useState(0)
const [hotelimagepreview,sethotelimagepreview] = useState(0)
 
  useEffect(() => {
    if (Displayvalue2 === 11 || Displayvalue2===21) {
      const timer = setTimeout(() => {
        setDisplayValue2(0);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [Displayvalue2]);

  const fetchData =  async () => {
    try{
      setDisplayvalue(4)
      const response = await axios.get(`${config.url}/checkhoteladminsignupsession`)
if(response.data !== ""){
  alert("enter otp sent to your mail")
  setDisplayvalue(2)
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
        hotel.country=countries[Country].country
       hotel.state=states[Country][State]
       hotel.city=cities[CityResult][City]
       if(hotel.name.trim().length === 0){
        alert("Enter hotelmanager name properly")
        return
      }
      if(hotel.hotelname.trim().length === 0){
        alert("Enter Hotelname properly")
        return
      }
       if(!(hotel.password.length  >= 8)){
        alert("passoword should be greater than 8 chars")
        return
       }
       if( ! /^[9876]\d{9}$/.test(hotel.contact)){
        alert("you contact should start with 9/8/7/6 and not greater than than 10 digits")
        return
       }
       if( hotel.country=="---Select Country---" || hotel.state=="dummy" || hotel.state=="---Select State---" || hotel.city=="---Select City---"){
        alert("select your hotel location properly")
        return
       }

       if(Return === 1){
        alert("hotel image should be less than 1mb")
        setReturn(0)
        return
       }
        try
        {      
          setDisplayvalue(4)
            const response = await axios.post(`${config.url}/insertHotelAdmin`,hotel);
            if (response.status === 200) // if succcessfully added
            {
              let responsedata = response.data
                 if(responsedata == 1){
                  setDisplayvalue(2)
                  setHotel({
                    name: '',
                    email: '',
                    password: '',
                    sex: '',
                    contact: '',
                    hotelname: '',
                    country:"",
                    state:"",
                    city:'',
                    hotelimageinbytes:''
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
          setMessage(error.message)
          setDisplayvalue(5)
        }
    };

  // locations dataset
  const countries = [  
    {  country: '---Select Country---' },
    {  country: 'India' },
    {  country: 'United States' },
    {  country: 'China' },
    
  ]; 
  const states = [  
    ['dummy'],
     ['---Select State---','Andhrapradesh','Telangana'],
     ['---Select State---','California','Texas'] ,
     ['---Select State---','Anhui','Beijing'] ,
  ];
  const cities = [
    ['dummy'],
    ['---Select City---','Guntur','Tirupati','Vijayawada'],
    ['---Select City---','Hyderabad','Nizamabad','Warangal'] ,
    ['---Select City---','Los Angeles','Oakland','Anaheim'] ,
    ['---Select City---','Houston','Dallas','San Antonio'] ,
    ['---Select City---','Hefei','Bengbu','Huainan'] ,
    ['---Select City---','Dongcheng District','Xicheng District','Chaoyang District'] ,
  ]

  const handleOtp = async(e) =>{
    e.preventDefault();
    try
        {  
          setDisplayvalue(4)
            const response = await axios.post(`${config.url}/checkotp`,{
              id:Otp
            });
            if (response.status === 200) // if succcessfully added
            {
              let responsedata = response.data
              if(responsedata === ""){
                setDisplayvalue(1)
                alert("you have to enter otp in below 10 minutes plase try again")
                  return
              }
                 if(responsedata == 1){ //detatils inserted into database 
                  setDisplayvalue(3)
                  setHotel({
                    name: '',
                    email: '',
                    password: '',
                    sex: '',
                    contact: '',
                    hotelname: '',
                    country:"",
                    state:"",
                    city:'',
                    hotelimageinbytes:''
                })
                    return
                 }
                 if(responsedata == 0){
                  setDisplayvalue(2) 
                  alert("wrong Otp enter OPT again that sent to your email")
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
  const handlechange = (e) => {
    e.preventDefault()
       setHotel({
         ...hotel,
         [e.target.name]: e.target.value,
       });
   }
  
  const usenavigate = (e) =>{
    e.preventDefault();
    navigate("/")
  }
  const handleback = async(e) =>{
    e.preventDefault();
   await axios.get(`${config.url}/removehoteladminsignupsession`)
    setDisplayvalue(1)
    window.location.reload()
  }
  return (
    <div  style={{
      minHeight: (Displayvalue === 1) ? '120vh' : '100vh',// Increase height to 120% of the viewport
      width: '100vw', // Full width of the viewport
      backgroundImage: 'url("https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80")',
      backgroundSize: 'cover', // Ensure the image covers the container
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center', // Center horizontally
      alignItems: 'flex-start', // Start at the top
      overflowY: 'auto', // Enable vertical scrolling if needed
    }}>
    {Displayvalue===1 &&( 
      <>
      
    <div className="signup-container"  style={{paddingTop:"90px"}}>
        {/* Signup/Login Section */}
        <div className="form-wrapper">
          <div className="form-container">
            {/* Right Section */}
            <div className="right-section">
            <h2>Hotelmanager Signup</h2>           
              <form onSubmit={handleSubmit} method="post">
              <input type="text" placeholder="Name" name="name" value={hotel.name}  onChange={handlechange} required />
                <input type="email" placeholder="Email" name="email" value={hotel.email} onChange={handlechange} required />
                <input type="password" placeholder="Password" name="password" value={hotel.password} onChange={handlechange} required />
                <select name="sex" value={hotel.sex} onChange={handlechange} required >
                        <option value="">---Select Gender---</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                <input type="number" placeholder="Contact" name="contact"  value={hotel.contact} onChange={handlechange} required />
                    <h5>Give Your Hotel Details</h5>
                    <input type="text" placeholder="Hotel Name" name="hotelname" value={hotel.hotelname} onChange={handlechange} required />
                    <label>
        Location</label>
        <select  
          name="country"
          value={Country}
           onChange={(e)=>{setCountry(e.target.value)
            if(e.target.value != 0){
               setIsStateVisible(true)
              let countryValue = e.target.value              
              setState('0')
              setStateList(states[countryValue])
            }
            else{
              setCity('0')
              setState('0')
              setIsStateVisible(false)
              setIsCityVisible(false)
            }
           }}
           required>
          {countries.map((country1,index) =>{            
             return(
            <option key={index} value={index}>
              {country1.country}
            </option>
          )})}
        </select>
    { isStateVisible &&   (              
              <select
                name="state"
                value={State}
                 onChange={(e)=>{ 
                  setState(e.target.value)
                  if(e.target.value != 0){
                     setIsCityVisible(true)
                    let stateValue = e.target.value                   
                    let initalValue = 1
                    let cityResult = -1
                    for(let i=1;i<7;i=i+2){                        
                          if(initalValue == Country && stateValue == 1 )
                          {
                              cityResult = i;                        
                          }
                          if(initalValue == Country && stateValue == 2 )
                            {
                                cityResult = i+1;                                
                            }
                          initalValue++    
                    }
                    initalValue = 1
                    setCity('0') 
                    setCityResult(cityResult)                   
                    setCityList(cities[cityResult])                   
                  }
                  else{
                    setCity('0');
                    setIsCityVisible(false)
                  }
                 }}
             
                 required >
                {StateList.length>0 && StateList.map((states,index) =>{            
                   return(
                  <option key={index} value={index}>
                    {states}
                  </option>
                )})}
              </select>      
)}

{ isCityVisible &&   (
<select
name="city"
value={City}
onChange={(e)=>{setCity(e.target.value)}}
required>
{ CityList.map((cities,index) =>{            
return(
<option key={index} value={index}>
{cities}
</option>
)})}
</select>
)}
<label>
        Insert hotel image here 
<input  type="file"  accept=".jpg,.jpeg,.png"  placeholder='insert your hotel image' name="hotelimageinbytes" onChange={(e)=>{const file = e.target.files[0];
   setReturn(0)
    if (file) {
      const reader = new FileReader();     
      reader.onload = () => {
        if(file.size > 1000000){
          setReturn(1)         
        }
       
       setHotel({
        ...hotel,
        [e.target.name]:reader.result,
       })
        sethotelimagepreview(1)
      };
    reader.readAsDataURL(file)
    }}}  required/></label>
     { hotelimagepreview === 1 && (
       <div >
       <label >Hotel image preview</label>
       <img src={hotel.hotelimageinbytes} alt="Hotel Image Preview" style={{
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
              <a href="/" className="text-decoration-none text-muted">
              back to home
          </a>
            </div>
          </div>
        </div>
      </div>
      </>
    )}
{Displayvalue===2 &&(
  <div className="signup-container">
  {/* Signup/Login Section */}
  <div className="form-wrapper">
    <div className="form-container">
      {/* Right Section */}
      <div className="right-section">
        <h2>Enter Otp</h2>
        <p>otp expites in 10 minutes</p>
        <form onSubmit={handleOtp}>
        <input type="number" placeholder="Enterotp" name="name"  onChange={(e)=>{setOtp(e.target.value)}} required />
        <button type="submit">Send</button>
        <button onClick={handleback}>click here if you provied wrong email</button>
              </form>
             
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
        <button type="submit">click here to navigate to loginpage</button>
              </form>
             
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