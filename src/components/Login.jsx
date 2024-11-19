import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import {auth} from '../Firebase'

const Login = ({onLogin}) => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
const [error, setError] = useState('')

    const handleLogin = async ()=>{
        try{
            await signInWithEmailAndPassword(auth , email, password)
            onLogin(true)
        }
        catch(err){
            setError('invalid email and password')
        }
    }
  return (
    <div>
        <h1>Login</h1>
        <form>
            <input type="emial" name='emial' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.target)}/>
            <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </form>
    </div>
  )
}

export default Login