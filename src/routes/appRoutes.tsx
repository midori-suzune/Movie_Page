import type {RouteObject} from "react-router-dom";
import {RootLayout} from "../layout/RootLayout.tsx";
import {movieRoutes} from "./movieRoutes.tsx";
import {authRoutes} from "./authRoutes.tsx";
import {APP_BASE_PATH} from "../constants/routes.ts";
export const appRoutes: RouteObject[] = [
    {
        path: APP_BASE_PATH,
        element : <RootLayout></RootLayout>,
        children : [...authRoutes , ...movieRoutes]
    }
]
