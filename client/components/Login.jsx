import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', {email, password})
    .then(result => {console.log(result)
      if(result.data == "success"){
        navigate('/home')
      }
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input 
            type="email"
            placeholder='enter email'
            autoComplete='off'
            name='email'
            className='form-control rounded-0'
            onChange={(e) => setEmail(e.target.value)}
             />
          </div>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Password</strong></label>
            <input 
            type="password"
            placeholder='enter password'
            name='password'
            className='form-control rounded-0'
            onChange={(e) => setPassword(e.target.value)}
             />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>
            Login</button>
        </form>
        <p>Already have an account</p>
        <Link to="/register" className='btn btn-default border w-100 bg-ligth rounded-0 text-decoration-none'>
        Sign Up</Link>
      </div>
    </div>
  )
}

export default Login