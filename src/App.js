import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from "react";
import axios from "axios";
import {TextField,Button,Card, CardContent, Typography} from '@mui/material' ;
import IconButton from '@mui/joy/IconButton';
import Delete from '@mui/icons-material/Delete';


const response = await axios.get('http://localhost:5000/route2');
//console.log(response.data)
let data3
function App() {
  const[name1,setname] = useState('');
  const[email1,setemail] = useState('');
  const[presentData,pastData] = useState([]);
 // const[date3,setdate3] = useState('');
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  useEffect(()   => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get('http://localhost:5000/route2'); 
         
        let l1 = response1.data
        let desired_output = (l1) => {
          let unique_values = l1
              .map((item) => item.location)
              .filter(
                  (value, index, current_value) => current_value.indexOf(value) === index
              );
          return unique_values;
      };
      

        pastData(desired_output(l1));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    const intervalId = setInterval(fetchData, 1000); // Fetch data every 5 seconds
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleSelect1 = (location1) => {
    console.log(location1); 
    let select = response.data;
    let newArray = select.filter(function (el) {
      return el.location === location1
  }
  );
  console.log(newArray)
  let length = newArray.length
     data3 = newArray.map((data2,index) =>{

      if (index % 3 === 0 || index === 0) {
        return (
          <tr>
            {/* Render 3 cards in a row */}
            <td style={{ paddingRight: '150px'}}>
              <Card  style={{ width: '300px', backgroundColor: 'rgb(254, 30, 25)'  }}>
                <CardContent>
                  <Typography variant="body2">{data2.picnicspot}</Typography>
                </CardContent>
                <IconButton
                    color="danger"
                    variant="plain"
                    size="sm"
                    sx={{ mr: 'auto' }}
                    onClick={() => handleSelect2(newArray[index]._id)}
                  >
                    select
                  </IconButton>
              </Card>
            </td>
            {index + 1 < newArray.length && (
            <td style={{ paddingRight: '150px' }}>
              {index + 1 < presentData.length && ( // Check within bounds
                <Card style={{ width: '300px' }}>
                  <CardContent>
                    <Typography variant="body2">{newArray[index + 1].picnicspot}</Typography>
                  </CardContent>
                  <IconButton
                    color="danger"
                    variant="plain"
                    size="sm"
                    sx={{ mr: 'auto' }}
                    onClick={() => handleSelect2(newArray[index + 1]._id)}
                  >
                    select
                  </IconButton>
                </Card>
              )}
            </td>
      )}
      {index + 2 < newArray.length && ( 
            <td style={{ paddingRight: '300px' }}>
                <Card style={{ width: '300px' }}>
                  <CardContent>
                    <Typography variant="body2">{newArray[index + 2].picnicspot}</Typography>
                   
                  </CardContent>
                  <IconButton
                    color="danger"
                    variant="plain"
                    size="sm"
                    sx={{ mr: 'auto' }}
                    onClick={() => handleSelect2(newArray[index + 2]._id)}
                  >
                    select
                  </IconButton>
                </Card>
             
            </td>
             )}
          </tr>
        );
      } else {
        // Return an empty cell to maintain table structure
        return <td key={index} />; // Add unique keys for empty cells
      }
    })
    }

    const handleSelect2 = (id) =>{
      console.log(id);
      let select = response.data;
    let newArray = select.filter(function (el) {
      return el._id === id
  }
  );
  console.log(newArray)
  let rooms1 = newArray[0].rooms
  data3 = rooms1.map((data2,index) =>{

    if (index % 3 === 0 || index === 0) {
      return (
        <tr>
          {/* Render 3 cards in a row */}
          <td style={{ paddingRight: '150px'}}>
            <Card  style={{ width: '300px', backgroundColor: 'rgb(254, 30, 25)'  }}>
              <CardContent>
             Room No:-   <Typography variant="body2">{data2[0]}</Typography>
             Room Type:-   <Typography variant="body2">{data2[1]}</Typography>
              Room cost:- <Typography variant="body2">{data2[2]}</Typography>
              </CardContent>
              <IconButton
                  color="danger"
                  variant="plain"
                  size="sm"
                  sx={{ mr: 'auto' }}
                  onClick={() => handleConformation(id,data2,index)}
                >
                  book
                </IconButton>
            </Card>
          </td>
         
          {index + 1 < rooms1.length && (
          <td style={{ paddingRight: '150px' }}>
            {index + 1 < rooms1.length && ( // Check within bounds
              <Card style={{ width: '300px' }}>
                <CardContent>
                Room No:-      <Typography variant="body2">{rooms1[index + 1][0]}</Typography>
                Room Type:-     <Typography variant="body2">{rooms1[index + 1][1]}</Typography>
                Room cost:-   <Typography variant="body2">{rooms1[index + 1][2]}</Typography>
                </CardContent>  

                <IconButton
                  color="danger"
                  variant="plain"
                  size="sm"
                  sx={{ mr: 'auto' }}
                  onClick={() => handleConformation(id,rooms1[index + 1],index+1)}
                >
                  book
                </IconButton>
              </Card>
            )}
          </td>
    )}
    {index + 2 < rooms1.length && ( 
          <td style={{ paddingRight: '300px' }}>
            
              <Card style={{ width: '300px' }}>
                <CardContent>
                Room No:- <Typography variant="body2">{rooms1[index + 2][0]}</Typography>
                  Room Type:-  <Typography variant="body2">{rooms1[index + 2][1]}</Typography>
                  Room cost:-   <Typography variant="body2">{rooms1[index + 2][2]}</Typography>
                </CardContent>
                <IconButton
                  color="danger"
                  variant="plain"
                  size="sm"
                  sx={{ mr: 'auto' }}
                  onClick={() => handleConformation(id,rooms1[index + 2],index+2)}
                >
                  book
                </IconButton>
              </Card>
           
          </td>
           )}
        </tr>
      );
    } else {
      // Return an empty cell to maintain table structure
      return <td key={index} />; // Add unique keys for empty cells
    }
  })
      }

      const handleConformation = (id,room,index1) => {
          console.log(id)
          console.log(room)
          console.log(index1)
          let select = response.data;
          let newArray = select.filter(function (el) {
            return el._id === id
        }
        );
        newArray[0].rooms[index1][3]='1';
        console.log(newArray[0])
          data3 = newArray.map((data2,index) =>{
              return (
                
                 <td style={{ paddingRight: '150px'}}>
                    <Card  style={{ width: '300px', backgroundColor: 'rgb(254, 30, 25)'  }}>
                      <CardContent>
                     Location:-   <Typography variant="body2">{data2.location}</Typography>
                     PicnicSpot:-   <Typography variant="body2">{data2.picnicspot}</Typography>
                     Room No:-   <Typography variant="body2">{room[0]}</Typography>
                     Room Type:-   <Typography variant="body2">{room[1]}</Typography>
                      Room Cost:- <Typography variant="body2">{room[2]}</Typography>
                      </CardContent>
                      <IconButton
                          color="danger"
                          variant="plain"
                          size="sm"
                          sx={{ mr: 'auto' }}
                          onClick={() => handlePay(id,index1,newArray)}
                        >
                          proceed
                        </IconButton>
                    </Card>
                  </td>  
              );
           
          })  
      }

      useEffect(()   => {
        let scriptTag = document.createElement("script");
        scriptTag.src = "https://checkout.razorpay.com/v1/checkout.js";
        scriptTag.async = true;
        document.body.appendChild(scriptTag)
        return()=>{
         document.body.removeChild(scriptTag)
        }
       
       }, []);

      const handlePay = async (id,index,newArray) => {
        console.log("index="+index)
      console.log("amount"+newArray[0].rooms[index][2]*100)
        const res =  await axios.post('http://localhost:5000/pay',{
          amount1: newArray[0].rooms[index][2]*100,
        });
       
        let orderid = res.data.id
        var options = {
         "key": "rzp_test_dPcBqV32stqs3P", // Enter the Key ID generated from the Dashboard
         "amount": newArray[0].rooms[index][2], // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
         "currency": "INR",
         "name": "Acme Corp", //your business name
         "description": "Test Transaction",
         "image": "https://example.com/your_logo",
         "order_id": orderid, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
         "handler": function (response){
             console.log(response.razorpay_payment_id);
             console.log(response.razorpay_order_id);
             console.log(response.razorpay_signature)   
            //   axios.post('http://localhost:5000/updateroom',{
            //   newArray: newArray[0],
            //   index:index,
            // });   
         },
         "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
             "name": "Gaurav Kumar", //your customer's name
             "email": "gaurav.kumar@example.com", 
             "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
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
               console.log(response.error.code);
               console.log(response.error.description);
               console.log(response.error.source);
               console.log(response.error.step);
               console.log(response.error.reason);
               console.log(response.error.metadata.order_id);
               console.log(response.error.metadata.payment_id);
       });
       rzp1.open();
       
       };

      

    
    const handleSelect0 = () => {
      setIsButtonVisible(false);
    data3 = presentData.map((data2, index) => {
    // Create table row (<tr>) every 3 elements (or at the beginning)
    if (index % 3 === 0 || index === 0) {
      return (
        <tr>
          {/* Render 3 cards in a row */}
          <td style={{ paddingRight: '150px'}}>
            <Card  style={{ width: '300px', backgroundColor: 'rgb(254, 30, 25)'  }}>
              <CardContent>
                <Typography variant="body2">{data2}</Typography>
                
              </CardContent>
              <IconButton
                  color="danger"
                  variant="plain"
                  size="sm"
                  sx={{ mr: 'auto' }}
                  onClick={() => handleSelect1(presentData[index])}
                >
                  
                  select
                </IconButton>
            </Card>
          </td>
          <td style={{ paddingRight: '150px' }}>
            {index + 1 < presentData.length && ( // Check within bounds
              <Card style={{ width: '300px' }}>
                <CardContent>
                  <Typography variant="body2">{presentData[index + 1]}</Typography>
                  
                </CardContent>
                <IconButton
                  color="danger"
                  variant="plain"
                  size="sm"
                  sx={{ mr: 'auto' }}
                  onClick={() => handleSelect1(presentData[index + 1])}
                >
                  select
                </IconButton>
              </Card>
            )}
          </td>
          <td style={{ paddingRight: '300px' }}>
            {index + 2 < presentData.length && ( // Check within bounds
              <Card style={{ width: '300px' }}>
                <CardContent>
                  <Typography variant="body2">{presentData[index + 2]}</Typography>
                 
                </CardContent>
                <IconButton
                  color="danger"
                  variant="plain"
                  size="sm"
                  sx={{ mr: 'auto' }}
                  onClick={() => handleSelect1(presentData[index + 2])}
                >
                  select
                </IconButton>
              </Card>
            )}
          </td>
        </tr>
      );
    } else {
      // Return an empty cell to maintain table structure
      return <td key={index} />; // Add unique keys for empty cells
    }
  });
}
 // setdate3(location)
 //console.log(data3)

  return (
    <>
      {isButtonVisible && (
        <button onClick={handleSelect0}>Click he to get locations </button>
      )}
      {data3}
    <h1>kamal</h1>
    </>
  );
}

export default App;
