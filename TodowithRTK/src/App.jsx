import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import TodoForm from './components/AddTodo'

function App() {
  

  return (
   <div className='div'>
   <h1 className='h1'>Redux ToolKit</h1>
   <TodoForm />
   <Todos/>
   </div>
  )
}

export default App
