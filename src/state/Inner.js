import { createContext, useContext } from "react";
import { useToggle } from "../hooks/index";

export const AppContext = createContext ( {
    isMenuOpen: false
})

export const Inner = ({children}) => {
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

export const useAppState = () => useContext(AppContext);