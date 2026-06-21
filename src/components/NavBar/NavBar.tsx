import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'

export function NavBar() {
    return (
        <nav className={styles.navBar}>
             <div className={styles.navBarLeft}>
                <Link to="/" className={styles.navBarLink}>Movie App</Link>
             </div>
            <div className={styles.navBarRight}>
                <Link to="/" className={styles.navBarLink}>Home</Link>
                <Link to="/favorites" className={styles.navBarLink}>Favorites</Link>
            </div>
        </nav>
    )
}