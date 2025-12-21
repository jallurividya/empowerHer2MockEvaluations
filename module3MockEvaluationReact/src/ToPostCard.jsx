import React from 'react'

const ToPostCard = ({userId,title,body}) => {
  return (
    <div style={{border:"1px solid black", margin:"5px", padding:"3px"}}>
        <p><strong>Title:</strong>{title}</p>
        <p><strong>Body:</strong>{body}</p>
        <button>Edit</button>
        <button style={{margin:"10px"}}>Delete</button>
    </div>
  )
}

export default ToPostCard