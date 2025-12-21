import React from 'react'
import PageLoad from './PageLoad'
import { PostProvider } from "./PostsContext";
const App = () => {
  return (
    <>
      <div>Posts</div>
      <PostProvider>
        <PageLoad />
      </PostProvider>
    </>
  )
}

export default App