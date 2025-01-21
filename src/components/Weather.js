import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

import Otherdetails from './Otherdetails';

function Weather() {
    const [input, setInput] = useState('');
    const [weather, setWeather] = useState({
      location: 'Bengaluru',
      temperature: 24,
      humidity: 60,
      windSpeed: 3.5,
      localTime:'2024-01-15 12:00',
      description:'Sunny',
      weatherIcon: <WbSunnyIcon />,
     
    });
    const storedData = JSON.parse(localStorage.getItem('userData'));
  
    const fetchWeather = async () => {
      const API_KEY = 'c845e523cb804bb2168d9b324a476b90';
      try {
        const response = await fetch(
          `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${input || weather.location}`
        );
        const data = await response.json();
       console.log(data); //for Data

        if (data.success !== false) {
          setWeather({
            location: data.location.name,
            temperature: data.current.temperature,
            humidity: data.current.humidity,
            windSpeed: data.current.wind_speed,
            localTime: data.location.localtime,
            description:data.current.weather_descriptions[0],
            weatherIcon:data.current.weather_icons[0],
            uvIndex:data.current.uv_index,
            isDay:data.current.is_day,
            region:data.location.region,
            pressure:data.current.pressure,
            country:data.location.country,
            visibility:data.current.visibility,
            feelslike:data.current.feelslike,
            windDegree:data.current.wind_degree,
            timeZone:data.location.timezone_id,
           
          });
        
        } else {
          alert('Invalid location. Please try again.');
        }
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    
    return (
      <>
      {/**Header Section */}
      <div style={{marginTop:'15%'}}>
        <h1
          style={{
            width: '100%',
            color: '#00203FFF',
            fontSize: '55px',
            fontWeight: 'bold',
            
          }}
        >
          Weather Application
        </h1>
        </div>

          <div style={{
        position: 'absolute', 
            top: '25%', 
            left: '44%', }}>
            <h2 style={{fontSize:'40px',color:'#00203FFF'}}>Hello {storedData.fullName}!</h2>
          </div>
      <div
        style={{
          position: 'absolute', 
          top: '35%', 
          left: '25%', 
          transform: 'translateX(-50%)', 
          width: '100%', 
          maxWidth: '850px', 
          padding: '30px',
          background: '#f0f0f0',
          borderRadius: '20px',
          boxShadow: '0 4px 20px rgba(44, 40, 40, 0.9)',
        }}
      >
        <h3 style={{ textAlign: 'center', marginBottom: '20px',fontSize:'25px', }}>
        Weather Details
      </h3>

        {/* Search Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <input
            type="text"
            placeholder="Search city"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
                marginLeft:'auto',
              width: '300px',
              height: '60px',
              border: 'none',
              outline: 'none',
              borderRadius: '40px',
              paddingLeft: '25px',
              background: 'black',
              color: 'white',
              boxShadow: '0 2px 10px rgba(44, 40, 40, 0.9)',
            }}
          />
          <div
            onClick={fetchWeather}
            style={{
              width: '60px',
              height: '60px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
              background: 'black',
              cursor: 'pointer',
              boxShadow: '0 2px 0px rgba(44, 40, 40, 0.9)',
            }}
          >
            <SearchIcon sx={{ color: 'white',fontSize:'30px' }} />
          </div>
        </div>
  
       {/* Container for Weather Icon and Details */}
<div
  style={{
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '20px',
  }}
>
  {/* Weather Icon and Details */}
  <div style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '20px' }}>
    {/* Weather Icon */}
    {weather.weatherIcon && (
                        <img
                            src={weather.weatherIcon}
                            alt="Weather Icon"
                            style={{ width: '250px', height: '200px',borderRadius:'50%' }}
                        />
                    )}

    {/* Weather Details */}
    <div>
      <p style={{ fontSize: '40px', fontWeight: 'bold', margin: '5px 0' }}>
        {weather.temperature}°C
      </p>
      <p style={{ fontSize: '25px', margin: '0' }}>{weather.location}</p>
    </div>
  </div>

 {/* Date and Time */}
<div style={{ textAlign: 'right' }}>
  <p style={{ fontSize: '25px', margin: '5px 0', color: '#555', padding: '5px' }}>
    Date: {weather.localTime ? weather.localTime.split(' ')[0] : 'Loading...'}
  </p>
  <p style={{ fontSize: '25px', margin: '0', color: '#555' }}>
    Time: {weather.localTime ? weather.localTime.split(' ')[1] : 'Loading...'}
  </p>
</div>
</div>


  
        {/* Additional Information */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '30px',
            gap: '30px', // Adjust spacing between items
            width: '100%',
          }}
        >
          {/* Humidity */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px',  boxShadow: '0 2px 6px rgba(44, 40, 40, 0.5)', padding:'20px',borderRadius:'10px' }}>
            <WaterDropIcon sx={{ color: 'blue', fontSize: '55px' }} />
            <p style={{ margin: '0', fontSize: '20px' }}>
              Humidity {weather.humidity}%
            </p>
          </div>

           {/* Description*/}
           <div style={{ display: 'flex', alignItems: 'center', gap: '10px',  boxShadow: '0 2px 6px rgba(44, 40, 40, 0.5)', padding:'20px',borderRadius:'10px'  }}>
            <WbSunnyIcon sx={{ color: 'orange', fontSize: '55px' }} />
            <p style={{ margin: '0', fontSize: '20px' }}>
              {weather.description}
            </p>
          </div>

  
          {/* Wind Speed */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px',  boxShadow: '0 2px 6px rgba(44, 40, 40, 0.5)', padding:'20px',borderRadius:'10px'  }}>
            <AirIcon sx={{ color: 'gray', fontSize: '55px' }} />
            <p style={{ margin: '0', fontSize: '20px' }}>
              Wind Speed {weather.windSpeed}km/h
            </p>
          </div>
        </div>

        

      </div>
      <Otherdetails weather={weather} />
      </>
    );
  }
  
  export default Weather;