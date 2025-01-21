import React from 'react';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';

function Otherdetails({ weather }) {
  const isDay = weather.isDay || "yes";
  const region = weather.region || 'Unknown Region';
  const country = weather.country || 'Unknown Country';
  const timeZone = weather.timeZone || 'Unknown Timezone';
  const windDegree = weather.windDegree || 'N/A';
  const uvIndex = weather.uvIndex || '0';
  const pressure=weather.pressure;
  const visibility = weather.visibility;
  const feelslike=weather.feelslike;

  return (
    
    <div
      style={{
        position: 'absolute',
        top: '35%',
        left: '75%',
        transform: 'translate(-50%)',
        width: '100%',
        maxWidth: '850px',
        padding: '30px',
        background: '#f0f0f0',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(44, 40, 40, 0.9)',
      }}
    >
      <h3 style={{ textAlign: 'center', marginBottom: '20px', fontSize:'25px', }}>
        Additional Weather Details
      </h3>

      {/* Grid Container */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: 'repeat(3, auto)',
          gap: '25px',
        }}
      >
        {/* Day/Night Icon, Region, and UV Index */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr 1fr',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          {/* Icon */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {isDay === 'yes' ? (
              <LightModeIcon style={{ color: 'orange', fontSize: '135px' }} />
            ) : (
              <NightlightIcon style={{ color: 'gray', fontSize: '140px' }} />
            )}
          </div>

          {/* Region */}
          <div>
            <p style={{ margin: 0, fontWeight: 'bold', fontSize: '40px' }}>
              {region}
            </p>
          </div>

          {/* UV Index */}
          <div
            style={{
              background: '#fff',
              padding: '15px',
              borderRadius: '10px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            }}
          >
            <p style={{ fontWeight: 'bold', margin: '0', fontSize: '18px' }}>
              UV Index
            </p>
            <p style={{ fontSize: '30px', margin: '5px 0' }}>{uvIndex}</p>
          </div>
        </div>

        {/* Second Row: Country, TimeZone, and Wind Degree */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
          }}
        >
          {/* Country */}
          <div
            style={{
              background: '#fff',
              padding: '10px',
              borderRadius: '10px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            }}
          >
            <p style={{ fontWeight: 'bold', margin: '0', fontSize: '18px' }}>
              Country
            </p>
            <p style={{ fontSize: '23px', margin: '5px 0' }}>{country}</p>
          </div>

          {/* TimeZone */}
          <div
            style={{
              background: '#fff',
              padding: '15px',
              borderRadius: '10px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            }}
          >
            <p style={{ fontWeight: 'bold', margin: '0', fontSize: '18px' }}>
              Time Zone
            </p>
            <p style={{ fontSize: '23px', margin: '5px 0' }}>{timeZone}</p>
          </div>

          {/* Wind Degree */}
          <div
            style={{
              background: '#fff',
              padding: '15px',
              borderRadius: '10px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            }}
          >
            <p style={{ fontWeight: 'bold', margin: '0', fontSize: '18px' }}>
              Wind Degree
            </p>
            <p style={{ fontSize: '25px', margin: '5px 0' }}>{windDegree}</p>
          </div>
        </div>

        {/* Third Row: Pressure, Visibility, and Feels Like */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
        >
          {/* Pressure */}
          <div
            style={{
              background: '#fff',
              padding: '15px',
              borderRadius: '10px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            }}
          >
            <p style={{ fontWeight: 'bold', margin: '0', fontSize: '18px' }}>
              Pressure
            </p>
            <p style={{ fontSize: '25px', margin: '5px 0' }}>{pressure} hPa</p>
          </div>

          {/* Visibility */}
          <div
            style={{
              background: '#fff',
              padding: '15px',
              borderRadius: '10px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            }}
          >
            <p style={{ fontWeight: 'bold', margin: '0', fontSize: '18px' }}>
              Visibility
            </p>
            <p style={{ fontSize: '25px', margin: '5px 0' }}>{visibility} km</p>
          </div>

          {/* Feels Like */}
          <div
            style={{
              background: '#fff',
              padding: '15px',
              borderRadius: '10px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            }}
          >
            <p style={{ fontWeight: 'bold', margin: '0', fontSize: '18px' }}>
              Feels Like
            </p>
            <p style={{ fontSize: '25px', margin: '5px 0' }}>{feelslike}°C</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otherdetails;
