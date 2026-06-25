import {type RouteObject} from "react-router-dom";

import {Home} from "../pages/Home/Home.tsx";
import {Favourite} from "../pages/Favorites/Favorite.tsx";
import {ROUTE_SEGMENTS} from "../constants/routes.ts";

export const movieRoutes : RouteObject[] = [
    {
        index : true,
        element : <Home></Home>
    },
    {
        path: ROUTE_SEGMENTS.favorite,
        element : <Favourite></Favourite>
    }
];
