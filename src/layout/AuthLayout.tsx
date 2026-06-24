
import {Outlet} from "react-router-dom";
import styles from "./Auth.module.css"
export function AuthLayout() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div id={styles.leftSide}>
                    <img src="/waifu.jpg" alt={"logo"} />
                </div>
                <div id={styles.rightSide}>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}