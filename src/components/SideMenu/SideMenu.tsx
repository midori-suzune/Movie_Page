import styles from './SideMenu.module.css';
import {Link} from "react-router-dom";
import {FaChevronLeft} from "react-icons/fa";
import {Fragment} from "react";
import {useSideMenuContext} from "../../hooks/useSideMenuContext.tsx";

export function SideMenu() {

    const menu = useSideMenuContext();

    return (
        <Fragment>
            <div
                className={`${styles.overlay} ${menu.isOpen ? styles.overlayOpen : ""}`}
                onClick={() => menu.close(false)}
            />

            <div className={`${styles.sideMenu} ${menu.isOpen ? styles.open : styles.close}`}>
                <button type="button" onClick={() => menu.close(false)}>
                    <FaChevronLeft />
                    Close
                </button>
                <Link to={''}>Home</Link>
                <Link to={'/'}>List</Link>
                <Link to={'/'}>Animated</Link>
            </div>
        </Fragment>
    )
}
