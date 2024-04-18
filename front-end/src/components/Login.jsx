import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className='login'>
          <form className='login-form'>
            
              <p>Login Page</p>
              <label>Email</label>
              <input type="text" />
              <label>Password</label>
              <input type="password" />
              <div>
              Create New user?<Link to="/signup"> Signup</Link>
              </div>
              <button>Login</button>
              <div>
              <Link to="/"> Go To Home Page</Link>
              </div>
          </form>
      
    </div>
  )
}
