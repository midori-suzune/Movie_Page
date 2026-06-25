
import styles from './SignIn.module.css'
import {Link} from "react-router-dom";
import {ROUTES} from "../../constants/routes.ts";

export function SignIn() {
    return (
        <div className={styles.signIn}>
            <h1>Sign In</h1>
            <p id={styles.title}>You don't have an account ? <Link to={ROUTES.signUp}>Sign Up</Link></p>
            <form>
                <input type="text" placeholder="Enter your name" />
                <input type="password" placeholder="Enter your password" />
                <div className={styles.navLink}>
                    <Link to={ROUTES.forgotPassword}>Forgot Password ?</Link>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}
