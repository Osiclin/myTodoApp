import Input from "./Input";
import Button from './Button'
import FormTitle from "./FormTitle";
import Textarea from "./Textarea";
import styles from '../styles/CreateForm.module.css'
import React, { useState, useEffect } from 'react'

export default function EditForm() {
    const [path, setPath] = useState()
    const [token, setToken] = useState()
    const [msgclass, setMsgClass] = useState(styles.messagehide)
    const [message, setMessage] = useState()
    const [state, setState] = useState({
        title: '',
        details: ''
    })
    
    const handleChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name
        setState({
            ...state,
            [name]: value
        })
    }
    
    const Update = (e) => {
        e.preventDefault()

        if (state.title !== ''  && state.details !== '') {
            setMsgClass(styles.saving)
            setMessage('Editing...')
            fetch(`https://api.uatdrive.com:1012${path}`, {
                method: "PUT",
                headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    Title: state.title,
                    todoDetails: state.details
                })
            })
            .then(response => {
                response.json()
                setTimeout(() => {
                    setMsgClass(styles.success)
                    setMessage('Edited')
                },2000)
                setTimeout(() => {
                    setMsgClass(styles.messagehide)
                },5000)
            })
            .catch(err => console.log(err))
        }
    }//

    useEffect(() => {
        const getToken = sessionStorage.getItem("token")
        setToken(getToken)
        const pathName = window.location.pathname
        setPath(pathName)

        fetch(`https://api.uatdrive.com:1012${pathName}`, {
            method: "GET",
            headers: {
            "Authorization": `Bearer ${getToken}`,
            "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(response => response.json())
        .then(todo => {
            setState({
                title: todo.data.Title,
                details: todo.data.TodoDetails
            }) 
        })
        .catch(err => console.log(err))
        
    }, [])

    return(
        <form onSubmit={Update}>
            <div className={msgclass}>
                <p>{message}</p>
            </div>
            <FormTitle title="Edit Todo" />
            <div className={styles.datentitle}>
                <div>
                <label htmlFor="date">Date</label><br />
                <input htmlFor="date" className={styles.date} type="date" name="date" />
                </div>
                <Input for="title" class="title" label="Title" type="text" name="title" value={state.title} onChange={handleChange} />
            </div>
            <Textarea id="todoDetails" name="details" value={state.details} onChange={handleChange} />
            <Button value="Update" />
        </form>
    )
}
