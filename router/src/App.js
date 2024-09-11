import React, { useEffect, useState } from 'react';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import About from './Pages/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout';
import Login from './Pages/Login';
// import Cardgetdata from './redux/Cardgetdata';
// import Pages from './Pages/Pages';
import Destination from './Pages/Destination';
import AddCard from './Pages/AddCard';
import Indian from './Pages/Indian';
import International from "./Pages/International";
import ProductView from './Pages/ProductView';
import ProductInternational from './Pages/ProductInternational';
import IndiaCity from './Components/IndiaCity';

function App() {

  // const url="https://freetestapi.com/api/v1/destinations";
  const url ="https://freetestapi.com/api/v1/destinations";

  //https://run.mocky.io/v3/a425e58f-66e7-47a7-aab6-c499afa2e914

  const urlIndia = "https://run.mocky.io/v3/b846b3ed-8641-4a7d-9563-62b171b1b66e"

  const [currentpage, setcurrentpage] = useState(1);
  const [productData, setProductData] = useState([]);

  const [placeData,setPlaceData] = useState([]);


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

  //fetch data for India page 

  useEffect(()=>{
    async function fetchapi1() {
      const response = await fetch(urlIndia);
      const data= await response.json();
      setPlaceData(data);
    }
    fetchapi1();
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
            element:<Destination 
            filteredProductData={filterData} 
            totalPages={totalPages} 
            currentpage={currentpage}
            setcurrentpage={setcurrentpage}

             />,
          // children:[
          //   {
          //     path:'Indian',
          //     element:<Indian filteredProductData={placeData} />
          //   },
          //   {
          //     path:"International",
          //     element:<International />
          //   }
          // ]
        },
        {
          path:'Indian',
          element:<Indian 
          placeData={placeData} 
          totalPages={totalPages} 
          setcurrentpage={setcurrentpage}
          currentpage={currentpage} />
        },
        {
          path:"International",
          element:<International 
          filteredProductData={filterData} 
          totalPages={totalPages} 
          setcurrentpage={setcurrentpage}
          currentpage={currentpage}
           />
        },
        {
          path:'/ProductView',
          element:<ProductView/>
        },
        {
          path:'/ProductInternational',
          element:<ProductInternational/>
        },
        {
          path:'/IndiaCity',
          element:<IndiaCity />
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