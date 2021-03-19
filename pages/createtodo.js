import Head from 'next/head'
import CreateForm from '../components/CreateForm'
import styles from '../styles/Home.module.css'
import stylesnavcontainer from '../styles/NavContainer.module.css'
import Link from 'next/link'
import styleslogo from '../styles/Logo.module.css'
import stylesham from '../styles/Hamburger.module.css'
import stylesmenu from '../styles/Menu.module.css'


export default function Createtodo() {
    return(
        <div className={styles.container}>
            <div id={stylesnavcontainer.navcontainer}>
            <div>
                <Link href="/">
                    <a id={styleslogo.logotext}>myTodo</a>
                </Link>
            </div>
            <ul id={stylesmenu.menu}>

                <Link href="/createtodo">
                    <a><li>Create Todo</li></a>
                </Link>
                
                <Link href="/mytodos">
                    <a><li>My Todos</li></a>
                </Link>

                <Link href="/">
                    <a><li>Sign Out</li></a>
                </Link>
                
            </ul>
            <div id={stylesham.hamburger}>
                &#9776;
            </div>
        </div>
            <Head>
                <title>myTodo | Create Todo</title>
            </Head>

            <main className={styles.main}>
                <CreateForm />
            </main>

        
        </div>
    )
}