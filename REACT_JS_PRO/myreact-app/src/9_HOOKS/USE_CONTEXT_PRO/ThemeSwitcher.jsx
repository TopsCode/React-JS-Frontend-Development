import React, { useContext } from 'react'
import ThemeContext from './ThemContext'

export default function ThemeSwitcher() {

    const {theme,setTheme} = useContext(ThemeContext); // destructuring 

  return (

     <div style={{ background: theme === "dark" ? "#333" : "#fff", color: theme === "dark" ? "#fff" : "#000", padding: "20px", textAlign: "center" }}>
        <h2>Current Theme: {theme}</h2>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
             Theme Change
        </button>
    </div>
  )
}
