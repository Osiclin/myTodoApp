import Logo from '../components/Logo'
import Hamburger from '../components/Hamburger'
import Menu from '../components/Menu'
import styles from '../styles/NavContainer.module.css'

export default function NavContainer() {
    return(
        <div id={styles.navcontainer}>
            <Logo />
            <Menu />
            <Hamburger />
        </div>
    )
}