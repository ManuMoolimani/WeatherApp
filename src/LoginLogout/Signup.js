import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = () => {
    const { fullName, email, password } = formData;

    if (!fullName || !email || !password) {
      alert('Please fill all the fields.');
      return;
    }

    const userData = {
      fullName,
      email,
      password,
    };
    localStorage.setItem('userData', JSON.stringify(userData));

   // alert('Signup successful! Redirecting to login page.');
    setFormData({ fullName: '', email: '', password: '' });

    navigate('/login');
  };

  return (
    <div
      style={{
        backgroundImage: 'url(/pic1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
      }}
    >
      <div style={{display:'flex',flexDirection:'column'}}>
    <h1 style={{color:'wheat', fontSize:'50px',margin:'0',padding:'0'}}> Welcome To Weather Application </h1>
      <h2 style={{color:'white', fontSize:'30px',margin:'0',}}>Explore the Weather API</h2>
      </div>
      {/* Signup Form Box */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)', 
          padding: '40px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          width: '100%',
          height:'100vh',
          maxWidth: '450px',
          marginLeft:'20%'
        }}
      >

        <div style={{marginTop:'55%'}}>
        <h1 style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px',}}> Sign Up </h1>
        <h2 style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
          Create an Account
        </h2>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <TextField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
          />
          <Button
            variant="contained"
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: '10px',
              
            }}
            onClick={handleSignup}
          >
            Sign Up
          </Button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
