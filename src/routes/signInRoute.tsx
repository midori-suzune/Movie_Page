import type {RouteObject} from "react-router-dom";
import {SignIn} from "../pages/SignIn/SignIn.tsx";
import {ROUTE_SEGMENTS} from "../constants/routes.ts";


export const signInRoute : RouteObject[] = [
    {
        path: ROUTE_SEGMENTS.signIn,
        element : <SignIn></SignIn>
    }
]
