import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeProvider';


const LocalThemedBox = () => {
    const [isDarkTheme, setIsDarkTheme]=useState();
    const {isDark}=useContext(ThemeContext);
    const parentTheme=()=>{
        setIsDarkTheme(isDark);
    }
    const changeTheme=()=>{
        if(isDarkTheme != "dark"){
            setIsDarkTheme("dark");
        }else{
            setIsDarkTheme("light");
        }
    }
    useEffect(()=>{
        parentTheme()
    },[isDark]);

return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box" className={`bg-${isDarkTheme} `}>
        <p id='local-themed-text-container' className={`txt-${isDarkTheme!="dark"? "light":"dark"}`}>Hii...</p>
        <button className={`btn btn-${isDarkTheme!="dark"? "light":"dark"} txt-${isDarkTheme!="dark"? "light":"dark"}`} id="local-theme-toggler" onClick={changeTheme}>Toggle local theme to {isDarkTheme!="dark"? "dark":"light"} </button>
        
    </div>
)
}

export { LocalThemedBox }