import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate, Routes, Route } from 'react-router-dom';


import { useEffect, useState } from 'react';

import Home from './home/home';
import ContactUs from './home/Contactus';
import Aboutus from './home/Aboutus';

import InsertSpot from './AdminModule/insertspot'; 
import Spots from './AdminModule/Spots'; 
import MyRequests from './AdminModule/MyRequests';
import HotelAdminDetails from './AdminModule/HotelAdminDetails';
import UserDetails from './AdminModule/UserDetails';

import HotelAdminActiveRooms from './Hotel_Module/HotelAdminActiveRooms';
import HotelAdminProfile from './Hotel_Module/HotelAdminProfile';
import HotelAdminAddRoom from './Hotel_Module/HotelAdminAddRoom';
import HotelAdminRooms from './Hotel_Module/HotelAdminRooms';
import HotelAdminSignUp from './Hotel_Module/HotelAdminSignUp';
import HotelAdminUpdate from './Hotel_Module/HotelAdminUpdate';

import UserProfile from './userModule/UserProfile';
import PaymentTable from './userModule//PaymentTable';
import UserSignUp from './userModule//userSignup';
import Spots2 from './userModule//Spots';
import MyRequests1 from './userModule/myrequests';
import Roombooking from './userModule/Roombooking';
import ActiveBookings from './userModule/ActiveBookings';


import LoginForm from './login';
import axios from 'axios';
import UserUpdate from './userModule/UserUpdate';

const drawerWidth = 240;


export default function App2() {
  axios.defaults.withCredentials = true;
  return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/admin/inserttouristspot" element={<InsertSpot />} />
        <Route path="/admin/touristspots" element={<Spots />} />
        <Route path="/admin/travelplanrequests" element={<MyRequests/>} />
        <Route path="/admin/hotelmmanagerdetails" element={<HotelAdminDetails/>} />
        <Route path="/admin/userdetails" element={<UserDetails/>} />
       
       
          <Route path="/hotelmanager/signup" element={<HotelAdminSignUp />} />
          <Route path="/hotelmanager/addroom" element={<HotelAdminAddRoom />} />
          <Route path="/hotelmanager/rooms" element={<HotelAdminRooms />} />
          <Route path="/hotelmanager/roombookings" element={<HotelAdminActiveRooms />} />
          <Route path="/hotelmanager/profile" element={<HotelAdminProfile/>} />
          <Route path="/hotelmanager/update/:id" element={<HotelAdminUpdate/>} />

          <Route path="/tourist/signup" element={<UserSignUp />} />
          <Route path="/tourist/spots" element={<Spots2 />} />
          <Route path="/tourist/profile" element={<UserProfile/>}/>
          <Route path="/tourist/paymentdetails" element={<PaymentTable/>}/>
          <Route path="/tourist/myrequests" element={<MyRequests1/>}/>
          <Route path="/tourist/roombooking" element={<Roombooking/>}/>
          <Route path="/tourist/activebookings" element={<ActiveBookings/>}/> 
          <Route path="tourist/update/:id" element={<UserUpdate/>} />

          <Route path="/login" element={<LoginForm/>}/> 

        </Routes>
        
     
    
  );
}
