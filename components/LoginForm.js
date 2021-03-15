import Input from "./Input";
import Button from './Button'
import FormTitle from "./FormTitle";
import React, { useState, useEffect } from 'react'

export default function LoginForm() {
    const [token, setToken] = useState('')

    useEffect(() => {
        const getToken = sessionStorage.getItem("token")
        setToken(getToken)
    })


    return(
        <form onSubmit={Login}>
            <FormTitle title="Please Login to continue" />
            <Input for="email" class="email" label="Email" type="email" name="email" />
            <Input for="password" class="password" label="Password" type="password" name="password" />
            <Button value="Login" />
        </form>
    )
}

const Login = (e) => {
    e.preventDefault();

    const password = document.getElementsByClassName('password')[0].value
    const email = document.getElementsByClassName('email')[0].value

    if(password.length < 8) {
        alert('Password should be more than 7 letters')
    } else {
        fetch("https://api.uatdrive.com:1010/users/login", {
            method: "POST",
            body: JSON.stringify({
              "email": email,
              "password": password
            }),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(res => res.json())
        .then(data => sessionStorage.setItem("token", data.token))
        .catch(err => console.log(err))
    }

    window.location.assign('/mytodos')
    
}