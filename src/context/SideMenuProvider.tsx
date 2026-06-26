import {type ReactNode, useState} from "react";

import {type SideMenuContextValue} from "./SideMenuContext.ts";
import {SideMenuContext} from "./SideMenuContext.ts";

export function SideMenuProvider({ children }: {children: ReactNode}) {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const context : SideMenuContextValue = {
        isOpen : isOpen,
        open : ( tmp : boolean) => {
            setIsOpen(tmp);
        },
        close : (tmp : boolean) => {
            setIsOpen(tmp);
        }
    }
    return (
        <SideMenuContext.Provider value={context}>
            {children}
        </SideMenuContext.Provider>
    )

}
