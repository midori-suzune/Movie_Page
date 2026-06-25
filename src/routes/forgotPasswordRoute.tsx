import {type RouteObject,} from "react-router-dom";
import {ForgotPassword} from "../pages/ForgotPassword/ForgotPassword.tsx";
import {ROUTE_SEGMENTS} from "../constants/routes.ts";


export const forgotPasswordRoute : RouteObject[] = [
    {
        path: ROUTE_SEGMENTS.forgotPassword,
        element : <ForgotPassword></ForgotPassword>
    }
]
