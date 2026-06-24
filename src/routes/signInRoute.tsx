import type {RouteObject} from "react-router-dom";
import {SignIn} from "../pages/SignIn/SignIn.tsx";


export const signInRoute : RouteObject[] = [
    {
        path: "sign-in",
        element : <SignIn></SignIn>
    }
]