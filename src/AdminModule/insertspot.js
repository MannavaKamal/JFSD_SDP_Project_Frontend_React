import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

//for insert spot 

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useEffect, useState} from "react";
import axios from "axios";
import Delete from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import '../projectcss/hoteladminaddroom.css';
import ReactLoading from 'react-loading';

import LogoutIcon from '@mui/icons-material/Logout';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AttractionsIcon from '@mui/icons-material/Attractions';
import GroupIcon from '@mui/icons-material/Group';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import config from '../config';





export default function InsertSpot() {
  const [showDrawer, setShowDrawer] = React.useState(true); // Toggle drawer visibility
  const [activeButton, setActiveButton] = React.useState(1); // Track active button index
  const navigate = useNavigate();


  const[Country,setCountry] = useState('0');
  const[State,setState] = useState('0');
  const [isStateVisible, setIsStateVisible] = useState(false); 
  const [StateList, setStateList] = useState([]);
  const[City,setCity] = useState('0');
  const [isCityVisible, setIsCityVisible] = useState(false);
  const [CityList, setCityList] = useState([]);
  const [CityResult, setCityResult] = useState(0);
  

 

  const [Displayvalue,setDisplayvalue] = useState(0)
  const [spot,setspot] = useState({
    country:"",
    state:"",
    spotname:"",
    city:"",
    spotimageinbytes:""    
  })
  const [imagelimit,setimagelimit] = useState(0)
  const [spotpreview,setspotpreview] = useState(0)
  const [Message,setMessage] = useState("")
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


  const handleButtonClick = async(index) => {
  
    if(index === 1){
        navigate('/admin/inserttouristspot')
    }
    if(index === 2){
      navigate('/admin/touristspots')
  }
    if(index === 3){
      navigate('/admin/travelplanrequests')
  }
  if(index === 4){
    navigate('/admin/hotelmmanagerdetails')
}
if(index === 5){
  navigate('/admin/userdetails')
}
if(index === 6){
  setDisplayvalue(2)    
  try{
    await axios.get(`${config.url}/adminlogout`)
    navigate('/login')
  }
  catch(error){
    setMessage(error.message);
    setDisplayvalue(3)
  }
}
  };

  const DrawerList = (
    <Box
    sx={{
      width: { xs: '100%', sm: 300 },
      background: 'linear-gradient(90deg, #fbc2eb 0%, #a6c1ee 50%, #c2e9fb 100%)',
      height: 'calc(100vh - 64px)', // Adjust height for the AppBar
      position: { xs: 'static', sm: 'fixed' },
      top: 64, // Offset for the AppBar height
      left: 0,
      borderRadius: { sm: '0 20px 20px 0' },
      paddingTop: 3,
      color: '#000',
      boxShadow: { sm: '0 10px 20px rgba(0, 0, 0, 0.2)' },
      overflowY: 'auto', // Enables vertical scrolling
      overflowX: 'hidden', // Hides horizontal scrolling if unnecessary
      scrollbarWidth: 'thin', // For Firefox
      '&::-webkit-scrollbar': {
        width: '8px', // Scrollbar width for Chrome, Edge, and Safari
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#888', // Scrollbar thumb color
        borderRadius: '4px',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: '#555', // Scrollbar thumb hover color
      },
      transition: 'all 0.3s ease',
    }}
    >
       <List>
      <ListItem key="inserttouristspot" disablePadding>
      <ListItemButton
              onClick={() => handleButtonClick(1)} // Set active button
              sx={{
                padding: '16px 20px',
                marginBottom: 2,
                borderRadius: '12px',
                backgroundColor: activeButton === 1 ? '#1976d2' : 'transparent', // Active button color
                '&:hover': {
                  backgroundColor: activeButton === 1 ? '#1565c0' : '#f0f0f0', // Hover effect
                },
                color: activeButton === 1 ? '#fff' : '#000', // Text and icon color
                transition: 'background-color 0.3s ease, color 0.3s ease',
              }}
            >
              <ListItemIcon
                sx={{
                  color: activeButton === 1 ? '#fff' : '#000', // Icon color
                }}
              >
              <AttractionsIcon  sx={{
                  color: activeButton === 1 ? '#fff' : '#000', // Icon color
                }}/>
              </ListItemIcon>
              <ListItemText primary="Insert Touristspot" />
            </ListItemButton>
          </ListItem>
          
          <ListItem key="touristsspots" disablePadding>
             <ListItemButton
              onClick={() => handleButtonClick(2)} // Set active button
              sx={{
                padding: '16px 20px',
                marginBottom: 2,
                borderRadius: '12px',
                backgroundColor: activeButton === 2 ? '#1976d2' : 'transparent', // Active button color
                '&:hover': {
                  backgroundColor: activeButton === 2 ? '#1565c0' : '#f0f0f0', // Hover effect
                },
                color: activeButton === 2 ? '#fff' : '#000', // Text and icon color
                transition: 'background-color 0.3s ease, color 0.3s ease',
              }}
            >
              <ListItemIcon
                sx={{
                  color: activeButton === 2 ? '#fff' : '#000', // Icon color
                }}
              >
              <TravelExploreIcon sx={{
                  color: activeButton === 2 ? '#fff' : '#000', // Icon color
                }}  />
              </ListItemIcon>
              <ListItemText primary="Tourist Spots" />
            </ListItemButton>
          </ListItem>

          <ListItem key="travelplanrequests" disablePadding>
             <ListItemButton
              onClick={() => handleButtonClick(3)} // Set active button
              sx={{
                padding: '16px 20px',
                marginBottom: 3,
                borderRadius: '12px',
                backgroundColor: activeButton === 3 ? '#1976d2' : 'transparent', // Active button color
                '&:hover': {
                  backgroundColor: activeButton === 3 ? '#1565c0' : '#f0f0f0', // Hover effect
                },
                color: activeButton === 3 ? '#fff' : '#000', // Text and icon color
                transition: 'background-color 0.3s ease, color 0.3s ease',
              }}
            >
              <ListItemIcon
                sx={{
                  color: activeButton === 3 ? '#fff' : '#000', // Icon color
                }}
              >
                     <Box sx={{ position: 'relative', display: 'inline-block', width: 48, height: 48 }}>
      <TravelExploreIcon
        sx={{ position: 'absolute', top: 0, left: 0 ,color: activeButton === 3 ? '#fff' : '#000'}}    
      />
      <CalendarTodayIcon
        color="secondary"
        sx={{ position: 'absolute', top: 10, left: 10 , color: activeButton === 3 ? '#fff' : '#000' }} // Slightly offset the second icon
      />
    </Box>
              </ListItemIcon>
              <ListItemText primary="Travelplan Requests" />
            </ListItemButton>
          </ListItem>

          <ListItem key="hotelmanagerdetails" disablePadding>
             <ListItemButton
              onClick={() => handleButtonClick(4)} // Set active button
              sx={{
                padding: '16px 20px',
                marginBottom: 3,
                borderRadius: '12px',
                backgroundColor: activeButton === 4 ? '#1976d2' : 'transparent', // Active button color
                '&:hover': {
                  backgroundColor: activeButton === 4 ? '#1565c0' : '#f0f0f0', // Hover effect
                },
                color: activeButton === 4 ? '#fff' : '#000', // Text and icon color
                transition: 'background-color 0.3s ease, color 0.3s ease',
              }}
            >
             <ListItemIcon
                sx={{
                  color: activeButton === 4 ? '#fff' : '#000', // Icon color
                }}
              >             
      <GroupIcon  sx={{ color: activeButton === 4 ? '#fff' : '#000' }} />
              </ListItemIcon>
              <ListItemText primary="Hotelmanager Details" />
            </ListItemButton>
          </ListItem>

          <ListItem key="userdetails" disablePadding>
             <ListItemButton
              onClick={() => handleButtonClick(5)} // Set active button
              sx={{
                padding: '16px 20px',
                marginBottom: 3,
                borderRadius: '12px',
                backgroundColor: activeButton === 5 ? '#1976d2' : 'transparent', // Active button color
                '&:hover': {
                  backgroundColor: activeButton === 5 ? '#1565c0' : '#f0f0f0', // Hover effect
                },
                color: activeButton === 5 ? '#fff' : '#000', // Text and icon color
                transition: 'background-color 0.3s ease, color 0.3s ease',
              }}
            >
              <ListItemIcon
                sx={{
                  color: activeButton === 5 ? '#fff' : '#000', // Icon color
                }}
              >
              <GroupIcon sx={{ transform: 'scaleX(-1)', color:   activeButton === 5 ? '#fff' : '#000'  }} />
              </ListItemIcon>
              <ListItemText primary="User Details" />
            </ListItemButton>
          </ListItem>
          <ListItem key="logout" disablePadding>
             <ListItemButton
              onClick={() => handleButtonClick(6)} // Set active button
              sx={{
                padding: '16px 20px',
                marginBottom: 3,
                borderRadius: '12px',
                backgroundColor: activeButton === 6 ? '#1976d2' : 'transparent', // Active button color
                '&:hover': {
                  backgroundColor: activeButton === 6 ? '#1565c0' : '#f0f0f0', // Hover effect
                },
                color: activeButton === 6 ? '#fff' : '#000', // Text and icon color
                transition: 'background-color 0.3s ease, color 0.3s ease',
              }}
            >
              <ListItemIcon
                sx={{
                  color: activeButton === 6 ? '#fff' : '#000', // Icon color
                }}
              >
              <LogoutIcon sx={{ transform: 'scaleX(-1)', color:   activeButton === 6 ? '#fff' : '#000'  }} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
                   
      </List>
    </Box>
  );

  useEffect(()   => {
    fetchData();
    
  }, []);

  const fetchData = async () => {
    try {
      setDisplayvalue(2)
      const response1 = await axios.get(`${config.url}/checkadminsession1`); 
      let l1 = response1.data 
      if(l1 === "" ){
        navigate('/login')
        return
      }
      setDisplayvalue(1)  
      
    } catch (error) {     
      setMessage(error.message)
     setDisplayvalue(3)
    }
  };
  
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    spot.country=countries[Country].country
    spot.state=states[Country][State]
    spot.city=cities[CityResult][City]
    console.log(spot)
    if(spot.spotname.trim().length === 0){
      alert("Enter enter spot name  properly")
      return
    }
    if( spot.country=="---Select Country---" || spot.state=="dummy" || spot.state=="---Select State---" || spot.city=="---Select City---"){
      alert("Select spot location properly")
      return
     }
     if(imagelimit === 1){
      alert("Spot image size should be less than 1mb")
      setimagelimit(0)
      return
     }
    try {
      setDisplayvalue(2)
      const  response = await axios.post(`${config.url}/insertLocation`,spot);  
      if(response.data === ""){
        navigate('/login')
        return
      } 
      else if(response.data === 1){
        alert("Tourst spot inserted successfully")
        setDisplayvalue(3)
        window.location.reload()
        return
      }
    } catch (error) {
      setMessage(error.message)
      setDisplayvalue(3)
    } 
  };
 
  const handleclear = (e) =>{
    e.preventDefault()
   window.location.reload()
  }

  return (
    <div 
    style={{
      minHeight: (Displayvalue === 1) ?  '150vh' : '100vh', // Ensures full viewport height
        minWidth: '100vw',  // Ensures full viewport width
        backgroundImage: 'url("https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',     // Makes the image cover the container
        backgroundRepeat: 'no-repeat', // Prevents repetition
        backgroundPosition: 'center', // Centers the background image
       display: 'flex',              // Flexbox for centering content
       alignItems: 'center',         // Vertical centering
       justifyContent: 'center',     // Horizontal centering
       // textAlign: 'center',  
    }}
    >
    <Box>
      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: 'linear-gradient(90deg, #ff7e5f 0%, #feb47b 40%, #86a8e7 70%, #91eae4 100%)',
          height: '80px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Toolbar
          sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Menu button for small screens */}
          <IconButton
            color="inherit"
            edge="start"
            sx={{
              mr: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
              },
              borderRadius: '50%',
            }}
            onClick={() => setShowDrawer(!showDrawer)}
           
          >
            <MenuIcon />
          </IconButton>

          {/* Title */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
           Admin
          </Typography>         
        </Toolbar>
      </AppBar>


      <Grid container spacing={2} sx={{ marginTop: '64px' }}>
        {/* Conditionally Render Drawer Box */}
        {showDrawer && (
          <Grid item xs={12} sm={3}>
            {DrawerList}
          </Grid>
        )}
        {/* Content Area */}
        <Grid
          item
          xs={12}
          sm={showDrawer ? 9 : 12} // Full width if drawer is hidden
          sx={{
            marginLeft: showDrawer ? { sm: '300px' } : 0, // Remove margin if drawer is hidden
            padding: 2,
          }}
        >
         {Displayvalue===1 &&
      <>
     <div className="signup-container">
      <div className="form-wrapper"  style={{paddingBottom:"200px"}}>
        <div className="form-container">
          <div className="right-section">
            <h2>Fill the Tourist spot details below</h2>
            <form onSubmit={handleSubmit} method="post">
            
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
              <input
                type="text"
                placeholder="Spot name"
                name="spotname"
                step="1"
                value={spot.spotname}
                onChange={(e)=>{
                  setspot({
                    ...spot,
                    [e.target.name]: e.target.value,
                  })
                }}
                required
              />
              
              <label>
                Spot image
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"   
                  name="spotimageinbytes"              
                  onChange={(e) => {
                    setspotpreview(1)
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => {
                        if (file.size > 1000000) {
                          setimagelimit(1);
                        }
                        setspot({
                          ...spot,
                          [e.target.name]: reader.result,
                        });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  required
                />
              </label>
              { spotpreview === 1 && (
                <>
              <label>Room image preview</label>
              <img src={spot.spotimageinbytes} alt="Room preview" /> </>
            )}
              <button type="submit">Add</button>
              <button onClick={handleclear}>Clear</button>
            </form>
          </div>
        </div>
      </div>
    </div>             
    </>}
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


        </Grid>
      </Grid>
    </Box>
    </div>
  );
}
