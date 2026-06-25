
import styles from './SideMenu.module.css';
import {Link} from "react-router-dom";
import {FaChevronLeft} from "react-icons/fa";
import {Fragment, useState} from "react";

export interface SideMenuProps {
    showSideMenu: boolean;
    closeSideMenu: boolean;
}

const sideMenu : SideMenuProps = {
    showSideMenu : true ,
    closeSideMenu : false
}

export function SideMenu() {

  const [isClose, setClose] = useState<boolean>(false);

    function closeSideBar(){
        if(sideMenu.showSideMenu){
            setClose(true);
            sideMenu.closeSideMenu = true
        }
    }
    return (
        <Fragment>
            {
                !isClose &&  (
                    <div className={styles.sideMenu}>

                        <button type="button" onClick={closeSideBar}>
                            <FaChevronLeft />
                            Close
                        </button>
                        <Link to={''}>Home</Link>
                        <Link to={'/'}>List</Link>
                        <Link to={'/'}>Animated</Link>
                    </div>
                )
            }
        </Fragment>
    )
}
