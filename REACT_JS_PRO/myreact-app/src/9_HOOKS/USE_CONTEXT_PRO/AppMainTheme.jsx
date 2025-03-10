import React, { useState } from 'react'
import ThemeContext from './ThemContext';
import ThemeSwitcher from './ThemeSwitcher';

export default function AppMainTheme() 
{
    const [theme,setTheme] = useState("light");
  
    return (
        <>
            <ThemeContext.Provider value={{theme,setTheme}}>
                <ThemeSwitcher/>
            </ThemeContext.Provider>  
        </>
  )
}
