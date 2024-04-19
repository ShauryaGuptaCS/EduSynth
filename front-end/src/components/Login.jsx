import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
export default function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState(false);
  const [errorMsg,setErrorMsg]=useState('');

  const navigate=useNavigate();
  const handleLogin=async(e)=>{
    e.preventDefault(); 
    console.log(email);
    if(!email || !password ){
      setErrorMsg('Fill email and password ');
      setError(true);
      return;
    }
    
    console.log(password.length);
    if(password.length !== 8){
      setErrorMsg('enter password of eight length')
      setError(true);
      return;
    }
    setError(false);
    let result=await fetch(`http://localhost:4500/login`,{
      method:'post',
      body:JSON.stringify({email,password}),
      headers:{
          'Content-Type':'application/json'
      }
    })
  
  result=await result.json();
  if(result.email){
    setEmail('');
    setPassword('');
    alert('Login Successful');
    localStorage.setItem('user',JSON.stringify(result));
    navigate('/test');
  }
  else{
    setError(true);
    setErrorMsg(JSON.stringify(result));
  }
  
}
  return (
    <div className='login'>
          <form className='login-form'>
            
              <p>Login Page</p>
              {error && <span>{errorMsg}</span>}
              <label>Email</label>
              <input type="text" 
              value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              <label>Password</label>
              <input type="password" 
              value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              <div>
              Create New user?<Link to="/signup"> Signup</Link>
              </div>
              <button onClick={handleLogin}>Login</button>
              <div>
              <Link to="/"> Go To Home Page</Link>
              </div>
          </form>
      
    </div>
  )
}
