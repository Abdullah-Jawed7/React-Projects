import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from "./APPWRITE/Auth"
import { login, logout } from './store/authSlice'
import Header from './Components/header/Header'
import Footer from './Components/footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
const [loading ,setLoading] =useState(true)
const dispatch = useDispatch()
useEffect(() =>{
  authService.getCurrentUser()
  .then((userData)=>{
    if (userData) {
    dispatch(login({userData}))      
    } else {
      dispatch(logout())
    }
  })
  .finally(()=>{
    setLoading(false)
  })
}

,[])
 return !loading ? (<div className='min-h-screen 
  flex flex-wrap content-between bg-gray-100'>
    <div className="w-full block">
      <Header/>
      <main>
      <Outlet/>
      </main>
      <Footer/>
    </div>
  </div>): null 

}

export default App
