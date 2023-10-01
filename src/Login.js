import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'

function Login() {
    const signIn = () => {
        //sign in stuff
    }
    const signInGuest = () => {
        //sign in stuff
    }

  return (
    <div className='login'>
        <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/512px-Facebook_f_logo_%282021%29.svg.png?20210818083032" alt="logo" className="src" />
        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" className="src" />
        </div>
        <div className="buttons">
        <Button type="submit" onCLick={signIn}>
        Sign in
        </Button>
        <Button type="submit" onCLick={signInGuest}>
        Sign in as guest
        </Button>
        </div>
    </div>
  )
}

export default Login
