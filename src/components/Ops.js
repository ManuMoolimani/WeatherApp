import React from 'react'
import ReusableButton from './Button';
import { useNavigate } from 'react-router-dom';

function Ops() {
    const navigate =useNavigate();
  
    const handleLogoutClick = () => {
      
      navigate('/WeatherApp/login'); //naviagte to signup.
    };
  
    const remove =() => {
      localStorage.removeItem('userData');
      navigate('/WeatherApp'); //When data is deleted, redirect to signup.
    }
  
   
  
    return (
      <div style={{ padding: '20px' }}>
  
        {/*Buttons */}
        <div style={{ display: 'flex', gap: '30px',
        position: 'absolute', 
        top:'10%', 
            left: '5%', }}>
              
          <ReusableButton label="Logout" onClick={handleLogoutClick} />
          <ReusableButton label="Delete Account" onClick={remove} />
        </div>

        </div>
  )
}

export default Ops