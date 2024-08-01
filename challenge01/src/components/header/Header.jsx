import styles from "../header/Header.module.css"
import logo from "../../assets/logo.png"

const Header = () => {

    return (

        <>

            <header className={styles.header}>

                <div className={styles.logo}>
                    <img src={logo} alt="logo"/>
                </div>

                <nav className={styles.navBar}>
                    
                    <ul className={styles.navItems}>
                        <li className={styles.navItem}><a href="">sobre</a></li>
                        <li className={styles.navItem}><a href="">contato</a></li>
                        <li className={styles.navItem}><a href="">inscrever-se</a></li>
                    </ul>

                </nav>
            </header>

        </>

    )

}

export default Header