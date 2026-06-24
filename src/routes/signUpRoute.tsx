import {type RouteObject} from "react-router-dom";
import {SignUp} from "../pages/SignUp/SignUp.tsx";

export const signUpRoute : RouteObject[] = [
    {
        path: "sign-up",
        element: <SignUp></SignUp>
    }
]