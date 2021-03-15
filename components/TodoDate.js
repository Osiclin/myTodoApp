import styles from '../styles/TodoCard.module.css'

export default function Date(props) {
    return(
        <div>
            <p className={styles.date}>{props.date}</p>
        </div>
    )
}