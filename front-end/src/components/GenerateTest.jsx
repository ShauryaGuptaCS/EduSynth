import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
export default function GenerateTest() {
    const navigate=useNavigate();
  useEffect(()=>{
    const auth=localStorage.getItem('user');
    
    if(!auth){
        navigate('/login');
    }
},[navigate]);
  return (
    <div>
      <h1>Start Generating Test</h1>
    </div>
  )
}
