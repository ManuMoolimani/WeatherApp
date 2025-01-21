import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './LoginLogout/Signup'; 
import LoginPage from './LoginLogout/Login';   
import Home from './Home';
import About from './components/About';
import ProtectedRoutes from './ProtectedRoutes';


function App() {
  return (
    <div className="App">

      
      <Router>
        <Routes>
          {/* First to load Signup page */}
          <Route path="/" element={<SignupPage />} />
          
          {/* Route for Login page  */}
        <Route path="/login" element={<LoginPage />} />
      
          {/* Drawer */}
          <Route path='/Home' element={<Home />} />
          
         
        </Routes>
      </Router>
    </div>
   
  );
}

export default App;
