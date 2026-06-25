
import styles from './SignIn.module.css'
import {Link} from "react-router-dom";

export function SignIn() {
    return (
        <div className={styles.signIn}>
            <h1>Sign In</h1>
            <p id={styles.title}>You don't have an account ? <Link to={"../sign-up"}>Sign Up</Link></p>
            <form>
                <input type="text" placeholder="Enter your name" />
                <input type="password" placeholder="Enter your password" />
                <div className={styles.navLink}>
                    <Link to="../forgot-password">Forgot Password ?</Link>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}