import React from 'react'
import IosShareIcon from '@mui/icons-material/IosShare';

function About() {

    
  return (
    <div style={{
     
    }}>
    <div>
        <h1 style={{padding:'10px',fontSize:'45px',marginTop:'10%',color:'#00203FFF',}}>Bulding Weather Application </h1>
        <p style={{fontSize:'20px',color:'#00203FFF'}}> This is a simple application that is built using React and Weatherstack api.</p>

     <div style={{
        position: 'absolute',
        top:'30%',
        left:'5%',
        width: '100%', 
        maxWidth: '650px', 
        padding: '30px',
        background: '#f0f0f0',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(44, 40, 40, 0.9)',
     }}>
        <h2>Features</h2>
        <ul>
            <li>Search for a city.</li>
            <li>Get the current weather for that city.</li>
            <li>Get the Humidity, UV index, wind, region etc of the city that is searched.</li>
            <li>Weather Icons from the API</li>
        </ul>

        <h2 style={{marginTop:'10px'}}>Built Using</h2>
        <ul>
            <li>React</li>
            <li> Weatherstack API <a href='https://weatherstack.com'> <IosShareIcon sx={{fontSize:'20px'}}/> </a></li>
            <li> Material UI (mui) <a href='https://mui.com/'> <IosShareIcon sx={{fontSize:'20px'}}/> </a></li>
            <li>React Router DOM</li>
        </ul>

        <h2 style={{marginTop:'10px'}}>Future Enchancements</h2>
        <ul>
            <li>Add weather forecasts for the next 7 days.</li>
            <li>Add user preferences for favorite cities.</li>
            <li>Integrate with more APIs for enhanced weather insights.</li>
           
        </ul>

        </div>   

      <div style={{
        position: 'absolute',
        top:'78%',
        left:'5%',
        width: '100%', 
        maxWidth: '650px', 
        padding: '30px',
        background: '#f0f0f0',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(44, 40, 40, 0.9)',
     }}>
      <h2>How to use</h2>
      <ol>
        <li>Search for a city in the search bar.</li>
        <li>Thats It!, now you get all the data in the fields.</li>
        <li>Thier is an limited usage of the api calls per month, so use it wisely.</li>
      </ol>
      </div>

      <div style={{
        position: 'absolute',
        top:'30%',
        left:'40%',
        width: '100%', 
        maxWidth: '650px', 
        padding: '30px',
        background: '#f0f0f0',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(44, 40, 40, 0.9)',
     }}>
      <h2>API Documentation</h2>
      <ol>
        <li>API Name: Weatherstack API</li>
        <li>API URL: https://weatherstack.com/api</li>
        <li>API Key: You need to get your own API key from the website.</li>
        <li>Register for free and enjoy!. </li>
      </ol>

      </div>

      <div style={{
        position: 'absolute',
        top:'51%',
        left:'40%',
        width: '100%', 
        maxWidth: '650px', 
        padding: '30px',
        background: '#f0f0f0',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(44, 40, 40, 0.9)',
     }}>
      <h2>Flow of Application</h2>
      <ol>
        <li>Signup page where user data is stored</li>
        <li>Login page, the data stored from sign up page is used for login</li>
        <li>Vola! Home page, where Weather Application is present where you can view the weather details.</li>
        <li>About Button, logout Button</li>
        <li>About button navigates you to about page.</li>
        <li>Logout button navigates you to signup page.</li>
      </ol>
      </div>
        

        
      <div style={{
        position: 'absolute',
        top:'79%',
        left:'40%',
        width: '100%', 
        maxWidth: '650px', 
        padding: '30px',
        background: '#f0f0f0',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(44, 40, 40, 0.9)',
     }}>
      <h2>Contact</h2>
      <p>For any queries or feedback, please contact at <a href="mailto:manumoolimani7@gmail.com">Manu Moolimani</a></p>
     </div>

    </div>

    <div style={{
        position: 'absolute',
        top:'93%',
        left:'45%',
        width: '100%', 
        maxWidth: '750px', 
        padding: '30px',
        
     }}>
      <p style={{color:'#00203FFF'}}>@manumoolimani7@gmail.com</p>
     </div>


 {/*Side Background */}
 <div
        style={{
          position: 'absolute',
          top: '0%',
          right:'14.7%',
          backgroundImage: 'url(/pic1.jpg)',
          padding: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          width: '100%',
          height: '100vh',
          maxWidth: '250px',
          marginLeft: '90%',
        }}
      > </div>
      <div
        style={{
          position: 'absolute',
          top: '0%',
          right:'3%',
          backgroundImage: 'url(/pic2.jpg)',
          padding: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          width: '100%',
          height: '100vh',
          maxWidth: '250px',
          marginLeft: '90%',
        }}
      > </div>

    </div>
  )
}

export default About