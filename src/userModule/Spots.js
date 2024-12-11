import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import config from '../config';



import {TextField,Button,Card, CardContent,CardMedia} from '@mui/material' ;
//import IconButton from '@mui/joy/IconButton';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import Container from '@mui/material/Container';
import ReactLoading from 'react-loading';
import Avatar from '@mui/material/Avatar';

import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HotelIcon from '@mui/icons-material/Hotel';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LogoutIcon from '@mui/icons-material/Logout';


export default function Spots() {
  const [showDrawer, setShowDrawer] = React.useState(true); // Toggle drawer visibility
  const [anchorEl, setAnchorEl] = React.useState(null); // For profile menu
  const [activeButton, setActiveButton] = React.useState(2); // Track active button index
  const navigate = useNavigate();
  const [AllLocations,setAllLocations] = useState([]);
  const [LocationCart,setLocationCart] = useState([]);
  const [User,setUser] = useState({});
const [DisplayValue,setDisplayValue] = useState(0)
const [Message,setMessage] = useState("")
const [BoxValue,setBoxValue] = useState(-1) 
const [displayselectedlocations,setdisplayselectedlocations] = useState({})
const [DateAndPersons,setDateAndPersons] = useState({
  date:"",persons:0
})
const [open, setOpen] = React.useState(false);
const today = new Date().toISOString().split("T")[0];

  

  
  const toggleDrawer =() => {
    setdisplayselectedlocations([])
    DateAndPersons.date=""
    DateAndPersons.persons=0
    setOpen(!open);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleButtonClick = async(index) => {
    if(index === 1){
      navigate('/tourist/profile')
  }
  if(index === 2){
    navigate('/tourist/spots')
  }
  if(index === 3){
    navigate('/tourist/myrequests')
  }
  if(index === 4){
    navigate('/tourist/roombooking')
  }
  if(index === 5){
    navigate('/tourist/activebookings')
  }
  if(index === 6){
    navigate('/tourist/paymentdetails')
  }
  if(index === 7){      
    try{
    await axios.get(`${config.url}/logout`)
    navigate('/login')
    }
    catch(error){
      setMessage(error.message)
      setDisplayValue(2)
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
              <ListItemText primary="My profile" />
            </ListItemButton>
          </ListItem>
          
          <ListItem key="viewspots" disablePadding>
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
              <TravelExploreIcon  sx={{
                  color: activeButton === 2 ? '#fff' : '#000', // Icon color
                }}  />
              </ListItemIcon>
              <ListItemText primary="SpotOn Travel" />
            </ListItemButton>
          </ListItem>

          <ListItem key="myrequests" disablePadding>
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
              <ListItemText primary="My Travelplans" />
            </ListItemButton>
          </ListItem>

          <ListItem key="Booking Rooms" disablePadding>
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
              <Box sx={{ position: 'relative', display: 'inline-block', width: 48, height: 48 }}>
      <TravelExploreIcon
        sx={{ position: 'absolute', top: 0, left: 0,color: activeButton === 4 ? '#fff' : '#000' }}
      /> 
      <HotelIcon
        sx={{ position: 'absolute', top: 10, left: 10,color: activeButton === 4 ? '#fff' : '#000' }} // Slightly offset the second icon
      />
    </Box>
              </ListItemIcon>
              <ListItemText primary="Rest & Roam" />
            </ListItemButton>
          </ListItem>

          <ListItem key="ActiveBookings" disablePadding>
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
      <EventAvailableIcon  sx={{ color: activeButton === 5 ? '#fff' : '#000' }} />
              </ListItemIcon>
              <ListItemText primary="Active bookings" />
            </ListItemButton>
          </ListItem>         

          <ListItem key="mypaymenthistory" disablePadding>
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
               <AttachMoneyIcon   sx={{ color: activeButton === 6 ? '#fff' : '#000' }} />
              </ListItemIcon>
              <ListItemText primary="My payment History" />
            </ListItemButton>
          </ListItem>

          <ListItem key="userlogout" disablePadding>
             <ListItemButton
              onClick={() => handleButtonClick(7)} // Set active button
              sx={{
                padding: '16px 20px',
                marginBottom: 3,
                borderRadius: '12px',
                backgroundColor: activeButton === 7 ? '#1976d2' : 'transparent', // Active button color
                '&:hover': {
                  backgroundColor: activeButton === 7 ? '#1565c0' : '#f0f0f0', // Hover effect
                },
                color: activeButton === 7 ? '#fff' : '#000', // Text and icon color
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
    fetchData()
    // const intervalId = setInterval(fetchData, 20000); // Fetch data every 5 seconds
    // // Cleanup interval on component unmount
    // return () => clearInterval(intervalId);
  }, []);
  const fetchData = async () => {
    try {
     setDisplayValue(3)
      const response1 = await axios.get(`${config.url}/getLocationsForUser`); 
      const response = await axios.get(`${config.url}/checkusersession1`);
      if(response.data === ""){
        navigate('/login')
      }
      else if (response1.data.length === 0){
        setUser(response.data)
        setMessage("places not available")
        setDisplayValue(2)
      }
      else{
        setUser(response.data)
      setAllLocations(response1.data);
      setDisplayValue(1)
      }
    } catch (error) {
      setMessage( error.message)
      setDisplayValue(2)
    }
  }
 
const handleselectremove = async(id,no) =>{ 
if(no===1){
  setLocationCart((prevCart) => [...prevCart, id]);
}
else{
  setLocationCart((prevCart) => prevCart.filter((item) => item !== id));
}

}

const Spots = async() =>{
  try{
  setOpen(true)
  setBoxValue(0)
  const filteredLocations = AllLocations.filter((loc) => LocationCart.includes(loc.id));
  setdisplayselectedlocations(filteredLocations)
 setBoxValue(2)
}catch(error){
  setMessage(error.message)
  setDisplayValue(1)     
}
}


  const aftersubmit = async() => {
   try{
    if(DateAndPersons.date === ""){
      alert("select the date")
      return
    }
    if(DateAndPersons.persons < 1 ){
      alert("enter no of persons included in travel plan")
      return
    }
    setOpen(true)
    setLocationCart([])
    setDisplayValue(3)
  const response =   await axios.post(`${config.url}/getrequest`,{
    startdate:DateAndPersons.date,
    noofpersons:Math.floor(DateAndPersons.persons),
    listoflocations:LocationCart.toString()
    })
    if(response.data === ""){
      navigate('/login')
    }
    else if(response.data === 1){
      alert("your request had sent to admin")
      window.location.reload();
    }
  }
  catch(error){
    setMessage( error.message)
    setDisplayValue(2)
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
          {User.name}
        </Typography>
        <Avatar
        alt="Remy Sharp"
        src={User.userimageinbytes}
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
{ DisplayValue === 1 && (
  <>
   <Box
      sx={{
        display: 'flex',
        flexDirection: 'row', // Align items horizontally
        alignItems: 'center', // Vertically center the items
        paddingLeft: {
          xs: '20px', // Small screens
          sm: showDrawer ? '0px' : '0px', // Medium screens
          md: showDrawer ? '0px' : '0px', // Larger screens
        },
        paddingTop: '40px', // Spacing at the top
        gap: '50px', // Space between button and typography
        position: 'relative', // Allows adjusting left positioning
        left: showDrawer ? '0px' : '0px', // Align with sidenav when open
        transition: 'left 0.3s ease', // Smooth transition for positioning
         paddingBottom:'50px'
      }}
    >
      {/* Back Button */}
      {LocationCart.length !== 0 && (
        <>
      <Button
        variant="contained"
        color="primary"
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
        sx={{
          width: {
            xs: '100px',
            sm: '120px',
            md: '140px',
          },
          height: {
            xs: '40px',
            sm: '45px',
            md: '50px',
          },
          backgroundColor: '#007bff',
          color: 'white',
          borderRadius: '8px',
          fontWeight: 'bold',
          textTransform: 'none',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
          fontSize: {
            xs: '14px',
            sm: '16px',
            md: '18px',
          },
          
        }}
        onClick={() => {toggleDrawer()
          setBoxValue(1)}
        }
      >
       Visit
      </Button>
      <Button
        variant="contained"
        color="primary"
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
        sx={{
          width: {
            xs: '100px',
            sm: '120px',
            md: '140px',
          },
          height: {
            xs: '40px',
            sm: '45px',
            md: '50px',
          },
          backgroundColor: '#007bff',
          color: 'white',
          borderRadius: '8px',
          fontWeight: 'bold',
          textTransform: 'none',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
          fontSize: {
            xs: '14px',
            sm: '16px',
            md: '18px',
          },
          
        }}
        onClick={()=>{
          Spots()
          setBoxValue(2)
        }}
      >
       View
      </Button>
      
      </>)}

      {/* Title Typography */}
      <Typography
        variant="h4"
        component="h1"
        sx={{
          margin: '0', // Remove default margin
          fontSize: {
            xs: '20px',
            sm: '24px',
            md: '28px',
            lg: '32px',
          },
          color: '#333',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
         
        }}
      >
       Select spots for your travel plan
      </Typography>
    </Box>    
     <Drawer
        open={open}
        onClose={toggleDrawer}
      >
       {/* Centered Box */}
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
            {BoxValue===1 &&
            <>
            <Typography component="h1" variant="h5" textAlign="center" mb={2}>
              Select date and time and enter the number of persons to visit
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Select Date"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ min: today }} 
                  onChange={(e)=>{DateAndPersons.date = e.target.value }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField label="no.of persons" type="number" step="1"  onChange={(e)=>{DateAndPersons.persons = e.target.value}} fullWidth />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>aftersubmit()}
            >
              Submit
            </Button>
            <Typography component="h1" variant="h5" textAlign="center" mb={2}>
              note:-  maximum only 3 spots allowed to visit in a day
            </Typography>
            </> }
            {BoxValue===2 && (
           <>
           <TableContainer
  component={Paper}
  sx={{
    width: 400, // Fixed width
    height: 400, // Fixed height to make it square
    overflowY: "auto", // Scroll vertically if data exceeds height
    overflowX: "hidden", // Prevent horizontal overflow
    boxShadow: 5,
    borderRadius: 3, // Rounded corners
    background: "linear-gradient(to right, #f8f9fa, #e0eafc)", // Subtle gradient
    padding: 2,
  }}
>
  <Table
    sx={{
      minWidth: "100%",
      tableLayout: "fixed", // Ensure cells take up fixed width
      borderCollapse: "separate",
      borderSpacing: "0 8px", // Add spacing between rows
    }}
    aria-label="enhanced table"
  >
    <TableHead>
      <TableRow sx={{ backgroundColor: "#0069c0", color: "#fff" }}>
        <TableCell
          align="left"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.1rem",
            padding: "10px 16px",
            borderBottom: "none",
          }}
        >
          Name
        </TableCell>
        <TableCell
          align="left"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.1rem",
            padding: "10px 16px",
            borderBottom: "none",
          }}
        >
          Address
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {displayselectedlocations.map((data, index) => (
        <TableRow
          key={index}
          sx={{
            backgroundColor: "#fff",
            "&:hover": { backgroundColor: "#e3f2fd" }, // Hover effect
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)", // Shadow effect
            transition: "all 0.3s ease-in-out",
          }}
        >
          <TableCell
            component="th"
            scope="row"
            align="left"
            sx={{
              fontSize: "1rem",
              padding: "12px 16px",
              color: "#333",
            }}
          >
            {data.spotname}
          </TableCell>
          <TableCell
            align="left"
            sx={{
              fontSize: "1rem",
              padding: "12px 16px",
              color: "#555",
            }}
          >
            {`${data.country}, ${data.state}, ${data.city}`}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
</>)}
          </Box>
        </Container>
      </Box>      
      )}
      </Drawer>
    <Grid container spacing={3} justifyContent="center">
    {AllLocations.map((data2, index) => {
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
                { !LocationCart.includes(data2.id) && (
                   <IconButton
                     color="error"
                     size="small"
                     onClick={() => handleselectremove(data2.id,1)}
                   >
                    select
                   </IconButton>
                    )}
                     { LocationCart.includes(data2.id) && (
                   <IconButton
                     color="error"
                     size="small"
                     onClick={() => handleselectremove(data2.id,2)}
                   >
                    remove                  
                   </IconButton>
                    )}                                 
              </Card>
            </Grid>
            {/* Second Card */}
            {index + 1 < AllLocations.length && (
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
                    image={AllLocations[index + 1].spotimageinbytes}
                    alt={AllLocations[index + 1].spotname}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2">Spotname: {AllLocations[index + 1].spotname}</Typography>
                    <Typography variant="body2">
                      Address: {AllLocations[index + 1].country}, {AllLocations[index + 1].state}, {AllLocations[index + 1].city}
                    </Typography>
                  </CardContent>
                  {!LocationCart.includes(AllLocations[index + 1].id) && (
                     <IconButton
                       color="error"
                       size="small"
                       onClick={() =>
                        handleselectremove(AllLocations[index + 1].id,1)
                       }
                     >
                      select
                     </IconButton>
                      )}
                       {LocationCart.includes(AllLocations[index + 1].id) && (
                     <IconButton
                       color="error"
                       size="small"
                       onClick={() =>
                        handleselectremove(AllLocations[index + 1].id,2)
                       }
                     >
                      remove
                     </IconButton>
                      )}
                </Card>
              </Grid>
            )}
            {/* Third Card */}
            {index + 2 < AllLocations.length && (
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
                    image={AllLocations[index + 2].spotimageinbytes}
                    alt={AllLocations[index + 2].spotname}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2">Spotname: {AllLocations[index + 2].spotname}</Typography>
                    <Typography variant="body2">
                      Address: {AllLocations[index + 2].country}, {AllLocations[index + 2].state}, {AllLocations[index + 2].city}
                    </Typography>
                  </CardContent>
                  {!LocationCart.includes(AllLocations[index + 2].id) && (
                     <IconButton
                       color="error"
                       size="small"
                       onClick={() =>
                        handleselectremove(AllLocations[index + 2].id,1)
                       }
                     >
                      select
                     </IconButton>
                      )}
                       {LocationCart.includes(AllLocations[index + 2].id) && (
                     <IconButton
                       color="error"
                       size="small"
                       onClick={() =>
                        handleselectremove(AllLocations[index + 2].id,2)
                       }
                     >
                      remove
                     </IconButton>
                      )}
                </Card>
              </Grid>
            )}
          </React.Fragment>
           );
         }
         return null;
       })}
     </Grid>
     </>
     )}
      {DisplayValue === 2  && (
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
{DisplayValue === 3  && (
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

