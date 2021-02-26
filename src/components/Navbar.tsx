import styles from '../styles/navbar.module.css';
import Link from "next/link"
import { cursorTo } from 'readline';
export default function Navbar() {
  return (
    <nav className={styles.scrolled}>
            <Link href="/">
                <img src='/Images/logoSmall.jpg' style={{cursor: "pointer"}} />
            </Link>
            <div className={styles.navbar_nav}>
                <button type="button" className={styles.navbar_toggle}>
                    <span className={styles.icon_bar}></span>
                    <span className={styles.icon_bar}></span>
                    <span className={styles.icon_bar}></span>
                </button>
            </div>
            <div className={styles.container_fluid}>
                <div className={styles.navbar_toggle_collapsed}>
                    <span className={styles.icon_bar}></span>
                    <span className={styles.icon_bar}></span>
                    <span className={styles.icon_bar}></span>
                    <ul className={styles.ul_navbar_nav}>
                        <Link href="/">
                            <p className={styles.navbar_nav}>Login</p>
                        </Link>
                        <Link href="/RegisterPage">
                        <p className={styles.navbar_nav}>Register</p>
                        </Link>
                        <Link href="/">
                        <p className={styles.navbar_nav}>Tutors</p>
                        </Link>
                        <Link href="/">
                        <p className={styles.navbar_nav}>Contact</p>
                        </Link>
                    </ul>
                </div>
            </div>
    </nav>
  )
}
