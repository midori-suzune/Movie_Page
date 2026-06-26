import {Link, useNavigate} from 'react-router-dom'
import styles from './NavBar.module.css'
import {FaBars, FaBookmark, FaHistory, FaSearch} from "react-icons/fa"
import {APP_BASE_PATH, ROUTES} from "../../constants/routes.ts";
import {useSideMenuContext} from "../../hooks/useSideMenuContext.tsx";


export function NavBar() {

    const backHome= useNavigate();
    const openMenu = useSideMenuContext();

    return (
        <div className={styles.headerHome}>
            <div className={styles.container}>
            <div className={styles.leftHeader}>
                <div className={styles.sideBarMenu} onClick={ () => { openMenu.open(true) }}>
                    <FaBars></FaBars>
                </div>
                <div className={styles.logo} onClick={() => backHome(APP_BASE_PATH)}>
                    <img src='/logo-hhtq.png' alt='logo' style={{width: '83px', height: '40px'}}/>
                </div>
                <div id={styles.search}>
                    <div className={styles.searchContent}>
                        <form>
                            <Link to='/search' className={styles.clickSearch}> Look Up</Link>
                            <div className={styles.searchInput}>
                                <input type='text' placeholder={'Search...'}/>
                            </div>
                            <button type={'submit'} className={styles.searchIcon}>
                                <FaSearch/>
                            </button>
                        </form>
                    </div>
                </div>
                <div id={styles.navBarSetting}>
                    <div className={styles.watchingHistory}>
                        <div className={styles.historyIcon}>
                            <FaHistory/>
                        </div>
                        <div className={styles.historyTitle}>
                            <p>Watching History</p>
                        </div>
                    </div>
                    <div className={styles.favoriteMovie}>
                        <div className={styles.favoriteIcon}>
                            <FaBookmark/>
                        </div>
                        <div className={styles.titleFavorite}>
                            <p>Favorite Movie</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rightHeader}>
                <Link to={ROUTES.signIn}>Sign In</Link>
            </div>
            </div>
        </div>
    )
}
