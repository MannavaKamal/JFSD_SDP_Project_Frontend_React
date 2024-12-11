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


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button,Card, CardContent,CardMedia} from '@mui/material' ;
import ReactLoading from 'react-loading';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';

import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HotelIcon from '@mui/icons-material/Hotel';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LogoutIcon from '@mui/icons-material/Logout';


export default function Roombooking() {
  const [showDrawer, setShowDrawer] = React.useState(true); // Toggle drawer visibility
  const [anchorEl, setAnchorEl] = React.useState(null); // For profile menu
  const [activeButton, setActiveButton] = React.useState(4); // Track active button index
  const navigate = useNavigate();
  
  
    const [data,setData] = useState([])   
    const[DisplayValue,setDisplayValue] = useState(0);
    const [Requestid,setRequestid] = useState(-1)
    const [Message,setMessage] = useState("")
    const [AllLocations,setAllLocations] = useState([]);
    const [HotelObjects,setHotelObjects] = useState([]);
    const [HotelRooms,setHotelRooms] = useState([]);
    const [MinDate,setMinDate] = useState("")
    const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [Bookingdate,setBookingdate] = useState("")
    const [time,settime] = useState("")
    const [Hours,setHours] = useState(0)
    const [hotelobject,sethotelobject] = useState({})
    const [time2,settime2] = useState("")
    const [roomobject,setroomobject] = useState({})
    const [open, setOpen] = React.useState(false);
    const [User,setUser] = useState({});

  const toggleDrawer =() =>{
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
      setDisplayValue(1)
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

  const fetchData =  async () => {
    try{
      setDisplayValue(2)
      const response = await axios.get(`${config.url}/myrequests`)
      const response1 = await axios.get(`${config.url}/checkusersession1`);
if(response.data === ""){
  navigate('/login')
}else if(response.data.length  === 0) {
  setUser(response1.data)
  setMessage("no travel requests till date");
  setDisplayValue(1)       
}else{     
  setUser(response1.data)
    let filtereddata = response.data.filter((loc) => loc.adminstatus===1 && loc.paymentstatus===1)
    if(filtereddata.length  === 0) {
        setMessage("no active planes till date");
        setDisplayValue(1)
        return       
      }
  setData(filtereddata)
  setDisplayValue(3)
} 
    }catch(error){
      setMessage(error.message)
      setDisplayValue(1)
      
    }
}


// for payment
useEffect(()   => {
let scriptTag = document.createElement("script");
scriptTag.src = "https://checkout.razorpay.com/v1/checkout.js";
scriptTag.async = true;
document.body.appendChild(scriptTag)
return()=>{
document.body.removeChild(scriptTag)
}
}, []);

const handlePay1 = async (value) => {
if(value === 1){
  setDisplayValue(6)
  return 
}
setDisplayValue(2)
const response =  await axios.post(`${config.url}/pay1`,{
orderid:roomobject.roomcost*Hours*100,
hoteladminid:hotelobject.id,
roomid:roomobject.sno,
checkintime:time,
checkouttime:time2,
});
const response1 = response.data
if(response1 === ""){
alert("session expired")
navigate('/login')
return
}
var options = {
"key": "rzp_test_dPcBqV32stqs3P", // Enter the Key ID generated from the Dashboard
"amount":roomobject.roomcost*Hours*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
"currency": "INR",
"name": "Acme Corp", //your business name
"description": "Test Transaction",
"image": "https://example.com/your_logo",
"order_id": response1.checkintime, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
"handler": function (response){
  //  console.log(response.razorpay_payment_id);
  //  console.log(response.razorpay_order_id);
  //  console.log(response.razorpay_signature)   
   handlePaymentsuccess()
},
"prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
   "name": "", //your customer's name
   "email": "", 
   "contact": ""  //Provide the customer's phone number for better conversion rates 
},
"notes": {
   "address": "Razorpay Corporate Office"
},
"theme": {
   "color": "#3399cc"
}
};
var rzp1 = new window.Razorpay(options);
rzp1.on('payment.failed', function (response){
    //  console.log(response.error.code);
    //  console.log(response.error.description);
    //  console.log(response.error.source);
    //  console.log(response.error.step);
    //  console.log(response.error.reason);
    //  console.log(response.error.metadata.order_id);
    //  console.log(response.error.metadata.payment_id);
    //  console.log("in failure")
     handlePaymentfailure()
});
rzp1.open();

//    const response = await axios.get(`https://api.razorpay.com/v1/orders/${orderid}`, {
//     headers: {
//       Authorization: `Basic ${Buffer.from(`${'rzp_test_dPcBqV32stqs3P'}:${'dWUhjTk5EDiM0FoE1lmEce9l'}`).toString('base64')}`,
//     },
//   });
// console.log(response.data)

};

// after payent to checkc the payment is done or not
const handlePaymentsuccess = async () => { 
  setDisplayValue(2) 
const response = await axios.get(`${config.url}/paymentsuccessorfailure1`)
if(response.data === ""){
  alert("session expired you need to pay within 10 minutes")
  window.location.reload();
}
if(response.data === 1){
  alert("payment Success Room Booked for you");
  window.location.reload();
}
window.location.reload();
}
const handlePaymentfailure = async () => {
  setDisplayValue(2)
  const response = await axios.get(`${config.url}/paymentsuccessorfailure1`)
  if(response.data === ""){
    alert("session expired you need to pay within 10 minutes")
    window.location.reload();
  }
if(response.data === 0){
alert("paymentfailed room not booked for you")
window.location.reload();
}
window.location.reload()  
}


useEffect(()=>{
  fetchData()
  }, []);

  const HandleLocations = async(request) =>{
    setDisplayValue(2)
    const response1 = await axios.get(`${config.url}/getLocationsForUser`);   
    const selectedlocations = request.listoflocations.split(",").map(id => Number(id.trim())); 
   const filteredLocations = response1.data.filter((loc) => selectedlocations.includes(Number(loc.id)));
   setAllLocations(filteredLocations)  
   setRequestid(request.requestid)
   setMinDate(request.startdate)
     setDisplayValue(4)
  }
  const HandleHotels = async(locationobject) =>{
    setDisplayValue(2)
    const response1 = await axios.post(`${config.url}/GetAllHotels`,{
      country:locationobject.country,
      state:locationobject.state,
      city:locationobject.city
    });
    if(response1.data.length===0){
      alert("no hotels for selected location")
      setDisplayValue(4)
      return
    }
    setHotelObjects(response1.data)
    setDisplayValue(5)
  }
  
  const HandleRooms = async(hotelobject) =>{
    setBookingdate("") 
    settime("")
    setHours(0)
    sethotelobject(hotelobject)
    toggleDrawer()
  }

  const HandleRooms1 = async() => {
    try{
       if(Bookingdate === ""){
        alert("date should not empty")       
        return
       }
       if(time === ""){
        alert("time should not empty")        
        return
       }
       if(Hours === 0){
        alert("hours should be greater than one")        
        return
       }
       toggleDrawer() 
       const [year, month, day] = Bookingdate.split('-');
       const [hours, minutes] = time.split(":").map(Number)
       setDisplayValue(2)
       const response = await axios.post(`${config.url}/dateandtime`,{
             sno:year,
             userid:month,
             room_sno:day,
             roomno:hours,
             amount:minutes,
             amountPaid:Hours
           });
           const response1 = await axios.post(`${config.url}/getRooms`,{
            id:hotelobject.id
          });
          const response2 = await axios.post(`${config.url}/roomidbasedonhoteladminid`,{
            hoteladminid:hotelobject.id
          });
          if (response2.data === ""){
            navigate('/login')
            return
          }
           const t1 = response.data.orderid
           const t2 = response.data.status
           settime(t1)
           settime2(t2)   
    if(response1.data.length===0){
      alert("no rooms in this hotel choose another hotel")
      setDisplayValue(5)
      return
    }    
    const roomsdata=response1.data
    const reservedata = response2.data
    let roomsupdate=roomsdata
    if(reservedata.length !== 0){
    reservedata.map((rd,index) => {
     const start1 = rd.checkintime;
     const end1 = rd.checkouttime; 
     const start2 = t1 
     const end2 = t2
     const startTime1 = new Date(start1).getTime();
  const endTime1 = new Date(end1).getTime();
  const startTime2 = new Date(start2).getTime();
  const endTime2 = new Date(end2).getTime();
  if( startTime1 < endTime2 && startTime2 < endTime1){// true if time clash or false if time not clash
    let object = {roomavailable:false}
    roomsupdate = roomsdata.map(room =>
      room.sno === rd.roomid ? { ...room, ...object } : room
    );
  }
    })
  }
     setHotelRooms(roomsupdate)
     setDisplayValue(6)
  }catch(error){
    setMessage(error.message)
      setDisplayValue(1)
  }
  }
  
  const prebooking = async(roomobject) => {
    setroomobject(roomobject)
    toggleDrawer()  
  }
  
  const handleback = (value) => {
    if(value === 4){
      setDisplayValue(3)
      return
    }
    if(value === 5){
      setDisplayValue(4)
      return
    }
    if(value === 6){
      setDisplayValue(5)
      return
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
  width: '80%',
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
 <TableCell align="left" sx={{fontWeight: 'bold',backgroundColor: '#673ab7',color: '#fff',fontSize: { xs: '12px', sm: '14px', md: '16px' },padding: { xs: '8px', sm: '10px' },borderBottom: '2px solid #fff',}}>Plan id</TableCell>
 <TableCell align="left" sx={{fontWeight: 'bold',backgroundColor: '#673ab7',color: '#fff',fontSize: { xs: '12px', sm: '14px', md: '16px' },padding: { xs: '8px', sm: '10px' },borderBottom: '2px solid #fff',}}>People Count</TableCell>
 <TableCell align="left" sx={{fontWeight: 'bold',backgroundColor: '#673ab7',color: '#fff',fontSize: { xs: '12px', sm: '14px', md: '16px' },padding: { xs: '8px', sm: '10px' },borderBottom: '2px solid #fff',}}>Start date</TableCell>
 <TableCell align="left" sx={{fontWeight: 'bold',backgroundColor: '#673ab7',color: '#fff',fontSize: { xs: '12px', sm: '14px', md: '16px' },padding: { xs: '8px', sm: '10px' },borderBottom: '2px solid #fff',}}> Book room</TableCell>          
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
              <TableCell sx={{ padding: { xs: '8px', sm: '10px' }, fontSize: { xs: '12px', sm: '14px' } }}>{data.requestid}</TableCell>
              <TableCell sx={{ padding: { xs: '8px', sm: '10px' }, fontSize: { xs: '12px', sm: '14px' } }}>{data.noofpersons}</TableCell>
              <TableCell sx={{ padding: { xs: '8px', sm: '10px' }, fontSize: { xs: '12px', sm: '14px' } }}>{data.startdate}</TableCell>
              <TableCell sx={{ padding: { xs: '8px', sm: '10px' } }}><Button onClick={()=>HandleLocations(data)} variant="contained" color="secondary" sx={{fontSize: { xs: '10px', sm: '12px' },padding: { xs: '5px', sm: '8px' },textTransform: 'none',}}>Book</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Box>
    </TableContainer>
    </div></>
      )}

{DisplayValue === 4  && (
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
      }}
    >
      {/* Back Button */}
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
        onClick={()=>handleback(4)}
      >
        ⬅ Back
      </Button>

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
        Select a Location to Book Your Room
      </Typography>
    </Box>
    <Grid container spacing={3} justifyContent="center">
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          paddingTop: '40px', // Adjusted to ensure enough space below the button
          paddingLeft: { xs: '10px', sm: '20px', md: '30px' }, // Responsive padding
          marginLeft: { xs: '0px', sm: showDrawer ? '30px' : '50px' }, // Adapt margin dynamically
        }}
      >
        {AllLocations.map((data2, index) => {
          if (index % 3 === 0 || index === 0) {
            return (
              <React.Fragment key={index}>
                {/* First Card */}
                <Grid item xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      width: '100%',
                      maxWidth: { xs: '100%', sm: 350 }, // Adjust card width for smaller screens
                      margin: 'auto',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ height: 250 }}
                      image={data2.spotimageinbytes}
                      alt={data2.spotname}
                    />
                    <CardContent>
                      <Typography variant="body2"><strong>Spotname : </strong>{data2.spotname}</Typography>
                      <Typography variant="body2">
                        <strong>Address : </strong>{data2.country}, {data2.state}, {data2.city}
                      </Typography>
                    </CardContent>
                    <IconButton
                      color="error"
                      size="small"
                      onClick={() => HandleHotels(data2)}
                    >
                      select
                    </IconButton>
                  </Card>
                </Grid>

                {/* Second Card */}
                {index + 1 < AllLocations.length && (
                  <Grid item xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        width: '100%',
                        maxWidth: { xs: '100%', sm: 350 },
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ height: 250 }}
                        image={AllLocations[index + 1].spotimageinbytes}
                        alt={AllLocations[index + 1].spotname}
                      />
                      <CardContent>
                        <Typography variant="body2">
                        <strong>Spotname : </strong>{AllLocations[index + 1].spotname}
                        </Typography>
                        <Typography variant="body2">
                        <strong>Address : </strong>{AllLocations[index + 1].country}, {AllLocations[index + 1].state},{' '}
                          {AllLocations[index + 1].city}
                        </Typography>
                      </CardContent>
                      <IconButton
                        color="error"
                        size="small"
                        onClick={() => HandleHotels(AllLocations[index + 1])}
                      >
                        select
                      </IconButton>
                    </Card>
                  </Grid>
                )}

                {/* Third Card */}
                {index + 2 < AllLocations.length && (
                  <Grid item xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        width: '100%',
                        maxWidth: { xs: '100%', sm: 350 },
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ height: 250 }}
                        image={AllLocations[index + 2].spotimageinbytes}
                        alt={AllLocations[index + 2].spotname}
                      />
                      <CardContent>
                        <Typography variant="body2">
                        <strong>Spotname : </strong>{AllLocations[index + 2].spotname}
                        </Typography>
                        <Typography variant="body2">
                        <strong>Address : </strong>{AllLocations[index + 2].country}, {AllLocations[index + 2].state},{' '}
                          {AllLocations[index + 2].city}
                        </Typography>
                      </CardContent>
                      <IconButton
                        color="error"
                        size="small"
                        onClick={() => HandleHotels(AllLocations[index + 2])}
                      >
                        select
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
    </Grid>
     </>
  )
}

{DisplayValue === 5  && (
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
      }}
    >
      {/* Back Button */}
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
        onClick={()=>handleback(5)}
      >
        ⬅ Back
      </Button>

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
        Select a hotel to book your room
      </Typography>
    </Box>    
  <Grid container spacing={3} justifyContent="center">
    <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          paddingTop: '40px', // Adjusted to ensure enough space below the button
          paddingLeft: { xs: '10px', sm: '20px', md: '30px' }, // Responsive padding
          marginLeft: { xs: '0px', sm: showDrawer ? '30px' : '50px' }, // Adapt margin dynamically
        }}
      >
      {HotelObjects.map((data2, index) => {
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
                  image={data2.hotelimageinbytes}
                  alt={data2.hotelname}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body2"><strong>Hotelname: </strong>{data2.hotelname}</Typography>
                  <Typography variant="body2">
                  <strong>Address: </strong>{data2.country}, {data2.state}, {data2.city}
                  </Typography>
                </CardContent>
                <IconButton
                     color="error"
                     size="small"
                     onClick={() => HandleRooms(data2)}
                   >
                    select
                   </IconButton>                     
              </Card>
            </Grid>
            {/* Second Card */}
            {index + 1 < HotelObjects.length && (
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
                    image={HotelObjects[index + 1].hotelimageinbytes}
                    alt={HotelObjects[index + 1].hotelname}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2"> <strong>Hotelname: </strong>{HotelObjects[index + 1].hotelname}</Typography>
                    <Typography variant="body2">
                     <strong>Address: </strong>{HotelObjects[index + 1].country}, {HotelObjects[index + 1].state}, {HotelObjects[index + 1].city}
                    </Typography>
                  </CardContent>
                  <IconButton
                     color="error"
                     size="small"
                     onClick={() => HandleRooms(HotelObjects[index + 1])}
                   >
                    select
                   </IconButton> 
                </Card>
              </Grid>
            )}
            {/* Third Card */}
            {index + 2 < HotelObjects.length && (
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
                    image={HotelObjects[index + 2].hotelimageinbytes}
                    alt={HotelObjects[index + 2].hotelname}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2"><strong>Hotelname: </strong>{HotelObjects[index + 2].hotelname}</Typography>
                    <Typography variant="body2">
                    <strong>Address: </strong>{HotelObjects[index + 2].country}, {HotelObjects[index + 2].state}, {HotelObjects[index + 2].city}
                    </Typography>
                  </CardContent>
                  <IconButton
                     color="error"
                     size="small"
                   onClick={() => HandleRooms(HotelObjects[index + 2])}
                   >
                    select
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
       </Grid>
       
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
         backgroundImage: 'linear-gradient(135deg, #e0f7fa 0%, #80deea 100%)',
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
      <Typography
        component="h1"
        variant="h4"
        textAlign="center"
        mb={3}
        sx={{
          fontWeight: 'bold',
          color: '#004d40',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
        }}
      >
        Enter Details Below to Proceed
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <input
            type="date"
            placeholder="Select Date"
            min={MinDate}
            onChange={(e) => setBookingdate(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              backgroundColor: '#ffffff',
              fontSize: '1rem',
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <input
            type="time"
            placeholder="Check-in Time"
            onChange={(e) => settime(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              backgroundColor: '#ffffff',
              fontSize: '1rem',
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <select
            onChange={(e) => setHours(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              backgroundColor: '#ffffff',
              fontSize: '1rem',
            }}
          >
            <option value="" disabled selected>
              Select Hours
            </option>
            {hours.map((hour, index) => (
              <option key={index} value={hour}>
                {hour} hours
              </option>
            ))}
          </select>
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 4,
          p: 2,
          fontSize: '1.2rem',
          fontWeight: 'bold',
          backgroundColor: '#00796b',
          color: '#ffffff',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          '&:hover': {
            backgroundColor: '#004d40',
          },
        }}
        onClick={() => {
          HandleRooms1();
        }}
      >
        Submit
      </Button>
    </Box>
  </Container>
     </Box>      
     )}
     </Drawer>
     </>
  )}

{DisplayValue === 6  && (
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
      }}
    >
      {/* Back Button */}
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
        onClick={()=>handleback(6)}
      >
        ⬅ Back
      </Button>

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
        Select a hotel to book your room
      </Typography>
    </Box>    
  <Grid container spacing={3} justifyContent="center">
    <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          paddingTop: '40px', // Adjusted to ensure enough space below the button
          paddingLeft: { xs: '10px', sm: '20px', md: '30px' }, // Responsive padding
          marginLeft: { xs: '0px', sm: showDrawer ? '30px' : '50px' }, // Adapt margin dynamically
        }}
      >
  {HotelRooms.map((data2, index) => {
           if (index % 3 === 0 || index === 0) {
             return (
               <React.Fragment key={index}>
                 {/* First Card */}
                 <Grid item xs={12} sm={6} md={4}>
                   <Card style={{ width: "100%", maxWidth: 300, margin: "auto" }}>
                     <CardMedia
                       component="img"
                       height="140"
                       image={data2.roomimageinbytes}
                       alt="room image"
                     />
                     <CardContent>
                       <Typography variant="body2"><strong>Room no : </strong>{data2.roomno}</Typography>
                       <Typography variant="body2"><strong>Room type : </strong>{data2.roomtype}</Typography>
                       <Typography variant="body2"><strong>Room cost per hour : </strong>{data2.roomcost}</Typography>
                     </CardContent>
                     {
                  data2.roomavailable ? (
                    <IconButton
                    color="error"
                    size="small"
                    onClick={() => prebooking(data2)}
                  >
                   select
                  </IconButton> 
                     ) : (
                    <Typography variant="body2">room already booked</Typography>
                     )
                    }
                   </Card>
                 </Grid>   
                 {/* Second Card */}
                 {index + 1 <HotelRooms.length && (
                   <Grid item xs={12} sm={6} md={4}>
                     <Card style={{ width: "100%", maxWidth: 300, margin: "auto" }}>
                       <CardMedia
                         component="img"
                         height="140"
                         image={HotelRooms[index + 1].roomimageinbytes}
                         alt="room image"
                       />
                       <CardContent>
                         <Typography variant="body2">
                         <strong>Room no : </strong>  {HotelRooms[index + 1].roomno}
                         </Typography>
                         <Typography variant="body2">
                         <strong>Room type : </strong>{HotelRooms[index + 1].roomtype}
                         </Typography>
                         <Typography variant="body2">
                         <strong>Room cost per hour : </strong>{HotelRooms[index + 1].roomcost}
                         </Typography>                         
                       </CardContent>
                       {
                  HotelRooms[index + 1].roomavailable ? (
                    <IconButton
                    color="error"
                    size="small"
                    onClick={() => prebooking(HotelRooms[index + 1])}
                  >
                   select
                  </IconButton> 
                     ) : (
                    <Typography variant="body2">room already booked</Typography>
                     )
                    }                        
                     </Card>
                   </Grid>
                 )}
   
                 {/* Third Card */}
                 {index + 2 < HotelRooms.length && (
                   <Grid item xs={12} sm={6} md={4}>
                     <Card style={{ width: "100%", maxWidth: 300, margin: "auto" }}>
                       <CardMedia
                         component="img"
                         height="140"
                         image={HotelRooms[index + 2].roomimageinbytes}
                         alt="hotel image"
                       />
                       <CardContent>
                         <Typography variant="body2">
                         <strong>Room no : </strong> {HotelRooms[index + 2].roomno}
                         </Typography>
                         <Typography variant="body2">
                         <strong>Room type : </strong> {HotelRooms[index + 2].roomtype}
                         </Typography>
                         <Typography variant="body2">
                         <strong>Room cost per hour : </strong>{HotelRooms[index + 2].roomcost}
                         </Typography>                         
                       </CardContent>
                       {
                  HotelRooms[index + 2].roomavailable ? (
                    <IconButton
                    color="error"
                    size="small"
                    onClick={() => prebooking( HotelRooms[index + 2])}
                  >
                   select
                  </IconButton> 
                     ) : (
                    <Typography variant="body2">room already booked</Typography>
                     )
                    }
                     </Card>
                   </Grid>
                 )}
               </React.Fragment>
             );
           }
           return null;
         })}
         </Grid>
       </Grid>
       
       <Drawer
       open={open}
       onClose={toggleDrawer}
     >
      {/* Centered Box */}
      {open && (       
    <div
    style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      maxWidth: '500px',
      padding: '30px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      borderRadius: '12px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    }}
  >
    <h1 style={{ color: '#004d40', fontWeight: 'bold', marginBottom: '20px' }}>
      Are You Sure You Want to Book This Room?
    </h1>
    <h2 style={{ color: '#00796b', marginBottom: '15px' }}>
      Room Cost Per Hour: <span style={{ fontWeight: 'bold' }}>{roomobject.roomcost} ₹</span>
    </h2>
    <h2 style={{ color: '#d32f2f', marginBottom: '30px' }}>
      Total Cost: <span style={{ fontWeight: 'bold' }}>{roomobject.roomcost * Hours} ₹</span>
    </h2>
  
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <button
        onClick={() => handlePay1(1)}
        style={{
          backgroundColor: '#f44336',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
      >
        Cancel
      </button>
  
      <button
        onClick={() => handlePay1(2)}
        style={{
          backgroundColor: '#4caf50',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
      >
        Proceed
      </button>
    </div>
  </div>     
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
  )
}
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
  )
}

      
      {/* Content Area ends */}
      </Grid>
    </Grid>
  </Box>
  </div>
  );
}

