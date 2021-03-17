import Button from "./Button";
import FormTitle from "./FormTitle";
import Input from "./Input";
import React, { useState } from 'react';

export default function RegForm() {
    const [regstatus, setRegstatus] = useState('Register')


    const Register = (e) => {
        e.preventDefault();
    
        const password = document.getElementsByClassName('password')[0].value
        const retype = document.getElementsByClassName('retype')[0].value
        const email = document.getElementsByClassName('email')[0].value

        if(password.length < 8) {
            alert('Password must be more than 7 letters')
        } else if(password !== retype) {
            alert('Passwords must be the same')
        }
        else {
            setRegstatus("Processing...")
        
            fetch('http://api.uatdrive.com:1010/users/signup', {
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
                .then(data => console.log(data))
                .catch(err => console.log(err))
                
            }
        
        window.location.assign("/login")
    }


    return(
        <form onSubmit={Register}>
            <FormTitle title="Please Register to continue" />
            <Input class="email" for="email" label="Email" type="email" name="email" required/>
            <Input class="password" for="password" label="Password" type="password" name="password" required/>
            <Input class="retype" for="retypepassword" label="Retype Password" type="password" name="password" required/>
            <Button value={regstatus} />
        </form>
    )
}

