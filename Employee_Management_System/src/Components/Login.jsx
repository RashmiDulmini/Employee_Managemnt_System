import React, { useState } from "react"
import './style.css'
import axios from 'axios'



const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/auth/adminlogin', values)
        .then(result => console.log(result))
        .catch(err => console.log(err))

    }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-25 border loginForm'>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input type='email' name='email' autoComplete='off' placeholder='Enter Email'
                    onChange={(e) => setValues({...values,email : e.target.value})}className='form-control rounded-0'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password"><strong>Password:</strong></label>
                    <input type='password' name='email' autoComplete='off' placeholder='Enter Password'
                    onChange={(e) => setValues({...values,password : e.target.value})}className='form-control rounded-0'/>
                </div>
                <button className='btn btn-success w-100 rounded-0 mb-2'>Login</button>
                 <div className="mb-1">
                    <input type="checkbox" name="tick" id="tick" className="me-2" />
                    <label htmlFor="password">You are agree with terms & conditions</label>
                    
                </div>
            </form>
        </div>
    </div>
  )
}
export default Login
