import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [{ 
      id:Number,
      todo: String,
      checked:Boolean,
    }],
    addTodo: (todo) => {},
    updateTodo :(id ,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=> {}
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
