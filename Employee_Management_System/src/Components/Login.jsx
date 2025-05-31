import React from 'react'


const Login = () => {
  return (
    <div>
        <div>
            <h2>Login Page</h2>
            <form>
                <div>
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input type='email' name='email' autoComplete='off' placeholder='Enter Email'
                    className='form-control rounded-0'/>
                </div>
                <div>
                    <label htmlFor="password"><strong>Password:</strong></label>
                    <input type='password' name='email' autoComplete='off' placeholder='Enter Password'
                    className='form-control rounded-0'/>
                </div>
            </form>
        </div>
    </div>
  )
}
export default Login
