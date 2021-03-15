import styles from '../styles/TodoCard.module.css'

export default function TodoDetails(props) {
    return(
        <div>
            <p className={styles.details}>{props.details}</p>
        </div>
    )
}