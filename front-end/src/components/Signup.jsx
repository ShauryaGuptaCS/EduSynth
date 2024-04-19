import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Signup() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const [error,setError]=useState(false);
  const [errorMsg,setErrorMsg]=useState('');
  const [name,setName]=useState('');

  const handleSignUp=async (e)=>{
    e.preventDefault(); 
    console.log(email);
    if(!email || !password || !confirmPassword || !name){
      setErrorMsg('Fill email , password , name and rePassword properly');
      setError(true);
      return;
    }
    if(!(password === confirmPassword)){
      setErrorMsg('password and confirm password not matching');
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
    let result=await fetch(`http://localhost:4500/signup`,{
      method:'post',
      body:JSON.stringify({email,password,name}),
      headers:{
          'Content-Type':'application/json'
      }
  })
  result=await result.json();
  if(result.email){
    setEmail('');
    setConfirmPassword('');
    setPassword('');
    alert('Signup Successful');
  }
  else{
    setError(true);
    setErrorMsg(JSON.stringify(result));
  }
  
  }
  return (
    <div className='signup'>
          <form className='signup-form'>
              
              <p>SignUp Page</p>
              {error && <span>{errorMsg}</span>}
              <label>Name<span>*</span></label>
              <input type="text" 
              value={name} onChange={(e)=>{setName(e.target.value)}}/>
              <label>Email<span>*</span></label>
              <input type="text" 
              value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              <label>Password<span>*</span></label>
              <input type="password" 
              value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              <label>Confirm Password<span>*</span></label>
              <input type="password" 
              value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
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
