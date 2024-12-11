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
import {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from '@mui/material' ;
import ReactLoading from 'react-loading';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import {  Card, CardMedia, CardContent } from '@mui/material';

import HotelIcon from '@mui/icons-material/Hotel';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import config from '../config';

export default function HotelAdminActiveRooms() {
  const [showDrawer, setShowDrawer] = React.useState(true); // Toggle drawer visibility
  const [activeButton, setActiveButton] = React.useState(4); // Track active button index
  const navigate = useNavigate();
  
  
    const [data,setData] = useState([])   
    const[DisplayValue,setDisplayValue] = useState(0);
    const [Message,setMessage] = useState("")
    const [open, setOpen] = React.useState(false);
    const [BoxValue,setBoxValue] = useState(-1)
    const [User,setUser] = useState({});
    const [HotelAdmin,setHotelAdmin] = useState({})
    const [Room,setRoom] = useState({})

    const toggleDrawer =() =>  {
      setOpen(!open);
      setBoxValue(-1)
     setUser({})
     setRoom({})
    };
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

  const fetchData =  async () => {
    try{
      setDisplayValue(2)
      const response = await axios.get(`${config.url}/roombookingsbasedonhoteladminid`)
      const response1 = await axios.get(`${config.url}/checkhoteladminsession1`);
if(response.data === ""){
  navigate('/login')
}else if(response.data.length  === 0) {
  setHotelAdmin(response1.data)
  setMessage("Active Bookings not found");
  setDisplayValue(1)       
}else{     
  setHotelAdmin(response1.data)
  setData(response.data)
  setDisplayValue(3)
} 
    }catch(error){
      setMessage(error.message)
      setDisplayValue(1)
      
    }
}

useEffect(()=>{
  fetchData()
  }, []);

  const userdatails = async(userid) =>{
    try{
     setOpen(true)
    setBoxValue(0)
     const response1 = await axios.post(`${config.url}/senduserbyid`,{
        id:userid
     });
     if(response1.data === ""){
      navigate('/login')
     }
     else{
     setUser(response1.data)
     setBoxValue(1)
     }
  }catch(error){
    setMessage(error.message)
    setDisplayValue(1)     
  }
  }


  const Roomdetails = async(roomid) =>{
    try{
      setOpen(true)
      setBoxValue(0)
        const response1 = await axios.post(`${config.url}/sendroombyid`,{
            sno:roomid
         });
         if(response1.data === ""){
          navigate('/login')
          return
         }
         else{
         setRoom(response1.data)
         setBoxValue(2)
         }
    }catch(error){
      setMessage(error.message)
      setDisplayValue(1)         
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
       // display: 'flex',              // Flexbox for centering content
       //alignItems: 'center',         // Vertical centering
       // justifyContent: 'center',     // Horizontal centering
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
      {/* Content Area */}

      {DisplayValue===3 && (
        <>
         <div
         style={{
           minHeight: '100vh', // Ensures full viewport height          
             alignItems: 'center',        
             justifyContent: 'center',    
            // textAlign: 'center', 
            paddingLeft:'2%',
            paddingRight:'2%',
             paddingTop:'2%'
         }}
         >
 <TableContainer component={Paper}
 sx={{
   boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
   borderRadius: '15px',
   overflow: 'hidden',
   width: '100%',
   margin: 'auto',
   '@media (max-width: 1200px)': {
     maxWidth: '95%',
   },
   '@media (max-width: 900px)': {
     maxWidth: '90%',
   },
   '@media (max-width: 600px)': {
     maxWidth: '100%',
   },
 }}
 >
 <Box sx={{ overflowX: 'auto' }}>
       <Table sx={{
         minWidth: '650px', // Ensures table maintains minimum width for larger screens
         width: '100%',
         background: 'linear-gradient(135deg, #e0f7fa 0%, #e1bee7 100%)',
         '@media (max-width: 600px)': {
           minWidth: '500px', // Adjust table width for smaller screens
         },
       }}
       aria-label="responsive table">
         <TableHead>
           <TableRow>            
  <TableCell align="left" sx={{fontWeight: 'bold',backgroundColor: '#673ab7',color: '#fff',fontSize: { xs: '12px', sm: '14px', md: '16px' },padding: { xs: '8px', sm: '10px' },borderBottom: '2px solid #fff',}}>Booking id</TableCell>
  <TableCell align="left" sx={{fontWeight: 'bold',backgroundColor: '#673ab7',color: '#fff',fontSize: { xs: '12px', sm: '14px', md: '16px' },padding: { xs: '8px', sm: '10px' },borderBottom: '2px solid #fff',}}>Booking Date</TableCell>
  <TableCell align="left" sx={{fontWeight: 'bold',backgroundColor: '#673ab7',color: '#fff',fontSize: { xs: '12px', sm: '14px', md: '16px' },padding: { xs: '8px', sm: '10px' },borderBottom: '2px solid #fff',}}>Checkin time</TableCell>
  <TableCell align="left" sx={{fontWeight: 'bold',backgroundColor: '#673ab7',color: '#fff',fontSize: { xs: '12px', sm: '14px', md: '16px' },padding: { xs: '8px', sm: '10px' },borderBottom: '2px solid #fff',}}>Checkout time</TableCell>          
  <TableCell align="left" sx={{fontWeight: 'bold',backgroundColor: '#673ab7',color: '#fff',fontSize: { xs: '12px', sm: '14px', md: '16px' },padding: { xs: '8px', sm: '10px' },borderBottom: '2px solid #fff',}}>User details</TableCell>
  <TableCell align="left" sx={{fontWeight: 'bold',backgroundColor: '#673ab7',color: '#fff',fontSize: { xs: '12px', sm: '14px', md: '16px' },padding: { xs: '8px', sm: '10px' },borderBottom: '2px solid #fff',}}>Room details</TableCell>
           </TableRow>
         </TableHead> 
         <TableBody>
           {data.map((data,index) => (
             <TableRow
             key={index}
             sx={{
               '&:hover': {
                 backgroundColor: '#f3e5f5',
               },
               transition: 'background-color 0.3s ease',
             }}
             >
               <TableCell sx={{ padding: { xs: '8px', sm: '10px' }, fontSize: { xs: '12px', sm: '14px' } }}>{data.orderid}</TableCell>
               <TableCell sx={{ padding: { xs: '8px', sm: '10px' }, fontSize: { xs: '12px', sm: '14px' } }}>{data.date}</TableCell>
               <TableCell sx={{ padding: { xs: '8px', sm: '10px' }, fontSize: { xs: '12px', sm: '14px' } }}>{data.checkintime}</TableCell>
               <TableCell sx={{ padding: { xs: '8px', sm: '10px' }, fontSize: { xs: '12px', sm: '14px' } }}>{data.checkouttime}</TableCell>
               <TableCell sx={{ padding: { xs: '8px', sm: '10px' } }}><Button onClick={() => {userdatails(data.userid)}} variant="contained" color="secondary" sx={{fontSize: { xs: '10px', sm: '12px' },padding: { xs: '5px', sm: '8px' },textTransform: 'none',}}>View</Button></TableCell>
               <TableCell sx={{ padding: { xs: '8px', sm: '10px' } }}><Button onClick={() => {Roomdetails(data.roomid)}} variant="contained" color="secondary" sx={{fontSize: { xs: '10px', sm: '12px' },padding: { xs: '5px', sm: '8px' },textTransform: 'none',}}>View</Button></TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
       </Box>
     </TableContainer>
     </div>
     <Drawer
    open={open}
    onClose={toggleDrawer}>
   {open && (
    <Box
    sx={{
      position: 'fixed',
      top: '55%', // Adjust this value to move it further down
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: {
        xs: '90%', // 90% width for extra small screens
        sm: '80%', // 80% width for small screens
        md: '60%', // 60% width for medium screens
        lg: '50%', // 50% width for large screens
      },
      height: 'auto',
      maxWidth: '600px',
      bgcolor: 'lightblue',
      boxShadow: 3,
      borderRadius: 2,
      p: 3,
      overflow: 'auto',
    }}
  >
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
         <>
         {BoxValue===0 &&  <ReactLoading type="spin" color="blue" height={'30%'} width={'30%'} />}
         {/* TO Display Locations */}
         {BoxValue===1 && (
           <>
         <Card
  sx={{
    maxWidth: 1000,
    width: '100%',
    borderRadius: '20px',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.3)',
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  }}
>
  <CardMedia
    component="img"
    height="200" // Reduced height
    image={User.userimageinbytes}
    alt="Hotel"
    sx={{ objectFit: 'cover' }}
  />
  <CardContent
    sx={{
      padding: '16px', // Reduced padding
    }}
  >
    <Box
      sx={{
        width: '80%',
        height: '1px',
        backgroundColor: '#b0bec5',
        margin: '16px auto', // Reduced margin
      }}
    ></Box>
    <Typography
      variant="subtitle1"
      sx={{ fontSize: '16px', textAlign: 'center', marginBottom: '6px' }}
    >
      <strong>Name:</strong> {User.name}
    </Typography>
    <Typography
      variant="subtitle1"
      sx={{ fontSize: '16px', textAlign: 'center', marginBottom: '6px' }}
    >
      <strong>Email:</strong> {User.email}
    </Typography>
    <Typography
      variant="subtitle1"
      sx={{ fontSize: '16px', textAlign: 'center', marginBottom: '6px' }}
    >
      <strong>Gender:</strong> {User.sex}
    </Typography>
    <Typography
      variant="subtitle1"
      sx={{ fontSize: '16px', textAlign: 'center', marginBottom: '12px' }}
    >
      <strong>Contact:</strong> {User.contact}
    </Typography>
  </CardContent>
</Card>

</>)}

 
{BoxValue===2 && (
  <>
  <Card style={{ width: "100%", maxWidth: 300, margin: "auto" }}>
                     <CardMedia
                       component="img"
                       height="140"
                       image={Room.roomimageinbytes}
                       alt="room image"
                     />
                     <CardContent>
                       <Typography variant="body2"><strong>Room no : </strong>{Room.roomno}</Typography>
                       <Typography variant="body2"><strong>Room type : </strong>{Room.roomtype}</Typography>
                       <Typography variant="body2"><strong>Room cost per hour : </strong>{Room.roomcost}</Typography>
                     </CardContent>
                   </Card>
</>
)}      
    </>       
      </Box>
    </Container>
  </Box>
  )}
  </Drawer>
     </>
      )}

    {DisplayValue === 1  && (
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
  {DisplayValue === 2  && (
       
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
      {/* Content Area ends */}
      </Grid>
    </Grid>
  </Box>
  </div>
  );
}

