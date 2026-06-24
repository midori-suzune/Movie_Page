import type {RouteObject} from "react-router-dom";
import {RootLayout} from "../layout/RootLayout.tsx";
import {movieRoutes} from "./movieRoutes.tsx";
import {authRoutes} from "./authRoutes.tsx";
export const appRoutes: RouteObject[] = [
    {
        path: "/movie-page",
        element : <RootLayout></RootLayout>,
        children : [...authRoutes , ...movieRoutes]
    }
]