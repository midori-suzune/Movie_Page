import styles from "./Footer.module.css";
import {FaFacebookF, FaTelegramPlane, FaYoutube} from "react-icons/fa";
import {Link} from "react-router-dom";
import {ROUTES} from "../../constants/routes.ts";

export function Footer() {
    return (
        <div className={styles.footerSpacing}>
            <div className={styles.footer}>
                <div className={styles.inner}>
                <div className={styles.footerGrid}>
                    <div className={styles.brand}>
                        <img src="/logo-hhtq.png" alt="HHTQ"/>
                        <p>
                            An animation library updated regularly, with a lightweight interface
                            optimized for every device.
                        </p>
                    </div>

                    <div className={styles.linkGroup}>
                        <h3>Explore</h3>
                        <Link to={ROUTES.home}>Home</Link>
                        <Link to={ROUTES.home}>Recently Updated</Link>
                        <Link to={ROUTES.favorite}>Favorites</Link>
                    </div>

                    <div className={styles.linkGroup}>
                        <h3>Information</h3>
                        <span>Terms of Use</span>
                        <span>Privacy Policy</span>
                        <span>Contact</span>
                    </div>

                    <div className={styles.socialBlock}>
                        <h3>Connect</h3>
                        <p>Follow us to receive new movie updates.</p>
                        <div className={styles.socials}>
                            <button type="button" aria-label="Facebook"><FaFacebookF/></button>
                            <button type="button" aria-label="Telegram"><FaTelegramPlane/></button>
                            <button type="button" aria-label="YouTube"><FaYoutube/></button>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p>© 2026 HHTQ. All rights reserved.</p>
                    <span>Great movies · Updated daily</span>
                </div>
                </div>
            </div>
        </div>
    )
}
