import { useEffect, useState } from "react"; 
import Product from "./product";
import Cardgetdata from "./redux/Cardgetdata";
import Pages from "./Pages";



// export const myProductContext = createContext(null);

function App(){

  const url="https://freetestapi.com/api/v1/destinations";

  const [currentpage, setcurrentpage] = useState(1);
  const [productData, setProductData] = useState([]);

  let productPerPage = 4;

  let totalPages = productData.length / productPerPage;

  let lastIndex = productPerPage * currentpage;
  
  let firstIndex = lastIndex - productPerPage;

  let filterData = productData.slice(firstIndex,lastIndex);

  console.log({currentpage, firstIndex, lastIndex});

  useEffect(()=>{
    async function fetchapi(){
      const response= await fetch(url);
      const data= await response.json();
      setProductData(data); 
      console.log(data);
    }
    fetchapi();
  },[]);

  return( 
    // <myProductContext.Provider value={data}>
    <div>
      <Product productData={filterData}></Product>
        <Pages totalPages={totalPages} setcurrentpage={setcurrentpage}></Pages>
      <Cardgetdata></Cardgetdata>
    </div>
    // </myProductContext.Provider>
  );
}
export default App;