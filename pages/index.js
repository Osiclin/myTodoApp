import Head from 'next/head'
import FormTitle from '../components/FormTitle'
import RegForm from '../components/RegForm'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>myTodo</title>
      </Head>

      <main className={styles.main}>
        <RegForm />
      </main>

      
    </div>
  )
}
