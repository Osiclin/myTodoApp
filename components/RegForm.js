import Button from "./Button";
import FormTitle from "./FormTitle";
import Input from "./Input";
import React, { useState } from 'react';
import styles from '../styles/CreateForm.module.css'

export default function RegForm() {
    const [message, setMessage] = useState()
    const [msgclass, setMsgClass] = useState(styles.messagehide)

    const Register = (e) => {
        e.preventDefault();
    
        const password = document.getElementsByClassName('password')[0].value
        const retype = document.getElementsByClassName('retype')[0].value
        const email = document.getElementsByClassName('email')[0].value

        if(password.length < 8) {
            setMsgClass(styles.error)
            setMessage('Password must be more than 7 letters')
            return
        } else if(password !== retype) {
            setMsgClass(styles.error)
            setMessage('Passwords must be the same')
            return
        } else {
            setMsgClass(styles.saving) //Registering not saving
            setMessage("Processing...")
        
            fetch('https://api.uatdrive.com:1012/users/signup', {
                method: "POST",
                body: JSON.stringify({
                    "email": email,
                    "password": password
                }),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                  }
                })
                .then(res => {
                    res.json()
                    setTimeout(() => {
                        setMsgClass(styles.success)
                        setMessage('User created successfully')
                    }, 2000) 
                })
                .then(data => console.log(data))
                .catch(err => console.log(err))
                // setTimeout(() => {
                //     window.location.assign('/login')
                // }, 4000)  

        }   
    }

    return(
        <form onSubmit={Register}>
            <div className={msgclass}>
                <p>{message}</p>
            </div>
            <FormTitle title="Please Register to continue" />
            <Input class="email" for="email" label="Email" type="email" name="email" required/>
            <Input class="password" for="password" label="Password" type="password" name="password" required/>
            <Input class="retype" for="retypepassword" label="Retype Password" type="password" name="password" required/>
            <Button value="Register" />
        </form>
    )
}

