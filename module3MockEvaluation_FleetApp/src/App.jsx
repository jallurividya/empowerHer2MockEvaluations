import React from 'react'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin'
import ProtectRoute from './ProtectRoute'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={
            <ProtectRoute>
              <Admin />
            </ProtectRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App