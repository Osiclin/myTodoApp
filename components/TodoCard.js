import TodoDate from '../components/TodoDate'
import TodoTitle from './TodoTitle'
import TodoStatus from './TodoStatus'
import TodoDetails from './TodoDetails'
import React, { useState, useEffect } from 'react'
import styles from '../styles/TodoCard.module.css'
import Blob from './Blob'
import FormTitle from './FormTitle'
import { useRouter } from 'next/router'

export default function TodoCard() {
    const [loading, setLoading] = useState(true)
    const [todos, setTodos] = useState([])
    const [user, setUser] = useState()
    const router = useRouter()

    const  DeleteTodo = (id) => {
        const token = sessionStorage.getItem("token")
        const newTodos = todos.filter(todo => todo._id !== id)

        fetch(`https://api.uatdrive.com:1012/todos/${id}`, {
            method: "DELETE",
            headers: {
            "Authorization": `Bearer ${token}`,
            }
        }).then(response => {
            response.json()
            setTodos(newTodos)
        })
    }

    useEffect(() => {
        let mounted = true
        const token = sessionStorage.getItem("token")

        fetch("https://api.uatdrive.com:1012/todos/current/user", {
            method: "GET",
            headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then(response => response.json())
        .then(todos => {
            if (mounted) {
                setTodos(todos.data)
            }
        })
        .catch(err => console.log(err))

        setLoading(false)
        return () => mounted = false
    }, [])

    useEffect(() => {
        const user = sessionStorage.getItem("user");
        setUser(user)
    }, [])

    return(
        <>
            <FormTitle title={`${user}'s Todo`} />
            <ul className={styles.todoclasscontainer}>
                
                {todos.map((todo) => 
                    
                    <li className={styles.todocard} key={todo._id}>
                        <Blob />
                        <TodoStatus isCompleted={todo.Status} />
                        <TodoDate date={new Date(todo.createdAt).toLocaleDateString(undefined, "short")}/>
                        <TodoTitle title={todo.Title}/>
                        <TodoDetails details={todo.TodoDetails} />
                        <div className={styles.buttons}>
                            <button className={styles.edit} onClick={() => router.push(`/todos/${todo._id}`)}>Edit</button>
                            <button className={styles.delete} onClick={() => DeleteTodo(todo._id)}>Delete</button>
                        </div>
                    </li>
                    
                )}
            </ul>
            <div style={{textAlign: "center"}}>{loading ? <p>Loading...</p> : <p></p>}</div>
        </>
    )
}

