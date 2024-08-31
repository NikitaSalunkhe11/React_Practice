import React, { useEffect, useState } from 'react';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import About from './Pages/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout';
import Login from './Pages/Login';
import Cardgetdata from './redux/Cardgetdata';
import Pages from './Pages/Pages';
import Destination from './Pages/Destination';
import AddCard from './Pages/AddCard';

function App() {

  const url="https://freetestapi.com/api/v1/destinations";

  const [currentpage, setcurrentpage] = useState(1);
  const [productData, setProductData] = useState([]);

  let productPerPage = 10;

  let totalPages = productData.length / productPerPage;

  let lastIndex = productPerPage * currentpage;
  
  let firstIndex = lastIndex - productPerPage;

  let filterData = productData.slice(firstIndex,lastIndex);

  console.log({currentpage, firstIndex, lastIndex});
  console.log(`filter Data :  ${filterData}`)

  useEffect(()=>{
    async function fetchapi(){
      const response= await fetch(url);
      const data= await response.json();
      setProductData(data); 
    }
    fetchapi();
  },[]);

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
          path:'/Destination',
          element:<Destination  filteredProductData={filterData}/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/addcard',
          element:<AddCard />
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