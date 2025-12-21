import React, { useContext, useEffect, useState } from 'react'
import ToPostCard from './ToPostCard'
import PostsContext from './PostsContext'

const PageLoad = () => {
    const { posts } = useContext(PostsContext)
  return (
    <div>
        <h2 style={{textAlign:"center"}}>List of Posts</h2>
        {posts.map(post => (
            <ToPostCard 
            id={post.id}
            key={post.id}
            title={post.title}
            body={post.body}
            />
        ))}
    </div>
  )
}

export default PageLoad