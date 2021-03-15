import Link from 'next/link'
import styles from '../styles/Menu.module.css'

export default function Menu() {
    return(
        <ul id={styles.menu}>

            <Link href="/login">
                <a><li>Login</li></a>
            </Link>

            <Link href="/createtodo">
                <a><li>Create Todo</li></a>
            </Link>
            
            <Link href="/mytodos">
                <a><li>My Todos</li></a>
            </Link>
            
        </ul>
    )
}