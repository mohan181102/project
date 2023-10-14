import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Contact from './contacat/Contact'
import Layout from './layout/layout'
import User from './user/User'
import Login from './loginpage/Login'



const rout = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[{
      path:"",
      element:<Home/>
    },{
      path:"about",
      element:<About/>
    },{
      path:"contact",
      element:<Contact/>
    },{
      path:"user/:useid",
      element:<User/>
    },{
      path:"login",
      element:<Login/>
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  <RouterProvider router={rout}/>
  </React.StrictMode>,
)
