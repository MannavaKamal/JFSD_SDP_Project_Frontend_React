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
import config from '../config';

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

import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HotelIcon from '@mui/icons-material/Hotel';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LogoutIcon from '@mui/icons-material/Logout';


export default function MyRequests1() {
  const [showDrawer, setShowDrawer] = React.useState(true); // Toggle drawer visibility
  const [activeButton, setActiveButton] = React.useState(3); // Track active button index
  const navigate = useNavigate();
  
  
    const [data,setData] = useState([])   
    const[DisplayValue,setDisplayValue] = useState(0);
    const [Requestid,setRequestid] = useState(-1)
    const [selectedlocations,setSelectedLocations] = useState([])
    const [AdminStatus,setAdminStatus] = useState(-1)
    const [PaymentStatus,setPaymentStatus] = useState(-1)
    const [reasonforreject,setreasonforreject] = useState("")
    const [tgname,settgname] = useState("")
    const [tgcontact,settgcontact] = useState(0)
    const [Amount,setAmount] = useState(-1)
    const [Message,setMessage] = useState("")
    const [open, setOpen] = React.useState(false);
    const [BoxValue,setBoxValue] = useState(-1)
    const [User,setUser] = useState({});

    const toggleDrawer =() =>  {
      setOpen(!open);
      setBoxValue(-1)
      setSelectedLocations([])
   setAdminStatus(-1)
   setPaymentStatus(-1)
   setRequestid(-1)
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
  setData(response.data)
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

const handlePay = async () => {
   setBoxValue(0)
const response =  await axios.post(`${config.url}/pay`,{
requestid:Requestid,
amount:Amount*100,
});
const response1 = response.data
if(response1 === ""){
  navigate('/login')
return
}
var options = {
"key": "rzp_test_dPcBqV32stqs3P", // Enter the Key ID generated from the Dashboard
"amount": Amount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
"currency": "INR",
"name": "Acme Corp", //your business name
"description": "Test Transaction",
"image": "https://example.com/your_logo",
"order_id": response1.startdate, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
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
const response = await axios.get(`${config.url}/paymentsuccessorfailure`)
if(response.data === 1){
  alert("payment Success");
  window.location.reload();
}
window.location.reload();
}
const handlePaymentfailure = async () => {
  const response = await axios.get(`${config.url}/paymentsuccessorfailure`)
if(response.data === 0){
alert("paymentfailed")
window.location.reload();
}
window.location.reload()  
}


useEffect(()=>{
  fetchData()
  }, []);

  const Spots = async(spotsids) =>{
    try{
    setOpen(true)
    setBoxValue(0)
    const response1 = await axios.get(`${config.url}/getLocationsForUser`);
    const selectedlocations = spotsids.split(",").map(id => Number(id.trim())); 
   const filteredLocations = response1.data.filter((loc) => selectedlocations.includes(Number(loc.id)));
   setSelectedLocations(filteredLocations)
   setBoxValue(1)
  }catch(error){
    setMessage(error.message)
    setDisplayValue(1)     
  }
  }


  const status = async(request) =>{
    try{
      setOpen(true)
      setBoxValue(2)
   setAdminStatus(request.adminstatus)
   setPaymentStatus(request.paymentstatus)
   setRequestid(request.requestid)
   setreasonforreject(request.reasonforreject)
   setAmount(request.amount)
   settgcontact(request.tgcontact)
    settgname(request.tgname)
    }catch(error){
      setMessage(error.message)
      setDisplayValue(1)         
    }
  }

  const PaymentReject = async() =>{
    try{
      setDisplayValue(2)
    const response1 = await axios.post(`${config.url}/paymentreject`,{
      requestid:Requestid
    });
    window.location.reload()
  }
  catch(error){
    setMessage(error.message)
    setDisplayValue(1)
  }
  }
  const cancel = async(id) =>{
    try{
      setDisplayValue(2)
    const response1 = await axios.post(`${config.url}/travelplancancel`,{
      requestid:id
    });
    if(response1.data === ""){
      navigate('/login')
 return
    }
    alert("request deleted successfully")
    window.location.reload()
  }
  catch(error){
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
  <TableCell align="left" sx={{fontWeight: 'bold',backgroundColor: '#673ab7',color: '#fff',fontSize: { xs: '12px', sm: '14px', md: '16px' },padding: { xs: '8px', sm: '10px' },borderBottom: '2px solid #fff',}}>Plan id</TableCell>
  <TableCell align="left" sx={{fontWeight: 'bold',backgroundColor: '#673ab7',color: '#fff',fontSize: { xs: '12px', sm: '14px', md: '16px' },padding: { xs: '8px', sm: '10px' },borderBottom: '2px solid #fff',}}>People Count</TableCell>
  <TableCell align="left" sx={{fontWeight: 'bold',backgroundColor: '#673ab7',color: '#fff',fontSize: { xs: '12px', sm: '14px', md: '16px' },padding: { xs: '8px', sm: '10px' },borderBottom: '2px solid #fff',}}>Start date</TableCell>
  <TableCell align="left" sx={{fontWeight: 'bold',backgroundColor: '#673ab7',color: '#fff',fontSize: { xs: '12px', sm: '14px', md: '16px' },padding: { xs: '8px', sm: '10px' },borderBottom: '2px solid #fff',}}>Spots</TableCell>          
  <TableCell align="left" sx={{fontWeight: 'bold',backgroundColor: '#673ab7',color: '#fff',fontSize: { xs: '12px', sm: '14px', md: '16px' },padding: { xs: '8px', sm: '10px' },borderBottom: '2px solid #fff',}}>Status</TableCell>
  <TableCell align="left" sx={{fontWeight: 'bold',backgroundColor: '#673ab7',color: '#fff',fontSize: { xs: '12px', sm: '14px', md: '16px' },padding: { xs: '8px', sm: '10px' },borderBottom: '2px solid #fff',}}>Cancel request</TableCell>
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
               <TableCell sx={{ padding: { xs: '8px', sm: '10px' } }}><Button onClick={() => {Spots(data.listoflocations)}} variant="contained" color="secondary" sx={{fontSize: { xs: '10px', sm: '12px' },padding: { xs: '5px', sm: '8px' },textTransform: 'none',}}>View</Button></TableCell>
               <TableCell sx={{ padding: { xs: '8px', sm: '10px' } }}><Button onClick={() => {status(data)}} variant="contained" color="secondary" sx={{fontSize: { xs: '10px', sm: '12px' },padding: { xs: '5px', sm: '8px' },textTransform: 'none',}}>View</Button></TableCell>
               <TableCell sx={{ padding: { xs: '8px', sm: '10px' } }}><Button onClick={() => {cancel(data.requestid)}} variant="contained" color="secondary" sx={{fontSize: { xs: '10px', sm: '12px' },padding: { xs: '5px', sm: '8px' },textTransform: 'none',}}>Cancel</Button></TableCell>
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
         {/* TO Display Locations */}
         {BoxValue===1 && (
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
      {selectedlocations.map((data, index) => (
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

 
{BoxValue===2 && (
  <>
 {AdminStatus===0 &&(
     <>
     <div
       style={{
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         height: "20vh",
       }}
     >
       <h1
         style={{
           padding: "20px",
           background: "linear-gradient(135deg, #BBDEFB, #64B5F6)", // Blue gradient
           color: "#fff",
           borderRadius: "12px",
           boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
           fontSize: "32px",
           textAlign: "center",
           fontFamily: "'Roboto', sans-serif",
           fontWeight: "bold",
           letterSpacing: "2px",
         }}
       >
      Waiting for Admin Response
       </h1>
     </div>
    </>
  )}

{AdminStatus===2 &&
  <>
  <div
  style={{
   
    // justifyContent: "center",
    // alignItems: "center",
    
    // background: "linear-gradient(135deg, #FF9A9E, #FAD0C4)", // Soft red gradient
    // padding: "40px",
  }}
>
  <h1
    style={{
      padding: "30px 40px",
      background: "linear-gradient(135deg, #BBDEFB, #64B5F6)", // Blue gradient
      color: "#fff",
      borderRadius: "20px",
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)", // Deep shadow
      fontSize: "36px",
      textAlign: "center",
      fontFamily: "'Roboto', sans-serif",
      fontWeight: "bold",
      letterSpacing: "3px",
      animation: "glow 1.5s ease-in-out infinite",
      lineHeight: "1.5",
      //width: "80%",
     // maxWidth: "600px",
    }}
  > 
    Admin rejected your request
    <div style={{ marginTop: "20px", fontSize: "24px" }}>
      <div>Reason : <b>{reasonforreject}</b></div>
    </div>
  </h1>
</div>

</>
}
{(AdminStatus===1 && PaymentStatus===0 ) &&(
 <>
<Typography 
      sx={{
        fontSize: "20px",
        fontWeight: "bold",
        color: "#3f51b5",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
     Admin request to pay {Amount} rupees for you travel plan
    </Typography>  
    <div 
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <button
       onClick={()=>{handlePay()}}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#388e3c")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
      >
        Pay
      </button>
  
      <button
       onClick={()=>{PaymentReject()}}
        style={{
          padding: "10px 20px",
          backgroundColor: "#f44336",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#d32f2f")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
      >
        Reject
      </button>
    </div>
</>
)}
{(AdminStatus===1 && PaymentStatus===2 ) &&
 <>
 <div
   style={{
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
    // Soft red gradient
   }}
 >
   <h1
     style={{
       padding: "20px",
       background: "linear-gradient(135deg, #BBDEFB, #64B5F6)", // Blue gradient
       color: "#fff",
       borderRadius: "12px",
       boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
       fontSize: "32px",
       textAlign: "center",
       fontFamily: "'Roboto', sans-serif",
       fontWeight: "bold",
       letterSpacing: "2px",
       animation: "shake 0.5s",
       animationIterationCount: "infinite",
     }}
   >
     Payment Failed
   </h1>
 </div>
</>
}
{(AdminStatus===1 && PaymentStatus===3 ) &&
 <>
 <div
   style={{
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
    // Soft red gradient
   }}
 >
   <h1
     style={{
       padding: "20px",
       background: "linear-gradient(135deg, #BBDEFB, #64B5F6)", // Blue gradient
       color: "#fff",
       borderRadius: "12px",
       boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
       fontSize: "32px",
       textAlign: "center",
       fontFamily: "'Roboto', sans-serif",
       fontWeight: "bold",
       letterSpacing: "2px",
       animation: "shake 0.5s",
       animationIterationCount: "infinite",
     }}
   >
     Payment rejected By You
   </h1>
 </div>
</>
}
{(AdminStatus===1 && PaymentStatus===1 ) &&
  <>
 <div
  style={{
   
    // justifyContent: "center",
    // alignItems: "center",
    
    // background: "linear-gradient(135deg, #FF9A9E, #FAD0C4)", // Soft red gradient
    // padding: "40px",
  }}
>
  <h1
    style={{
      padding: "30px 40px",
      background: "linear-gradient(135deg, #BBDEFB, #64B5F6)", // Blue gradient
      color: "#fff",
      borderRadius: "20px",
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)", // Deep shadow
      fontSize: "36px",
      textAlign: "center",
      fontFamily: "'Roboto', sans-serif",
      fontWeight: "bold",
      letterSpacing: "3px",
      animation: "glow 1.5s ease-in-out infinite",
      lineHeight: "1.5",
      //width: "80%",
     // maxWidth: "600px",
    }}
  >
    <span
      style={{
        display: "block",
        marginBottom: "10px",
        fontSize: "48px",
        color: "#ffeb3b", // Bright accent color
        textShadow: "0 0 10px rgba(255, 235, 59, 0.8)",
      }}
    >
      Happy Travelling
    </span>
    Tourist Guide Details
    <div style={{ marginTop: "20px", fontSize: "24px" }}>
      <div>Tourist Guide Name: <b>{tgname}</b></div>
      <div>Tourist Guide Contact: <b>{tgcontact}</b></div>
    </div>
  </h1>
</div>
</>
}  
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
{DisplayValue === 5  && (
  <>
  {AdminStatus===0 &&(
    <>
<Typography>you selected places for travel plan</Typography>
<TableContainer
        component={Paper}
        sx={{
          width: "100%", // Allow full width
          maxWidth: 500, // You can adjust this if needed
          overflow: "auto", // Enable scrolling for responsiveness
          boxShadow: 3, // Optional: Add shadow for aesthetics
        }}
      >
        <Table
          sx={{
            minWidth: 300, // Minimum width for content
            tableLayout: "auto", // Allow table to adjust width automatically based on content
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="left">Sportname</TableCell>
              <TableCell align="left">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedlocations.map((data, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  height: "auto", // Allow row height to adjust automatically based on content
                }}
              >
                <TableCell component="th" scope="row" align="left">
                  {data.spotname}
                </TableCell>
                <TableCell align="left">
                  {`${data.country}, ${data.state}, ${data.city}`}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </>
)}

{AdminStatus===2 && (
  <>
  <h1>Admin Rejected the request </h1>
  <h1>Reason:-{reasonforreject}</h1>
  </>
)}
{(AdminStatus===1 && PaymentStatus===0 ) &&(
  <>
<h1>Admin request to pay {Amount} rupees for you travel plan</h1>
<button onClick={()=>{PaymentReject()}}>Reject</button>
<button onClick={()=>{handlePay()}}>payamount</button>
</>
)}
{(AdminStatus===1 && PaymentStatus===2 ) &&
  <>
<h1>payment failed tryagain</h1>
<button>try again</button>
</>
}
{(AdminStatus===1 && PaymentStatus===1 ) &&
<h1>happy travelling</h1>
}
{(AdminStatus===1 && PaymentStatus===3 ) &&
<h1>Payment Rejected By you</h1>
}
    {/* //    <Card style={{ width: "100%", maxWidth: 300, margin: "auto" }}>
       
    //    <CardContent>
    //    <Typography>Your Travel Plan Has Send to  Admin Wait for his responseResponse</Typography>
         
    //    </CardContent>
      
    //  </Card> */}
    </>
  )
}
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

