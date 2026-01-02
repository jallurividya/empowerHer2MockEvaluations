import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import FleetCard from '../components/FleetCard';

const Admin = () => {
    const [fleets, setFleets] = useState([])

    const updateDriver = useCallback((id)=>{
        const newDriver = prompt("Enter new driver name")
        if(!newDriver || !newDriver.trim())
            return
        setFleets(prev => prev.map(f => f.id === id ? {...f, driver: newDriver} : f ))
    },[]);

    const toggleAvailability = useCallback((id)=>{
        setFleets(prev => prev.map(f => f.id === id ? {...f, status: f.status === "available" ? "unavailable" : "available"} : f))
    },[]);

    const deleteFleet = useCallback((id)=>{
       if(!window.confirm("Are you sure?"))
        return
    setFleets(prev => prev.filter(f=> f.id !== id)) 
    },[])
    return (
        <>
            <Navbar />
            <div style={{display:"flex", gap:"10px"}}>
                <Sidebar setFleets={setFleets} />
                
                <main style={{backgroundColor:"lightblue", padding:"20px", marginTop:"25px", width:"100%"}}>
                    <div className='grid'>
                        {fleets.map(fleet=>
                            <FleetCard 
                            key={fleet.id}
                            fleet={fleet}
                            onUpdateDriver={updateDriver}
                            onToggleAvailability={toggleAvailability}
                            onDelete={deleteFleet} />
                        )}
                    </div>
                </main>
            </div>
        </>
    )
}

export default Admin