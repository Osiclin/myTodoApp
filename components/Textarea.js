import styles from '../styles/Textarea.module.css'

export default function Textarea(props) {
    return(
        <div>
            <label>Todo Details</label>
            <textarea className={styles.textarea} id={props.id} rows="6"></textarea>
        </div>
    )
}