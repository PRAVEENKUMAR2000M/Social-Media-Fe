import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import authService from '../services/auth';

function SignUp() {

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (event) => {
        event.preventDefault()

        const user = {
            username,
            name,
            password
        }
        console.log(user)


        authService.signup(user)
        setUsername('');
        setName('');
        setPassword('');
    }
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSignup}>
                <div>
                    <input
                        type='text'
                        name='username'
                        placeholder='username...'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <input
                        type='name'
                        name='name'
                        placeholder='name...'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <input
                        type='password'
                        name='password'
                        placeholder='password...'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <button type='submit'>register</button>
                </div>
            </form>
            <p>Already register <Link to='/signin'>Login</Link></p>
        </div>
    )
}

export default SignUp