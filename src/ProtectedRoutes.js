import React from 'react'
import {Outlet,Navigate} from "react-router-dom"

function ProtectedRoutes() {
    const userLogin= localStorage.getItem("userData");
   
    return userLogin === 'false' ? <Outlet /> : <Navigate to="/" />;  
}

export default ProtectedRoutes