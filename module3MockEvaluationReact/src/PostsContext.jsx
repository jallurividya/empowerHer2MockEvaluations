import React, { Children, createContext, useEffect, useState } from 'react'
export const PostsContext = createContext();
const PostProvider = ({children}) => {
    const [posts, setPosts] = useState([])
    useEffect(()=> {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data.slice(0,20))
            })
        },[]);

    const deletePost = (id) => {
        setPosts(posts.filter((post)=>post.id!=id))
    }
  return (
    <PostsContext.Provider value={{ posts,deletePost }}>
        {children}
    </PostsContext.Provider>
  )
}

export default PostProvider