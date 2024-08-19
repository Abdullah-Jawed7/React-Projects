import { useState } from 'react'
import './App.css'
import Btns from './button'

function App() {
 const [color,setColor ] =useState("white")

  return (
  
 <div className="w-full h-screen duration-200"
 style= {{backgroundColor: color}}>
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
   <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
    <Btns setter={setColor} colorName="Red" />
    <Btns setter={setColor} colorName="Green" />
    <Btns setter={setColor} colorName="Blue" />
    <Btns setter={setColor} colorName="Olive" />
    <Btns setter={setColor} colorName="Gray" />
    <Btns setter={setColor} colorName="Yellow" />
    <Btns setter={setColor} colorName="Pink" />
    <Btns setter={setColor} colorName="Purple" />
    <Btns setter={setColor} colorName="Lavender" />
    <Btns setter={setColor} colorName="Black" />
   
   
  </div>
  </div>
 </div>
   
  )
}

export default App
