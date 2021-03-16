import Head from 'next/head'
import LoginForm from '../components/LoginForm'
import styles from '../styles/Home.module.css'

export default function Login() {
    return(
        <div className={styles.container}>
        <Head>
            <title>myTodo | Login</title>
        </Head>

        <main className={styles.main}>
            <LoginForm />
        </main>

        </div>
    )
}