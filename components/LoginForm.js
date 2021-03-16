import Input from "./Input";
import Button from './Button'
import FormTitle from "./FormTitle";
import React, { useState, useEffect } from 'react'

export default function LoginForm() {
    const [token, setToken] = useState('')
    const [loginStatus, setLoginStatus] = useState("Login")

    

    const Login = (e) => {
        e.preventDefault();
        setLoginStatus("Loading...")
        const password = document.getElementsByClassName('password')[0].value
        const email = document.getElementsByClassName('email')[0].value
    
        if(password.length < 8) {
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
            .then(res => {
                if(!res.ok) {
                    setLoginStatus('Oops!!! Not a user') 
                } else { 
                    res.json()
                    }})
            .then(data => sessionStorage.setItem("token", data.token))
            .catch(err => {
                if(err) {
                setLoginStatus('Login')
            } else {
                window.location.assign("/mytodos")
            }})  
        }
                
    }



    useEffect(() => {
        const getToken = sessionStorage.getItem("token")
        setToken(getToken)
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