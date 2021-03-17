import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
    return(
        <div className={styles.layout}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            { children }
        </div>
    )
}