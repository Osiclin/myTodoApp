import styles from '../styles/TodoCard.module.css'

export default function TodoTitle(props) {
    return(
        <div>
            <h3 className={styles.title}>{props.title}</h3>
        </div>
    )
}