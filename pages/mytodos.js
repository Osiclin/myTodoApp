import Head from 'next/head'
import TodoCard from '../components/TodoCard'
import FormTitle from '../components/FormTitle'
import styles from '../styles/Home.module.css'
import styling from '../styles/TodoCard.module.css'

export default function Mytodos() {
    return(
        <div className={styles.container}>
            <Head>
                <title>myTodo | My Todos</title>
            </Head>

            <main className={styles.maintodo}>
                <FormTitle title="My Todos" />
                <div className={styling.todocardwrapper}>
                    <TodoCard />
                </div>
            </main>
        
        </div>
    )
}