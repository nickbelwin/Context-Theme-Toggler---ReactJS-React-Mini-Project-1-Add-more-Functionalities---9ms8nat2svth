import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';


const ThemeToggleButton = () =>{
    const {isDark, setIsDark}= useContext(ThemeContext);
    const changeTheme=()=>{
        if(isDark != "dark"){
            setIsDark("dark");
           
        }else{
            setIsDark("light");  
        }
    }
    return (
       <>
            <button className={`btn btn-${isDark!="dark"? "light":"dark"} txt-${isDark!="dark"? "light":"dark"}`} id="global-theme-toggler" onClick={changeTheme}>Switch to {isDark!="dark"? "dark":"light"} theme</button>
       </>
    )

}
export {ThemeToggleButton}