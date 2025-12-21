import React, { useContext } from 'react'
import { PostsContext } from './PostsContext'

const ToPostCard = ({key,title,body}) => {
    const { posts, deletePost } = useContext(PostsContext)
    const post = posts.find((t)=>t.key=key)
  return (
    <div style={{border:"1px solid black", margin:"5px", padding:"3px"}}>
        <p><strong>Title:</strong>{title}</p>
        <p><strong>Body:</strong>{body}</p>
        <button>Edit</button>
        <button style={{margin:"10px"}} onClick={()=>deletePost(post.key)}>Delete</button>
    </div>
  )
}

export default ToPostCard