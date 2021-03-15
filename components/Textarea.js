import styles from '../styles/Textarea.module.css'

export default function Textarea() {
    return(
        <div>
            <label>Todo Details</label>
            <textarea className={styles.textarea}rows="6"></textarea>
        </div>
    )
}