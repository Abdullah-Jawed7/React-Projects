import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/footer'
import Header from './Components/Header/header'
import { Outlet } from 'react-router-dom'

function App() {
 

  return (
   <>
  <Header/>
  <Outlet/>
  <Footer/>
   </>
  )
}

export default App
