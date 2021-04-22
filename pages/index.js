import Head from 'next/head'
import LoginForm from '../components/LoginForm'
import styles from '../styles/Home.module.css'
import stylesnavcontainer from '../styles/NavContainer.module.css'
import Link from 'next/link'
import styleslogo from '../styles/Logo.module.css'
import stylesham from '../styles/Hamburger.module.css'
import stylesmenu from '../styles/Menu.module.css'

export default function Login() {
    return(
        <div className={styles.container}>
            <Head>
                <title>myTodo | Login</title>
            </Head>

            <div id={stylesnavcontainer.navcontainer}>
            <div>
                <Link href="/">
                    <a id={styleslogo.logotext}>myTodo</a>
                </Link>
            </div>
            <ul id={stylesmenu.menu}>

                <Link href="/register">
                    <a><li>Register</li></a>
                </Link>
                
            </ul>
            <div id={stylesham.hamburger}>
                &#9776;
            </div>
        </div>

        <main className={styles.main}>
            <LoginForm />
        </main>

        </div>
    )
}