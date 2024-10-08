import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../features/Todo/todoSlice";





// let useUpdate =(id ,title)=>{
//   setInput(title)
//   removeTodo(id)
// }
function TodoForm() {
  const [input ,setInput] = useState('')

    const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  };

  return (
      <form onSubmit={addTodoHandler} className="mx-auto space-x-3 mt-12">
    <input
      type="text"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      type="submit"
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      Add Todo
    </button>
  </form>
    // <form onSubmit={addTodoHandler} className="flex">
    //   <input
    //     type="text"
    //     placeholder="Write Todo..."
    //     className="w-full border
    //      border-black/10 rounded-l-lg px-3 
    //      outline-none duration-150 bg-white/20 py-1.5"
    //      value={input}
    //      onChange={(e) => setInput(e.target.value)}
    //   />
    //   <button
    //     type="submit"
    //     className="rounded-r-lg px-3 py-1 bg-green-600 
    //     text-white shrink-0"
    //   >
    //     Add
    //   </button>
    // </form>
  );
}

export default TodoForm;
