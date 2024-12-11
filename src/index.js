import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import SignUp from './insertspot';
// import RenderLocations from './Spots';

//  import InsertSpot from './AdminModule/insertspot';
// import Spots from './AdminModule/Spots';
// import Spots2 from './userModule/Spots';
import { BrowserRouter } from 'react-router-dom';
// import CountrySelect from './sample';
// import Sample from './sample';
//import PaymentTable from './userModule/PaymentTable';
import App2 from './App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <BrowserRouter>  
   
     <App2/>
    
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
