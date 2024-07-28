import { createContext,useContext } from "react";

export const ThemeContext = createContext({     //ddefault value
    themeMode: 'light',
    darkTheme: () =>{},
    lightTheme: () =>{},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}