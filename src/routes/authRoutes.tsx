import type {RouteObject} from "react-router-dom";
import {AuthLayout} from "../layout/AuthLayout.tsx";
import {signInRoute} from "./signInRoute.tsx";
import {signUpRoute} from "./signUpRoute.tsx";
import {forgotPasswordRoute} from "./forgotPasswordRoute.tsx";


export const authRoutes : RouteObject[] = [
    {
        element : <AuthLayout></AuthLayout>,
        children : [...signUpRoute , ...signInRoute , ...forgotPasswordRoute]
    }
]