
import styles from './ForgotPassword.module.css'
import {Link} from "react-router-dom";
import {FaArrowLeft, FaPaperPlane} from "react-icons/fa";


export function ForgotPassword() {
    return (
        <div className={styles.forgotPassword}>
            <h1>Forgot Password</h1>
            <form>
                <input type="text" placeholder="Enter your name" />
                <div className={styles.navLink}>
                    <Link to="../sign-in">
                        <FaArrowLeft />
                        Back to Sign In
                    </Link>
                    <button type="submit">
                        <FaPaperPlane />
                        Send Request
                    </button>
                </div>
            </form>
        </div>
    )
}
