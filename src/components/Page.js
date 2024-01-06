import React, { useContext, useState } from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeContext } from './ThemeProvider';

const Page = () => {
    const {isDark, setIsDark}= useContext(ThemeContext);
    const changeTheme=()=>{
        if(isDark != "dark"){
            setIsDark("dark");
           
        }else{
            setIsDark("light");  
        }
    }
    return(
        <div className={`container bg-${isDark}`} id="themed-page">
            <p id="themed-text-container" className={`txt-${isDark!="dark"? "light":"dark"}`}>
                lorem ipsum dolor iterit n stuff
            </p>
            <button className={`btn btn-${isDark!="dark"? "light":"dark"} txt-${isDark!="dark"? "light":"dark"}`} id="themed-button" onClick={changeTheme} >Sup</button>
            <LocalThemedBox />
        </div>
    )
}

export { Page }