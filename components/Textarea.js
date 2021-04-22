import styles from '../styles/Textarea.module.css'

export default function Textarea(props) {
    return(
        <div>
            <label>Todo Details</label>
            <textarea className={styles.textarea} name={props.name} id={props.id} rows="6" value={props.value} onChange={props.onChange} ></textarea>
        </div>
    )
}