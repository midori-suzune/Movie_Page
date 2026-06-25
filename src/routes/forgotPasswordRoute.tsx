import {type RouteObject,} from "react-router-dom";
import {ForgotPassword} from "../pages/ForgotPassword/ForgotPassword.tsx";


export const forgotPasswordRoute : RouteObject[] = [
    {
        path: "forgot-password",
        element : <ForgotPassword></ForgotPassword>
    }
]