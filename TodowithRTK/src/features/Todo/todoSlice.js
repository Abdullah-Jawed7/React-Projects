import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
     id:1,
      title: 'WELCOME TO TODO',
    },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // const todo =() =>{
      //     id:nanoid(),
      //     title:action.payload
      // },  you can also write metods in
    //    variable and give their reference
      state.todos.push({
        id: nanoid(),
        title: action.payload,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload);
    },
    updateTodo:(state ,action) =>{
   let ii=state.todos.map(
        (todo) => todo.id === action.payload);
        ii.title ="hello"
      // addTodo('hello')
      // removeTodo(action.payload)
      //  let update = state.todos.map((todo)=>todo.id == action.payload)
      //   update({title: action.payload}) 
    }
  },
});


export const {addTodo ,removeTodo ,updateTodo } =todoSlice.actions

export default todoSlice.reducer