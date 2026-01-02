import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("fleetLogin");
        navigate("/login")
    }
    return (
        <nav style={{ background: "blue", padding: "10px", display: "flex", justifyContent: "right" }}>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    )
}
export default Navbar