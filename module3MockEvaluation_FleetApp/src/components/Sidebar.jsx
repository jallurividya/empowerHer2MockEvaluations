import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({setFleets}) => {
    const navigate = useNavigate()
    const [regNo, setRegNo] = useState("")
    const [category, setCategory] = useState("")
    const [driver, setDriver] = useState("")
    const [status, setStatus] = useState("available")

    const handleAddFleet = () => {
        if(!regNo || !category || !driver){
            alert("All fields required")
            return
        }
        setFleets(prev => [...prev,
            {
                id: Date.now(),
                regNo,
                category,
                driver,
                status
            }
        ])
        setRegNo("");
        setCategory("");
        setDriver("");
        setStatus("available");
    }

    return (
        <aside style={{ display: "flex", flexDirection: 'column', flex:"1", marginTop: "25px", width: "20%", height:"100vh", gap: "10px", background: "skyblue", padding: "20px" }}>
            <input type="text" placeholder='vehicle registration number' value={regNo} onChange={(e) => setRegNo(e.target.value)} />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="auto">Auto</option>
                <option value="car">Car</option>
                <option value="truck">Truck</option>
                <option value="bus">Bus</option>
            </select>
            <input type="text" placeholder='enter driver name' value={driver} onChange={(e) => setDriver(e.target.value)} />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
            </select>
            <button onClick={handleAddFleet}>Add Fleet</button>
        </aside>
    )
}

export default Sidebar