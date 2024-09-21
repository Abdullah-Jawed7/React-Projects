import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Login ,Protected} from './Components'
import Home from './Pages/Home.jsx'
import SignUp from "./Pages/SignUp.jsx"
import AddPost from './Pages/AddPost.jsx'
import AllPosts from './Pages/AllPost.jsx'
import Post from './Pages/Post.jsx'
import EditPost from './Pages/EditPost.jsx'

const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/login',
      element:(
        <Protected authentication={false}>
          <Login />
        </Protected>
      )
    },
    {
      path:'/signup',
      element:(
        <Protected authentication={false}>
          <SignUp />
        </Protected>
      )
    },
    {
      path:'/all-posts',
      element:(
        <Protected authentication={true}>
          {''}
          <AllPosts />
        </Protected>
      )
    },
    {
      path:'/add-posts',
      element:(
        <Protected authentication={true}>
          {''}
          <AddPost />
        </Protected>
      )
    },




    {
      path:'/edit-post/:slug',
      element:(
        <Protected authentication={true}>
          {''}
          <EditPost/>
        </Protected>
      )
    },
    {
      path:'/post/:slug',
      element:<Post />
    },
  ]
}])





ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
   <RouterProvider  router={router}/>
    </Provider>
  </StrictMode>,
)
