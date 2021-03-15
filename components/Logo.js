import Link from 'next/link'
import styles from '../styles/Logo.module.css'

export default function Logo() {
    return(
        <div>
            <Link href="/">
                <a id={styles.logotext}>myTodo</a>
            </Link>
        </div>
    )
}