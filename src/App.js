import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './LoginLogout/Signup'; 
import LoginPage from './LoginLogout/Login';   
import Home from './Home';
import About from './components/About';



function App() {
  return (
    <div className="App">

      
      <Router>
        <Routes>
          {/* First to load Signup page */}
          <Route path="/WeatherApp" element={<SignupPage />} />
          
          {/* Route for Login page  */}
        <Route path="/WeatherApp/login" element={<LoginPage />} />
      
          {/* Drawer */}
          <Route path='/Home' element={<Home />} />
          
         
        </Routes>
      </Router>
    </div>
   
  );
}

export default App;
