import Input from "./Input";
import Button from './Button'
import React, { useState, useEffect } from 'react'
import FormTitle from '../components/FormTitle'
import styles from '../styles/CreateForm.module.css'

export default function LoginForm() {
    const [token, setToken] = useState()
    const [message, setMessage] = useState()
    const [msgclass, setMsgClass] = useState(styles.messagehide)

    const Login = (e) => {
        e.preventDefault();
        
        const password = document.getElementsByClassName('password')[0].value
        const email = document.getElementsByClassName('email')[0].value
    
        if (password.length < 8) {
            setMsgClass(styles.error)
            setMessage('Password should be more than 7 letters')
        } else {
            setMsgClass(styles.saving) //loading not saving
            setMessage("Loading...")

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
                    setMsgClass(styles.error)
                    setMessage('User not found')
                    setTimeout(() => {
                        setMsgClass(styles.messagehide)
                    }, 3000)
                } else {
                    setToken(data.token)
                    setMsgClass(styles.success)
                    setMessage('User logged in')
                    document.cookie = `user=${email}`
                    location.assign('/todos') 
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
            <div className={msgclass}>
                <p>{message}</p>
            </div>
            <FormTitle title="Please Login to continue" />
            <Input for="email" class="email" label="Email" type="email" name="email" />
            <Input for="password" class="password" label="Password" type="password" name="password" />
            <Button value="Login"/>
        </form>
    )
}