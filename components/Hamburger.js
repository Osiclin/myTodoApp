import styles from '../styles/Hamburger.module.css'


export default function Hamburger() {
    const openNav = () => {
        const menu = document.getElementById('menu')
        console.log(menu)
    }


    return(
        <div id={styles.hamburger} onClick={openNav}>
            &#9776;
        </div>
    )
}