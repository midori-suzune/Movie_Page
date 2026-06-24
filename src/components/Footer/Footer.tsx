import styles from "./Footer.module.css";
import {FaFacebookSquare, FaTelegram, FaTwitter} from "react-icons/fa";

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <div className={styles.icons}>
                        <FaFacebookSquare/>
                        <FaTelegram/>
                        <FaTwitter/>
                    </div>

                    <div className={styles.links}>
                        <p>Terms Of Service</p>
                        <p>Privacy Policy</p>
                        <p>Clarity Of Information Provided</p>
                    </div>

                    <p className={styles.copy}>
                        (c) 2023, Anime Alley, Inc. All rights reserved.
                    </p>
                </div>

                <div className={styles.brand}>
                    <img src="/logo-footer.png" alt="logo"/>
                </div>
            </div>
        </div>
    )
}
