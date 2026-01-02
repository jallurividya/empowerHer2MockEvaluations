import React from 'react'

const FleetCard = ({fleet, onUpdateDriver, onToggleAvailability, onDelete}) => {
    console.log("Render card: ", fleet.id)
  return (
    <div className='card'>
        <img src="https://tse3.mm.bing.net/th/id/OIP.f6ved8wranJjaO8g0qDStgHaEK?pid=Api&P=0&h=180" alt="vehicle" width="90%"/>
        <p><strong>Reg No. : </strong>{fleet.regNo}</p>
        <p><strong>Vehicle Type : </strong>{fleet.category}</p>
        <p><strong>Driver Name : </strong>{fleet.driver}</p>
        <p><strong>Status : </strong>{fleet.status}</p>
        <button onClick={()=>onUpdateDriver(fleet.id)}>Update Driver</button>
        <button onClick={()=>onToggleAvailability(fleet.id)}>Change Status</button>
        <button onClick={()=>onDelete(fleet.id)}>Delete</button>
    </div>
  )
}

export default React.memo(FleetCard)