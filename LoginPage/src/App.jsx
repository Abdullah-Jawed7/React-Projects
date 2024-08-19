import { useState } from 'react'
import Login from './Components/login'
import Profile from './Components/Profile'

import './App.css'
import UserContextProvider from './Context/UserContextProvider'

function App() {
 

  return (
  <UserContextProvider>
  <h1 className="bg-green-400">hello</h1>
  <Login/>
  <Profile/>
  </UserContextProvider>
  )
}

export default App
