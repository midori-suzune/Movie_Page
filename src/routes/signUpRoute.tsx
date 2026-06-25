import {type RouteObject} from "react-router-dom";
import {SignUp} from "../pages/SignUp/SignUp.tsx";
import {ROUTE_SEGMENTS} from "../constants/routes.ts";

export const signUpRoute : RouteObject[] = [
    {
        path: ROUTE_SEGMENTS.signUp,
        element: <SignUp></SignUp>
    }
]
