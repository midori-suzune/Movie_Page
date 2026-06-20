
import {Home} from "./pages/Home/Home.tsx";
import {Favourite} from "./pages/Favorites/Favorite.tsx";
import {Routes , Route} from "react-router-dom";
import {NavBar} from "./components/NavBar/NavBar.tsx";
export default function App() {
    return (
        <div>
            <NavBar />
            <main className={'main-content'}>
                <Routes>
                    <Route path="/" element={<Home/>} ></Route>
                    <Route path={"/favorites"} element={ <Favourite /> }></Route>
                </Routes>
            </main>
        </div>

    )
}