import Input from "./Input";
import Button from './Button'
import React, { useState, useEffect } from 'react'
import FormTitle from '../components/FormTitle'

export default function LoginForm() {
    const [token, setToken] = useState()
    const [user, setUser] = useState()
    const [loginStatus, setLoginStatus] = useState("Login")

    const Login = (e) => {
        e.preventDefault();
        
        const password = document.getElementsByClassName('password')[0].value
        const email = document.getElementsByClassName('email')[0].value
        setUser(email)
    
        if (password.length < 8) {
            alert('Password should be more than 7 letters')
        } else {
            setLoginStatus("Loading...")

            fetch("https://api.uatdrive.com:1012/users/login", {
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
                    setTimeout(() => {
                        setLoginStatus('Login')
                    }, 3000)
                } else {
                    setToken(data.token)
                    window.location.assign('/mytodos')
                }
            })
            .catch(err => console.log(err))
        }
                
    }

    useEffect(() => {
        sessionStorage.setItem("token", token)
        sessionStorage.setItem("user", user)           
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