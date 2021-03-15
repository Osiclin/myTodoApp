import Head from 'next/head'
import NavContainer from '../components/NavContainer'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
    return(
        <div className={styles.layout}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            </Head>
            <NavContainer />
            { children }
        </div>
    )
}