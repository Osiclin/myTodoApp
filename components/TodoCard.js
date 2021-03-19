import TodoDate from '../components/TodoDate'
import TodoTitle from './TodoTitle'
import TodoStatus from './TodoStatus'
import TodoDetails from './TodoDetails'
import React, { useState, useEffect } from 'react'
import styles from '../styles/TodoCard.module.css'
import Link from 'next/link'

export default function TodoCard() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const token = sessionStorage.getItem("token")

        fetch("http://api.uatdrive.com:1010/todos", {
        method: "GET",
        headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json; charset=utf-8"
        }
        })
        .then(response => response.json())
        .then(todos => setTodos(todos.data))
        .catch(err => console.log(err))
    }, [])

    return(
        <ul className={styles.todoclasscontainer}>
        {todos.map((todo) => 
            <Link href="/" key={todo._id}>
                <a>
                    <li className={styles.todocard} >
                        <TodoDate date={new Date(todo.createdAt).toLocaleDateString(undefined, "short")}/>
                        <TodoTitle title={todo.Title}/>
                        <TodoDetails details={todo.todoDetails} />
                        <TodoStatus isCompleted="Complete" />
                    </li>
                </a>
            </Link>
            )}
        </ul>
    )
}