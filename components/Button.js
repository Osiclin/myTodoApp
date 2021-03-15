import styles from '../styles/Button.module.css'

export default function Button(props) {
    return(
        <div className={styles.buttoncontainer}>
            <input className={styles.submit} type="submit" value={props.value} />
        </div>
    )
}