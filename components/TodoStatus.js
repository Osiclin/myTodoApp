import styles from '../styles/TodoCard.module.css'

export default function TodoStatus(props) {
    return(
        <div className={styles.statuswrapper}>
            <p className={styles.status}>{props.isCompleted}</p>
        </div>
    )
}