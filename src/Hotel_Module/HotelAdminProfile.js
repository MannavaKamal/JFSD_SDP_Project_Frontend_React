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

//for insert spot 

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState , useEffect} from 'react';
import {  Card, CardMedia, CardContent,Button } from '@mui/material';
import Container from '@mui/material/Container';
import ReactLoading from 'react-loading';
import Avatar from '@mui/material/Avatar';


import HotelIcon from '@mui/icons-material/Hotel';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import config from '../config';



export default function HotelAdminProfile() {
  const [showDrawer, setShowDrawer] = React.useState(true); // Toggle drawer visibility
  const [anchorEl, setAnchorEl] = React.useState(null); // For profile menu
  const [activeButton, setActiveButton] = React.useState(1); // Track active button index
  const navigate = useNavigate();

  const [HotelAdmin,setHotelAdmin] = useState({})
      const [DisplayValue,setDisplayValue] = useState(0)
      const [Message,setMessage]  = useState("")
  

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
                  color: activeButton === 4 ? '#fff' : '#000', // Icon color
                }}
              >             
      <EventAvailableIcon  sx={{ color: activeButton === 4 ? '#fff' : '#000' }} />
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
                  color: activeButton === 5 ? '#fff' : '#000', // Icon color
                }}
              >
              <LogoutIcon sx={{ transform: 'scaleX(-1)', color:   activeButton === 5 ? '#fff' : '#000'  }} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>         
      </List>
    </Box>
  );

  const fetchData =  async () => {
    try
    {
      setDisplayValue(2)
        const response = await axios.get(`${config.url}/checkhoteladminsession1`);
        if (response.status === 200) 
        {
          if(response.data === "")
          {
            navigate('/login')
          }
          else{
            setHotelAdmin(response.data);
            setDisplayValue(1)
          }
        }
    } 
    catch (error) 
    {
        setMessage(error.message);
        setDisplayValue(3)
    }

    }

    useEffect(()=>{
      fetchData()
      }, []);

      const navigatetohoteladminupdate = (id) =>{
        navigate(`/hotelmanager/update/${id}`)
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
        {/* {content area} */}
        {DisplayValue===1 && (
          <>    
       <Card
        sx={{
          maxWidth: 1000,
          width: '100%',
          borderRadius: '20px',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={HotelAdmin.hotelimageinbytes}
          alt="Hotel"
          sx={{ objectFit: 'cover' }}
        />
        <CardContent
          sx={{
            padding: '24px',
          }}
        >
          {/* Hotel Details */}
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#1a237e',
            }}
          >
            {HotelAdmin.hotelname}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: '16px', textAlign: 'center', marginBottom: '12px' }}
          >
            <strong>Hotel Address:</strong> {HotelAdmin.country + ', ' + HotelAdmin.state + ', ' + HotelAdmin.city}
          </Typography>

          {/* Divider */}
          <Box
            sx={{
              width: '80%',
              height: '1px',
              backgroundColor: '#b0bec5',
              margin: '20px auto',
            }}
          ></Box>

          {/* Manager Details */}
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#1565c0',
            }}
          >
            Hotel Manager Details
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: '16px', textAlign: 'center', marginBottom: '8px' }}
          >
            <strong>Name:</strong> {HotelAdmin.name}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: '16px', textAlign: 'center', marginBottom: '8px' }}
          >
            <strong>Email:</strong> {HotelAdmin.email}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: '16px', textAlign: 'center', marginBottom: '8px' }}
          >
            <strong>Gender:</strong> {HotelAdmin.sex}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: '16px', textAlign: 'center', marginBottom: '20px' }}
          >
            <strong>Contact:</strong> {HotelAdmin.contact}
          </Typography>

          {/* Update Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#ff6f00',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '12px',
                fontWeight: 'bold',
                textTransform: 'none',
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: '#e65100',
                },
              }}
              onClick={() => navigatetohoteladminupdate(HotelAdmin.id)}
            >
              Update
            </Button>
          </Box>
        </CardContent>
      </Card>
   
    </>
  )
}

{DisplayValue===2 && (
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
  )
}
{ DisplayValue===3 && (
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

        {/* {content area ends} */}  
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}
