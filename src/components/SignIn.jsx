import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../services/auth';
import { useDispatch } from 'react-redux';

function SignIn() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleSignin = async (event) => {
    event.preventDefault()

    const user = await authService.signin({
      username: username,
      password: password
    })
    console.log(user)


    dispatch({
      type: 'SET_USER',
      payload: user
    })

    setUsername('')
    setPassword('')
    navigate('/dashbord')

  }
  return (
    <div>
      <h3>Login</h3>

      <form onSubmit={handleSignin}>
        <div>
          <input
            type='username'
            name='username'
            placeholder='username..'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <input
            type='password'
            name='password'
            placeholder='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
      <p>don't have an account <Link to='/signup'>Register</Link></p>
    </div>
  )
}

export default SignIn