import {Outlet} from "react-router-dom";
import {NavBar} from "../components/NavBar/NavBar.tsx";
import {Footer} from "../components/Footer/Footer.tsx";
import {SideMenu} from "../components/SideMenu/SideMenu.tsx";
import {SideMenuProvider} from "../context/SideMenuProvider.tsx";

export function RootLayout() {
    return (
        <SideMenuProvider>
            <div className={"relative"}>
                {/*
                NavBar use shared for all pages
            */}
                <nav>
                    <NavBar/>
                </nav>
                <main>
                    {/*
                    if url is one of url in array
                    the Outlet will be rendered with that url
                    To be precise , Outlet is just a blank in order to child route can be
                    inserted into it's position
                */}
                    <Outlet/>
                </main>

                <SideMenu/>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </SideMenuProvider>
    );
}