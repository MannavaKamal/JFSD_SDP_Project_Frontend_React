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
import {useEffect, useState} from "react";
import axios from "axios";
//import {TextField,Button,Card, CardContent, Typography} from '@mui/material' ;
//import IconButton from '@mui/joy/IconButton';
//import Delete from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {  Card, CardContent, CardMedia} from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import Container from '@mui/material/Container';

import LogoutIcon from '@mui/icons-material/Logout';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AttractionsIcon from '@mui/icons-material/Attractions';
import GroupIcon from '@mui/icons-material/Group';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import config from '../config';


function Spots() {
  const [showDrawer, setShowDrawer] = React.useState(true); // Toggle drawer visibility
  const [anchorEl, setAnchorEl] = React.useState(null); // For profile menu
  const [activeButton, setActiveButton] = React.useState(2); // Track active button index
  const navigate = useNavigate();
  
  const[presentData,pastData] = useState([]);
  const[isSpotsVisible,setIsSpotsVisible] = useState(false)
  const [isSessionExpired,setIsSessionExpired] = useState(false) 
  const [isData,setIsData] = useState(false)

  const [Displayvalue,setDisplayvalue] = useState(1)
  const [Message,setMessage] = useState("")

  



  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

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
        height: '100vh',
        position: { xs: 'static', sm: 'fixed' },
        top: 64, // Adjusted for AppBar height
        left: 0,
        borderRadius: { sm: '0 20px 20px 0' },
        paddingTop: 3,
        color: '#000',
        boxShadow: { sm: '0 10px 20px rgba(0, 0, 0, 0.2)' },
        overflowY: 'auto',
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

// for spots 

useEffect(()   => {
  fetchData();
  
}, []);
// const interveltime = setInterval(fetchData, 10000)
    // return () => clearInterval(interveltime);
    const fetchData = async () => {
      try {
       setDisplayvalue(2)
        const response1 = await axios.get(`${config.url}/getLocations`); 
        let l1 = response1.data 
        if(l1 === "" ){
          navigate('/login')
          
        } else if (l1.length === 0){
          setMessage("no spots available")
          setDisplayvalue(3)          
        }
        else{
          pastData(l1);
          setDisplayvalue(1)
        }    
        
      } catch (error) {
        setMessage(error.message)
        setDisplayvalue(3)          
      }
    };
    const HandleSpotDelete = async(id) =>
      {
        try {
        setDisplayvalue(3)
         const response = await axios.post(`${config.url}/deletespot`,{id:id})
         if(response.data === ""){
          fetchData();
         }
         else if(response.data === 0){
          alert("Room not exists")
          window.location.reload()
          return
         }
         else if(response.data === 1){
          alert("room deleted successfully")
         }
         fetchData();
        } catch (error) {
          setMessage(error.message)
          setDisplayvalue(3)
        }
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
        //display: 'flex',              // Flexbox for centering content
        //alignItems: 'center',         // Vertical centering
        //justifyContent: 'center',     // Horizontal centering
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
      <Grid
        item
        xs={12}
        sm={showDrawer ? 9 : 12} // Full width if drawer is hidden
        sx={{
          marginLeft: showDrawer ? { sm: '300px' } : 0, // Remove margin if drawer is hidden
          padding: 2,
          
        }}
      >
         {/* Content Area */}
         {Displayvalue===1 && (
      <Grid container spacing={3} justifyContent="center">
      {presentData.map((data2, index) => {
        if (index % 3 === 0 || index === 0) {
          return (
            <React.Fragment key={index}>
            {/* First Card */}
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card
                sx={{
                  width: '100%',
                  maxWidth: 350,
                  height: '100%',
                  margin: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: 250,
                  }}
                  image={data2.spotimageinbytes}
                  alt={data2.spotname}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body2">Spotname: {data2.spotname}</Typography>
                  <Typography variant="body2">
                    Address: {data2.country}, {data2.state}, {data2.city}
                  </Typography>
                </CardContent>
                <IconButton
                  color="error"
                  size="small"
                  onClick={() => HandleSpotDelete(data2.id)}
                >
                  <Delete />
                </IconButton>
              </Card>
            </Grid>
            {/* Second Card */}
            {index + 1 < presentData.length && (
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <Card
                  sx={{
                    width: '100%',
                    maxWidth: 350,
                    height: '100%',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height: 250,
                    }}
                    image={presentData[index + 1].spotimageinbytes}
                    alt={presentData[index + 1].spotname}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2">Spotname: {presentData[index + 1].spotname}</Typography>
                    <Typography variant="body2">
                      Address: {presentData[index + 1].country}, {presentData[index + 1].state}, {presentData[index + 1].city}
                    </Typography>
                  </CardContent>
                  <IconButton
                    color="error"
                    size="small"
                    onClick={() => HandleSpotDelete(presentData[index + 1].id)}
                  >
                    <Delete />
                  </IconButton>
                </Card>
              </Grid>
            )}
            {/* Third Card */}
            {index + 2 < presentData.length && (
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <Card
                  sx={{
                    width: '100%',
                    maxWidth: 350,
                    height: '100%',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height: 250,
                    }}
                    image={presentData[index + 2].spotimageinbytes}
                    alt={presentData[index + 2].spotname}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2">Spotname: {presentData[index + 2].spotname}</Typography>
                    <Typography variant="body2">
                      Address: {presentData[index + 2].country}, {presentData[index + 2].state}, {presentData[index + 2].city}
                    </Typography>
                  </CardContent>
                  <IconButton
                    color="error"
                    size="small"
                    onClick={() => HandleSpotDelete(presentData[index + 2].id)}
                  >
                    <Delete />
                  </IconButton>
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
export default Spots;
