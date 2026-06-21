
import {Home} from "./pages/Home/Home.tsx";
import {Favourite} from "./pages/Favorites/Favorite.tsx";
import {Routes , Route} from "react-router-dom";
import {NavBar} from "./components/NavBar/NavBar.tsx";
import './components/css/global.css'
export default function App() {
    return (
        <div>
            <nav>
                <NavBar />
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>} ></Route>
                    <Route path={"/favorites"} element={ <Favourite /> }></Route>
                </Routes>
            </main>
        </div>
    )
}