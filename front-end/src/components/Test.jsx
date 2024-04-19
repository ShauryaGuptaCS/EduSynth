import React from 'react'
import { useNavigate  } from 'react-router';
import { useEffect } from 'react';

export default function Test() {
  const navigate=useNavigate();
  useEffect(()=>{
    const auth=localStorage.getItem('user');
    
    if(!auth){
        navigate('/login');
    }
},[navigate]);
  return (
    <div>
      <h1>Test Page</h1>
    </div>
  )
}
