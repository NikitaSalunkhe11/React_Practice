import React from 'react';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import About from './Pages/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './Pages/Contact';
import Layout from './Components/Layout';
import Login from './Pages/Login';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/Signup',
          element:<Signup/>
        },
        {
          path:'/',  
          element:<Home/>
        },
        {
          path:'/About',
          element:<About/>
        },
        {
          path:'/Contact',
          element:<Contact/>
        },
        {
          path:'/login',
          element:<Login/>
        }
      ]
    },
  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App;