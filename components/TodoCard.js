import TodoDate from '../components/TodoDate'
import TodoTitle from './TodoTitle'
import TodoStatus from './TodoStatus'
import TodoDetails from './TodoDetails'
import React, { useState, useEffect } from 'react'
import styles from '../styles/TodoCard.module.css'

export default function TodoCard() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const token = sessionStorage.getItem("token")

        fetch("http://api.uatdrive.com:1010/todos?page=2", {
        method: "GET",
        headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json; charset=utf-8"
        }
        })
        .then(response => response.json())
        .then(todos => setTodos(todos.data))
        .catch(err => console.log(err))

        console.log(todos)
    }, [])

    return(
        <>
        {todos.map((todo) => 
            <div className={styles.todocard}>
                    <TodoDate date="12/3/2021"/>
                    <TodoTitle title={todo.Title}/>
                    <TodoDetails details={todo.todoDetails} />
                    <TodoStatus isCompleted="Complete" />
                </div>
        )}
        </>
    )
}