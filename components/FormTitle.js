import styles from '../styles/FormTitle.module.css'

export default function FormTitle(props) {
    return(
        <div className={styles.titlediv}>
            <h2 className={styles.title}>{props.title}</h2>
        </div>
    )
}