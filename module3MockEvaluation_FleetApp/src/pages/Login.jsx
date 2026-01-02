import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const emailRef = useRef(null)
    useEffect(()=>{
        emailRef.current.focus();
    },[])
    const navigate = useNavigate()
    const handleLogin = ()=>{
        if(!email || !password)
            return alert("Enter both email and password")
        if(email === "admin@gmail.com" && password === "admin1234"){
            alert("Login Success")
            localStorage.setItem('fleetLogin', "admin_logged_in")
            navigate("/admin")
        }
        else{
            alert("Wrong email or passsword")
        }
    }
  return (
    <div style={{marginTop:"100px", margin:"auto", textAlign:"center", display:"flex", flexDirection:"column", justifyContent:"center", gap:"15px", width:"30%"}}>
        <h2>Login Form</h2>
        <input type="email" ref={emailRef} placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login