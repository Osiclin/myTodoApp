import styles from '../styles/TodoCard.module.css'

export default function Buttons() {
    return(
        <div className={styles.buttons}>
            <button className={styles.edit}>Edit</button>
            <button className={styles.delete}>Delete</button>
        </div>
    )
}