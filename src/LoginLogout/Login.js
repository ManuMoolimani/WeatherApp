import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    const { email, password } = formData;

    if (!email || !password) {
      alert('Please fill all the fields.');
      return;
    }

    const storedData = JSON.parse(localStorage.getItem('userData'));

    if (storedData && storedData.email === email && storedData.password === password) {
     // alert(`Welcome back, ${storedData.fullName}!`);
      setFormData({ email: '', password: '' });
      navigate('/home'); // Navigate to a Weather or homepage
    } else {
      alert('Invalid credentials. Please sign up.');
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url(https://ManuMoolimani.github.io/WeatherApp/pic2.jpg)', 
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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ color: 'wheat', fontSize: '60px', margin: '0', padding: '0' }}>
          Welcome Back!
        </h1>
        <h2 style={{ color: 'white', fontSize: '30px', margin: '0' }}>
          Log in to your account
        </h2>
      </div>

      {/* Login Form Box */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          padding: '40px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          width: '100%',
          height: '100vh',
          maxWidth: '450px',
          marginLeft: '35%',
        }}
      >
        <div style={{ marginTop: '80%' }}>
          <h1 style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
            Log In
          </h1>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
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
              onClick={handleLogin}
            >
              Log In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
