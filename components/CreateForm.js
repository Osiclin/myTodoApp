import Input from "./Input";
import Button from './Button'
import FormTitle from "./FormTitle";
import Textarea from "./Textarea";
import styles from '../styles/CreateForm.module.css'
import React, { useState } from 'react'

export default function CreateForm() {
    const [message, setMessage] = useState()
    const [msgclass, setMsgClass] = useState(styles.messagehide)


    const CreateTodo = (e) => {
        e.preventDefault();

        const token = sessionStorage.getItem("token")
        const title = document.getElementsByClassName('title')[0].value
        const todoDetails = document.getElementById('todoDetails').value
        
    
        if(title !== "" && todoDetails !== "") {
            setMsgClass(styles.saving)
            setMessage("Saving...")
            
            fetch("https://api.uatdrive.com:1012/todos", {
            method: "POST",
            body: JSON.stringify({
                Title: title,
                TodoDetails: todoDetails,
            }),
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json; charset=UTF-8"
            },
            })
            .then(response => response.json())
            .then(data => {
                (data)
                setTimeout(() => {
                    setMsgClass(styles.success)
                    setMessage('Saved')
                },2000)
                setTimeout(() => {
                    setMsgClass(styles.messagehide)
                },5000)
            })
            .catch(err => setMessage(err))
        } else {
            setMsgClass(styles.error)
            setMessage('Please fill out title & todo details')
        }   
    }

    return(
        <form onSubmit={CreateTodo}>
            <div className={msgclass}>
                <p>{message}</p>
            </div>
            <FormTitle title="Create Todo" />
            <div className={styles.datentitle}>
                <div>
                <label htmlFor="date">Date</label><br />
                <input htmlFor="date" className={styles.date} type="date" name="date" />
                </div>
                <Input for="title" class="title" label="Title" type="title" name="title" />
            </div>
            <Textarea id="todoDetails"/>
            <Button value="Save" />
        </form>
    )
}

