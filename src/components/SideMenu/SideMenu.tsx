import styles from './SideMenu.module.css';
import {Link} from "react-router-dom";
import {FaChevronLeft} from "react-icons/fa";
import {Fragment} from "react";
import {useSideMenuContext} from "../../hooks/useSideMenuContext.tsx";

export function SideMenu() {

    const menu = useSideMenuContext();
    function menuToggle() {
        menu.close(false);
    }
    return (
        <Fragment>
            <div
                className={`${styles.overlay} ${menu.isOpen ? styles.overlayOpen : ""}`}
                onClick={menuToggle}>
            </div>

            <div className={`${styles.sideMenu} ${menu.isOpen ? styles.open : styles.close}`}>
                <button type="button" onClick={menuToggle}>
                    <FaChevronLeft />
                    Close
                </button>
                <Link to={''} onClick={menuToggle}>Home</Link>
                <Link to={'./update-list'} onClick={menuToggle}>Movie Showtime</Link>
            </div>
        </Fragment>
    )
}
