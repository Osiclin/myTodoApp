import Head from 'next/head'
import FormTitle from '../components/FormTitle'
import LoginForm from '../components/LoginForm'
import CreateForm from '../components/CreateForm'
import styles from '../styles/Home.module.css'

export default function Createtodo() {
    return(
        <div className={styles.container}>
            <Head>
                <title>myTodo | Create Todo</title>
            </Head>

            <main className={styles.main}>
                <CreateForm />
            </main>

        
        </div>
    )
}