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
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box" className={`bg-${isDarkTheme} txt-${isDarkTheme!="dark"? "light":"dark"}`}>
        <p>Hii...</p>
        <button className={`btn btn-${isDarkTheme!="dark"? "light":"dark"}`} id="themed-button" onClick={()=>{changeTheme()}}>toggle Local Theme to {isDarkTheme!="dark"? "dark":"light"} </button>
        
    </div>
)
}

export { LocalThemedBox }