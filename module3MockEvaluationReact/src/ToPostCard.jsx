import React, { useContext } from 'react'
import { PostsContext } from './PostsContext'

const ToPostCard = ({id,title,body}) => {
    const { deletePost } = useContext(PostsContext)
  return (
    <div style={{border:"1px solid black", margin:"5px", padding:"3px"}}>
        <p><strong>Title:</strong>{title}</p>
        <p><strong>Body:</strong>{body}</p>
        <button>Edit</button>
        <button style={{margin:"10px"}} onClick={()=>deletePost(id)}>Delete</button>
    </div>
  )
}

export default ToPostCard