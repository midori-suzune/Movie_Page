import {useContext} from "react";
import {SideMenuContext, type SideMenuContextValue} from "../context/SideMenuContext.ts";


export function useSideMenuContext(){

    const context : SideMenuContextValue | null = useContext(SideMenuContext);
    if(!context){
        throw new Error("useSideMenuContext must be used within SideMenuContext.");
    }
    return context;
}