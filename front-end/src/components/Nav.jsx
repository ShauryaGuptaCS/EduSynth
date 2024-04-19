import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {
    
   
    const navigate=useNavigate();
    const auth=localStorage.getItem('user');
    
    const handleLogout=(e)=>{
        e.preventDefault();
        localStorage.clear();
        navigate('/');
    }
  return (
    <div className='nav'>
      <h1 className="nav-heading">EduSynth</h1>
      <ul className="nav-link">
        
        <li><Link to="/">Home</Link></li>
        <li><Link to="/test">Test</Link></li>
        <li><Link to="/videoConferencing">Video Conferencing</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/notes">Notes</Link></li>
        <li><Link to="/checkYourProgress">Check Your Progress</Link></li>
        <li><Link to="/interviewQuestion">Interview Questions</Link></li>
        <li>
        {
          auth?
          <Link to="#" onClick={handleLogout}>logout ({JSON.parse(auth).name})</Link>
          :
          <Link to="/login">Login</Link>
        }
        </li>
      </ul>
    </div>
  )
}
