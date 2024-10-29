import { useState ,useEffect } from 'react'
import './App.css'
import Portfolio from './portfolio'
import { ThemeProvider } from './Components/Theme'

function App() {
  const [themeMode ,setThemeMode] = useState('light')
  const lightTheme =() =>{
   setThemeMode('light')
  }
  const darkTheme =() =>{
   setThemeMode('dark')
  }
  useEffect(()=>{ 
    let themeValue =document.querySelector('html').classList
    themeValue .remove('light','dark')
    themeValue .add(themeMode)
  },[themeMode])
  return (
    <ThemeProvider  value={{themeMode ,darkTheme ,lightTheme}}>
   
    <Portfolio/>
  
   </ThemeProvider>
  )
}

export default App
