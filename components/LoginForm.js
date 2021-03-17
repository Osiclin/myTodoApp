import Input from "./Input";
import Button from './Button'
import React, { useState, useEffect } from 'react'
import FormTitle from '../components/FormTitle'

export default function LoginForm() {
    const [token, setToken] = useState()
    const [loginStatus, setLoginStatus] = useState("Login")

    

    const Login = (e) => {
        e.preventDefault();
        setLoginStatus("Loading...")
        
        const password = document.getElementsByClassName('password')[0].value
        const email = document.getElementsByClassName('email')[0].value
    
        if (password.length < 8) {
            alert('Password should be more than 7 letters')
        } else {
                fetch("http://api.uatdrive.com:1010/users/login", {
                    method: "POST",
                    body: JSON.stringify({
                    email: email,
                    password: password
                    }),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if (!data.token) {
                        setLoginStatus('User not found')
                    } else {
                        setToken(data.token)
                        setLoginStatus('Loading...')
                        window.location.assign("/mytodos")
                    }
                })
                .catch(err => console.log(err)) 
            }
                
    }

    useEffect(() => {
        sessionStorage.setItem("token", token)                
    })


    return(
        <form onSubmit={Login}>
            <FormTitle title="Please Login to continue" />
            <Input for="email" class="email" label="Email" type="email" name="email" />
            <Input for="password" class="password" label="Password" type="password" name="password" />
            <Button value={loginStatus}/>
        </form>
    )
}