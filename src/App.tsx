
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {appRoutes} from "./routes/appRoutes.tsx";
import './components/css/global.css'


const router = createBrowserRouter(appRoutes);

export default function App() {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}