import {type RouteObject} from "react-router-dom";

import {Home} from "../pages/Home/Home.tsx";
import {Favourite} from "../pages/Favorites/Favorite.tsx";

export const movieRoutes : RouteObject[] = [
    {
        index : true,
        element : <Home></Home>
    },
    {
        path:'favorite',
        element : <Favourite></Favourite>
    }
];
