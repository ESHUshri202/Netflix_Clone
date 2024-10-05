import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
const Login = () => {
  return (
    <div className='login'>
        <img src={logo} alt='' className='login-logo' />
        <div className='logo-form'>
          <h1>Sign Up</h1>
          <form>
            <input type='text' placeholder='Your name' />
            <input type='email' placeholder='email' />
            <input type='password' placeholder='password' />
            <button>Sign Up</button>
            <div className='form-help'>
              <div className='remenber'>
              <input type='checkbox'/>
              <label htmlFor=''>Remenber Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Login