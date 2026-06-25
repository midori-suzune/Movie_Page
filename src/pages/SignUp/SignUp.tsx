
import styles from './SignUp.module.css'
import {Link} from "react-router-dom";
import {ROUTES} from "../../constants/routes.ts";


export function SignUp() {
    return (
        <div className={styles.signUp}>
            <h1>Sign Up Account</h1>
            <p>You have already an account ? <Link to={ROUTES.signIn}>Sign In</Link></p>
            <form>
                <input type="text" placeholder="Enter your username" />
                <input type="password" placeholder="Enter your password" />
                <input type="password" placeholder="Confirm your password" />
                <div className={styles.btnUp}>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}
