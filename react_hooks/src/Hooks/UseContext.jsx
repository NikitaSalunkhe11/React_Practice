import React, { useContext } from 'react';
import { globalInfo } from '../App';
import Child from './Child';


function UseContext() {
    const {color} = useContext(globalInfo);
  return (
    <div>
        <h1>useContext Hook in React</h1>
        <h2>Global Data is access from Parent Node : {color}</h2>
        <Child/>
    </div>
  )
}

export default UseContext;