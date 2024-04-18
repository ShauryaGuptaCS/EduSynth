import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Signup() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [rePassword,setRePassword]=useState('');

  const handleSignUp=async (e)=>{
    e.preventDefault(); 
    console.log(email);
    if(!email || !password || rePassword){
      return;
    }
    if(password === rePassword){
      return;
    }

    if(password.length < 8){
      return;
    }
    
    let result=await fetch(`http://localhost:4500/signup`,{
      method:'post',
      body:JSON.stringify({email,password}),
      headers:{
          'Content-Type':'application/json'
      }
  })
  result=await result.json();
  console.log(result);
  }
  return (
    <div className='signup'>
          <form className='signup-form'>
            
              <p>SignUp Page</p>
              <label>Email</label>
              <input type="text" 
              value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              <label>Password</label>
              <input type="password" 
              value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              <label>Re-enter Password</label>
              <input type="password" 
              value={rePassword} onChange={(e)=>{setRePassword(e.target.value)}}/>
              <div>
              Already Registered?<Link to="/login"> Login</Link>
              </div>
              <button onClick={handleSignUp}>Sign Up</button>
              <div>
              <Link to="/"> Go To Home Page</Link>
              </div>
          </form>
      
    </div>
  )
}
