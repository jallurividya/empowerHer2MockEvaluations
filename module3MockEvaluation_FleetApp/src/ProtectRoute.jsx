import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectRoute = ({children}) => {
    const isAuth = localStorage.getItem("fleetLogin")
  return (
    isAuth ? children : <Navigate to="/login" />
)
}

export default ProtectRoute