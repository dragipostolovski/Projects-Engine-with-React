import { createContext } from "react";
import { useToggle } from "../hooks/index";

export const AppContext = createContext ( {
    isMenuOpen: false
})

const Inner = ({children}) => {
    const { isToggled, toggle} = useToggle(false)

    return (
        <AppContext.Provider value={{
            isMenuOpen: isToggled,
            toggleMenu: toggle
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default Inner;