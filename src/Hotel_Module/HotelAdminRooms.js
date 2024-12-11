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
import { useNavigate } from 'react-router-dom';
import config from '../config';

//for insert spot 


import {useEffect, useState} from "react";
import axios from "axios";
import {TextField,Button,Card, CardContent,CardMedia} from '@mui/material' ;
import Delete from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReactLoading from 'react-loading';
import Avatar from '@mui/material/Avatar';

import HotelIcon from '@mui/icons-material/Hotel';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const defaultTheme = createTheme();

export default function HotelAdminRooms() {
  const [showDrawer, setShowDrawer] = React.useState(true); // Toggle drawer visibility
  const [anchorEl, setAnchorEl] = React.useState(null); // For profile menu
  const [activeButton, setActiveButton] = React.useState(3); // Track active button index
  const navigate = useNavigate();

  const[presentData,pastData] = useState([]);
  const[isRoomsVisible,setIsRoomsVisible] = useState(false)
  const [isSessionExpired,setIsSessionExpired] = useState(false) 
  const [isData,setIsData] = useState(false)
  const [Room,setRoom] = useState({})
  const [imagelimit,setimagelimit] = useState(0)
   const [roompreview,setroompreview] = useState(0)
  const [isUserUpdateVisisble,setIsUpdateUserVisisble] = useState(false)
  const [DisplayValue,setDisplayValue] = useState(0)
  const [Message,setMessage] = useState("")
  const [HotelAdmin,setHotelAdmin] = useState({})
  

  const handleButtonClick = async(index) => {
   
    if(index === 1){
        navigate("/hotelmanager/profile")
    }
    if(index === 2){
      navigate('/hotelmanager/addroom')
    }
    if(index === 3){
      navigate('/hotelmanager/rooms')
    }
    if(index === 4){
      navigate('/hotelmanager/roombookings')
    }
    if(index === 5){  
      setDisplayValue(2)    
      try{
        await axios.get(`${config.url}/hoteladminlogout`)
        navigate('/login')
      }
      catch(error){
        setMessage(error.message);
        setDisplayValue(3)
      }
    }
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
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
      <ListItem key="userprofile" disablePadding>
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
              <Avatar  sx={{
                  color: activeButton === 1 ? '#fff' : '#000', // Icon color
                }}/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          
          <ListItem key="AddRoom" disablePadding>
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
              <AddCircleOutlineIcon sx={{
                  color: activeButton === 2 ? '#fff' : '#000', // Icon color
                }}  />
              </ListItemIcon>
              <ListItemText primary="Add Room" />
            </ListItemButton>
          </ListItem>

          <ListItem key="Rooms" disablePadding>
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
      <HotelIcon
        sx={{ position: 'absolute', top: 0, left: 0 ,color: activeButton === 3 ? '#fff' : '#000'}}    
      />
    </Box>
              </ListItemIcon>
              <ListItemText primary="Rooms" />
            </ListItemButton>
          </ListItem>

          <ListItem key="bookingrooms" disablePadding>
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
                  color: activeButton === 5 ? '#fff' : '#000', // Icon color
                }}
              >             
      <EventAvailableIcon  sx={{ color: activeButton === 5 ? '#fff' : '#000' }} />
              </ListItemIcon>
              <ListItemText primary="Room Bookings" />
            </ListItemButton>
          </ListItem>

          <ListItem key="logout" disablePadding>
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
                  color: activeButton === 7 ? '#fff' : '#000', // Icon color
                }}
              >
              <LogoutIcon sx={{ transform: 'scaleX(-1)', color:   activeButton === 7 ? '#fff' : '#000'  }} />
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
      setDisplayValue(3)
      const response = await axios.get(`${config.url}/checkhoteladminsession1`)
      const response1 = await axios.get(`${config.url}/HotelAdminRooms`); 
      let l1 = response1.data
    if(l1 === ""){
      navigate("/login")
      return
    }else if(l1.length === 0){
      setMessage("No room added in your hotel")
      setDisplayValue(4)
     }
     else{
      setHotelAdmin(response.data)
        pastData(l1);
        setDisplayValue(1)
     }
    } catch (error) {
      setMessage( error.message);
      setDisplayValue(4)
    }
  };

 const HandleRoomDelete = async(sno) =>
{   
  try {
    setDisplayValue(3)
  const response = await axios.post(`${config.url}/deleteroom`,{sno:sno})
   if(response.data === ""){
    alert(" Room not deleated due to session expiry")
    navigate("login")
    return
   }
   else if(response.data === 0){
    alert("something went wrong")
    fetchData()
    return
   }
   else if(response.data === 1){
    alert("Room deleated successfully");
    fetchData()
    return
   }
  } catch (error) {
    setMessage( error.message);
    setDisplayValue(4)
  }
 }
 const HandleUpdateRoom = async(room)=>{
  setRoom(room)
  setDisplayValue(2)
 }

 const handleSubmit = async(e)=>{ 
  e.preventDefault();
  if(Room.roomno === "" ){
    alert("Enter room number properly")
    return
  }
  if(Room.type === "" ){
    alert("Enter roomtype properly")
    return
  }
  if(Room.roomcost <1 || Room.roomcost === ""){
    alert("Enter roomcost properly ")
    return
  }
  if(imagelimit === 1){
    alert("image size should be lessthan 1mb")
    return
  }
  try {
    setDisplayValue(3)
 const response = await axios.post(`${config.url}/updateroom`,Room)
  if(response.data === ""){
    alert("your room details not updated due to session expiry")
    navigate("/login")
    return
  }
  if(response.data === 0){
    alert("some room details not exists")
    fetchData();
    setRoom({})
    return
  }
  if(response.data === 1){
    alert("Room Updated successfully")
    fetchData();
    return
  }
  } catch (error) {
    setMessage( error.message);
    setDisplayValue(4)
  }
 }
 const handleChange = (e) => {
  setRoom({
    ...Room,
    [e.target.name]: e.target.value,
  });
};
const handleBack = (e) => {
  e.preventDefault()
  setDisplayValue(1)
}
  return (
    <div 
    style={{
      minHeight: '100vh', // Ensures full viewport height
        minWidth: '100vw',  // Ensures full viewport width
        backgroundImage: 'url("https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',     // Makes the image cover the container
        backgroundRepeat: 'no-repeat', // Prevents repetition
        backgroundPosition: 'center', // Centers the background image
      //   display: 'flex',              // Flexbox for centering content
      //  alignItems: 'center',         // Vertical centering
      //   justifyContent: 'center',     // Horizontal centering
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
           {HotelAdmin.name}
          </Typography>

          <Avatar
        alt="Remy Sharp"
        src={HotelAdmin.hotelimageinbytes}
        sx={{ width: 56, height: 56 }}
      />
        </Toolbar>
      </AppBar>


      <Grid container spacing={2} sx={{ marginTop: '64px' }}>
        {/* Conditionally Render Drawer Box */}
        {showDrawer && (
          <Grid item xs={12} sm={3}>
            {DrawerList}
          </Grid>
        )}
        <Grid
          item
          xs={12}
          sm={showDrawer ? 9 : 12} // Full width if drawer is hidden
          sx={{
            marginLeft: showDrawer ? { sm: '300px' } : 0, // Remove margin if drawer is hidden
            padding: 2,
          }}
        >
        {/* {content area} */}
         {/* {for all rooms} */}
        {DisplayValue===1   && (
     <Grid container spacing={3} justifyContent="center">
     {presentData.map((data2, index) => {
       if (index % 3 === 0 || index === 0) {
         return (
           <React.Fragment key={index}>
             {/* First Card */}
             <Grid item xs={12} sm={6} md={4}>
               <Card style={{ width: "100%", maxWidth: 300, margin: "auto" }}>
                 <CardMedia
                   component="img"
                   height="200"
                   image={`${data2.roomimageinbytes}`}
                   alt={`Room Image ${data2.roomno}`}
                   style={{ objectFit: "cover" }}
                 />
                 <CardContent>
                   <Typography
                     variant="body1"
                     sx={{
                       fontWeight: 'bold',
                       color: '#1a237e',
                       marginBottom: '8px',
                     }}
                   >
                     <strong>Roomno:</strong> {data2.roomno}
                   </Typography>
                   <Typography
                     variant="body2"
                     sx={{ fontSize: '16px', color: '#424242', marginBottom: '8px' }}
                   >
                     <strong>Roomtype:</strong> {data2.roomtype}
                   </Typography>
                   <Typography
                     variant="body2"
                     sx={{ fontSize: '16px', color: '#424242', marginBottom: '8px' }}
                   >
                     <strong>Roomcost:</strong> {data2.roomcost}
                   </Typography>
                 </CardContent>
                 <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '8px' }}>
                   <IconButton
                     color="primary"
                     size="small"
                     onClick={() => HandleUpdateRoom(data2)}
                   >
                     Update
                   </IconButton>
                   <IconButton
                     color="error"
                     size="small"
                     onClick={() => HandleRoomDelete(data2.sno)}
                   >
                     <Delete />
                   </IconButton>
                 </Box>
               </Card>
             </Grid>
   
             {/* Second Card */}
             {index + 1 < presentData.length && (
               <Grid item xs={12} sm={6} md={4}>
                 <Card style={{ width: "100%", maxWidth: 300, margin: "auto" }}>
                   <CardMedia
                     component="img"
                     height="200"
                     image={`${presentData[index + 1].roomimageinbytes}`}
                     alt={`Room Image ${presentData[index + 1].roomno}`}
                     style={{ objectFit: "cover" }}
                   />
                   <CardContent>
                     <Typography
                       variant="body1"
                       sx={{
                         fontWeight: 'bold',
                         color: '#1a237e',
                         marginBottom: '8px',
                       }}
                     >
                       <strong>Roomno:</strong> {presentData[index + 1].roomno}
                     </Typography>
                     <Typography
                       variant="body2"
                       sx={{ fontSize: '16px', color: '#424242', marginBottom: '8px' }}
                     >
                       <strong>Roomtype:</strong> {presentData[index + 1].roomtype}
                     </Typography>
                     <Typography
                       variant="body2"
                       sx={{ fontSize: '16px', color: '#424242', marginBottom: '8px' }}
                     >
                       <strong>Roomcost:</strong> {presentData[index + 1].roomcost}
                     </Typography>
                   </CardContent>
                   <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '8px' }}>
                     <IconButton
                       color="primary"
                       size="small"
                       onClick={() => HandleUpdateRoom(presentData[index + 1])}
                     >
                       Update
                     </IconButton>
                     <IconButton
                       color="error"
                       size="small"
                       onClick={() => HandleRoomDelete(presentData[index + 1].sno)}
                     >
                       <Delete />
                     </IconButton>
                   </Box>
                 </Card>
               </Grid>
             )}
   
             {/* Third Card */}
             {index + 2 < presentData.length && (
               <Grid item xs={12} sm={6} md={4}>
                 <Card style={{ width: "100%", maxWidth: 300, margin: "auto" }}>
                   <CardMedia
                     component="img"
                     height="200"
                     image={`${presentData[index + 2].roomimageinbytes}`}
                     alt={`Room Image ${presentData[index + 2].roomno}`}
                     style={{ objectFit: "cover" }}
                   />
                   <CardContent>
                     <Typography
                       variant="body1"
                       sx={{
                         fontWeight: 'bold',
                         color: '#1a237e',
                         marginBottom: '8px',
                       }}
                     >
                       <strong>Roomno:</strong> {presentData[index + 2].roomno}
                     </Typography>
                     <Typography
                       variant="body2"
                       sx={{ fontSize: '16px', color: '#424242', marginBottom: '8px' }}
                     >
                       <strong>Roomtype:</strong> {presentData[index + 2].roomtype}
                     </Typography>
                     <Typography
                       variant="body2"
                       sx={{ fontSize: '16px', color: '#424242', marginBottom: '8px' }}
                     >
                       <strong>Roomcost:</strong> {presentData[index + 2].roomcost}
                     </Typography>
                   </CardContent>
                   <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '8px' }}>
                     <IconButton
                       color="primary"
                       size="small"
                       onClick={() => HandleUpdateRoom(presentData[index + 2])}
                     >
                       Update
                     </IconButton>
                     <IconButton
                       color="error"
                       size="small"
                       onClick={() => HandleRoomDelete(presentData[index + 2].sno)}
                     >
                       <Delete />
                     </IconButton>
                   </Box>
                 </Card>
               </Grid>
             )}
           </React.Fragment>
         );
       }
       return null;
     })}
   </Grid>   
      )}
 {/* {No rooms added to Hotel} */}
{DisplayValue===2 &&  (
  <div className="signup-container">
  <div className="form-wrapper"  style={{paddingBottom:"150px"}}>
    <div className="form-container">
      <div className="right-section">
        <h2>Update Room</h2>
        <form method="post">
          <input
            type="number"
            placeholder="Room number"
            name="roomno"
            step="1"
            value={Room.roomno}
            readOnly
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Room type"
            name="roomtype"
            value={Room.roomtype}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            placeholder="Room cost per hour"
            name="roomcost"
            value={Room.roomcost}
            step="1"
            onChange={handleChange}
            required
          />
          <label>
            Room image
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              placeholder="Insert your hotel image"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => {
                    if (file.size > 1000000) {
                      setimagelimit(1);
                    }
                    setRoom({
                      ...Room,
                      roomimageinbytes: reader.result,
                    });
                  };
                  reader.readAsDataURL(file);
                }
              }}
              required
            />
          </label>
          
          <label>Room image preview</label>
          <img src={Room.roomimageinbytes} alt="Room preview" /> 
          <button onClick={handleSubmit}>Update</button>
          <button onClick={handleBack}>Back</button>
        </form>
      </div>
    </div>
  </div>
</div>
    
  )
}

{DisplayValue===3  && (
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
 {/* {Error Message} */}
{DisplayValue===4  && (
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
  )
}

        {/* {content area ends} */}  
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}
