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
    // const [state, setState] = useState({
    //     title: '',
    //     details: ''
    // })
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    
    const handleTitle = (e) => {
        setTitle(e.target.value)
        console.log(title)
    }

    const handleDetails = (e) => {
        setDetails(e.target.value)
        console.log(details)
    }
    
    const Update = (e) => {
        e.preventDefault()

        if (title !== '' && details !== '') {
            setMsgClass(styles.saving)
            setMessage('Editing...')
            fetch(`https://api.uatdrive.com:1012${path}`, {
                method: "PUT",
                headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    Title: title,
                    TodoDetails: details
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
        let mounted = true

        if (mounted) {
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
                setTitle(todo.data.Title)
                setDetails(todo.data.TodoDetails)    
            })
            .catch(err => console.log(err))
        }
        mounted = false
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
                <Input for="title" class="title" label="Title" type="text" name="title" value={title} onChange={(e) => handleTitle(e)} />
            </div>
            <Textarea id="todoDetails" name="details" value={details} onChange={(e) => handleDetails(e)} />
            <Button value="Update" />
        </form>
    )
}
