import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './components/layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Contact from './components/contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

const router= createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"user/:userid",
        element:<User/>
      },
      {
        path:"github",
        element:<Github/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

