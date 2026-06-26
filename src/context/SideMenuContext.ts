import {createContext} from "react";

export interface SideMenuContextValue {
    isOpen: boolean;
    open: (tmp : boolean) => void;
    close: ( tmp : boolean) => void;
}


export const SideMenuContext = createContext<SideMenuContextValue | null>(null);