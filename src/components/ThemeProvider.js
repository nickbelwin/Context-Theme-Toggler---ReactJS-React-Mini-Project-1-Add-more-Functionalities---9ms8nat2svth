import React, { useState } from 'react';

const ThemeContext = React.createContext()
const ThemeProvider = (props) =>{
    const [isDark, setIsDark]=useState("light");
    return (
            <ThemeContext.Provider value={{isDark, setIsDark}} >
                {props.children}
            </ThemeContext.Provider>
    )
}

export {ThemeProvider,ThemeContext}