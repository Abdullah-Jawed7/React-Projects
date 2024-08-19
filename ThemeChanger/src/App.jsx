import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Context/theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/card'

function App() {
 const [themeMode ,setThemeMode] = useState('light')
 const lightTheme =() =>{
  setThemeMode('light')
 }
 const darkTheme =() =>{
  setThemeMode('dark')
 }


//  Actual change in theme

useEffect(()=>{ 
  let themeValue =document.querySelector('html').classList
  themeValue .remove('light','dark')
  themeValue .add(themeMode)
},[themeMode])

  return (
  <ThemeProvider value={{themeMode ,darkTheme ,lightTheme}}>
  <h1 className="p-4 bg-pink-600 text-3xl">Hello</h1>
  
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto
                     flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

  </ThemeProvider>
  )
}

export default App
