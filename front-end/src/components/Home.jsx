import React from 'react'
import WorkInProgress from './WorkInProgress'
import { useNavigate } from 'react-router'

export default function Home() {
    const navigate=useNavigate();
    const auth=localStorage.getItem('user');
    const handleBtnClick=()=>{
       if(!auth){
        navigate('/login')
       }
       else{
        navigate('/workInProgress');
       }
    }
    const handleTestBtnClick=()=>{
       if(!auth){
        navigate('/login')
       }
       else{
        navigate('/test');
       }
    }
  return (
    <div className='home'>
        {/* Section 1 */}
        <section className='home-section1'>
            <section className='home-section-inner-1'>
                <p>EduSynth-A Dynamic E-Learning Experience</p>
            </section>
        </section>
        <section className='home-section2'>
            
            <div className='div-btn' onClick={handleTestBtnClick}><p>Test</p></div>
            <div className='div-btn' onClick={handleBtnClick}><p>Video Conferencing</p></div>
            <div className='div-btn' onClick={handleBtnClick}><p>Courses</p></div>
            <div className='div-btn' onClick={handleBtnClick}><p>Notes</p></div>
            <div className='div-btn' onClick={handleBtnClick}><p>Check Your Progress</p></div>
            <div className='div-btn' onClick={handleBtnClick}><p>Interview Questions</p></div>
            
        </section>
      
        
    </div>
  )
}
