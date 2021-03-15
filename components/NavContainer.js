import Logo from '../components/Logo'
import Hamburger from '../components/Hamburger'
import Menu from '../components/Menu'
import styles from '../styles/NavContainer.module.css'

export default function NavContainer() {
    return(
        <div id={styles.navcontainer}>
            <Logo />
            <Menu />
            <Hamburger onClick={openMenu} />
        </div>
    )
}

const openMenu = () => {
    const menu = document.getElementById('menu')
    console.log(menu)
}