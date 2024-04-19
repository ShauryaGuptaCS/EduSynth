import React from 'react'
import { useNavigate } from 'react-router'

export default function Home() {
    const navigate=useNavigate();
    const handleTestBtn=()=>{
      
      navigate('/test');
       
    }
    const handleVideoBtn=()=>{
       
      navigate('/videoConferencing');
       
    }
    const handleCoursesBtn=()=>{
       
      navigate('/courses');
       
    }
    const handleNotesBtn=()=>{ 

      navigate('/notes');

    }
    const handleInterviewBtn=()=>{

        navigate('/interviewQuestion');

    }
    const handleProgressBtn=()=>{

        navigate('/checkYourProgress');

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
            
            <div className='div-btn' onClick={handleTestBtn}><p>Test</p></div>
            <div className='div-btn' onClick={handleVideoBtn}><p>Video Conferencing</p></div>
            <div className='div-btn' onClick={handleCoursesBtn}><p>Courses</p></div>
            <div className='div-btn' onClick={handleNotesBtn}><p>Notes</p></div>
            <div className='div-btn' onClick={handleProgressBtn}><p>Check Your Progress</p></div>
            <div className='div-btn' onClick={handleInterviewBtn}><p>Interview Questions</p></div>
            
        </section>
      
        
    </div>
  )
}
