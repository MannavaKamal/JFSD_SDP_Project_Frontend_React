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
import { useNavigate } from 'react-router-dom';
import config from '../config';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {TextField,Button,Card, CardContent,touchRippleClasses,CardMedia} from '@mui/material' ;
import Drawer from '@mui/material/Drawer';
import Container from '@mui/material/Container';
import ReactLoading from 'react-loading';


import LogoutIcon from '@mui/icons-material/Logout';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AttractionsIcon from '@mui/icons-material/Attractions';
import GroupIcon from '@mui/icons-material/Group';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';



function UserDetails() {
  const [showDrawer, setShowDrawer] = React.useState(true); // Toggle drawer visibility
  const [activeButton, setActiveButton] = React.useState(5); // Track active button index
  const navigate = useNavigate();
  
  
// for session

    const [data,setData] = useState([])
    const[DisplayValue,setDisplayValue] = useState(0);
    const[Message,setMessage] = useState("")
    
    const [open, setOpen] = React.useState(false);
    const [BoxValue,setBoxValue] = useState(-1)
    const [User,setUser] = useState({})
  

    const toggleDrawer =() =>  {
      setOpen(!open);
      setBoxValue(-1)
      setUser({})
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
    setDisplayValue(4)    
    try{
      await axios.get(`${config.url}/adminlogout`)
      navigate('/login')
    }
    catch(error){
      setMessage(error.message);
      setDisplayValue(5)
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

  const fetchData =  async () => {
    try{
     setDisplayValue(4)
      const response = await axios.get(`${config.url}/getallusers`)
if(response.data === ""){
  navigate('/login')
}else if(response.data.length  === 0) {
  setMessage("No Tourists in your portel");
  setDisplayValue(5)
}else{
  setData(response.data)
  setDisplayValue(3)
} 
    }catch(error){
      setMessage(error.message)
      setDisplayValue(5)      
    }
}

useEffect(()=>{
  fetchData()
  }, []);
  
  const viewUserdetails = async(user) =>{
    try{
    setOpen(true)
    setBoxValue(0)
   setUser(user)
   setBoxValue(1)
  }catch(error){
    setMessage(error.message)
    setDisplayValue(5)      
  }
  }
  
  const DeleteAccount = async(user) =>{
    try{
        setDisplayValue(4)
        const response1 = await axios.post(`${config.url}/deleteuserbyid`,user);
        if(response1.data === ""){
          navigate('/login')
          return
        }
        else if (response1.data === 1){
          alert("User Account deleted")
          setDisplayValue(3)
          window.location.reload()
          return
        }
        else if(response1.data === 0){
            alert("User Account not exists")
          setDisplayValue(3)
          window.location.reload()
          return
        }
        alert("server side error")
        window.location.reload()
    }catch(error){
      setMessage(error.message)
      setDisplayValue(5)      
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
 <TableCell align="left" sx={{fontWeight: 'bold',backgroundColor: '#673ab7',color: '#fff',fontSize: { xs: '12px', sm: '14px', md: '16px' },padding: { xs: '8px', sm: '10px' },borderBottom: '2px solid #fff',}}>Tourist id</TableCell>
 <TableCell align="left" sx={{fontWeight: 'bold',backgroundColor: '#673ab7',color: '#fff',fontSize: { xs: '12px', sm: '14px', md: '16px' },padding: { xs: '8px', sm: '10px' },borderBottom: '2px solid #fff',}}>Tourist email</TableCell>          
 <TableCell align="left" sx={{fontWeight: 'bold',backgroundColor: '#673ab7',color: '#fff',fontSize: { xs: '12px', sm: '14px', md: '16px' },padding: { xs: '8px', sm: '10px' },borderBottom: '2px solid #fff',}}>Tourist details</TableCell>          
 <TableCell align="left" sx={{fontWeight: 'bold',backgroundColor: '#673ab7',color: '#fff',fontSize: { xs: '12px', sm: '14px', md: '16px' },padding: { xs: '8px', sm: '10px' },borderBottom: '2px solid #fff',}}>Delete Account</TableCell>
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
              <TableCell sx={{ padding: { xs: '8px', sm: '10px' }, fontSize: { xs: '12px', sm: '14px' } }}>{data.id}</TableCell>
              <TableCell sx={{ padding: { xs: '8px', sm: '10px' }, fontSize: { xs: '12px', sm: '14px' } }}>{data.email}</TableCell>
              <TableCell sx={{ padding: { xs: '8px', sm: '10px' } }}><Button onClick={() => {viewUserdetails(data)}} variant="contained" color="secondary" sx={{fontSize: { xs: '10px', sm: '12px' },padding: { xs: '5px', sm: '8px' },textTransform: 'none',}}>View</Button></TableCell>
              <TableCell sx={{ padding: { xs: '8px', sm: '10px' } }}><Button onClick={() => {DeleteAccount(data)}} variant="contained" color="secondary" sx={{fontSize: { xs: '10px', sm: '12px' },padding: { xs: '5px', sm: '8px' },textTransform: 'none',}}>Delete</Button></TableCell>
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
      top: '50%',
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
      height: 'auto', // Automatically adjusts height based on content
      maxWidth: '600px', // Maximum width
      bgcolor: 'background.paper',
      boxShadow: 3,
      borderRadius: 2,
      p: 3, // Adds padding for better spacing
      overflow: 'auto', // Allows scrolling if the content overflows
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
{BoxValue===1 && (
  <>
 <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        <Card
          sx={{
            maxWidth: 700,
           
            width: '100%',
            boxShadow: 6,
            borderRadius: 3,
            background: 'linear-gradient(to right, #e3f2fd, #ffffff)',
          }}
        >
          {/* User Image */}
          <CardMedia
            component="img"
            alt="User Profile"
            height="300"
            image={User.userimageinbytes} // Fallback image
            sx={{ objectFit: 'cover' }}
          />
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 2 }}
            >
              {User.name}
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1" color="text.secondary">
                  <strong>Email:</strong> {User.email}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" color="text.secondary">
                  <strong>Sex:</strong> {User.sex}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" color="text.secondary">
                  <strong>Contact:</strong> {User.contact}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
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

{DisplayValue===4 && (
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
  {DisplayValue===5 && (
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

  
      {/* Content Area ends */}
      </Grid>
    </Grid>
  </Box>
  </div>
  );
}
export default UserDetails;
