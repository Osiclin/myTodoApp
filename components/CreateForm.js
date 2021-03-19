import Input from "./Input";
import Button from './Button'
import FormTitle from "./FormTitle";
import Textarea from "./Textarea";
import styles from '../styles/CreateForm.module.css'
import React, { useState } from 'react'

export default function CreateForm() {
    const [saveStatus, setSavestatus] = useState("Save")


    const CreateTodo = (e) => {
        e.preventDefault();
        setSavestatus('Saving...')

        const token = sessionStorage.getItem("token")
        const title = document.getElementsByClassName('title')[0].value
        const todoDetails = document.getElementById('todoDetails').value
        
    
        if(title !== "" && todoDetails !== "") {
            setSavestatus("Saving...")
    
            fetch("https://api.uatdrive.com:1012/todos", {
            method: "POST",
            body: JSON.stringify({
                Title: title,
                todoDetails: todoDetails,
            }),
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json; charset=UTF-8"
            },
            })
            .then(response => response.json())
            .then(data => (data))
            .catch(err => {
                if(err) {
                    setSavestatus('Oops!!! Not a user')
                } else {
            setTimeout(() => {
                setSavestatus('Saved')
            },3000)
            setSavestatus('Save')}})
        } else {
            setSavestatus('Save')
        }   
    }


    return(
        <form onSubmit={CreateTodo}>
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

