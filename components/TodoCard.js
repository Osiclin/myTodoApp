import TodoDate from '../components/TodoDate'
import TodoTitle from './TodoTitle'
import TodoStatus from './TodoStatus'
import TodoDetails from './TodoDetails'
import React, { useState, useEffect } from 'react'
import styles from '../styles/TodoCard.module.css'
import Blob from './Blob'
import Link from 'next/link'
import FormTitle from './FormTitle'

export default function TodoCard() {
    const [todos, setTodos] = useState([])
    const [user, setUser] = useState()

    const  DeleteTodo = (id) => {
        const token = sessionStorage.getItem("token")

        fetch(`https://api.uatdrive.com:1012/todos/${id}`, {
            method: "DELETE",
            headers: {
            "Authorization": `Bearer ${token}`,
            }
        }).then(response => response.json())
    }

    const EditTodo = () => {
        alert('hey')
    }

    useEffect(() => {
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
            setTodos(todos.data)
            console.log(todos)})
        .catch(err => console.log(err))
    }, [todos])

    useEffect(() => {
        const user = sessionStorage.getItem("user");
        setUser(user)
    }, [])

    return(
        <>
            {/* <FormTitle title={user + "'s" + " Todo"} /> */}
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
                            <Link href="/todos/edit">
                                <a>
                                    <button className={styles.edit} onClick={() => EditTodo(todo._id)}>Edit</button>
                                </a>
                            </Link>
                            <button className={styles.delete} onClick={() => DeleteTodo(todo._id)}>Delete</button>
                        </div>
                    </li>
                    
                )}
            </ul>
        </>
    )
}

