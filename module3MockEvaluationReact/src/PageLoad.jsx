import React, { useContext, useEffect, useState } from 'react'
import ToPostCard from './ToPostCard'
import PostsContext from './PostsContext'

const PageLoad = () => {
    const [posts,setPosts] = useState([])
    useEffect(()=> {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data.slice(0,20))
            })
        })
    
  return (
    <div>
        <h2 style={{textAlign:"center"}}>List of Posts</h2>
        {posts.map(post => (
            <ToPostCard 
            key={post.id}
            title={post.title}
            body={post.body}
            />
        ))}
    </div>
  )
}

export default PageLoad