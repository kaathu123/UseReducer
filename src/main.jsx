import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserReducer from './UserReducer.jsx'
import UserReducerconditional from './useReducerconditional.jsx'
import Registration from './Registration.jsx'
import Registerorg from './registerorg.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/useReducer',
    element:<UserReducer/>
  },
  {
    path:'/conditional',
    element:<UserReducerconditional/>
  },
  {
    path:'/registration',
    element:<Registration/>
  },
  {
    path:'/register',
    element:<Registerorg/>
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}></RouterProvider>
)
