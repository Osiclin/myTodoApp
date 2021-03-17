import Head from 'next/head'
import RegForm from '../components/RegForm'
import styles from '../styles/Home.module.css'
import stylesnavcontainer from '../styles/NavContainer.module.css'
import Link from 'next/link'
import styleslogo from '../styles/Logo.module.css'
import stylesham from '../styles/Hamburger.module.css'
import stylesmenu from '../styles/Menu.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <div id={stylesnavcontainer.navcontainer}>
            <div>
                <Link href="/">
                    <a id={styleslogo.logotext}>myTodo</a>
                </Link>
            </div>
            <ul id={stylesmenu.menu}>

                <Link href="/login">
                    <a><li>Login</li></a>
                </Link>
                
            </ul>
            <div id={stylesham.hamburger}>
                &#9776;
            </div>
        </div>
      <Head>
        <title>myTodo</title>
      </Head>

      <main className={styles.main}>
        <RegForm />
      </main>

      
    </div>
  )
}
