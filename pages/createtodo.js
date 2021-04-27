import Head from 'next/head'
import CreateForm from '../components/CreateForm'
import styles from '../styles/Home.module.css'
import stylesnavcontainer from '../styles/NavContainer.module.css'
import Link from 'next/link'
import styleslogo from '../styles/Logo.module.css'
import stylesham from '../styles/Hamburger.module.css'
import stylesmenu from '../styles/Menu.module.css'


export default function Createtodo() {
    const SignOut = (e) => {
        e.preventDefault()
        
        location.replace('/')
        document.cookie = `user=;`
    }

    return(
        <div className={styles.container}>
            <Head>
                <title>myTodo | Create Todo</title>
            </Head>

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
                
                <Link href="/todos">
                    <a><li>My Todos</li></a>
                </Link>

                    <a><li onClick={() => SignOut(e)}>Sign Out</li></a>
                
            </ul>
            <div id={stylesham.hamburger}>
                &#9776;
            </div>
        </div>

            <main className={styles.main}>
                <CreateForm />
            </main>

        
        </div>
    )
}

export async function getServerSideProps(context) {
    //get cookie using nextjs context
    const decodedCookie = context.req.headers.cookie
    if(!decodedCookie || decodedCookie == '' || decodedCookie == 'undefined' || decodedCookie == 'user=') {
        return {
            redirect: {
                destination: '/',
                permanent: false
            },
        }
    }

    return {
        props: {}
    }
}