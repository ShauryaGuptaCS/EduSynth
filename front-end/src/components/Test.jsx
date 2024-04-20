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
  const handleGenerateBtn=()=>{
    navigate('/generateTest')
  }
  return (
    <div className='test'>
      <section className="test-section-a">
        <button className="test-section-a-btn" onClick={handleGenerateBtn}><p>Generate test</p></button>
        <div className="test-section-a-content">
          <h1>Generate Test</h1>
          <p>User can generate their own test</p>
        </div>
      </section>
      
    </div>
  )
}
